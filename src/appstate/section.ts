"use client";
import { create } from "zustand";

interface AppState {
  sectionIndex: number;
  setSectionIndex: (newIndex: number) => void;
}
const useSectionHandler = create<AppState>((set) => ({
  sectionIndex: 0,
  setSectionIndex: (newIndex: number) => {
    set({ sectionIndex: newIndex });
  },
}));

export default useSectionHandler;
