import Image from "next/image";

const NegativPhotoHero = () => {
  return (
    <section
      id="projects"
      className="relative h-[70vh] min-h-[700px] w-full overflow-hidden"
    >
      <div className="relative h-full w-full">
        <Image
          src="/assets/images/melvin-photo.jpeg"
          alt="baskettoff"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="pointer-events-none absolute right-8 top-1/2 z-10 -translate-y-1/2 text-right text-white/90">
          <div className="flex flex-col leading-[0.95] md:text-[0.7rem] lg:text-[0.9rem]">
            <span className="font-normal tracking-wide">Web Development</span>
            <span className="font-extrabold tracking-wide underline">
              FullStack Project
            </span>
          </div>
        </div>

        <a
          href="#next-section"
          className="absolute bottom-8 left-8 z-20 flex flex-col items-center gap-3 text-white transition-opacity duration-300 hover:opacity-60"
          aria-label="Aller à la section suivante"
        >
          <span className="text-[10px] font-semibold tracking-[0.35em]">
            SCROLL
          </span>

          <svg
            width="14"
            height="72"
            viewBox="0 0 14 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
          >
            <path
              d="M7 1V64"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M2 59L7 64L12 59"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
          <a
            href="https://projetnegativ.web.app/"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-extrabold tracking-[0.25em] text-white transition-opacity duration-300 hover:opacity-60"
          >
            VISITER LE SITE ↗
          </a>
        </div>

        <div className="absolute bottom-8 right-8 z-20 text-[10px] tracking-wide text-white">
          Crédit :
          <a
            href="https://www.instagram.com/islem_asd/"
            target="_blank"
            rel="noreferrer"
            className="ml-1 font-bold transition-all duration-300 hover:text-white/60"
          >
            @islem_asd
          </a>
        </div>
      </div>
    </section>
  );
};

export default NegativPhotoHero;
