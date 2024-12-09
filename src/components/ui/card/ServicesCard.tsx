import ShineBorder from "@/components/magicui/shine-border";
import serviceIcon from "@/../../public/assets/icon/serviceIcon.png";
import Image from "next/image";

interface ServicesCardProps {
  header: string;
  description: string;
}

export const ServicesCard = ({ header, description }: ServicesCardProps) => {
  return (
    <ShineBorder
      className="w-full h-auto md:w-[295px] md:h-[280px] cursor-pointer px-6 py-8 bg-[#12151B66]/40 rounded-lg border-[#7474804D] border-opacity-30 border-[1px] backdrop-blur-sm duration-300 ease-in-out hover:scale-95  hover:shadow-custom-hover transition-shadow"
      color={["#A07CFE", "#FE8FB5", "#0B5394"]}
    >
      <div className="flex flex-col gap-3 items-start justify-between cursor-pointer">
        <Image
          src={serviceIcon}
          alt="Service icon"
          width={40}
          height={40}
          className="object-contain"
        />

        <h2 className="font-gotham text-[#F5F5F7] font-bold text-xl">
          {header || "Mobile App Development"}
        </h2>

        <p className="text-sm text-[#F5F5F7] font-gotham">
          {description ||
            "We build intuitive, responsive mobile apps tailored to meet your specific business needs and enhance user engagement."}
        </p>
      </div>
    </ShineBorder>
  );
};
