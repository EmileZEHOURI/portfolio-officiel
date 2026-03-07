import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className=" bg-white">
      <div className="w-full ">
        {/* 16 colonnes = grille de placement */}
        <div className="grid  grid-cols-16 items-center">
          {/* Projects */}
          <a
            href="/"
            className="text-center col-start-1 col-span-2 justify-self-start text-[10px] text-black/60 hover:text-black transition"
          >
            Copyright
            <br />
            2026 ©
          </a>

          {/* About */}
          <Link
            href="/"
            className="col-start-9 col-span-2 justify-self-start  text-[10px] font-semibold text-black hover:text-black transition"
          >
            Paris, France
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="col-start-13 col-span-2 justify-self-start  text-[10px] text-black/60 hover:text-black transition"
          >
            ezehouri@gmail.com
          </Link>

          {/* Instagram collé à droite */}
          <a
            href="https://www.linkedin.com/in/emile-zehouri-348bb1339/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="col-start-16 col-span-2 justify-self-end text-black/60 hover:text-black transition"
          >
            <CiLinkedin className="!text-[0.8rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
