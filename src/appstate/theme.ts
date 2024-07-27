"use client";
import { create } from "zustand";

type Theme = "light" | "dark";

interface AppState {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}
const getTheme =
  typeof window !== "undefined"
    ? (localStorage.getItem("theme") as Theme)
    : "light";
const useStore = create<AppState>((set) => ({
  theme: getTheme,
  setTheme: (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    set({ theme: newTheme });
  },
}));

export default useStore;
