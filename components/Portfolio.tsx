"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import proj1 from "../public/images/proj1.jpg"
import proj2 from "../public/images/proj2.jpg"
import proj3 from "../public/images/proj4.jpg"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Customer support chatbot",
    description: "Made a telegram of a bot using GigaChat",
    image: proj1,
  },
  {
    id: 2,
    year: 2025,
    title: "Customer support chatbot",
    description: "Made a telegram of a bot using GigaChat",
    image: proj2,
  },
  {
    id: 3,
    year: 2025,
    title: "Customer support chatbot",
    description: "Made a telegram of a bot using GigaChat",
    image: proj3,
  },
];
const COLOR_TOP = [
  "oklch(51.8% 0.253 323.949)",
  "oklch(63.7% 0.237 25.331)",
  "oklch(87.9% 0.169 91.605)",
  "oklch(76.5% 0.177 163.223)",
  "oklch(70.7% 0.022 261.325)",
];
export default function Portfolio() {
  const [selectProject, setSelectProject] = useState(projects[0])
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

  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="text-white py-32">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl font-bold mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h2>
          {projects.map((project) => (
            <div
              className="cursor-pointer mb-8 group"
              key={project.id}
              onClick={() => setSelectProject(project)}>
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors duration-300 ${
                  selectProject.id === project.id
                }: "text-gray-200": ""`}>
                {project.title}
              </h3>
              {selectProject.id === project.id && (
                <div className="border-b border-gray-200 my-4"></div>
              )}
              {selectProject.id === project.id && (
                <p className="border-gray-400 my-4 transition-all duration-300 ease-in-out">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          src={selectProject.image.src}
          alt={selectProject.title}
          width={800}
          height={450}
        />
      </div>
    </motion.section>
  );
}
