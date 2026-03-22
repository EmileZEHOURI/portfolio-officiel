"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_TIMELINE_STEPS } from "../data/portfolio-timeline.data";

const fadeUpText = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const PortfolioTimelineView = () => {
  return (
    <section className="relative w-full overflow-x-hidden py-8 md:py-12 xl:py-16">
      <div className="relative mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Ligne tablette/mobile */}
        <div className="absolute left-3 top-0 h-full w-px bg-zinc-200 xl:hidden" />

        {/* Ligne desktop */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-zinc-200 xl:block" />

        <div className="space-y-14 md:space-y-20 xl:space-y-24">
          {PORTFOLIO_TIMELINE_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative"
              >
                {/* MOBILE + TABLETTE */}
                <div className="relative pl-8 xl:hidden">
                  <div className="absolute left-[6px] top-2 h-3 w-3 rounded-full bg-black" />

                  <div className="relative h-[260px] overflow-hidden sm:h-[340px] md:h-[440px]">
                    <Image
                      src={step.imageSrc}
                      alt={step.alt}
                      fill
                      className={step.className ?? "object-cover"}
                    />
                  </div>

                  <motion.div
                    variants={fadeUpText}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-5 md:mt-6"
                  >
                    <motion.h3
                      variants={fadeUpText}
                      className="text-2xl font-[700] tracking-tight text-black md:text-3xl"
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      variants={fadeUpText}
                      className="mt-3 whitespace-pre-line text-base font-[500] text-black md:mt-4 md:text-lg"
                    >
                      {step.description}
                    </motion.p>

                    {step.photoDescription && (
                      <motion.div
                        variants={fadeUpText}
                        className="mt-5 max-w-md md:mt-6"
                      >
                        <span className="mb-3 block h-px w-16 bg-black" />
                        <p className="text-sm font-medium text-black md:text-base">
                          {step.photoDescription}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* DESKTOP */}
                <div className="hidden xl:grid xl:grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)] xl:items-center">
                  {isEven ? (
                    <>
                      {/* Image gauche */}
                      <div className="relative h-[520px] overflow-hidden 2xl:h-[620px]">
                        <Image
                          src={step.imageSrc}
                          alt={step.alt}
                          fill
                          className={step.className ?? "object-cover"}
                        />
                      </div>

                      {/* Centre */}
                      <div className="relative flex h-full justify-center" />

                      {/* Texte droite */}
                      <motion.div
                        variants={fadeUpText}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="px-10 2xl:px-14"
                      >
                        <motion.h3
                          variants={fadeUpText}
                          className="text-3xl font-[700] tracking-tight text-black 2xl:text-4xl"
                        >
                          {step.title}
                        </motion.h3>

                        <motion.p
                          variants={fadeUpText}
                          className="mt-4 max-w-xl whitespace-pre-line text-base font-[500] text-black 2xl:text-lg"
                        >
                          {step.description}
                        </motion.p>

                        {step.photoDescription && (
                          <motion.div
                            variants={fadeUpText}
                            className="mt-6 max-w-md"
                          >
                            <span className="mb-3 block h-px w-16 bg-black" />
                            <p className="text-sm font-medium text-black 2xl:text-base">
                              {step.photoDescription}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    </>
                  ) : (
                    <>
                      {/* Texte gauche */}
                      <div className="flex justify-end px-10 2xl:px-14">
                        <motion.div
                          variants={fadeUpText}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.3 }}
                          className="max-w-xl"
                        >
                          <motion.h3
                            variants={fadeUpText}
                            className="text-3xl font-[700] tracking-tight text-black 2xl:text-4xl"
                          >
                            {step.title}
                          </motion.h3>

                          <motion.p
                            variants={fadeUpText}
                            className="mt-4 whitespace-pre-line text-base font-[500] text-black 2xl:text-lg"
                          >
                            {step.description}
                          </motion.p>

                          {step.photoDescription && (
                            <motion.div
                              variants={fadeUpText}
                              className="mt-6 max-w-md"
                            >
                              <span className="mb-3 block h-px w-16 bg-black" />
                              <p className="text-sm font-medium text-black 2xl:text-base">
                                {step.photoDescription}
                              </p>
                            </motion.div>
                          )}
                        </motion.div>
                      </div>

                      {/* Centre */}
                      <div className="relative flex h-full justify-center" />

                      {/* Image droite */}
                      <div className="relative h-[520px] overflow-hidden 2xl:h-[620px]">
                        <Image
                          src={step.imageSrc}
                          alt={step.alt}
                          fill
                          className={step.className ?? "object-cover"}
                        />
                      </div>
                    </>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};