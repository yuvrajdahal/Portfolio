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
import { motion } from "framer-motion";

export const HomeSection: React.FC = ({}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
        className="h-full  mt-2 flex flex-col 4xl:justify-center items-center "
      >
        <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
        >
          <ClappingHandsSvg className="4xl:h-[18rem] 4xl:w-[18rem]" />
        </motion.div>
        <motion.h2
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
          className={twMerge(
            caesar.className,
            "text-6xl 4xl:text-[7rem] light-gradient mt-6 transition "
          )}
        >
          HI, I'm Yuvraj
        </motion.h2>
        <motion.div
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
          className={twMerge(
            lato.className,
            "text-balance mt-6 text-lg 4xl:text-2xl "
          )}
        >
          🌎 Nepal, Biratnagar
        </motion.div>
        <motion.p
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
          className={twMerge(
            lato.className,
            "text-center text-balance mt-4 text-lg 4xl:text-2xl "
          )}
        >
          I develop web and application solutions for <br /> tech-driven
          sectors, focusing on Figma design 🎨
          <br /> and seamless UI 🌟.
        </motion.p>
      </motion.div>
      <div className="absolute right-0 top-[16rem] 4xl:top-[40%] flex  items-center justify-end  pr-6">
        <div className="relative flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
            className="absolute h-[200px] -top-6 w-[2px] bg-[#D9D9D9]"
          />
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            className="relative right-6 cursor-pointer "
          >
            <FaceBookIcon />
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
            className="relative right-6 cursor-pointer "
          >
            <InstagramIcon />
          </motion.div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            className="relative right-6 cursor-pointer "
          >
            <GithubIcon />
          </motion.div>
        </div>
      </div>
    </>
  );
};
