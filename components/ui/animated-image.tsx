"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

type AnimatedImageProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  maxScale?: number;
};

export default function AnimatedImage({
  src,
  alt = "image",
  width,
  height,
  className = "",
  maxScale = 1.12,
}: AnimatedImageProps) {

  // scale dynamique
  const scale = useMotionValue(1);

  // smooth animation
  const smoothScale = useSpring(scale, {
    stiffness: 140,
    damping: 20,
    mass: 0.4,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const dx = x - centerX;
    const dy = y - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

    const intensity = 1 - Math.min(distance / maxDistance, 1);

    const nextScale = 1 + intensity * (maxScale - 1);

    scale.set(nextScale);
  };

  const handlePointerLeave = () => {
    scale.set(1);
  };

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      
      // Animation quand l'image entre dans le viewport
      initial={{
        opacity: 0,
        filter: "blur(20px)",
        scale: 1.2,
      }}

      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
      }}

      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}

      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <motion.div
        style={{ scale: smoothScale }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
    </motion.div>
  );
}