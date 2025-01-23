import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "https://678acd27dd587da7ac2b7246.mockapi.io/api/v1";

export function useUnits() {
  return useQuery<TUnit[]>({
    queryKey: ["units"],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/units`);
      if (!response.ok) throw new Error("Failed to fetch units");
      return response.json();
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
    },
  });
}
