import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
import brand1 from "@/../../public/assets/brandsIcon/partnersLogo.png";
import brand2 from "@/../../public/assets/brandsIcon/partnersLogo (1).png";
import brand3 from "@/../../public/assets/brandsIcon/partnersLogo (2).png";
import brand4 from "@/../../public/assets/brandsIcon/partnersLogo (4).png";
import brand5 from "@/../../public/assets/brandsIcon/partnersLogo (5).png";

const reviews = [
  {
    img: brand1,
    alt: "Brand Image 1",
  },
  {
    img: brand2,
    alt: "Brand Image 2",
  },
  {
    img: brand3,
    alt: "Brand Image 3",
  },
  {
    img: brand4,
    alt: "Brand Image 4",
  },
  {
    img: brand5,
    alt: "Brand Image 5",
  },
  {
    img: brand1,
    alt: "Brand Image 6",
  },
];

const firstRow = reviews.slice(0, reviews.length / 3);
const secondRow = reviews.slice(reviews.length / 3, (2 * reviews.length) / 3);
const thirdRow = reviews.slice((2 * reviews.length) / 3);

interface ReviewCardProps {
  img: StaticImageData;
  alt: string;
}

const ReviewCard = ({ img, alt }: ReviewCardProps) => {
  return (
    <figure
      className={cn("relative w-auto cursor-pointer overflow-hidden p-3")}
    >
      <div>
        <Image
          className="rounded-full"
          width={150}
          height={80}
          alt={alt}
          src={img}
        />
      </div>
    </figure>
  );
};

export function OurPartnerCard() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden">
      <div className="hidden md:block">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={`firstRow-${index}`} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={`secondRow-${index}`} {...review} />
          ))}
        </Marquee>
      </div>
      {/* This is the text for mobile devices */}
      <div className="block md:hidden">
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={`secondRow-${index}`} {...review} />
          ))}
        </Marquee>
      </div>

      {/* <Marquee pauseOnHover className="[--duration:20s]">
        {thirdRow.map((review, index) => (
          <ReviewCard key={`thirdRow-${index}`} {...review} />
        ))}
      </Marquee> */}
    </div>
  );
}
