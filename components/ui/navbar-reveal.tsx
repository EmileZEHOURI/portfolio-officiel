"use client";

import { motion } from "framer-motion";

export default function NavbarReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const container = {
    hidden: {
      y: -40,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}