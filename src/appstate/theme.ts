import { create } from "zustand";

type Theme = "light" | "dark";

interface AppState {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

const useStore = create<AppState>((set) => ({
  theme: (localStorage.getItem("theme") as Theme) || "light",
  setTheme: (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    set({ theme: newTheme });
  },
}));

export default useStore;
