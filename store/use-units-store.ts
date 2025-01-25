import { create } from "zustand";

export const useUnitsStore = create<TUnitsStore>((set) => ({
  sortBy: "date",
  sortOrder: "desc",
  setSortOrder: (sortOrder) => set({ sortOrder }),
  setSortBy: (sortBy) => set({ sortBy }),
}));
