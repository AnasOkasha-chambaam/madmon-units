import { create } from "zustand";

export const useUnitsStore = create<TUnitsStore>((set) => ({
  sortBy: "date",
  sortDirection: "desc",
  setSortDirection: (sortDirection) => set({ sortDirection }),
  setSortBy: (sortBy) => set({ sortBy }),
}));
