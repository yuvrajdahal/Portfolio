"use client";
import { ClappingHandsSvg } from "@/components/Icons/icons";
import { caesar, lato } from "@/global/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { MenuBar, MenuBarProps } from "./menu-bar";
import React, { useEffect, useState } from "react";

export const ProjectSection: React.FC<MenuBarProps> = ({
  handleSectionChange,
  sectionIndex,
}) => {
  return (
    <>
      <section className="h-full w-full gap-[100px] relative overflow-y-scroll flex flex-col items-center pb-10">
        <div className="min-h-[500px] w-[80%] rounded-lg bg-gray-300 mt-6 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white"></div>
        <div className="min-h-[500px] w-[80%] rounded-lg bg-gray-300 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white"></div>
        <div className="min-h-[500px] w-[80%] rounded-lg bg-gray-300 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white"></div>
      </section>
      <MenuBar
        sectionIndex={sectionIndex}
        handleSectionChange={handleSectionChange}
      />
    </>
  );
};
