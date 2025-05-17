"use client";
import { useEffect } from "react";
import { animate } from "motion";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { FcDebian, FcLinux } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";
import { IoLogoFreebsdDevil } from "react-icons/io";

const COLOR_TOP = [
  "oklch(51.8% 0.253 323.949)",
  "oklch(63.7% 0.237 25.331)",
  "oklch(87.9% 0.169 91.605)",
  "oklch(76.5% 0.177 163.223)",
  "oklch(70.7% 0.022 261.325)",
];

export default function Hero() {
  const color = useMotionValue(COLOR_TOP[0]);

  useEffect(() => {
    animate(color, COLOR_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200">
      <div className="flex flex-col items-center z-10">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Open for Work
        </span>
        <h1 className="text-white/40 text-5xl md:text-7xl font-black">
          Hi, I am
        </h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
          Serega
        </h1>
        <Image
          src="/images/portfolio-two.jpg"
          alt="my-photo"
          width={300}
          height={300}
          className="rounded-full object-cover w-[300px] h-[300px]"
        />
        <div className="bg-white/10  flex shadow-xl p-3 rounded-3xl items-center justify-center space-x-2 mb-4">
          <FcDebian className="rounded-2xl mx-auto" width={50} />
          <FcLinux className="rounded-2xl mx-auto" width={50} />
          <IoLogoFreebsdDevil
            className="rounded-2xl mx-auto text-red-500/50"
            width={50}
          />
          <p className="font-medium ml-2">unix machine</p>
        </div>

        <p className="my-6 text-center max-w-xl md:text-lg">
          Junior Developer based in Moscow, with over 1 year of experience
        </p>
        <motion.button
          className="flex w-fit items-center gap-2 rounded-full px-4 py-2 cursor-pointer"
          style={{
            border,
            boxShadow,
          }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}>
          Download CV
          <FiArrowRight />
        </motion.button>
      </div>

      <div className="bg-circle-container">
        <div className="bg-circle-background"></div>
        <div className="bg-circle"></div>
      </div>
    </motion.section>
  );
}
