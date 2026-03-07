"use client";

import React from "react";
import { motion } from "framer-motion";

import ReactIcon from "../components/icons/react.svg";
import NextIcon from "../components/icons/nextjs.svg";
import FirebaseIcon from "../components/icons/firebase.svg";
import TailwindIcon from "../components/icons/tailwind.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-24 bg-white">
      <div className="grid grid-cols-16 gap-x-6 gap-y-24">
        {/* LIGNE 1 */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="col-start-1 col-span-4 text-7xl tracking-wide"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="col-start-7 col-span-5 text-lg leading-6 text-black/40"
        >
          <p>
            <span className="font-semibold text-black">
              Socializus — Frontend Engineer Intern
            </span>
            <br />
            Built and maintained React.js interfaces improving usability.
          </p>

          <p className="mt-4">
            <span className="font-semibold text-black">
              Negativ Basketball — Freelance Full-Stack Developer
            </span>
            <br />
            Designed and developed a client platform with React.js and Next.js.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="row-span-3 col-start-13 col-span-4 flex flex-col"
        >
          <img
            src="/assets/images/emile-photo-blur.jpg"
            alt="photo-emile"
            width={400}
            height={800}
            className="w-full max-w-[320px] h-[520px] object-cover"
          />

          <p className="mt-1 text-xs text-left text-black/60">
            Crédit : <span className="font-bold text-black">Emile Zehouri</span>
          </p>
        </motion.div>

        {/* LIGNE 2 */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="col-start-1 col-span-4 text-7xl tracking-wide"
        >
          Studies
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="col-start-7 col-span-5 text-lg leading-6 text-black/45"
        >
          <p>
            <span className="font-semibold text-black">
              2021–2025 — College of Paris-Saclay
            </span>
          </p>

          <p className="mt-2">
            C, Java, JavaScript, Python
            <br />
            Networks, Databases, Operating Systems, Graph Algorithms
          </p>
        </motion.div>

        {/* LIGNE 3 */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="col-start-1 col-span-4 text-7xl tracking-wide"
        >
          Stack
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="col-start-7 col-span-5 text-lg leading-6 text-black/75"
        >
          <div className="grid grid-cols-12 gap-x-4 gap-y-2">
            <div className="col-span-6 space-y-2">
              <p className="flex items-center gap-2">
                <ReactIcon className="w-10 h-10 text-black" />
                React.js
              </p>

              <p className="flex items-center gap-2">
                <NextIcon className="w-10 h-10 text-black" fill="currentColor" />
                Next.js
              </p>
            </div>

            <div className="col-span-6 space-y-2">
              <p className="flex items-center gap-2">
                <TailwindIcon className="w-10 h-10 text-black" fill="currentColor" />
                Tailwind CSS
              </p>

              <p className="flex items-center gap-2">
                <FirebaseIcon className="w-10 h-10 text-yellow-500" />
                Firebase
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;