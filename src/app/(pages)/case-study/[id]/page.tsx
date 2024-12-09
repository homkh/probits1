"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import caseStudyImage from "@/../../public/assets/caseStudy/caseStudyImage.png";
import clientImages from "@/../../public/assets/caseStudy/clientImages.png";
import blueQuotes from "@/../../public/assets/icon/quoteBlue.svg";
import kiindredLog from "@/../../public/assets/brandsIcon/kiindred.png";
import CaseStudyCarousel from "@/components/ui/CaseStudyCarousel";
import phoneIcon from "@/../../public/assets/icon/Phone.svg";
import mailIcon from "@/../../public/assets/icon/Mail.svg";
import locationIcon from "@/../../public/assets/icon/mapBlue.svg";
import { ArrowRight } from 'lucide-react';

// data for the testing on the card
import { cardData } from "../../about-us/data";

export default function CaseStudyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [caseStudy, setCaseStudy] = useState<any>(null);

  useEffect(() => {
    const caseStudyId = params.id;
    if (caseStudyId) {
      fetch(`/api/case-studies/${caseStudyId}`)
        .then((response) => response.json())
        .then((data) => setCaseStudy(data))
        .catch((error) => console.error("Error fetching case study:", error));
    }
  }, [params.id]);

  // console.log("here is the id:", params.id);

  return (
    <>
      <div className="relative space-y-[40px] md:space-y-[100px] bg-ellips-bg bg-center bg-cover md:bg-contain bg-repeat-y w-full">
        <div className="relative w-full flex flex-1 flex-col items-center justify-center gap-10 md:gap-[100px] pt-32">
            <section className="w-full flex-1 md:w-9/12 2xl:w-8/12 mx-auto">
              <h6 className="text-secondary font-gotham text-xl font-normal px-4 md:px-0">
                Case Study
              </h6>
              <div className="pt-6 space-y-4 bg-background-texture bg-center flex-1 bg-cover w-full md:bg-none md:bg-transparent">
                <h1 className="text-white text-4xl font-semibold md:font-bold w-full md:w-3/6 px-4 md:px-0">
                  Stories, insights, and advice that will transform how you
                  build for the web.
                </h1>
                <p className="md:text-start text-xl font-light md:font-normal text-primary md:opacity-70 px-4 md:px-0">
                  Kiindred is a go-to for comprehensive parenting resources,
                  catering to millennial parents with accessible and informative
                  content. Covering pregnancy to tween years, this website
                  offers expert insights and courses, empowering parents to
                  navigate parenthood confidently.
                </p>
                {/* case study images 1 */}
                <div className="rounded-xl w-full h-auto md:h-[480px] mx-auto 2xl:flex 2xl:justify-center 2xl:items-center">
                  <Image
                    src={caseStudyImage}
                    alt="caseStudy_image"
                    className="object-contain"
                  />
                </div>
              </div>
            </section>
          {/* full width section content */}
          <section className="px-4 md:px-0 mx-auto">
            <div className="w-full px-[10px] py-[24px] mx-auto md:py-[40px] md:px-[40px] lg:px-[100px] bg-gradient-to-r from-[#3571F01A] via-[#3571F005] to-[#3571F00F] backdrop-blur-sm border rounded-xl border-[#3571F052]/30 outline-none flex flex-1 flex-col md:flex-row items-center justify-center md:gap-6">
              {[
                {
                  icon: locationIcon,
                  title: "CLIENT",
                  description: "Kiindred",
                },
                {
                  icon: mailIcon,
                  title: "INDUSTRY",
                  description: "Education",
                },
                {
                  icon: phoneIcon,
                  title: "PROJECT TYPE",
                  description: "Development and Quality Assurance",
                },
                {
                  icon: phoneIcon,
                  title: "RESULTS",
                  description: "+25k Downloads",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 w-full md:w-[calc(50%-1rem)] lg:w-[286px] p-4"
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    height={28}
                    width={28}
                    className="object-contain"
                  />
                  <div className="space-y-3">
                    <h6 className="font-semibold text-primary text-xl">
                      {item.title}
                    </h6>
                    <p className="font-normal text-primary text-lg opacity-70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* this is an card section */}
          <div className="w-full md:w-9/12 2xl:w-8/12 mt-7 md:mt-0 mx-auto md:bg-[#12151B99]/60  px-4 md:px-[50px] backdrop-blur md:border md:rounded-xl md:border-[#85849E]/40 outline-none flex flex-col md:flex-row items-center md:items-start justify-center md:shadow-xl">
            <div className="w-full md:w-1/3 relative md:right-20 md:bottom-11">
              <Image
                src={clientImages}
                className="object-cover"
                width={490}
                height={351}
                alt="client images"
              />
            </div>
            <div className="w-full -mt-5 md:mt-0 z-10 md:w-2/3 flex flex-col items-start justify-start gap-3">
              <div className="">
                <Image
                  src={blueQuotes}
                  alt="Quotes Icon"
                  height={50}
                  width={60}
                  className="object-cover"
                />
              </div>
              <p className="text-base font-light md:font-normal  text-white md:opacity-70">
                ”Thrilled with the Kiindred app! Probits turned my vision into a
                reality. Their team's expertise and collaborative approach
                ensured a smooth development process that exceeded our
                expectations. The agency helped us unlock opportunities by
                building user centric design that empower scalability. Probits
                proved to be a valuable partner. We highly recommend any app
                development project.”
              </p>
              <div className="flex flex-col md:flex-row w-full items-start gap-3 md:items-center justify-between pt-1">
                <div className="flex flex-col items-start justify-center gap-1 ">
                  <p className="font-bold  text-[20px] m-0 p-0 leading-[24px] text-white">
                    John Doe
                  </p>
                  <p className="text-sm font-normal m-0 p-0 leading-[18px] text-white">
                    CEO, Dummy Company
                  </p>
                </div>
                <div className="text-xl font-bold m-0 p-0 leading-none text-white">
                  Dummy Corporation
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative px-4 md:px-0 space-y-10 md:space-y-[100px]">
          {/* about the project section */}
          <section className="w-full md:w-9/12 2xl:w-8/12 mx-auto space-y-10">
            <h1 className="text-center font-bold text-white text-4xl md:text-5xl">
              About the Project
            </h1>
            <div className="text-base font-light md:font-normal text-white md:opacity-70">
              Kiindred's decision to unite with us was motivated by a clear
              vision for enhancement. Our journey commenced with an in-depth
              exploration of the codebase, delving into system analysis to
              unveil the challenges millennial parents face when seeking
              reliable parenting guidance.
              <br />
              Leveraging our proficiency in comprehending user demographics and
              behavior, we devised customized solutions to cater to
              Kiindred's specific requirements. Despite encountering an
              initial setback when our outreach via Facebook was declined, a
              year later, Kiindred sought our expertise for a website overhaul.
              <br />
              This partnership ensures that Kiindred's platform offers a
              seamless and empowering experience for parents navigating the
              complexities of parenthood.
            </div>
          </section>
          <section className="w-full md:w-9/12 2xl:w-8/12 mx-auto">
            <div className="bg-background-circle bg-bottom bg-no-repeat bg-contain w-full md:mx-auto py-8 md:py-12 h-auto  bg-[#A2BEF8]/10 border-[1px] rounded-lg border-[#85849E66]/40 p-4 z-0 flex flex-1 flex-col items-center justify-center gap-8 md:gap-10">
              <h1 className="font-bold text-primary text-4xl md:text-5xl">
                Technology Used{" "}
              </h1>
              <div className="flex gap-6 items-center justify-center flex-wrap w-full">
                <div className="w-full space-y-3 md:w-[256px] h-[116px] p-4 border rounded-lg border-[#85849E66] bg-gradient-to-r from-[#12151B]/40 to-[#FFFFFF]/5">
                  <p className="font-normal text-[#EBF1FE] text-base">Backed</p>
                  <h6 className="italic font-medium text-xl text-tertiary">
                    Molecular Framework (Node.js)
                  </h6>
                </div>
                <div className="w-full  space-y-3 md:w-[256px] h-[116px]  p-4 border rounded-lg border-[#85849E66] bg-gradient-to-r from-[#12151B]/40 to-[#FFFFFF]/5">
                  <p className="font-normal text-[#EBF1FE] text-base">
                    Mobile App
                  </p>
                  <h6 className="italic font-medium text-xl text-tertiary">
                    React Native
                  </h6>
                </div>
                <div className="w-full space-y-3 md:w-[256px] h-[116px]  p-4 border rounded-lg border-[#85849E66] bg-gradient-to-r from-[#12151B]/40 to-[#FFFFFF]/5">
                  <p className="font-normal text-[#EBF1FE] text-base">Server</p>
                  <h6 className="italic font-medium text-xl text-tertiary">
                    AWS
                  </h6>
                </div>
              </div>
            </div>
          </section>

          {/* our Apporach */}
          <section className="w-full md:w-9/12 2xl:w-8/12 mx-auto">
            <div className="mx-auto space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold text-center">
                Our Approach{" "}
              </h2>
              <div className="flex flex-1 flex-col md:flex-row items-center justify-between gap-6 flex-shrink-0">
                {/* Left Section: Text Content */}
                <div className="w-full md:w-1/2">
                  <p className="mb-4 text-[17px] leading-[28px] font-light md:font-normal text-primary md:opacity-70">
                    Our approach to revamping Kiindred's platform involved
                    thorough data analysis to understand the needs of millennial
                    parents.
                  </p>
                  <p className="mb-4 text-[17px] leading-[28px] font-light md:font-normal text-primary md:opacity-70">
                    We then focused on enhancing functionality by applying
                    user-centric design principles and gathering feedback
                    iteratively.
                  </p>
                  <p className="text-[17px] leading-[28px] font-light md:font-normal text-primary md:opacity-70">
                    Through close collaboration with Kiindred stakeholders, we
                    ensured alignment with their vision and goals, resulting in
                    a significantly improved user experience.
                  </p>
                </div>

                {/* Right Section: Image */}
                <div className="w-full md:w-1/2 flex flex-center md:justify-end">
                  <Image
                    src={clientImages}
                    alt="caseStudy2"
                    className="rounded-lg shadow-lg max-w-full cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* The challages section */}
          <section className="w-full md:w-9/12 2xl:w-8/12 mx-auto space-y-16">
            <div className="">
              <div className="mx-auto space-y-8 md:space-y-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
                  The Challenges{" "}
                </h2>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:gap-6 bg-background-texture bg-contain bg-no-repeat bg-center relative">
                  {/* Left Section: Image */}
                  <div className="w-full lg:w-1/2 flex justify-start">
                    <Image
                      src={clientImages}
                      alt="caseStudy2"
                      className="rounded-lg shadow-lg max-w-full cursor-pointer"
                    />
                  </div>
                  {/* Right Section: Text Content */}
                  <div className="w-full lg:w-1/2">
                    <p className="text-base leading-[28px] font-light md:font-normal text-primary md:opacity-70">
                      Kiindred presented us with the challenge of understanding
                      the diverse needs of millennial parents and integrating
                      new functionalities seamlessly into their existing
                      platform. This required careful planning, close
                      collaboration, and iterative improvements based on user
                      feedback. Despite these hurdles, Probits successfully
                      delivered tailored solutions to enhance the overall user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* the key feature section */}
            <div className="">
              <div className="mx-auto space-y-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
                  KEY FEATURES{" "}
                </h2>
                <div className="w-full flex flex-1 flex-col items-center justify-center gap-5">
                  {/* card1 */}
                  {[
                    {
                      title: "Data Analysis and User Insights",
                      description:
                        "This analysis indeed provides valuable insights into user behavior patterns, preferences, and areas for improvement. By leveraging this data, Kiindred optimized its features and enhanced the overall user experience. It's a smart approach to making data-driven decisions for app development and refinement.",
                    },
                    {
                      title: "Machine Learning and Personalization Development",
                      description:
                        "Probits have utilized machine learning algorithms to personalize the Kiindred app experience for individual users. This entails suggesting tailored content, connections, or activities according to users' interests and previous interactions. Such an approach can significantly enhance user engagement and satisfaction by delivering relevant and timely recommendations.",
                    },
                    {
                      title: "Natural Language Processing (NLP)",
                      description:
                        "Probits used NLP to improve communication within the Kiindred app. This involves features like sentiment analysis to understand user emotions, or chatbots powered by NLP to provide customer support.",
                    },
                    {
                      title: "Fraud Detection and Security",
                      description:
                        "Probits have implemented fraud detection systems to protect users and ensure the security of the Kiindred app.",
                    },
                  ].map((data, index) => (
                    <div
                      className="w-full h-auto px-6 py-8 border rounded-lg border-[#85849E]/40 bg-[#12151B66]/40 space-y-3"
                      key={index}
                    >
                      <h6 className="font-bold text-primary text-xl leading-[26px]">
                        {data.title}
                      </h6>
                      <p className="font-light md:font-normal text-primary text-base md:opacity-70">
                        {data.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* the outcome section */}

          <section className="w-full md:w-9/12 2xl:w-8/12 mx-auto space-y-[30px]">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
              THE OUTCOME{" "}
            </h1>
            <div>
              <p className="font-light md:font-normal text-primary text-base md:opacity-70 mb-2">
                The outcome of Probit's collaboration with Kiindred has
                been transformative for both parties. Probits successfully
                revamped Kindred's platform, enhancing its functionality
                and user experience to better serve millennial parents.
              </p>
              <p className="font-light md:font-normal text-primary text-base md:opacity-70 mb-2">
                This collaborative effort solidified into a long-term
                relationship between the two companies, built on mutual trust
                and shared goals. As a testament to this partnership, the
                founder of Kiindred now serves as an advisor to Probits,
                offering invaluable insights and guidance.
              </p>
              <p className="font-light md:font-normal text-primary text-base md:opacity-70 mb-2">
                Furthermore, the collaboration has extended beyond the initial
                project, with both companies actively working together on new
                endeavors. This outcome not only demonstrates the success of
                Probit's work with Kindred but also highlights the strength
                of their ongoing partnership and shared vision for the future.
              </p>
            </div>
          </section>
          {/* the client card section */}
          <section className="w-full md:w-9/12 2xl:w-8/12 mx-auto py-6 flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-center">
            {/* Card 1 */}
            <div className="w-full md:w-1/2 min-h-[303.17px] max-h-[400px] border rounded-xl border-[#85849E66]/40 relative overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full bg-[#8746EB80] blur-3xl z-10"
                style={{ opacity: 0.5 }}
              ></div>
              <div className="relative z-20 p-6 flex flex-col items-center justify-center">
                <Image
                  src={kiindredLog}
                  height={88}
                  width={200}
                  alt="Kiindred Logo"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/2 min-h-[303.17px] max-h-[400px] bg-gradient-to-r from-[#00000066] to-[#FFFFFF0D] border rounded-xl border-[#85849E66]/40 relative overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full bg-[#007AEA80] blur-3xl z-10"
                style={{ opacity: 0.5 }}
              ></div>
              <div className="relative z-20 p-6 flex flex-col gap-4 items-center justify-center">
                <h6 className="font-bold text-2xl leading-[26px] text-primary">
                  Visit the Website{" "}
                </h6>
                <button
                  type="button"
                  className="rounded-lg py-3 px-6 bg-gradient-to-r from-[#3571F0] to-[#2650AA] hover:from-[#2650AA] hover:to-[#3571F0] transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  onClick={() => console.log("button was clicked...")}
                >
                  Contact Us{" "}
                  <ArrowRight />
                </button>
              </div>
            </div>
          </section>

          {/* more project section */}
          <section className="w-full md:w-11/12 2xl:w-8/12 mx-auto pb-36 space-y-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
              MORE PROJECTS{" "}
            </h1>
            {/* case study card */}
            <div>
              <CaseStudyCarousel cardData={cardData} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
