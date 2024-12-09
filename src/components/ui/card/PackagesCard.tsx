"use client";
import Image from "next/image";
import crossIcon from "@../../../public/assets/icon/crossIcon.svg";
import crossIcon2 from "@../../../public/assets/icon/cardCross.svg";
import circleIcon from "@../../../public/assets/icon/circle.svg";
import thickIcon from "@/../public/assets/icon/thickIcon.png";

interface PackagesCardProps {
  id: number;
  title: string;
  price: number | string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const PackagesCard = ({
  id,
  title,
  price,
  isOpen,
  onToggle,
}: PackagesCardProps) => {
  const handleButtonClick = (): void => {
    alert("Button clicked View Packages!");
  };

  return (
    <div className="bg-gradient-to-r from-[#3571F01A] from-100% via-[#3571F005] via-100% to-[#3571F00F] to-100% w-[530px] md:w-[380px] h-auto backdrop-blur-[40px] border border-[#85849E66]/40 rounded-xl shadow-2xl p-4 sm:p-5 md:p-6">
      <div
        className="flex flex-col justify-start gap-3 md:gap-5 h-full"
        role="button"
        onClick={() => onToggle(id)}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <Image
            src={circleIcon}
            width={40}
            height={40}
            alt="circle Icon"
            className="object-contain"
          />
          <button className="p-2 focus:outline-none" aria-expanded={isOpen}>
            <Image
              src={isOpen ? crossIcon2 : crossIcon}
              width={32}
              height={32}
              alt="Toggle Icon"
              className="object-contain"
            />
          </button>
        </div>

        {/* Title and Price */}
        <div className="w-52">
          <p className="text-primary font-gotham font-medium text-xl">{title}</p>
        </div>
        <div className="flex items-center md:items-end gap-2">
          <h1 className="text-primary font-gotham font-medium text-[48px] leading-[56px]">
            ${price}
          </h1>
          <span className="text-[#ffffff9f] font-gotham font-normal text-sm md:text-xl">
            Starting{" "}
          </span>
        </div>

        {/* Collapsible Section */}
        <div className={`collapsible ${isOpen ? "open" : ""}`}>
          <div className="border-t border-[#FFFFFF29]/15 my-4"></div>
          <div className="bg-transparent w-auto flex flex-1 flex-col gap-4 items-start">
            <div className="text-base text-primary font-gotham font-medium">
              What you will get{" "}
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: thickIcon, items: "Product Design (UX & UI)" },
                { icon: thickIcon, items: "Architecture System/Design" },
                { icon: thickIcon, items: "1st version App Development" },
                {
                  icon: thickIcon,
                  items: "Notifications (emails, push notifications)",
                },
                { icon: thickIcon, items: "Testing" },
                {
                  icon: thickIcon,
                  items: "Upload to AppStore/Google Play",
                },
              ].map((item, index) => (
                <div
                  className="flex gap-2 items-center justify-start"
                  key={index}
                >
                  <Image src={item.icon} alt="Thick Icon" />
                  <p className="font-gotham text-sm font-normal text-[#FFFFFFCC]/80">
                    {item.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-full px-4 py-3 rounded-[4px] text-white text-sm tracking-wider font-medium outline-none bg-gradient-to-t to-[#3571F0]/100 from-[#2865E5]/100 hover:bg-blue-800 active:bg-blue-700 mt-5"
          >
            View Package{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
