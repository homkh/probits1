"use client";

import Image from "next/image";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";

// React Slick settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

const CaseStudyCarousel = ({ cardData }: { cardData: any }) => {
  const router = useRouter();

  // function for button clicked
  const handleClick = (id: number) => {
    router.push(`/case-study/${id}`);
  };

  return (
    <div className="relative w-full md:max-w-[95%] mx-auto">
      <Slider {...settings}>
        {cardData.map((card: any) => (
          <div key={card.id} className="px-4">
            <div
              className={`rounded-[10.06px] md:rounded-xl border-[0.84px] h-auto md:border border-[#85849E66]/40 bg-[#12151BCC]/80 flex flex-col justify-between items-center transition-all duration-300 overflow-clip`}
            >
              <Image
                src={card.image}
                alt={`${card.title} image`}
                className="object-contain p-4"
              />
              <div className="bg-black/45 p-4 flex flex-1 flex-col justify-between gap-3">
                <div className="text-start">
                  <h1 className="text-primary text-[20.12px] leading-5 md:text-2xl font-gotham font-semibold md:leading-10 pb-3 md:pb-0">
                    {card.title}
                  </h1>
                  <p className="text-primary/70 text-[13px] md:text-base font-normal font-gotham">
                    {card.description}
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-lg text-sm font-medium border border-white/40 outline-none bg-transparent text-white hover:text-white/50 flex items-center justify-start space-x-2 transition-all duration-300"
                    onClick={() => handleClick(card.id)}
                  >
                    <span className="italic md:not-italic">View Case Study</span>
                    <MoveRight color="white" size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CaseStudyCarousel;
