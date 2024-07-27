"use client";
import { ClappingHandsSvg } from "@/components/Icons/icons";
import { caesar, lato } from "@/global/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { MenuBar, MenuBarProps } from "./menu-bar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AboutSection: React.FC<MenuBarProps> = ({
  handleSectionChange,
  sectionIndex,
}) => {
 
  return (
    <>
      <section className="h-full relative flex flex-col items-center ">
        <div className="absolute -left-[4rem] flex items-center relative justify-center">
          <div className="overflow-hidden relative left-[10rem] h-[200px] w-[300px] z-[50] bg-gray-200 rounded-md">
            <Image
              src={"/yuvraj-2.jpg"}
              className="object-left transition	hover:scale-110  h-full w-full object-cover"
              height={200}
              width={200}
              alt="yuvraj"
            />
          </div>
          <div className="overflow-hidden relative left-[5rem] h-[350px] w-[300px] bg-gray-600 rounded-md z-[100]">
            <Image src={"/scene-2.jpg"} className="transition	hover:scale-110" height={350} width={250} alt="yuvraj" />
          </div>
          <div className="overflow-hidden h-[400px] w-[300px] bg-gray-200 rounded-md z-[200]">
            <Image
              src={"/yuvraj-1.jpg"}
              className="object-left	transition	hover:scale-110 h-full w-full object-cover"
              height={400}
              width={300}
              alt="yuvraj"
            />
          </div>
          <div className="overflow-hidden relative -left-[4rem] h-[200px] w-[250px] bg-gray-600 rounded-md z-[100]">
            <Image
              src={"/scene.jpg"}
              className="object-center transition	hover:scale-110 h-full w-full object-cover"
              height={350}
              width={250}
              alt="yuvraj"
            />
          </div>
        </div>
        <div className="w-[70%] pb-6">
          <div className="flex flex-col justify-center mt-12 ">
            <h2 className={twMerge(caesar.className, "text-4xl light-gradient")}>
              Hello There, I'm Yuvraj.
            </h2>
            <p
              className={twMerge(
                lato.className,
                "text-justify text-balance mt-4 text-lg 4xl:text-2xl"
              )}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              numquam quisquam laboriosam enim voluptatum, est molestiae
              impedit? Quod, explicabo autem at numquam totam nihil illum
              voluptatibus culpa fugit accusamus, delectus accusantium enim
              dolor corporis blanditiis. Exercitationem adipisci ratione ad
              suscipit quia enim labore quod, illo consequuntur. Incidunt
              laudantium a ratione rerum eum unde maxime? Aperiam in labore
              totam dolore earum soluta natus velit illum mollitia veniam nobis
              distinctio, non odio, perferendis est molestias nemo qui et neque
              eum commodi accusamus provident? Repudiandae modi vitae a atque
              perspiciatis impedit numquam, unde sit! Quasi, necessitatibus rem?
              Nisi harum nostrum ratione. Dolores minima eaque in. Molestiae
              reprehenderit esse officia ipsum iste. Praesentium consectetur
              nisi, est molestiae autem cumque at eaque assumenda inventore
              officia.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
              numquam quisquam laboriosam enim voluptatum, est molestiae
              impedit? Quod, explicabo autem at numquam totam nihil illum
              voluptatibus culpa fugit accusamus, delectus accusantium enim
              dolor corporis blanditiis. Exercitationem adipisci ratione ad
              suscipit quia enim labore quod, illo consequuntur. Incidunt
              laudantium a ratione rerum eum unde maxime? Aperiam in labore
              totam dolore earum soluta natus velit illum mollitia veniam nobis
              distinctio, non odio, perferendis est molestias nemo qui et neque
              eum commodi accusamus provident?
            </p>
          </div>
        </div>
      </section>
      <MenuBar
        sectionIndex={sectionIndex}
        handleSectionChange={handleSectionChange}
      />
    </>
  );
};
