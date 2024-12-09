"use client";
import { useState } from "react";
import Image from "next/image";
import samplePhone1 from "@/../../public/assets/images/phone.png";
import samplePhone2 from "@/../../public/assets/images/phone.png";
import samplePhone3 from "@/../../public/assets/images/sampleImages.jpg";
import { useRouter } from "next/navigation";

import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";

export default function FeatureCard() {
  const router = useRouter();
  const cards = [
    {
      title: "Kilndred",
      description: "Navigate pregnancy & parenthood",
      techStack: "React.js, React Native, Node.js, MYSQL, AWS",
      image: samplePhone1,
      services: ["Web App", "Mobile App"],
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      techStack: "Vue.js, Node.js, PostgreSQL",
      image: samplePhone2,
      services: ["Web App", "Mobile App", "QA"],
    },
    {
      title: "Project 3",
      description: "Description for project 3",
      techStack: "Angular, Firebase, AWS",
      image: samplePhone3,
      services: [
        "Web App Development",
        "Mobile App",
        "Cloud Solutions",
        "UI/UX Design",
      ],
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1,
    );
  };

  // Calculate the progress percentage
  const progressPercentage = ((currentCardIndex + 1) / cards.length) * 100;

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col px-4 md:px-0 md:flex-row items-center w-full h-full">
          <div className="w-full md:w-1/2 h-auto sm:ml-14 ml-0 2xl:ml-40 flex flex-1 flex-col justify-between items-start">
            <div className="bg-transparent text-primary py-8 w-full max-w-md">
              <h2 className="text-[28px] md:text-3xl font-bold font-gotham text-white">
                {cards[currentCardIndex].title}
              </h2>
              <p className="text-base font-bold text-[#DBDBE1] mt-1.5 font-gotham">
                {cards[currentCardIndex].description}
              </p>

              <div className="mt-4 flex flex-col gap-1.5 leading-tight">
                <p className="text-base text-[#DBDBE1] font-gotham font-normal p-0 m-0">
                  Technology
                </p>
                <p className="text-[20px] leading-[28px] md:text-2xl text-white font-bold font-gotham p-0 m-0">
                  {cards[currentCardIndex].techStack}
                </p>
              </div>

              <div className="flex mt-6 items-start justify-start flex-wrap gap-2">
                {cards[currentCardIndex].services.map((services, index) => (
                  <button
                    key={index}
                    className="bg-[#32315399]/60 text-[#DBDBE1] text-base px-4 py-1.5 rounded-[20px] font-gotham font-medium"
                  >
                    {services}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => router.push("/blogs")}
                className="w-full md:w-auto mt-6 bg-blue-600 text-white font-gotham px-6 py-2 md:py-3 rounded-lg shadow-lg hover:bg-blue-700 transition flex items-center gap-2 justify-center"
              >
                <span className="italic md:not-italic">View Case Study</span>
                <MoveRight />
              </button>
            </div>
            <div className="space-x-4 items-center justify-center hidden md:flex">
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-b from-[#1E1E1E]/100 to-[#0D0D0D]/100 text-white"
                onClick={prevCard}
              >
                <ArrowLeft />
              </button>

              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white"
                onClick={nextCard}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          {/* Right side: Image */}
          <div className="w-full md:w-1/2 md:h-[450px] bg-[#151A2D] rounded-l-[20px] pt-10 overflow-hidden flex items-end justify-end relative md:static">
            <Image
              src={cards[currentCardIndex].image}
              height={691}
              width={588}
              alt={`Image for ${cards[currentCardIndex].title}`}
              className="pl-2 pr-4 object-contain"
            />
            <div className="flex space-x-4 block md:hidden absolute inset-0 left-32 top-48">
              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-b from-[#1E1E1E]/100 to-[#0D0D0D]/100 text-white"
                onClick={prevCard}
              >
                <ArrowLeft />
              </button>

              <button
                className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white"
                onClick={nextCard}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-300 w-full h-1.5 mt-6">
          <div
            className="h-full rounded-full bg-[#3571F0] transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
