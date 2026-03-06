import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
     <footer className=" bg-white">
      <div className="w-full ">
        {/* 16 colonnes = grille de placement */}
        <div className="grid  grid-cols-16 items-center">
            
          {/* Projects */}
          <a
            href="/"
            className="text-center col-start-1 col-span-2 justify-self-start text-[13px] text-black/60 hover:text-black transition"
          >
            Copyright 
            <br/>2026 ©
          </a>

          {/* About */}
          <Link
            href="/about"
            className="col-start-8 col-span-1 justify-self-start  text-[13px] font-semibold text-black hover:text-black transition"
          >
            Paris, France
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="col-start-13 col-span-2 justify-self-start  text-[13px] text-black/60 hover:text-black transition"
          >
            ezehouri@gmail.com
          </Link>

    

          {/* Instagram collé à droite */}
          <a
            href="https://www.instagram.com/tyrsa/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="col-start-16 col-span-2 justify-self-end text-black/60 hover:text-black transition"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 1 1-7.87 1.17A4 4 0 0 1 16 11.37Z" />
              <path d="M17.5 6.5h.01" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer