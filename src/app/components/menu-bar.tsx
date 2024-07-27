"use client";
import {
  AboutIcon,
  ContactIcon,
  HomeIcon,
  SkillsIcon,
} from "@/components/Icons/icons";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface MenuBarProps {
  sectionIndex: number;
  handleSectionChange: (index: number) => void;
  ref?: any;
  status?: boolean;
}
export const MenuBar: React.FC<MenuBarProps> = ({
  handleSectionChange,
  sectionIndex,
  ref,
  status = true,
}) => {
  const [menuBarVisible, setMenuBarVisible] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setMenuBarVisible(false);
    } else {
      setMenuBarVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div
      className={twMerge(
        "fixed bottom-8 transition duration-300	 border px-4 py-2 shadow-lg rounded-full bg-white flex gap-6 items-center",
        menuBarVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4",
        "transition animate-[fadeUp_0.6s]"
      )}
    >
      <HomeIcon onClick={() => handleSectionChange(0)} />
      <AboutIcon onClick={() => handleSectionChange(1)} />
      <SkillsIcon onClick={() => handleSectionChange(2)}/>
      <ContactIcon />
    </div>
  );
};
