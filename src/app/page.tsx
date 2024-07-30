"use client";
import { NavBar } from "./components/navbar";
import { HomeSection } from "./components/home-section";
import { MenuBar, MenuBarProps } from "./components/menu-bar";
import { AboutSection } from "./components/about-section";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import {
  FaceBookIcon,
  GithubIcon,
  InstagramIcon,
  SocialHandleBar,
} from "@/components/Icons/icons";
import { ProjectSection } from "./components/project-section";
import useSectionHandler from "@/appstate/section";

export default function Home() {
  const { sectionIndex } = useSectionHandler();

  const SectionHandler: {
    [key: number]: React.FC;
  } = {
    0: HomeSection,
    1: AboutSection,
    2: ProjectSection,
  };

  const SectionComponent = SectionHandler[sectionIndex];
  return (
    <main
      className={twMerge(
        " flex h-screen flex-col container mx-auto  relative items-center  px-10 pt-6 transition-colors"
      )}
    >
      <AnimatePresence>
        <NavBar />
        <div className="h-full 4xl:h-[80%] w-full flex flex-col items-center">
          <SectionComponent />
        </div>
      </AnimatePresence>
    </main>
  );
}
