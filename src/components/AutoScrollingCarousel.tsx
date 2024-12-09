// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './styles.css';

// import Image from 'next/image';
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// import images from '@/../../public/assets/images/earth.png'

// export default function SwiperComponent() {
//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="flex gap-3"
//       >
//         <SwiperSlide>
//           <Image src={images} alt='sfs'/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={images} alt='ff'/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={images} alt='cfsf'/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={images} alt='dddds'/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={images} alt='sds'/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image src={images} alt='dss'/>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import { useState } from "react";

export default function SwiperComponent() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    { video: "/videos/video1.mp4", alt: "Video 1" },
    { video: "/videos/video2.mp4", alt: "Video 2" },
    { video: "/videos/video3.mp4", alt: "Video 3" },
    { video: "/videos/video4.mp4", alt: "Video 4" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative flex justify-center items-center w-full max-w-5xl overflow-hidden">
        {/* Previous Button */}
        <button
          className="absolute left-0 bg-gray-800 p-2 rounded-full text-white z-10"
          onClick={prevSlide}
        >
          &#9664;
        </button>

        {/* Slider */}
        <div
          className="flex h-[50%] space-x-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative ${
                currentSlide === index ? "w-96" : "w-48"
              } h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500`}
            >
              <video className="w-full h-full object-cover rounded-lg" controls>
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="absolute right-0 bg-gray-800 p-2 rounded-full text-white z-10"
          onClick={nextSlide}
        >
          &#9654;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-5 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-slate-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
