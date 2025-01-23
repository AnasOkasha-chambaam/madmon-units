import { create } from "zustand";

type SortOption = "date" | "price";

interface UnitsStore {
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
}

export const useUnitsStore = create<UnitsStore>((set) => ({
  sortBy: "date",
  setSortBy: (sortBy) => set({ sortBy }),
}));
