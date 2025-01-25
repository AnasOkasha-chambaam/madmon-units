import { create } from "zustand";

export const useLangStore = create<TLangStore>((set) => ({
  lang: "en",
  setLang: (lang) => set({ lang }),
}));
