"use client";
import {
  AboutIcon,
  ContactIcon,
  HomeIcon,
  SkillsIcon,
  SkillsIconDark,
} from "@/components/Icons/icons";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import useSectionHandler from "@/appstate/section";
import useStore from "@/appstate/theme";

export interface MenuBarProps {
  ref?: any;
  status?: boolean;
}
export const MenuBar: React.FC<MenuBarProps> = ({ ref, status = true }) => {
  const [menuBarVisible, setMenuBarVisible] = useState(false);
  const { sectionIndex, setSectionIndex } = useSectionHandler();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [startCssAnimation, setStartCssAnimation] = useState(false);
  const [prevSectionIndex, setPrevSectionIndex] = useState<number>(0);

  function handleSectionChange(index: number) {
    setPrevSectionIndex(sectionIndex);
    setSectionIndex(index);
  }
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
    setMenuBarVisible(true);
    const interval = setInterval(() => {
      setStartCssAnimation(true);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const { theme } = useStore();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        // transform: menuBarVisible ? "translateY(0px)" : "translateY(100px)",
        transition: { delay: 0.6, duration: 0.5 },
      }}
      className={twMerge(
        "fixed bottom-8 transition duration-300	 border px-4 py-2 shadow-lg rounded-full  flex gap-6 items-center",
        startCssAnimation
          ? menuBarVisible
            ? "!opacity-100 pointer-events-auto"
            : "!opacity-0 "
          : "",
        theme === "dark" ? " bg-dark-t shadow-xl" : "bg-white"
      )}
    >
      <HomeIcon onClick={() => handleSectionChange(0)} />
      <AboutIcon onClick={() => handleSectionChange(1)} />
      {theme === "dark" ? (
        <SkillsIconDark onClick={() => handleSectionChange(2)} />
      ) : (
        <SkillsIcon onClick={() => handleSectionChange(2)} />
      )}
      <ContactIcon />
    </motion.div>
  );
};
