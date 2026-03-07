"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { cn } from "@/lib/utils";

interface TextScrollMarqueeProps {
  children: string;
  baseVelocity?: number;
  className?: string;
  direction?: "left" | "right";
}

export default function TextScrollMarquee({
  children,
  baseVelocity = 40,
  className,
  direction = "left",
}: TextScrollMarqueeProps) {
  const baseX = useMotionValue(0);

  const dir = useRef(direction === "left" ? -1 : 1);

  // boucle infinie entre -100% et 0%
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    const moveBy = dir.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        style={{ x }}
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className={cn("block text-[5vw]", className)}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}