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
      <h2
        className={twMerge(caesar.className, "text-3xl light-gradient mb-6")}
      ></h2>
      <section className="h-full w-full gap-[100px] relative flex flex-col items-center ">
        <div className="min-h-[69vh] w-[90%] rounded-lg bg-gray-100 mt-6 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white flex justify-between overflow-hidden">
          <div className="w-[50%] pl-6  pt-10">
            <h2
              className={twMerge(
                caesar.className,
                "text-5xl font-bold light-gradient"
              )}
            >
              01 Bolumna Chat App
            </h2>
            <p
              className={twMerge(
                lato.className,
                "mt-10 text-lg font-normal flex gap-2"
              )}
            >
              <span className="text-sky-500">React.js</span>|
              <span className="text-[#51AD3A]">Node.js</span>|
              <span className="text-blue-500">Tailwind Css</span>
            </p>
            <p
              className={twMerge(
                lato.className,
                "mt-2 text-normal text-left font-normal pr-4"
              )}
            >
              Bolumna is a cutting-edge React chat application powered by
              Node.js, designed for real-time communication with seamless user
              interactions. It features instant messaging, secure user
              authentication, media sharing, and customizable themes. Utilizing
              WebSocket technology for minimal latency and Node.js's scalable
              backend, Bolumna ensures efficient handling of numerous
              connections. With a modern UI built on React, it offers a
              responsive and dynamic user experience, making it a robust and
              scalable chat solution.
            </p>
            <button className="mt-4 font-semibold border bg-white  px-6 py-2 rounded-md flex items-center gap-4">
              Visit Website
              <svg
                className="size-5"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7175 8.20711C26.108 7.81658 26.108 7.18342 25.7175 6.79289L19.3536 0.428932C18.963 0.0384079 18.3299 0.0384079 17.9394 0.428932C17.5488 0.819456 17.5488 1.45262 17.9394 1.84315L23.5962 7.5L17.9394 13.1569C17.5488 13.5474 17.5488 14.1805 17.9394 14.5711C18.3299 14.9616 18.963 14.9616 19.3536 14.5711L25.7175 8.20711ZM0.989594 8.5H25.0104V6.5H0.989594V8.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="h-full w-[50%] bg-[url(/bolumna.png)] bg-no-repeat bg-left bg-cover"></div>
          {/* <div className="w-full p-4  overflow-hidden rounded-md">
              <img
                src="/bolumna.png"
                className="w-full object-contain rounded-md"
              />
            </div> */}
        </div>
        <div className="min-h-[69vh] w-[90%] rounded-lg bg-gray-100 mt-6 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white flex flex-row-reverse justify-between overflow-hidden">
          <div className="w-[50%] pl-6  pt-10">
            <h2
              className={twMerge(
                caesar.className,
                "text-5xl font-bold light-gradient"
              )}
            >
              02 Necare
            </h2>
            <p
              className={twMerge(
                lato.className,
                "mt-10 text-lg font-normal flex gap-2"
              )}
            >
              <span className="text-sky-500">React.js</span>|
              <span className="text-[#51AD3A]">Node.js</span>|
              <span className="text-blue-500">Tailwind Css</span>
            </p>
            <p
              className={twMerge(
                lato.className,
                "mt-2 text-normal text-left font-normal pr-4"
              )}
            >
              Necare is one of the best care providers who continuously focuses
              to provide quality care to their participants. They have a
              comprehensive care package that includes medical, dental, and
              vision care. They also offer personalized care plans and
              consultations to ensure that their participants receive the best
              possible care. Necare is committed to providing excellent care to
              their participants and is dedicated to making a positive impact on
              their lives and are a trusted and reliable care provider .
            </p>
            <button className="mt-4 font-semibold border bg-white  px-6 py-2 rounded-md flex flex-row-reverse items-center gap-4">
              Visit Website
              <svg
                className="size-5 rotate-180"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7175 8.20711C26.108 7.81658 26.108 7.18342 25.7175 6.79289L19.3536 0.428932C18.963 0.0384079 18.3299 0.0384079 17.9394 0.428932C17.5488 0.819456 17.5488 1.45262 17.9394 1.84315L23.5962 7.5L17.9394 13.1569C17.5488 13.5474 17.5488 14.1805 17.9394 14.5711C18.3299 14.9616 18.963 14.9616 19.3536 14.5711L25.7175 8.20711ZM0.989594 8.5H25.0104V6.5H0.989594V8.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="h-full w-[50%] bg-[url(/necare.png)] bg-no-repeat bg-contain bg-center bg-cover"></div>
          {/* <div className="w-full p-4  overflow-hidden rounded-md">
              <img
                src="/bolumna.png"
                className="w-full object-contain rounded-md"
              />
            </div> */}
        </div>
        <div className="min-h-[69vh] w-[90%] rounded-lg bg-gray-100 mt-6 transition duration-300 hover:shadow-xl border border-1 hover:scale-105 hover:bg-white flex justify-between overflow-hidden">
          <div className="w-[50%] pl-6  pt-10">
            <h2
              className={twMerge(
                caesar.className,
                "text-5xl font-bold light-gradient"
              )}
            >
              03 CHITRA AI
            </h2>
            <p
              className={twMerge(
                lato.className,
                "mt-10 text-lg font-normal flex gap-2"
              )}
            >
              <span className="text-sky-500">React.js</span>|
              <span className="text-[#51AD3A]">Node.js</span>|
              <span className="text-blue-500">Tailwind Css</span>
            </p>
            <p
              className={twMerge(
                lato.className,
                "mt-2 text-normal text-left font-normal pr-4"
              )}
            >
              Chitra AI is a state-of-the-art React chat application powered by
              OpenAI, leveraging the popular Theo T3 framework. This innovative
              application allows users to generate images based solely on text
              prompts, offering a unique and interactive experience. Deployed on
              Vercel and utilizing Planetscale for its database, Chitra AI
              operates on free-tier services, making it accessible to a wide
              range of users. Upon logging in, each user is awarded 50 credits,
              enabling them to explore and utilize the application's
              capabilities right from the start.
            </p>
            <button className="mt-4 font-semibold border bg-white  px-6 py-2 rounded-md flex items-center gap-4">
              Visit Website
              <svg
                className="size-5"
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7175 8.20711C26.108 7.81658 26.108 7.18342 25.7175 6.79289L19.3536 0.428932C18.963 0.0384079 18.3299 0.0384079 17.9394 0.428932C17.5488 0.819456 17.5488 1.45262 17.9394 1.84315L23.5962 7.5L17.9394 13.1569C17.5488 13.5474 17.5488 14.1805 17.9394 14.5711C18.3299 14.9616 18.963 14.9616 19.3536 14.5711L25.7175 8.20711ZM0.989594 8.5H25.0104V6.5H0.989594V8.5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="h-full w-[50%] bg-[url(/chitraai.png)] bg-no-repeat bg-center bg-cover"></div>
          {/* <div className="w-full p-4  overflow-hidden rounded-md">
              <img
                src="/bolumna.png"
                className="w-full object-contain rounded-md"
              />
            </div> */}
        </div>
        <div>&nbsp;</div>
      </section>
    </>
  );
};
