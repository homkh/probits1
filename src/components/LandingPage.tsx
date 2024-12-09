'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PackagesCard from './ui/card/PackagesCard';
import earth from '@/../public/assets/images/earth.svg';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = ({ data }: {
    data: Array<{
        id: number;
        title: string;
        price: number;
    }>
}) => {
    const [openCardId, setOpenCardId] = useState<number | null>(null);
    const router = useRouter();

    const earthRef = useRef<HTMLDivElement>(null);
    const firstSectionRef = useRef<HTMLDivElement>(null);
    const secondSectionRef = useRef<HTMLDivElement>(null);

    const handleToggle = (id: number) => {
        setOpenCardId((prevId) => (prevId === id ? null : id));
    };

    // useEffect(() => {
    //     const globe = earthRef.current;
    //     const firstSection = firstSectionRef.current;

    //     if (globe && firstSection) {
    //         const tl = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: firstSection,
    //                 start: 'top top',
    //                 end: 'bottom top',
    //                 scrub: true,
    //                 markers: false,
    //             },
    //         });

    //         tl.to(globe, {
    //             x: -320,
    //             y: 720,
    //             scale: 1.2,
    //             rotation: 360,
    //             ease: 'power1.inOut',
    //         });
    //     }
    // }, []);

    // testing 1
    useEffect(() => {
        const globe = earthRef.current;
        const firstSection = firstSectionRef.current;

        if (globe && firstSection) {
            // Function to calculate responsive animation values
            const getAnimationValues = () => {
                const screenWidth = window.innerWidth;

                // Define different animation parameters for various screen sizes
                if (screenWidth >= 1536) {  // 2xl screens
                    return {
                        x: -350,
                        y: 720,
                        scale: 1.3
                    };
                } else if (screenWidth >= 1280) {  // xl screens
                    return {
                        x: -250,
                        y: 700,
                        scale: 1.1
                    };
                } else if (screenWidth >= 1024) {  // lg screens
                    return {
                        x: -200,
                        y: 100,
                        scale: 1.05
                    };
                } else if (screenWidth >= 768) {  // md screens
                    return {
                        x: -0,
                        y: 400,
                        scale: 1
                    };
                } else {  // sm and smaller screens
                    return {
                        x: -100,
                        y: 300,
                        scale: 0.9
                    };
                }
            };

            // Create GSAP animation with responsive values
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: firstSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    markers: false,
                },
            });

            // Get initial animation values
            const { x, y, scale } = getAnimationValues();

            // Animate the globe
            tl.to(globe, {
                x: x,
                y: y,
                scale: scale,
                rotation: 90,
                ease: 'power1.inOut',
            });

            // Add resize listener to update animation on window resize
            const handleResize = () => {
                // Destroy existing ScrollTrigger
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());

                // Recalculate and reapply animation
                const newValues = getAnimationValues();

                tl.clear();
                tl.to(globe, {
                    x: newValues.x,
                    y: newValues.y,
                    scale: newValues.scale,
                    rotation: 360,
                    ease: 'power1.inOut',
                });
            };

            // Add resize event listener
            window.addEventListener('resize', handleResize);

            // Cleanup function
            return () => {
                window.removeEventListener('resize', handleResize);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center 2xl:h-auto md:w-11/12 2xl:w-10/12 justify-between pt-16 mx-auto px-4">
            {/* First Section */}
            <section
                className="w-full mx-auto h-screen 2xl:h-3/4 flex items-center justify-center py-16"
                ref={firstSectionRef}
            >
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-14">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-5 items-center md:items-start text-center md:text-left">
                        <div className="flex flex-col items-center md:items-start justify-center gap-2 md:gap-4">
                            <h1 className="text-white text-[40px] sm:text-5xl md:text-[48px] 2xl:text-[3.625rem] font-bold md:leading-[56px] 2xl:leading-[69.6px] max-w-full">
                                Building Mobile Application for Your Enterprise
                            </h1>
                            <p className="text-white text-lg 2xl:font-normal max-w-md text-center md:text-left">
                                Your idea, our mastery - together, let's create wonders.
                            </p>
                        </div>
                        <button
                            className="w-11/12 md:w-auto px-5 py-2.5 rounded-lg text-sm font-medium font-gotham bg-gradient-to-b from-[#3571F0] to-[#2650AA] text-white hover:bg-primary hover:text-black transition duration-300 ease-in-out transform hover:scale-105"
                            onClick={() => router.push('/contact-us')}
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Right Side */}
                    <div
                        ref={earthRef}
                        className="md:w-1/2 flex justify-center items-center relative z-0"
                    >
                        <Image
                            src={earth}
                            height={400}
                            width={400}
                            alt="Earth Image"
                            className="overflow-visible"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section
                className="relative cards-container z-10 h-screen flex items-center justify-center w-full"
                ref={secondSectionRef}
            >
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-white text-3xl md:text-[58px] font-bold font-gotham text-center mb-8 hover:underline hover:text-slate-400 transition-all ease-in-out duration-300">
                        Our Packages
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-7 w-full">
                        <div className="flex gap-6 md:gap-10 flex-wrap items-center justify-center w-full max-w-6xl">
                            {data.map((card) => (
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
                </div>
            </section>
        </div>
    );
};

export default LandingPage;