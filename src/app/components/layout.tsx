"use client";
import useStore from "@/appstate/theme";
import { twMerge } from "tailwind-merge";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useStore();

  return (
    <div className={twMerge(" transition-colors duration-300 overflow-hidden overflow-y-scroll", theme === "dark" ? "bg-dark-t" : "bg-white")}>
      {children}
    </div>
  );
}
