import {
  ClappingHandsSvg,
  FaceBookIcon,
  GithubIcon,
  InstagramIcon,
} from "@/components/Icons/icons";
import { caesar, lato } from "@/global/fonts";
import React from "react";
import { twMerge } from "tailwind-merge";
import { MenuBar, MenuBarProps } from "./menu-bar";


export const HomeSection: React.FC<MenuBarProps> = ({
  sectionIndex,
  handleSectionChange,
}) => {
  return (
    <>
      <div className="h-full animate-fade mt-2 flex flex-col 4xl:justify-center items-center ">
        <ClappingHandsSvg className="4xl:h-[18rem] 4xl:w-[18rem] transition animate-fadeIn animation-delay-1000" />
        <h2
          className={twMerge(
            caesar.className,
            "text-6xl 4xl:text-[7rem] light-gradient mt-6 transition animate-[fadeIn_1s]"
          )}
        >
          HI, I'm Yuvraj
        </h2>
        <div
          className={twMerge(
            lato.className,
            "text-balance mt-6 text-lg 4xl:text-2xl transition animate-[fadeIn_1.5s] "
          )}
        >
          🌎 Nepal, Biratnagar
        </div>
        <p
          className={twMerge(
            lato.className,
            "text-center text-balance mt-4 text-lg 4xl:text-2xl transition animate-[fadeIn_1.8s]"
          )}
        >
          I develop web and application solutions for <br /> tech-driven
          sectors, focusing on Figma design 🎨
          <br /> and seamless UI 🌟.
        </p>
      </div>
      <div className="transition animate-[fadeIn_1.8s]  absolute right-0 top-[16rem] 4xl:top-[40%] flex  items-center justify-end  pr-6">
        <div className="relative flex flex-col gap-4">
          <div className="absolute h-[200px] -top-6 w-[2px] bg-[#D9D9D9]" />
          <div className="relative right-6 cursor-pointer ">
            <FaceBookIcon />
          </div>
          <div className="relative right-6 cursor-pointer ">
            <InstagramIcon />
          </div>
          <div className="relative right-6 cursor-pointer ">
            <GithubIcon />
          </div>
        </div>
      </div>
      <MenuBar
        sectionIndex={sectionIndex}
        handleSectionChange={handleSectionChange}
      />
    </>
  );
};
