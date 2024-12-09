import { ReactNode } from "react";
import Image from "next/image";

interface CardData {
  image: string;
  category: string;
  title: string | ReactNode;
  onClick?: () => void;
}

const BlogsCard = ({ image, category, title, onClick }: CardData) => {
  return (
    <div
      className="relative w-full h-[396px] border border-gray-700 rounded-xl overflow-clip cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="blog image"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 backdrop-blur-[0.5px]" />

      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end gap-2">
        <div>
          <span className="inline-flex px-4 py-1 rounded-[3.74px] sm:rounded-[4px] text-sm font-medium border border-[#B7B7B7]/90 bg-transparent text-white backdrop-blur-[3.74px]">
            {category}
          </span>
        </div>
        <h2 className="font-medium italic md:not-italic text-[1.25rem] sm:text-2xl text-[#F5F5F7] transition-all duration-200 hover:underline hover:scale-95">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default BlogsCard;
