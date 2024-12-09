import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blueQuotes from "@/../../public/assets/icon/quoteBlue.svg";

const clientData = [
  {
    id: 1,
    name: "Craig Press",
    role: "CEO, ABC Company",
    company: "Chkpt.",
    image: "/assets/images/clientSayAbout.png",
    quote: "We define and deliver the best tech solution",
    content:
      "Working with Probits has brought my business to absolute new heights and they are now part of the family.",
  },
  {
    id: 2,
    name: "Jessica Allen",
    role: "CTO, XYZ Innovations",
    company: "InnovateTech.",
    image: "/assets/images/clientSayAbout.png",
    quote: "Innovation meets execution with their team",
    content:
      "Partnering with Probits has transformed our digital landscape. Their expertise in cutting-edge technologies has enabled us to stay ahead of the competition, and their team is fantastic to work with.",
  },
  {
    id: 3,
    name: "Michael Green",
    role: "Director of Operations, Global Solutions",
    company: "Global Solutions.",
    image: "/assets/images/clientSayAbout.png",
    quote: "Probits is the key to our operational success",
    content:
      "Probits has been a strategic partner in streamlining our operations. Their attention to detail and commitment to delivering high-quality solutions have made them an invaluable asset to our company.",
  },
  {
    id: 4,
    name: "Lisa Turner",
    role: "Founder, Creative Minds",
    company: "Creative Minds Inc.",
    image: "/assets/images/clientSayAbout.png",
    quote: "Creativity and technical excellence go hand in hand",
    content:
      "The Probits team has elevated our creative projects to new heights. Their technical skills combined with their creative insights have helped us launch innovative campaigns that resonate with our audience.",
  },
]

const WhatPeopleSayMobileCard = () => {
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
    <div className="relative w-full flex flex-col items-center">
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
  );
};

export default WhatPeopleSayMobileCard;
