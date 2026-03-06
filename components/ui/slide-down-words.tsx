"use client";

import { motion } from "framer-motion";

export default function SlideDownWords({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const word = {
    hidden: {
      y: -40,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const, // easing studio style
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={`flex flex-wrap gap-[0.35em] ${className}`}
    >
      {words.map((wordText, i) => (
        <motion.span
          key={i}
          variants={word}
          className="inline-block"
        >
          {wordText}
        </motion.span>
      ))}
    </motion.div>
  );
}