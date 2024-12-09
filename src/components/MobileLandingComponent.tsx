import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PackagesCard from "./ui/card/PackagesCard";
import earth from "@/../public/assets/images/earth.svg";

const MobileLandingComponent = ({ PackageCardsData }: {
    PackageCardsData: Array<{
        id: number;
        title: string;
        price: number;
    }>
}) => {
    const [openCardId, setOpenCardId] = useState<number | null>(null);
    const router = useRouter();

    const handleToggle = (id: number) => {
        setOpenCardId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div>
            {/* First Section */}
            <section className="w-full h-screen flex flex-col items-center justify-center pt-28 px-4 gap-8">
                {/* Left side text */}
                <div className="w-full flex flex-col gap-6 items-start">
                    <h1 className="text-white text-4xl font-bold leading-[46.8px]">
                        Building Mobile Application for Your Enterprise
                    </h1>
                    <p className="text-white text-xl font-light">
                        Your idea, our mastery - together, let's create wonders.
                    </p>
                    <button
                        className="w-11/12 px-5 py-2.5 rounded-lg text-sm italic font-medium bg-gradient-to-b from-[#3571F0]/100 to-[#2650AA]/100 text-white hover:bg-primary hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => router.push("/contact-us")}
                    >
                        Contact Us
                    </button>
                </div>

                {/* Right side image */}
                <div className="w-full flex justify-center">
                    <Image
                        src={earth}
                        alt="Earth Image"
                        className="object-contain overflow-clip aspect-auto"
                        width={480}
                        height={480}
                    />
                </div>
            </section>

            {/* Packages Section */}
            <section className="w-full h-auto flex flex-col items-center justify-center px-4 gap-14">
                <h1 className="text-white text-3xl leading-6 font-bold font-gotham hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
                    Our Packages
                </h1>
                <div className="flex flex-col items-center justify-center gap-7 w-full">
                    <div className="flex flex-wrap items-center justify-center gap-6 w-full">
                        {PackageCardsData.map((card) => (
                            <PackagesCard
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                price={card.price}
                                isOpen={openCardId === card.id}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileLandingComponent;
