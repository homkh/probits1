import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatPeopleSaySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidths = (index: number) => {
    if (index === activeIndex) return 400;
    return 200;
  };

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current: number) => setActiveIndex(current),
    initialSlide: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: true,
          centerPadding: "4px",
        },
      },
    ],
  };

  const cardData = [
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
  ];

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            style={{ width: `${cardWidths(index)}px` }}
            className={`p-4 relative z-20 cursor-pointer transition-transform duration-500 ${
              index === activeIndex ? "scale-110" : "scale-90"
            }`}
          >
            {/* Card Content */}
            <div className="bg-gray-100 rounded-lg h-[380px] flex items-center justify-center relative z-10 overflow-clip">
              <h3 className="text-xl font-bold text-gray-800">{card.content}</h3>
            </div>

            {/* Overlay for Inactive Cards */}
            {index !== activeIndex && (
              <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg z-10 overflow-clip" />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatPeopleSaySlider;
