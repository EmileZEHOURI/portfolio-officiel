import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="relative flex flex-col h-[100vh] bg-gray-100 items-center justify-center">
      <div className="w-full h-[100vh] overflow-hidden">
        <img
          src="/assets/images/melvin-photo.jpeg"
          alt="baskettoff"
          width={1440}
          height={1440}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Titres */}
      <div className="text-white/90 absolute flex items-end gap-6">
        <h1 className="text-8xl font-extrabold">NEGATIV BASKETBALL</h1>

        <h1 className="text-4xl font-extrabold">Web Developpement FullStack</h1>
      </div>

      {/* Crédit photo */}

      <div className="absolute -bottom-5 right-1 text-black text-sm font-normal tracking-wide">
      <span className="text-[10px] line-height-[1.25rem]"> Photos : </span>
        <a
          href="https://www.instagram.com/islem_asd/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className=""
        >
         <span className="text-black hover:text-black/60 transition-all duration-300 font-bold "> @islem_asd </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
