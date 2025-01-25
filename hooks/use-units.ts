import { useUnitsStore } from "@/store/use-units-store";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const API_URL = "https://678acd27dd587da7ac2b7246.mockapi.io/api/v1";

export function useUnits() {
  const { sortBy, sortOrder, limit, page, setTotal } = useUnitsStore();

  const mainUrl = new URL(`${API_URL}/units`);

  const url = new URL(`${API_URL}/units`);
  url.searchParams.set("sortBy", sortBy === "date" ? "createdAt" : "price");
  url.searchParams.set("order", sortOrder);
  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("page", page.toString());

  return useQuery<TUnit[]>({
    queryKey: ["units", sortBy, sortOrder, page],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch units");

      const responseLength = await fetch(mainUrl);
      const allItems = await responseLength.json();
      const totalItems = allItems.length;

      setTotal(totalItems);

      return response.json();
    },
  });
}

export function useAddUnit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUnit: Omit<TUnit, "id" | "createdAt">) => {
      const response = await fetch(`${API_URL}/units`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUnit),
      });
      if (!response.ok) throw new Error("Failed to add unit");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["units"] });
    },
  });
}

export function useEditUnit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedUnit: TUnit) => {
      const response = await fetch(`${API_URL}/units/${updatedUnit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUnit),
      });
      if (!response.ok) throw new Error("Failed to edit unit");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["units"] });
    },
  });
}

export function useDeleteUnit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await fetch(`${API_URL}/units/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete unit");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["units"] });
      toast.info("Deleted", {
        description: "Unit deleted successfully",
      });
    },
  });
}
