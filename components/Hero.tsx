"use client";

import React, { useEffect, useState } from "react";
import { TextAnimate } from "./ui/blur-in-text";
import AnimatedTime from "./ui/animated-time";

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

const Hero = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // init + tick every 30s
    const update = () => setTime(formatTime(new Date()));
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section>
      <div className=" w-full min-h-[18vh]  bg-white ">
        <div className="grid  grid-cols-16 items-end">
          <h2
            className=" col-start-9 col-span-6  max-w-[28ch] md:max-w-[30ch]
  lg:text-[1.6rem]
  md:text-[1.2rem]
  tracking-[-0.02em]
  leading-[1.2]
  break-normal"
          >
            <TextAnimate
              duration={0.05}
              animation="blurInUp"
              by="word"
              once
            >
              Paris-based developer crafting impactful websites, software and
              digital identities for your projects.
            </TextAnimate>
          </h2>

          <div className="flex flex-col  col-start-15 col-span-1 justify-self-start lg:text-[0.6rem] md:text-[0.5rem] text-black/80 translate-x-3 -translate-y-[0.3rem] ">
            <div>
              <TextAnimate duration={0.05} animation="blurInUp" by="text" once>
                Paris, France
              </TextAnimate>
            </div>
            <div className="text-black">
              <AnimatedTime time={time} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
