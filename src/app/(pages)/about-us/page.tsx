"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Slider from "react-slick";

import teamImages from "@/../../public/assets/images/teamProbits.png";
// import NumberTicker from "@/components/magicui/number-ticker";
const NumberTicker = dynamic(
  () => import("@/components/magicui/number-ticker"),
  { ssr: false },
);

import linkidinIcon from "@/../../public/assets/icon/whiteLinkidin.png";
import xIcon from "@/../../public/assets/icon/whiteXicon.png";
import behanceIcon from "@/../../public/assets/icon/whiteBehance.png";
import whiteQuotsIcon from "@/../../public/assets/icon/whiteQuote.svg";
import speedIcon from "@/../../public/assets/icon/speedIcon.svg";
import blueQuotes from "@/../../public/assets/icon/quoteBlue.svg";


import WhatPeopleSayCard from "@/components/ui/card/WhatPeopleSayCard";
import { Timeline } from "@/components/ui/timeline";
import SpinningCarousel from "@/components/ui/carousel/spinningCarousel";
import CaseStudyCarousel from "@/components/ui/CaseStudyCarousel";

import { teamMembersDetails } from "./data";
import { cardData, clientData } from "./data";
import { MobileTimeline } from "@/components/ui/mobileTimeline";
import MobileServiceCard from "@/components/mobileUI/MobileServiceCard";
// import WhatPeopleSayMobileCard from "@/components/ui/card/WhatPeopleSayMobileCard";
const WhatPeopleSayMobileCard = dynamic(
  () => import("@/components/ui/card/WhatPeopleSayMobileCard"),
  { ssr: false },
);

let businessData = [
  { value: 10, label: "Years in Business" },
  { value: 30, plush: "+", label: "Talented Folks" },
  { value: 80, plush: "+", label: "Clients" },
];

let socialIcon = [
  { icon: linkidinIcon, alt: "linkindIcon" },
  { icon: xIcon, alt: "xIcon" },
  { icon: behanceIcon, alt: "behanceIcon" },
];

const AboutUsPage = () => {
  type TimelineEntry = {
    title: string;
    content: React.ReactNode;
  };

  // data for the ourStory timeline Section
  const timelineData: TimelineEntry[] = [
    {
      title: "2020",
      content: (
        <div className="flex items-start justify-start gap-5">
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-1.5 hidden md:block">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={40}
              width={40}
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3 italic md:not-italic">
              Foundation & Stability{" "}
            </h4>
            <p className="text-base text-[#F5F5F7] md:text-[#F5F5F7]/70 font-gotham font-normal">
              Strengthen core offerings and establish a solid customer base.
              Build a scalable IT infrastructure.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="flex items-start justify-start md:justify-end gap-6 md:mr-7 ">
          <div className="text-start md:text-right">
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3 italic md:not-italic">
              Growth & Innovation{" "}
            </h4>
            <p className="text-base text-[#F5F5F7] md:text-[#F5F5F7]/70 font-gotham font-normal">
              Double the customer base. Achieve a 15% reduction in operational
              costs through automation. Launch a new AI-driven product.
            </p>
          </div>
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-1.5 hidden md:block">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={60}
              width={60}
            />
          </span>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex items-start justify-start gap-5">
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-1.5 hidden md:block">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={35}
              width={35}
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3 italic md:not-italic">
              Scaling & Diversification{" "}
            </h4>
            <p className="text-base text-[#F5F5F7] md:text-[#F5F5F7]/70 font-gotham font-normal">
              Scale operations and diversify revenue streams. Strengthen global
              presence.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="flex items-start justify-start md:justify-end gap-6 mr-7">
          <div className="md:text-right">
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3 italic md:not-italic">
              Leadership & Market Positioning{" "}
            </h4>
            <p className="text-base text-[#F5F5F7] md:text-[#F5F5F7]/70 font-gotham font-normal">
              Establish the company as a market leader in key areas. Drive
              thought leadership and innovation.
            </p>
          </div>
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-[6px] hidden md:block">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={50}
              width={50}
            />
          </span>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex items-start justify-start gap-5">
          <span className="border rounded border-[#BCCBED14]/10  bg-[#12151B99]/60 p-[6px] hidden md:block">
            <Image
              src={speedIcon}
              className="object-fit cursor-pointer"
              alt="timelineIcon"
              height={55}
              width={55}
            />
          </span>
          <div>
            <h4 className="text-xl font-semibold font-gotham text-primary pb-3 italic md:not-italic">
              Sustainability & Long-Term Vision{" "}
            </h4>
            <p className="text-base text-[#F5F5F7] md:text-[#F5F5F7]/70 font-gotham font-normal">
              Ensure sustainable growth and prepare for long-term opportunities.
              Focus on corporate culture and long-term innovation.{" "}
            </p>
          </div>
        </div>
      ),
    },
  ];

  // code for solving the haydartion error
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // seeting for the react slider
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="w-full h-full flex flex-1 flex-col items-center justify-center pt-24 xl:pt-40 mx-auto">
      <section className="relative w-full">
        <div className="relative sm:w-11/12 2xl:w-10/12 mx-auto z-20 px-4 md:px-0 pt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h6 className="text-secondary font-gotham font-normal text-base md:text-xl pb-4 hover:underline hover:text-blue-500 hover:font-medium transition-all ease-in-out duration-300">
              ABOUT PROBITS{" "}
            </h6>
            <h1 className="font-gotham hidden md:block font-bold md:text-[58px] pb-4 md:leading-[1.2] text-primary">
              We're bringing{" "}
              <span className="block">technology Superpower</span>
              <span className="block">to everyone.</span>
            </h1>
            {/* heading for the small screen */}
            <h1 className="font-gotham block md:hidden font-bold text-[32px] leading-[41.6px] text-primary">
              We're bringing technology Superpower to everyone.{" "}
            </h1>
          </motion.div>
        </div>

        <div className="relative w-full min-h-[443px] md:h-[500px] mx-auto -mt-16 md:-mt-28 z-10">
          <Image
            src={teamImages}
            alt="Probits Team"
            className="object-cover"
            fill
            priority
            quality={100}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/30  to-[#020202]/100 z-10" />
        </div>
      </section>

      {/* By the number section */}
      <div className="relative w-full h-full flex-1 bg-ellips-bg bg-center bg-contain bg-repeat-y mx-auto flex flex-col items-center justify-center gap-12 md:gap-20 py-8 md:py-20 -mt-11 md:-mt-0 z-10">
        <section className="h-auto w-full mx-auto sm:w-11/12 2xl:w-10/12 flex  flex-1 flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-0 gap-8 ">
          <div>
            <h6 className="text-primary font-gotham text-[28px] leading-[44px] md:text-4xl font-bold ">
              By the Numbers{" "}
            </h6>
          </div>

          <div className="flex gap-4 flex-wrap">
            {businessData.map((data, index) => (
              <div
                key={index}
                className="flex items-center w-full md:w-[288.33px] justify-start space-x-4 md:space-x-2 py-5 md:py-10 px-8 rounded-lg border border-gray-700/80 bg-[#12151B66]/40  backdrop-blur-md"
              >
                <div className="md:space-x-3 space-x-2 flex-shrink-0">
                  <NumberTicker
                    value={data.value || 0}
                    direction="up"
                    className="text-[#F5F5F7] md:text-primary italic md:not-italic font-gotham text-5xl md:text-6xl font-semibold tracking-tighter dark:text-white whitespace-pre-wrap"
                  />
                  <span className="text-primary font-gotham italic md:not-italic text-6xl font-medium">
                    {data.plush || ""}
                  </span>
                </div>
                <div className="text-[#EBF1FE] font-gotham text-base font-normal md:opacity-80">
                  {data.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full flex flex-1 flex-col items-center justify-center gap-20">
          {/* our teams memeber section */}
          <section className="flex flex-col justify-center gap-8 items-center h-auto w-full sm:w-11/12 2xl:w-10/12">
            <h1 className="font-gotham font-bold text-[32px] leading-[52px] md:text-4xl text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
              Our Passionate Team{" "}
            </h1>
            <div className="flex w-full gap-4 items-center flex-row justify-start ps-4 md:ps-0 overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center md:overflow-hidden">
              {teamMembersDetails.map((member, index) => (
                <div
                  key={index}
                  className="bg-[#12151B66]/40 bg-opacity-30 backdrop-blur-sm md:backdrop-blur-md rounded-[7.18px] md:rounded-lg p-0 border-[0.9px] md:border border-[#85849E66]/40 shadow-xl outline-[#7474804D]/30 overflow-hidden flex flex-col justify-between min-w-[280px] max-w-[332px]"
                >
                  <div>
                    <Image
                      src={member.image}
                      className="object-cover w-full h-auto"
                      alt={`${member.name}'s photo`}
                    />
                  </div>
                  <div className="flex flex-col justify-between items-center py-5 text-center">
                    <div className="mb-4">
                      <h6 className="font-gotham text-primary text-2xl font-semibold">
                        {member.name}
                      </h6>
                      <p className="font-gotham text-[#8B8B8B] font-normal text-base opacity-90">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3571F033]/20 rounded-[4px] p-2 cursor-pointer hover:bg-[#3571F0] hover:scale-110 transition-transform duration-300 ease-in-out"
                      >
                        <span>
                          <Image
                            src={socialIcon?.[0]?.icon}
                            className="object-contain"
                            alt={socialIcon?.[0]?.alt || "LinkedIn Icon"}
                            height={16}
                            width={16}
                          />
                        </span>
                      </a>

                      <a
                        href={member.socialLinks.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3571F033]/20 rounded-[4px] p-2 cursor-pointer hover:bg-[#3571F0] hover:scale-110 transition-transform duration-300 ease-in-out"
                      >
                        <span>
                          <Image
                            src={socialIcon?.[1]?.icon}
                            className="object-contain"
                            alt={socialIcon?.[1]?.alt || "X Icon"}
                            height={16}
                            width={16}
                          />
                        </span>
                      </a>

                      <a
                        href={member.socialLinks.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3571F033]/20 rounded-[4px] p-2 cursor-pointer hover:bg-[#3571F0] hover:scale-110 transition-transform duration-300 ease-in-out"
                      >
                        <span>
                          <Image
                            src={socialIcon?.[2]?.icon}
                            className="object-contain"
                            alt={socialIcon?.[2]?.alt || "Behance Icon"}
                            height={16}
                            width={16}
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Story Section */}
          <section className="w-full sm:w-11/12 2xl:w-10/12 h-auto mx-auto hidden sm:block">
            {isClient && <Timeline data={timelineData} />}
          </section>

          {/* components for the mobile device */}
          <div className="block md:hidden mx-auto w-full px-4">
            {isClient && <MobileTimeline data={timelineData} />}
          </div>
        </div>
        {/* transform the world with your idea section */}
        <section className="w-full px-4 md:px-0 mx-auto md:py-10 flex flex-col items-center justify-center gap-10 sm:w-11/12 2xl:w-10/12">
          <h1 className="font-gotham text-center font-bold text-3xl md:text-4xl text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
            Transform The World With Your Idea{" "}
          </h1>
          <CaseStudyCarousel cardData={cardData} />
        </section>

        {/* transform the world with your ideas section */}
        <section className="w-full  flex-1 justify-center items-center flex-col gap-10 mx-auto py-10 md:py-0 hidden md:block">
          <h1 className="font-gotham text-center font-bold text-3xl md:text-4xl text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
            Transform The World With Your Idea{" "}
          </h1>
          <SpinningCarousel />
        </section>

        {/* Component for mobile devices */}
        <div className="pt-6 px-4 mx-auto md:hidden">
          <h1 className="font-gotham text-center  font-bold text-3xl text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
            Transform The World With Your Idea.{" "}
          </h1>
        </div>
        <div className="w-full mx-auto mt-6 flex flex-col items-center justify-start ps-4 overflow-x-auto scrollbar-hide md:hidden gap-7">
          <MobileServiceCard />
        </div>

        {/* what peopel say about section */}
        <section className="w-full flex flex-col flex-1 md:gap-24 px-4 mx-auto md:px-0 items-center justify-center md:py-7">
          <h1 className="font-gotham text-primary text-center text-3xl md:text-4xl font-bold hover:underline hover:text-slate-400 transition-all ease-in-out duration-300 md:pb-4">
            What people have to say about us{" "}
          </h1>
          <div className="hidden md:block">
            <WhatPeopleSayCard
              bgColor="bg-gray-800"
              textColor="text-primary"
              quoteIcon={whiteQuotsIcon}
            />
          </div>
        </section>

        {/* what people say card for the mobiles devices */}
        <div className="relative w-full flex flex-col items-center md:hidden px-4 pb-7">
          <div className="mx-auto w-full">
            <Slider {...settings}>
              {clientData.map((cardData) => (
                <div key={cardData.id} className="">
                  <div className="relative rounded-md">
                    <Image
                      src={cardData.image}
                      alt={cardData.name}
                      height={200}
                      width={400}
                      className="object-cover"
                    />
                    <Image
                      src={blueQuotes}
                      alt="blueIcon"
                      width={39.27}
                      height={34.03}
                      className="object-contain absolute -bottom-6 left-1"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-4 mt-7">
                    <div className="text-start space-y-1">
                      <h6 className="text-xl font-bold text-white">{cardData.name}</h6>
                      <p className="text-sm font-normal text-white">{cardData.role}</p>
                      <span className="text-2xl font-semibold text-white">{cardData.company}</span>
                    </div>
                    <div className="text-start space-y-3">
                      <h1 className="text-xl font-bold text-white w-3/4">{cardData.quote}</h1>
                      <p className="text-base font-normal text-white">{cardData.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
