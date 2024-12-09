"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";


import LandingPage from "@/components/LandingPage";
import MobileLandingComponent from "@/components/MobileLandingComponent";
import { ServicesCard } from "@/components/ui/card/ServicesCard";
import WhatPeopleSaySlider from "@/components/ui/slider/WhatPeopleSaySlider";
import mvertorImage from "@/../../public/assets/images/mVectorImage.png";
import circleBg from "@/../../public/assets/images/circleBg.png";
import probitsImages from "@/../../public/assets/images/probits.png";
import FeatureCard from "@/components/ui/card/FeatureCard";
import FAQAccordion from "@/components/FAQAccordion";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import TestimonialSlider from "@/components/ui/ClientFeedbackCarousel";
import TextReveal from "@/components/magicui/text-reveal";
import MobileWhatpeopleSayCard from "@/components/mobileUI/MobileWhatpeopleSayCard";

import { brandImages, servicesData, PackageCardsData, scrollText } from "./data";

const HomePage: React.FC = () => {
  const [isMobileScreen, setIsMobileScreen] = useState<number>(0)
  const router = useRouter();
  const handelContactUsBtn = () => {
    router.push("/contact-us");
  };

  // calculate the screen width
  useEffect(() => {
    const updateScreenWidth = () => {
      const screenWidth = window.innerWidth;
      setIsMobileScreen(screenWidth);
    };
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className="w-full bg-ellips-bg bg-center bg-no-repeat md:bg-contain md:bg-repeat-y h-auto flex flex-1 flex-col gap-7 2xl:gap-12 z-0 mx-auto">
      {/* landing pages */}
      <div>
        {
          isMobileScreen <= 768 ? <MobileLandingComponent PackageCardsData={PackageCardsData} /> : <LandingPage data={PackageCardsData} />
        }
      </div>
      {/* Text Reveal Section */}
      <section className="flex items-center justify-center h-auto px-4 py-4 md:py-24 max-w-[680px] mx-auto ">
        <div className="flex items-center justify-center bg-transparent italic md:not-italic">
          <TextReveal text={scrollText} />
        </div>
      </section>

      {/* Brand Images Section */}
      <section className="w-full py-10 flex flex-col items-center justify-center gap-8 2xl:gap-10 mx-auto 2xl:h-auto md:w-11/12 2xl:w-10/12">
        <h2 className="font-medium text-[#DBDBE1] text-base italic md:not-italic">
          TRUSTED BY THOUSAND TOP BRANDS{" "}
        </h2>
        <div className="flex md:flex-nowrap items-center justify-between mx-auto w-full overflow-x-auto pr-4 md:pr-0 md:overflow-x-clip scrollbar-hide">
          {brandImages.map((item, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={item.icon}
                alt={item.alt}
                layout="responsive"
                width={150}
                height={150}
                className="object-contain cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-125 hover:shadow-xl"
              />
            </div>
          ))}
        </div>
      </section>
      {/* What People Say Section */}
      <section className="hidden md:flex flex-col items-center justify-center gap-8 py-14 mx-auto sm:w-11/12 2xl:w-10/12">
        <h1 className="font-bold text-4xl text-primary hover:underline hover:text-slate-400 transition duration-300 text-center">
          What People Have to Say About Us{" "}
        </h1>
        <div className="w-full md:max-w-[96%] 2xl:max-w-[90%] pt-12 mx-auto">
          <WhatPeopleSaySlider />
        </div>
      </section>

      {/* Components for mobile devices */}
      <section className="block md:hidden w-full h-auto mx-auto pb-10 space-y-4">
        <h1 className="font-bold text-3xl text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300 text-center px-4 mx-auto">
          What people have to say about us{" "}
        </h1>
        <div className="w-full mx-auto max-w-[90%]">
          <MobileWhatpeopleSayCard />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full mx-auto px-4 md:px-0 md:w-11/12 2xl:w-10/12 flex flex-col gap-4 md:gap-12 items-center justify-center">
        <div className="md:space-y-5">
          <h1 className="font-gotham text-primary font-semibold text-[32px] text-center leading-[41.6px] md:text-[3rem] md:font-bold">
            Navigate the Digital Frontier with{" "}
          </h1>
          <h1 className="font-gotham text-primary font-semibold text-[32px] text-center leading-[41.6px] md:text-[3rem] md:font-bold">
            Our Engineering Excellence{" "}
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:gap-10 place-items-center">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              header={service.header}
              description={service.description}
            />
          ))}
          <div className="relative flex h-[198px] md:h-[280px] w-full md:max-w-[297px] flex-col items-center justify-center overflow-hidden rounded-lg border border-[#4F4E6C] bg-[#3571F0] shadow-xl animate-slide-in-right cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-custom-hover">
            <Image
              src={mvertorImage}
              alt="Vector Images"
              className="object-contain"
            />
            <button
              type="button"
              className="absolute cursor-pointer px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium italic md:not-italic md:font-semibold font-gotham border-2 border-primary outline-none bg-white text-[#0E0D35] transition-colors duration-300 ease-in-out hover:bg-primary hover:text-black hover:scale-105 transform"
              onClick={() => router.push("/contact-us")}
            >
              Contact Us{" "}
            </button>
          </div>
        </div>
      </section>

      <div className="z-0 overflow-x-hidden relative">
        {/* Featured Projects Section */}
        <section className="relative w-full h-auto mx-auto flex flex-1 flex-col items-center gap-5 overflow-hidden">
          <div className="absolute inset-0 z-0 top-0 left-0">
            <Image
              src={circleBg}
              alt="circle background"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
          <div className="relative flex flex-col items-center justify-center py-6 md:py-16 2xl:py-20 z-10 bg-card-bg1 bg-right bg-no-repeat bg-contain w-full gap-0 md:gap-10">
            <h1 className="font-bold text-3xl text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300 text-center">
              Our Featured Projects{" "}
            </h1>
            <div className="flex flex-1 items-center w-full justify-between">
              <FeatureCard />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-20 w-full px-4 mx-auto md:mx-0">
          <div className="flex flex-col items-center pb-10">
            <h1 className="font-gotham font-bold text-3xl md:text-[48px] text-white text-center hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
              Frequently Asked Questions{" "}
            </h1>
          </div>
          <FAQAccordion />
        </section>
      </div>

      {/* Video Section */}
      <section className="relative flex items-center justify-center my-4 md:h-auto md:my-20 rounded-lg bg-blend-lighten top-0 left-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 to-[#3B30B499]/60 opacity-80 z-10"></div>
        <div className="z-20">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="/assets/video/teamWorks.mp4"
            thumbnailSrc={probitsImages}
            thumbnailAlt="Light mode Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="/assets/video/teamWorks.mp4"
            thumbnailSrc={probitsImages}
            thumbnailAlt="Dark mode Video"
          />
        </div>
      </section>

      {/* Feedback Section */}
      <section className="w-full md:w-11/12 2xl:w-10/12 h-auto flex justify-center flex-col pb-12 md:pb-16 mx-auto">
        <section className="flex flex-1 flex-col gap-10 items-center">
          <h1 className="font-gotham text-center text-3xl md:text-[48px] font-bold text-primary hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
            Let's Hear What Our Clients Say{" "}
          </h1>
          <TestimonialSlider />
        </section>
      </section>
      {/* start works with us section */}
      <section className="w-full pb-16 mx-auto px-4 ">
        <div className="bg-background-circle bg-bottom object-contain bg-no-repeat w-full md:w-2/4 md:mx-auto">
          <div className="flex flex-col items-center justify-center gap-5 md:py-12 bg-[#A2BEF8]/10 border-[1px] rounded-lg border-[#85849E66]/40 p-4">
            <div className="flex flex-col items-center justify-center gap-5 md:w-3/4 mx-auto">
              <h1 className="text-[#DBDBE1] text-3xl md:text-[40px] font-bold text-center">
                Start work with us today{" "}
              </h1>
              <p className="text-[#F1F0F3] text-sm md:text-base font-normal md:font-medium text-center">
                Our experts provide tailored web solutions and support at a
                fixed monthly rate. Enjoy unlimited requests and ongoing
                innovation for your business.{" "}
              </p>
            </div>
            <button
              type="button"
              className="w-full md:w-auto bg-gradient-to-r from-[#3571F0] form-100% to-[#2650AA] to-100% text-white font-gotham md:px-6 py-2 md:py-3  rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center gap-2 justify-center"
              onClick={handelContactUsBtn}
            >
              <span className="italic md:not-italic">Let's talk</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
