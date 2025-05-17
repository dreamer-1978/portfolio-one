"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import udemy from "../public/udemy.png"
import fiverr from "../public/fiverr.png";
import elementor from "../public/elementor.png";
import logitech from "../public/logitech.png";
import oracle from "../public/oracle.png";

const images = [
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
  { src: udemy, alt: "figma" },
  { src: fiverr, alt: "fiverr" },
  { src: elementor, alt: "elementor" },
  { src: logitech, alt: "logitech" },
  { src: oracle, alt: "oracle" },
];

export default function LogoAnimation() {
  return (
    <div className="PY-8 bg-purple-200/10 opacity-80 glass">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" animate={{
            translateX: "-50%"
          }} transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}>
            {
              images.map((image, index) => (
                <Image height={30} key={index} src={image.src} alt={ image.alt} />
              ))
            }
          </motion.div>
        </div>
      </div>
    </div>
  )
}
