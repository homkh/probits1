"use client";

import { useState } from "react";
import Image from "next/image";
import UpArrow from "@/../../public/assets/icon/UpArrow.png";
import DownArrow from "@/../../public/assets/icon/DownArrow.png";

const faqs = [
  {
    question: "What mobile app development services do you offer?",
    answer:
      "We offer end-to-end mobile app development services, including native and cross-platform app development, UI/UX design, prototyping, testing, and deployment. Our expertise ensures your app meets modern standards and user expectations.",
  },
  {
    question: "Do you offer app maintenance and support services?",
    answer:
      "Yes, we provide comprehensive app maintenance and support services to ensure your application remains up-to-date, secure, and performs optimally. This includes bug fixes, updates, and feature enhancements.",
  },
  {
    question: "What makes Probits the best software company?",
    answer:
      "Probits stands out due to our customer-centric approach, innovative solutions, and commitment to quality. Our team of experienced developers and designers delivers custom solutions tailored to meet your business goals.",
  },
  {
    question: "What software development services do you offer?",
    answer:
      "We provide a wide range of software development services, including mobile and web app development, enterprise software solutions, custom software development, cloud integration, and API development.",
  },
  {
    question: "Do you assist with software integration and data migration?",
    answer:
      "Yes, we offer seamless software integration and data migration services. Our team ensures a smooth transition with minimal downtime, whether it's integrating third-party APIs or migrating legacy systems.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="2xl:max-w-5xl md:max-w-4xl mx-auto w-full space-y-3 md:space-y-4 ">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden border-[#85849E66]/40"
        >
          <button
            className={`w-full flex justify-between gap-6 items-center py-2 px-3 md:p-4 transition-colors duration-300 font-gotham ${
              activeIndex === index
                ? "bg-blue-500/30 text-[#3571F0] font-bold"
                : "bg-gray-900 text-white"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span
              className={`text-start text-sm md:text-lg font-semibold transition-colors duration-600 ${
                activeIndex === index ? "text-[#3571F0]" : "text-white"
              }`}
            >
              {faq.question}
            </span>
            <Image
              src={activeIndex === index ? UpArrow : DownArrow}
              alt={activeIndex === index ? "Up Arrow" : "Down Arrow"}
              className="w-5 h-5 object-contain"
            />
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-600 ease-in-out ${
              activeIndex === index ? "max-h-[200px]" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-gray-900 text-[#F5F5F7] md:text-[#F5F5F7]/70 font-gotham font-normal text-base">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
