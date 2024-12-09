"use client";
import React, { useState } from "react";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import bgEllips from "@/../../public/assets/images/bgEllips.svg";
import { MoveRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

import TransParentBtn from "@/components/ui/button/TransParentBtn";
import { OurPartnerCard } from "@/components/ui/OurPartnerCard";
import WhatPeopleSayCard from "@/components/ui/card/WhatPeopleSayCard";
import SubmitModals from "@/components/ui/modals/submitModals";

import { whatYouWantBuild, btnData, contactInfo } from "./data";
import WhatPeopleSayMobileCard from "@/components/ui/card/WhatPeopleSayMobileCard";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectDescription: string;
  lookingTo: string;
  serviceNeeded: string;
}

const ContactUs: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSending, setIsSending] = useState(false);
  const [lookingTo, setLookingTo] = useState<string[]>([]);
  const [serviceNeeded, setServiceNeeded] = useState<string[]>([]);

  const { register, handleSubmit, control, setValue, reset, watch, getValues } =
    useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Validate required fields
    if (
      !data.fullName ||
      !data.email ||
      !data.projectDescription ||
      !lookingTo.length ||
      !serviceNeeded.length ||
      !data.phoneNumber
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!isValidPhoneNumber(data.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        to_name: data.fullName,
        from_name: data.email,
        phone_number: data.phoneNumber,
        message: data.projectDescription,
        looking_to: lookingTo,
        service_needed: serviceNeeded,
      };

      const response = await emailjs.send(
        "service_lge297m",
        "template_aueyjlh",
        templateParams,
        "85qWudw5A631S2eMi",
      );

      if (response.status === 200) {
        setIsOpen(true);
        setLookingTo([]);
        setServiceNeeded([]);
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const closeModals = () => {
    setIsOpen(false);
  };

  const handleButtonClick = (
    type: "lookingTo" | "serviceNeeded",
    value: string,
    removeValue: boolean,
  ) => {
    type === "lookingTo"
      ? setLookingTo((prev) => {
          return !removeValue
            ? [...prev, value]
            : prev.filter((item) => item !== value);
        })
      : setServiceNeeded((prev) => {
          return !removeValue
            ? [...prev, value]
            : prev.filter((item) => item !== value);
        });
  };

  // framer motion animation setting
  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-ellips-bg bg-center bg-cover bg-no-repeat w-full h-auto flex flex-col items-center gap-[40px] lg:justify-between pt-24 xl:pt-40 pb-10 mx-auto text-slate-50 relative">
      <div className="w-full flex flex-1 flex-col items-center justify-center gap-20 mx-auto">
        <section className="relative z-10 w-full md:w-11/12 2xl:w-10/12 flex md:flex-row flex-col flex-1 md:items-start items-center justify-center gap-10">
          <section className="w-full md:w-1/2 px-4 md:px-0">
            <motion.div
              className="text-start opacity-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h6 className="text-[#3571F0] font-gotham font-normal text-base md:text-xl pb-4 transition-all duration-300 ease-in-out hover:underline hover:text-blue-500 hover:font-medium">
                Contact Us{" "}
              </h6>
              <h1 className="font-gotham font-bold text-4xl md:leading-[69.6px] md:text-[58px] pb-4 opacity-60 md:opacity-100">
                Tell us about what you want to build.{" "}
              </h1>
            </motion.div>

            <ul className="grid grid-cols-1 gap-y-2">
              {whatYouWantBuild.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  variants={listItemVariants}
                  className="flex items-center gap-2 md:gap-3"
                >
                  <li className="flex items-center justify-center gap-2">
                    <ArrowRight size={16} color="#3571F0" />
                    <span className="font-gotham text-lg text-[#F5F5F7] opacity-60 md:opacity-100">
                      {item.text}
                    </span>
                  </li>
                </motion.div>
              ))}
            </ul>
          </section>

          <section className="w-full md:w-1/2 px-4 h-auto flex flex-col gap-3 items-start md:justify-start">
            <h1 className="font-gotham font-bold text-[#F5F5F7] text-4xl py-5 sm:py-0">
              Let's get started!{" "}
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-4 items-center"
            >
              <div className="flex flex-col gap-2">
                <label
                  className="font-gotham font-medium text-sm italic md:not-italic text-[#DBDBE1]"
                  htmlFor="lookingTo"
                >
                  I am looking to{" "}
                </label>
                <div className="flex gap-2 flex-wrap">
                  {btnData.lookingFor.map((text) => (
                    <TransParentBtn
                      key={text}
                      text={text}
                      activeValue={lookingTo}
                      type="lookingTo"
                      handleButtonClick={handleButtonClick}
                    />
                  ))}
                </div>
                {/* <p>{lookingTo}</p> */}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="font-gotham font-medium text-sm italic md:not-italic text-[#DBDBE1]"
                  htmlFor="serviceNeeded"
                >
                  Service I need{" "}
                </label>
                <div className="flex gap-2 flex-wrap">
                  {btnData.servicesNeeded.map((text) => (
                    <TransParentBtn
                      handleButtonClick={handleButtonClick}
                      key={text}
                      text={text}
                      type="serviceNeeded"
                      activeValue={serviceNeeded}
                    />
                  ))}
                </div>
                {/* <p>{serviceNeeded}</p> */}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="fullName"
                  className="font-medium font-gotham text-sm text-[#DBDBE1] italic sm:not-italic"
                >
                  Full Name
                </label>
                <input
                  {...register("fullName")}
                  placeholder="Full Name"
                  className="py-2 pl-3.5 border rounded-lg outline-none bg-[#0C131BB2]/70 text-primary border-[#85849E66]/40 focus:border-indigo-500 placeholder-white font-normal text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phoneNumber"
                  className="font-medium font-gotham text-sm text-[#DBDBE1] italic sm:not-italic"
                >
                  Mobile Number
                </label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry="NP"
                      className="phone-input"
                      style={{
                        borderRadius: 8,
                        padding: 10,
                        color: "black",
                        backgroundColor: "#090E18",
                        border: "1px solid rgba(97, 97, 102, 0.6)",
                      }}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="font-medium font-gotham text-sm text-[#DBDBE1] italic sm:not-italic"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Business Email"
                  className="py-2 pl-3.5 rounded-lg outline-none border bg-[#0C131BB2]/70 text-primary border-[#85849E66]/40 focus:border-indigo-500 placeholder-white font-normal text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="projectDescription"
                  className="font-medium font-gotham text-sm text-[#DBDBE1] italic sm:not-italic"
                >
                  Project Description
                </label>
                <textarea
                  {...register("projectDescription")}
                  placeholder="What's your project about?"
                  className="py-2 pl-3.5 h-32 rounded-lg outline-none border bg-[#0C131BB2]/70 text-primary border-[#85849E66]/40 focus:border-indigo-500 resize-none placeholder-white font-normal text-sm"
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className={`
                    w-full md:w-[120px] bg-gradient-to-r from-[#3571F0] to-[#2650AA]  text-white font-medium py-2 px-4 
                    flex 
                    gap-2 
                    rounded-lg 
                    transition 
                    duration-300 
                    ease-in-out 
                    hover:bg-indigo-700 
                    italic 
                    sm:not-italic 
                    items-center
                    justify-center
                    ${isSending ? "opacity-50 cursor-not-allowed" : ""}
                  `}
                  disabled={isSending}
                >
                  {isSending ? "Submitting..." : "Submit"}
                  {isSending ? "" : <MoveRight />}
                </button>
              </div>
            </form>
            {isOpen && (
              <SubmitModals
                onClose={closeModals}
                message="Your form has been submitted successfully!"
              />
            )}
          </section>
        </section>
      </div>
      {/* Contact Information */}
      <section className="w-full px-4 md:px-0 sm:w-11/12 2xl:w-10/12 mx-auto">
        <div className="max-w-[1240px] backdrop-blur-lg bg-gradient-to-b from-[#3571F01A] from-10% via-[#3571F005] via-2% to-[#3571F029] to-20% rounded-lg shadow-md border border-white/20 grid md:gap-10 gap-6 py-10 px-10 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex gap-3 items-start justify-start">
              <Image
                src={info.icon}
                alt={`${info.heading} Icon`}
                className="w-6 h-6 object-contain"
              />
              <div className="overflow-hidden">
                <h3 className="text-2xl font-bold text-primary pb-2">
                  {info.heading}
                </h3>
                <p className="text-base font-normal text-primary">
                  {info.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-1 items-center flex-col gap-8 relative">
        <div className="w-full px-4 bg-background-texture bg-center bg-cover bg-repeat-y py-6">
          <h2 className="font-gotham font-bold text-white text-3xl lg:text-4xl hover:underline hover:text-slate-400 transition-all ease-in-out duration-300 text-center md:mb-28">
            What people have to say about us{" "}
          </h2>
          {/* Card for larger screens */}
          <div className="hidden md:inline">
            <WhatPeopleSayCard
              bgColor="bg-gray-100"
              textColor="text-gray-700"
            />
          </div>
          {/* Card for mobile devices */}
          <div className="block pt-6 md:hidden">
            <WhatPeopleSayMobileCard />
          </div>
        </div>
      </section>

      {/* our partner cards */}
      <section className="w-full flex flex-col items-center gap-4 xl:px-16 ">
        <h2 className="font-gotham font-bold text-white text-3xl lg:text-4xl hover:underline hover:text-indigo-500 transition-all duration-200 ease-in-out">
          Our Partners{" "}
        </h2>
        <OurPartnerCard />
      </section>
    </div>
  );
};

export default ContactUs;
