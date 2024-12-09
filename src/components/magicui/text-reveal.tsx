"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("z-0 h-auto", className)}>
      <div
        className={
          "top-0 mx-auto flex 2xl:h-[40%] h-[30%] max-w-4xl items-center bg-transparent"
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap text-2xl font-medium text-[#f2f2f3] dark:text-black/20 justify-center leading-9"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [1, 0]);

  return (
    <span className="relative">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity }}
        className={"text-white dark:text-black mr-[10px]"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
