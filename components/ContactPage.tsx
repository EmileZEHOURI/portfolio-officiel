'use client'

import { motion } from 'framer-motion'

function SplitLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(' ')

  return (
    <div className="overflow-hidden">
      <p className="flex flex-wrap gap-x-2 md:gap-x-3 leading-none">
        {words.map((word, index) => {
          // Variation légère et déterministe du timing
          const offset = (index % 3) * 0.035 + (index % 2) * 0.015

          return (
            <motion.span
              key={`${word}-${index}`}
              className="inline-block will-change-transform"
              initial={{
                opacity: 0,
                filter: 'blur(12px)',
                y: 18,
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                y: 0,
              }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + index * 0.06 + offset,
              }}
            >
              {word}
            </motion.span>
          )
        })}
      </p>
    </div>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen text-black">
      <section className="px-5 sm:px-6 md:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 min-h-[70vh] flex items-center">
        <div className="grid grid-cols-16 items-center content-center w-full">
          {/* TEXTE */}
          <div className="col-span-16 md:col-span-12 lg:col-span-7 font-normal self-center">
            <div className="tracking-tighter leading-[0.92] text-[38px] sm:text-[46px] md:text-[52px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px]">
              <SplitLine text="I'm always happy" delay={0} />
              <SplitLine text="to discuss a new project" delay={0.2} />
              <SplitLine text="or new opportunities." delay={0.4} />
            </div>
          </div>

          {/* INFOS CONTACT */}
          <div className="col-span-16 mt-12 md:mt-16 md:col-span-8 lg:mt-0 lg:col-start-9 lg:col-span-5 justify-self-start self-center">
            <div className="space-y-8 md:space-y-10 text-[11px] sm:text-[12px] md:text-[12px] lg:text-[10px] xl:text-[11px] leading-[1.35]">
              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-semibold">Project inquiries</p>
                <a
                  href="mailto:emilezehouri.pro@gmail.com"
                  className="inline-block border-b border-black/40 hover:border-black transition"
                >
                  emilezehouri.pro@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-semibold">Work with me</p>
                <a
                  href="mailto:ezehouri@gmail.com"
                  className="inline-block border-b border-black/40 hover:border-black transition"
                >
                  ezehouri@gmail.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}