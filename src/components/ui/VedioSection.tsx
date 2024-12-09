"use client";
import { useRef, useState } from "react";
import playIcon from "@/../../public/assets/images/playIcon.png";
import posterImage from "@/../../public/assets/images/videoPoster.png";
import Image from "next/image";

export default function VideoSection() {
  const videoRef: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative 2xl:h-[674px] sm:h-[500px] w-full flex items-center justify-center">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover rounded-xl"
        width=""
        height=""
        loop
        muted
        preload="none"
        poster={posterImage.src}
        onClick={handleVideoClick}
      >
        <source src="/assets/video/demoVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0D105E99]/60 to-[#3B30B499]/60 mix-blend-overlay" />

      {!isPlaying && (
        <div className="relative z-10 " onClick={handleVideoClick}>
          <Image
            src={playIcon}
            className="object-contain cursor-pointer"
            alt="Play Icon"
          />
        </div>
      )}
    </section>
  );
}
