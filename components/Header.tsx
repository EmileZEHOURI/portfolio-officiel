"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedLink from "./ui/animated-link";
import useActiveSection from "../hooks/useActiveSection";
import NavbarReveal from "./ui/navbar-reveal";
import { CiLinkedin } from "react-icons/ci";

export default function Header() {
  const pathname = usePathname();

  const active = useActiveSection();

  const linkClass = (target: string) => {
    // pages
    if (target.startsWith("/")) {
      return pathname === target
        ? "opacity-40 transition"
        : "text-black hover:text-black transition";
    }

    // sections (#projects, #about)
    return active === target
      ? "opacity-40 transition"
      : "text-black hover:text-black transition";
  };

  const item = {
    hidden: { y: -10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <header
      id="home"
      className="fixed m-[-1rem] top-0 inset-x-0 z-50 bg-transparent text-[10px] font-normal"
    >
      <NavbarReveal>
        <div className="w-full px-1 tracking-tight">
          {/* 16 colonnes = grille de placement */}
          <div className="grid h-16 grid-cols-16 items-center">
            {/* Projects */}
            <AnimatedLink
              href="/#projects"
              className={`${linkClass("projects")} col-start-9 col-span-1 justify-self-start `}
            >
              <motion.div variants={item}>Projects</motion.div>
            </AnimatedLink>

            {/* About */}
            <AnimatedLink
              href="/#about"
              className={`${linkClass("about")} col-start-11 col-span-1 justify-self-start `}
            >
              <motion.div variants={item}>About</motion.div>
              
            </AnimatedLink>

            {/* Contact */}
            <AnimatedLink
              href="/contact"
              className={`${linkClass("/contact")} col-start-13 col-span-2 justify-self-start  `}
            >
              <motion.div variants={item}>Contact</motion.div>
              
            </AnimatedLink>

            {/* Home */}
            <AnimatedLink
              href="/#home"
              className={`${linkClass("/home")} col-start-15 col-span-1 justify-self-start  `}
            >
              <motion.div variants={item}>Home</motion.div>
            </AnimatedLink>

            {/* Instagram collé à droite */}
            <a
              href="https://www.linkedin.com/in/emile-zehouri-348bb1339/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="col-start-16 -translate-x-4 justify-self-end text-black hover:text-black transition"
            >

              <CiLinkedin 
               className="!text-[0.8rem]"
                />
            </a>
          </div>
        </div>
      </NavbarReveal>
    </header>
  );
}
