import React from "react";
import AnimatedImage from "./ui/animated-image";
import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative h-screen w-full bg-transparent"
    >
      <Link
        href="/negativ-basket-project"
        className="relative block w-full h-full"
      >
        {/* IMAGE */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatedImage
            src="/assets/images/melvin-photo.jpeg"
            alt="baskettoff"
            width={1440}
            height={1440}
            className="w-full h-full"
            maxScale={1.18}
          />
        </div>

        {/* TITRES */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between p-8 text-white/90">
          <div>
            <h1 className=" md:text-2xl lg:text-3xl font-extrabold tracking-tighter leading-[0.9]">
              NEGATIV <br /> BASKETBALL
            </h1>
          </div>
          <span className="md:text-xl lg:text-1xl font-extrabold tracking-tighter self-end leading-[0.9]">
            VOIR PLUS
          </span>

          <div className="flex flex-col leading-[0.95]  text-right md:text-[0.7rem] lg:text-[0.9rem]">
            <span className=" font-normal tracking-wide">
              Web Development
            </span>
            <span className="font-extrabold underline tracking-wide">
              FullStack Project
            </span>
          </div>
        </div>
      </Link>

      {/* CREDIT PHOTO */}
      <div className="absolute bottom-4 right-4 z-20 text-[10px] text-white tracking-wide">
        Crédit :
        <a
          href="https://www.instagram.com/islem_asd/"
          target="_blank"
          rel="noreferrer"
          className="ml-1 font-bold hover:text-white/60 transition-all duration-300"
        >
          @islem_asd
        </a>
      </div>
    </section>
  );
};

export default Projects;