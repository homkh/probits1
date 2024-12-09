import Image from "next/image";
import Slider from "react-slick";
import cardImagse1 from "@../../../public/assets/images/teamMember1.png";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // centerMode: true,
  centerPadding: "20px", 
  arrows: false,
};

const MobileWhatpeopleSayCard = () => {
  return (
    <div className="w-full flex-1 mx-auto">
      <Slider {...settings}>
        <div className=""> 
          <div className="w-[306px] h-[278.28px] rounded-lg bg-slate-200 overflow-hidden">
            <Image src={cardImagse1} alt="cardImagse1" className="object-cover" />
          </div>
        </div>
        <div className="">
          <div className="w-[306px] h-[278.28px] rounded-lg bg-slate-200 overflow-hidden">
            <Image src={cardImagse1} alt="cardImagse1" className="object-cover" />
          </div>
        </div>
        <div className="">
          <div className="w-[306px] h-[278.28px] rounded-lg bg-slate-200 overflow-hidden">
            <Image src={cardImagse1} alt="cardImagse1" className="object-contain" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MobileWhatpeopleSayCard;
