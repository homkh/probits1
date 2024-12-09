"use client";
import Image, { StaticImageData } from "next/image"; // Added StaticImageData type
import { ArrowRight } from "lucide-react";

import Requrimentgathering from "@/../public/assets/images/requrimentCollection.png";
import DesignPanning from "@/../public/assets/images/designing&plnning.png";
import Development from "@/../public/assets/images/development.png";
import LaunchingTraction from "@/../public/assets/images/lunch&testing.png";
import MaintainIterate from "@/../public/assets/images/maintain&iterate.png";

interface CardItem {
  icon: StaticImageData;
  title: string;
  items: string[];
}

const MobileServiceCard: React.FC = () => {
  const cardData: CardItem[] = [
    {
      icon: Requrimentgathering,
      title: "Designing & Planning",
      items: [
        "Wireframes",
        "UI Design",
        "Landing Page",
        "Pitch/Product Deck",
        "Branding",
        "Prototype",
      ],
    },
    {
      icon: DesignPanning,
      title: "Development",
      items: [
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "CMS Setup",
        "Testing & Debugging",
        "Deployment",
      ],
    },
    {
      icon: Development,
      title: "Marketing",
      items: [
        "SEO Optimization",
        "Social Media Campaigns",
        "Email Marketing",
        "Content Creation",
        "Ad Management",
        "Analytics",
      ],
    },
    {
      icon: LaunchingTraction,
      title: "Support & Maintenance",
      items: [
        "24/7 Support",
        "Regular Updates",
        "Performance Monitoring",
        "Security Checks",
        "Bug Fixes",
        "Data Backups",
      ],
    },
    {
      icon: MaintainIterate,
      title: "Research & Analysis",
      items: [
        "Market Research",
        "User Testing",
        "Data Analysis",
        "Competitor Analysis",
        "Surveys & Feedback",
        "Reporting",
      ],
    },
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 pb-4">
        {cardData.map((card: CardItem, index: number) => (
          <div
            key={index}
            className="bg-[#12151B66]/40 min-w-[330px] h-[349.29px] backdrop-blur-sm border-[0.89px] border-[#85849E66]/40 rounded-[10.65px] py-[21.29px] px-[14.19px] flex flex-col items-start justify-start gap-[17.74px]"
          >
            <Image
              src={card.icon}
              alt={`${card.title} icon`}
              className="object-contain"
            />
            <h2 className="font-bold font-gotham text-lg">{card.title}</h2>
            <ul className="card-items flex flex-col gap-2">
              {card.items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <ArrowRight color="#3571F0" size={17} />
                  <p className="font-normal text-[#FDFDFD] text-sm ">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileServiceCard;
