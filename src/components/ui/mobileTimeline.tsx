"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import speedIcon from "../../../public/assets/icon/speedIcon.svg";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const MobileTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-transparent mx-auto" ref={containerRef}>
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-primary dark:text-white max-w-4xl text-center">
          Our Story
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10">
            <div className="sticky flex flex-col z-40 items-center top-40 self-start max-w-xs">
              <div className="h-5 absolute left-6 w-5 rounded-full bg-[#3F5485] dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#78A0F5] dark:bg-neutral-800 p-2" />
              </div>
            </div>

            <div className="relative w-full pl-20">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center border border-[#BCCBED14]/10 rounded bg-[#12151B99]/60 h-[40px] w-[40px] p-1">
                  <Image
                    src={speedIcon}
                    alt="timelineIcon"
                    className="object-contain cursor-pointer"
                    height={28}
                    width={28}
                  />
                </span>
                <h3 className="text-[32px] leading-[32px] font-normal italic text-white text-left dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>
              <p className="text-lg font-gotham font-medium text-primary">
                {item.content}
              </p>
            </div>
          </div>
        ))}
        <div
          style={{
            height: Math.max(height - 80, 0) + "px",
          }}
          className="bg-blue-300 absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
