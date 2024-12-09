"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState, useMemo } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
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
    <div className="w-full" ref={containerRef}>
      <div className="mx-auto text-center font-bold text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300 pb-7">
        <h1>Our Story</h1>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={index}
              className="relative flex justify-center items-center pt-10 md:gap-32 ml-6"
            >
              <div
                className={`flex flex-1 ${
                  isOdd ? "md:order-2" : "md:order-1"
                } justify-${isOdd ? "start" : "end"} items-center md:-ml-16`}
              >
                <h3 className="text-xl md:text-[40px] font-semibold text-[#F5F5F7] font-gotham">
                  {item.title}
                </h3>
              </div>

              <div className="absolute left-[48%] lg:left-[49.1%] transform -translate-x-1/2 -translate-y-1/2 w-[16px] h-[16px] rounded-full bg-[#4376e4] border border-neutral-300 dark:border-neutral-700 z-10 md:text-center" />

              <div
                className={`flex flex-1 ${
                  isOdd ? "md:order-1" : "md:order-2"
                } justify-${isOdd ? "end" : "start"} items-center`}
              >
                <div
                  className={`text-left max-w-md text-${isOdd ? "right" : "left"}`}
                >
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}

        <div
          style={{
            height: Math.max(height - 30, 0) + "px",
          }}
          className="absolute md:left-1/2 left-6 top-10 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] items-center"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[16px] h-[16px] rounded-full bg-[#78A0F5] border border-neutral-300 dark:border-neutral-700" />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
