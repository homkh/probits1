import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import quotesIcon from "@/../../public/assets/icon/quote.svg";
import ceo1 from "@/../../public/assets/images/ceo1.png";
import ceo2 from "@/../../public/assets/images/ceo2.png";
import ceo3 from "@/../../public/assets/images/ceo3.png";

const cardData = [
  {
    quote:
      "Probits is more than just a software development agency—they are a partner in our growth. Their collaborative approach and dedication to understanding our needs led to a product that perfectly aligns with our business goals. We couldn't have asked for a better team to work with.",
    author: "Brandon Carder",
    role: "CEO, ABC Company",
    images: ceo3,
  },
  {
    quote:
      "From concept to execution, Probits delivered exceptional results. Their team's ability to combine technical expertise with creative solutions helped us launch a product that truly stands out. The continuous support and transparency throughout the project were invaluable.",
    author: "Craig Press",
    role: "CEO, XYZ Company",
    images: ceo2,
  },
  {
    quote:
      "We were impressed by Probits' commitment to our vision and their ability to adapt and refine our ideas. Their developers and digital marketing specialists worked seamlessly together, providing us with a comprehensive solution that has significantly boosted our online presence and performance.",
    author: "Livia Gouse",
    role: "CTO, 123 Company",
    images: ceo1,
  },
];

const ClientFeedbackCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: "0px", 
    arrows: true,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true, 
        },
      },
    ],
  };

  return (
    <div className="relative w-full flex justify-start items-start overflow-visible">
      <div className="w-full flex-1 mx-auto">
        <Slider {...settings}>
          {cardData.map((testimonial, index) => (
            <div
              key={index}
              className={`p-4 transition-transform duration-300 ease-in-out ${
                activeIndex === index ? "scale-100" : "scale-100"
              }`}
            >
              <div className="bg-card-bg bg-center bg-cover bg-no-repeat flex flex-col justify-between items-center w-full max-w-[400px] mx-auto rounded-lg border-gradient-border border-solid border-[1px] shadow-lg p-6 max-h-[450px]">
                <Image
                  src={quotesIcon}
                  alt="Quotes Icon"
                  height={48}
                  width={48}
                  className="object-contain mb-4"
                />
                <p className="text-white text-lg font-normal mb-4 text-center overflow-hidden">
                  {testimonial.quote}
                </p>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={testimonial.images}
                    alt={testimonial.author}
                    height={64}
                    width={64}
                    className="object-contain rounded-full mb-2"
                  />
                  <p className="font-bold text-white text-[20px]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#8B8B8B]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientFeedbackCarousel;
