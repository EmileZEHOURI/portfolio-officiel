"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const MotionLink = motion(Link);

export default function AnimatedLink({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const controls = useAnimation();

  return (
    <MotionLink
      href={href}
      className={`relative inline-block ${className ?? ""}`}
      onHoverStart={() => {
        controls.start({
          scaleX: 1,
          originX: 0,
          transition: { duration: 0.35 }
        });
      }}
      onHoverEnd={() => {
        controls.start({
          scaleX: 0,
          originX: 1,
          transition: { duration: 0.35 }
        });
      }}
    >
      {children}

      <motion.span
        className="absolute left-0 bottom-0 h-[1px] w-full bg-black"
        initial={{ scaleX: 0, originX: 0 }}
        animate={controls}
      />
    </MotionLink>
  );
}