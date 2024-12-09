import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import blueQuotes from "@/../../public/assets/icon/quoteBlue.svg";

const clientData = [
  {
    id: 1,
    name: "Craig Press",
    role: "CEO, ABC Company",
    company: "Chkpt.",
    image: "/assets/images/earth.png",
    quote: "We define and deliver the best tech solution",
    content:
      "Working with Probits has brought my business to absolute new heights and they are now part of the family. We could not be more pleased with the work from our dedicated team. I have and will recommend them to anyone looking for their services.",
  },
  {
    id: 2,
    name: "Jessica Allen",
    role: "CTO, XYZ Innovations",
    company: "InnovateTech",
    image: "/assets/images/clientSayAbout.png",
    quote: "Innovation meets execution with their team",
    content:
      "Partnering with Probits has transformed our digital landscape. Their expertise in cutting-edge technologies has enabled us to stay ahead of the competition, and their team is fantastic to work with.",
  },
  {
    id: 3,
    name: "Michael Green",
    role: "Director of Operations, Global Solutions",
    company: "Global Solutions",
    image: "/assets/images/ceo3.png",
    quote: "Probits is the key to our operational success",
    content:
      "Probits has been a strategic partner in streamlining our operations. Their attention to detail and commitment to delivering high-quality solutions have made them an invaluable asset to our company.",
  },
  {
    id: 4,
    name: "Lisa Turner",
    role: "Founder, Creative Minds",
    company: "Creative Minds Inc.",
    image: "/assets/images/ceo1.png",
    quote: "Creativity and technical excellence go hand in hand",
    content:
      "The Probits team has elevated our creative projects to new heights. Their technical skills combined with their creative insights have helped us launch innovative campaigns that resonate with our audience.",
  },
];

interface whatPeopleSayProps {
  bgColor?: string;
  textColor?: string;
  quoteIcon?: string;
}

const WhatPeopleSayCard: React.FC<whatPeopleSayProps> = ({
  bgColor,
  textColor,
  quoteIcon,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clientData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <div className="relative max-w-4xl mx-auto p-10 rounded-xl border outline-[#7474804D]/30 bg-[#12151B99]/60 border-[#7474804D]/40">
        <motion.div
          className="flex items-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6 }}
          key={activeIndex}
        >
          <motion.div
            className="relative w-1/3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.6, yoyo:'Infinity', type:'spring', stiffness: 500}}
          >
            <div className="absolute -left-[70px] bottom-[270px] w-full h-full">
              <Image
                src={clientData[activeIndex].image}
                alt={clientData[activeIndex].name}
                width={300}
                height={300}
                className="rounded-xl object-cover z-20 bg-white"
              />
            </div>
          </motion.div>

          <motion.div
            className={`w-2/3 ${bgColor || "bg-white"} rounded-lg p-8 border border-slate-600`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.6, yoyo:'Infinity', type:'spring', stiffness: 500 }}
          >
            <div className="-mt-[83px]">
              <Image
                src={quoteIcon || blueQuotes}
                alt="Quotes Icon"
                className="object-contain"
              />
            </div>
            <h2
              className={`text-2xl font-bold font-gotham ${textColor || "text-[#0C0B1D]"}`}
            >
              {clientData[activeIndex].quote}
            </h2>
            <p
              className={`text-base font-gotham font-normal italic pt-3 ${textColor || "text-[#475569]"}`}
            >
              {clientData[activeIndex].content}
            </p>
            <div className="flex items-center justify-between h-auto">
              <div className="flex flex-col items-start justify-center gap-1 pt-5">
                <p
                  className={`font-bold font-gotham text-[20px] m-0 p-0 leading-none ${textColor}`}
                >
                  {clientData[activeIndex].name}
                </p>
                <p
                  className={`text-sm font-gotham font-normal m-0 p-0 leading-none ${textColor}`}
                >
                  {clientData[activeIndex].role}
                </p>
              </div>
              <div
                className={`text-xl font-bold font-gotham m-0 p-0 leading-none ${textColor || "text-[#0C0B1D]"}`}
              >
                {clientData[activeIndex].company}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex justify-center space-x-12 items-center mt-8">
        {clientData.map((_, index) => (
          <button
            key={index}
            className={`rounded-full overflow-hidden transition-all duration-300 ${
              index === activeIndex
                ? "w-12 h-12 ring-1 ring-blue-500"
                : "w-7 h-7 opacity-60 hover:opacity-100"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={clientData[index].image}
              alt={clientData[index].name}
              width={48}
              height={48}
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default WhatPeopleSayCard;
