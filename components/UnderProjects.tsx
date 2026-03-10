"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const makeCardVariants = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 30,
    scale: 1,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  hover: {
    scale: 1.03,
    y: -6,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
});

const UnderProjects = () => (
  <section className="w-full min-h-[40vh] bg-white">
    <div className="grid grid-cols-16 h-[40vh] w-full">
      <motion.div
        variants={makeCardVariants(0)}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.25 }}
        className="col-start-1 col-span-6 bg-neutral-400 p-1 flex flex-col justify-between"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Incoming
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
            More projects soon
          </h2>
        </div>

        <p className="text-sm text-white/60">
          New case studies and experiments are on the way.
        </p>
      </motion.div>

      <motion.div
        variants={makeCardVariants(0.12)}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.25 }}
        className="col-start-7 col-span-6 bg-neutral-600 p-1 flex flex-col justify-between"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Current
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
            Current project
          </h2>
        </div>

        <Link
          href="/negativ-basket-project"
          className="inline-flex gap-2 text-sm font-semibold text-white hover:opacity-60 transition"
        >
          View latest work
          <span>↗</span>
        </Link>
      </motion.div>

      <motion.div
        variants={makeCardVariants(0.24)}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.25 }}
        className="col-start-13 col-span-4 bg-neutral-800 p-1 flex flex-col justify-between"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Archive
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
            Selected work
          </h2>
         
        </div>
         <Link
          href="https://github.com/EmileZEHOURI"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:opacity-60 transition"
        >
          My Github
          <span>↗</span>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default UnderProjects;