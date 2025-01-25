import { create } from "zustand";

export const useUnitsStore = create<TUnitsStore>((set) => ({
  sortBy: "price",
  sortOrder: "asc",

  page: 1,
  limit: 5,

  total: 1,

  setSortOrder: (sortOrder) => set({ sortOrder, page: 1 }),
  setSortBy: (sortBy) => set({ sortBy, page: 1 }),

  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),

  setTotal: (total) => set({ total }),
}));
