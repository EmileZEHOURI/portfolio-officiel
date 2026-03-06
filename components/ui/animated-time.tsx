"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedTime({ time }: { time: string }) {
  return (
    <div className="relative inline-block align-baseline leading-none h-[0.5em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={time}
          className="absolute left-0 top-0 tabular-nums"
          initial={{ y: 18, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -18, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {time}
        </motion.span>
      </AnimatePresence>
      {/* “spacer” invisible pour donner une vraie hauteur/largeur au conteneur */}
      <span className="invisible tabular-nums">{time}</span>
    </div>
  );
}