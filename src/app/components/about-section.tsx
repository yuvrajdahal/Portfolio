"use client";
import { ClappingHandsSvg } from "@/components/Icons/icons";
import { caesar, lato } from "@/global/fonts";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { MenuBar, MenuBarProps } from "./menu-bar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AboutSection = ({}) => {
  return (
    <>
      <section className="h-full duration-300 transition  relative flex flex-col items-center ">
        <div className="absolute -left-[4rem] flex items-center relative justify-center">
          <motion.div
            initial={{ opacity: 0, y: "-2vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden relative left-[10rem] h-[200px] w-[300px] z-[50] bg-gray-200 rounded-md"
          >
            <Image
              src={"/yuvraj-2.jpg"}
              className="object-left transition	hover:scale-110  h-full w-full object-cover"
              height={200}
              width={200}
              alt="yuvraj"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-2vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden relative left-[5rem] h-[350px] w-[300px] bg-gray-600 rounded-md z-[100]"
          >
            <Image
              src={"/scene-2.jpg"}
              className="transition	hover:scale-110"
              height={350}
              width={250}
              alt="yuvraj"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-2vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden h-[400px] w-[300px] bg-gray-200 rounded-md z-[200]"
          >
            <Image
              src={"/yuvraj-1.jpg"}
              className="object-left	transition	hover:scale-110 h-full w-full object-cover"
              height={400}
              width={300}
              alt="yuvraj"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "-2vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden relative -left-[4rem] h-[200px] w-[250px] bg-gray-600 rounded-md z-[100]"
          >
            <Image
              src={"/scene.jpg"}
              className="object-center transition	hover:scale-110 h-full w-full object-cover"
              height={350}
              width={250}
              alt="yuvraj"
            />
          </motion.div>
        </div>
        <div className="w-[70%] pb-6">
          <div className="flex flex-col justify-center mt-12 ">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={twMerge(caesar.className, "text-4xl light-gradient")}
            >
              Hello There, I'm Yuvraj.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className={twMerge(
                lato.className,
                "text-justify text-balance mt-4 text-lg 4xl:text-2xl"
              )}
            >
              Yuvraj Dahal, a prominent figure in the realm of technology and
              innovation, has made significant strides in various fields,
              particularly in software development, artificial intelligence, and
              digital transformation. Born and raised in Nepal, Yuvraj exhibited
              a keen interest in technology from an early age, which eventually
              led him to pursue a career in this dynamic field. His journey is a
              testament to his dedication, passion, and relentless pursuit of
              excellence. Yuvraj's academic background is as impressive as his
              professional achievements. He holds a degree in Computer Science,
              which provided him with a solid foundation in the principles and
              practices of software engineering. His thirst for knowledge and
              his drive to stay at the forefront of technological advancements
              prompted him to continuously update his skills and expertise
              through various certifications and advanced courses. This
              commitment to lifelong learning has been a key factor in his
              success, enabling him to tackle complex challenges and come up
              with innovative solutions.
              <br />
              <br />
              Yuvraj Dahal's contributions extend beyond his role as a React
              developer. He is actively involved in community initiatives
              promoting digital literacy and technology education. Through
              workshops, seminars, and online courses, he has helped bridge the
              digital divide, especially in underprivileged areas. Yuvraj
              frequently shares his insights through blogs, articles, and
              speaking engagements, earning respect in the tech community. His
              innovative mindset and ability to foresee technological trends
              have garnered recognition and accolades. Yuvraj's journey from a
              curious young boy in Nepal to a tech expert is a source of
              inspiration, showcasing the power of passion, perseverance, and
              continuous learning.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};
