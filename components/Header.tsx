"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white">
      <div className="w-full px-1">
        {/* 16 colonnes = grille de placement */}
        <div className="grid h-16 grid-cols-16 items-center">
          {/* Projects */}
          <a
            href="/#projects"
            className="col-start-9 col-span-1 justify-self-start text-[13px] text-black/60 hover:text-black transition"
          >
            Projects
          </a>

          {/* About */}
          <Link
            href="/about"
            className="col-start-11 col-span-1 justify-self-start  text-[13px] font-semibold text-black hover:text-black transition"
          >
            About
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="col-start-13 col-span-2 justify-self-start  text-[13px] text-black/60 hover:text-black transition"
          >
            Contact
          </Link>

          {/* Shop */}
          <a
            href="https://shop.tyrsa.fr/"
            target="_blank"
            rel="noreferrer"
            className="col-start-15 col-span-1 justify-self-start  text-[13px] text-black/60 hover:text-black transition"
          >
            Shop
          </a>

          {/* Instagram collé à droite */}
          <a
            href="https://www.instagram.com/tyrsa/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="col-start-16 justify-self-end text-black/60 hover:text-black transition"
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
    </header>
  );
}