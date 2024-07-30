"use client";
import { ClappingHandsSvg } from "@/components/Icons/icons";
import { caesar, lato } from "@/global/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { MenuBar, MenuBarProps } from "./menu-bar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ProjectSection = ({}) => {
  return (
    <>
      <section className="h-full w-full gap-[100px] relative flex flex-col items-center pb-10">
        <div className="min-h-[70vh] w-[800px] rounded-lg bg-gray-300 mt-6 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white"></div>
        <div className="min-h-[70vh] w-[800px] rounded-lg bg-gray-300 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white"></div>
        <div className="min-h-[70vh] w-[800px] rounded-lg bg-gray-300 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white"></div>
      </section>
    </>
  );
};
