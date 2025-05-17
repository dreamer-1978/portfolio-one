"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    id: 1,
    value: "5+",
    label: "Years of Experience",
    description: "Dedicated to honing my skills in full-stack development.",
  },
  {
    id: 2,
    value: "2+",
    label: "Years of Experience",
    description: "Dedicated to honing my skills in full-stack development.",
  },
  {
    id: 3,
    value: "4+",
    label: "Years of Experience",
    description: "Dedicated to honing my skills in full-stack development.",
  },
  {
    id: 4,
    value: "3+",
    label: "Years of Experience",
    description: "Dedicated to honing my skills in full-stack development.",
  },
  {
    id: 5,
    value: "5+",
    label: "Years of Experience",
    description: "Dedicated to honing my skills in full-stack development.",
  },
];

export default function KeyMetrics() {
  const ref = useRef<HTMLElement>(null);
  const inIsView = useInView(ref, { once: false });
  return (
    <motion.section
      className="px-4 py-32 text-white glass"
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inIsView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
      transition={{ duration: 0.8 }}>
      <div className="container mx-auto">
        <motion.h2
          className="text-6xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inIsView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          KEY METRICS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              className="flex flex-col"
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inIsView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}>
              <motion.h3
                className="text-5xl font-bold text-purple-300 pb-2"
                initial={{ scale: 0.5 }}
                animate={inIsView ? { scale: 1 } : { scale: 0.5 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                }}>
                {metric.value}
              </motion.h3>
              <motion.p
                className="text-xl font-semibold mb-2"
                initial={{ opacity: 0 }}
                animate={inIsView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.1,
                }}>
                {metric.label}
              </motion.p>
              <motion.p
                className="text-shadow-gray-400"
                initial={{ opacity: 0 }}
                animate={inIsView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1 + index * 0.1,
                }}>
                {metric.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
