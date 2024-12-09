"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ProbitsLogs from "../../public/assets/icon/whilteLog.svg";
import ContactBtn from "./ui/button/ContactBtn";
import { AlignJustify, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import BeIcon from "../../public/assets/icon/beIcon.svg";
import faceBook from "../../public/assets/icon/faceBook.svg";
import linkedin from "../../public/assets/icon/linkind.svg";
import xIcon from "../../public/assets/icon/xicon.svg";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact Us", path: "/contact-us" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [prevScrollpos, setPrevScrollpos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrevScrollpos(window.pageYOffset);
    }

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <nav>
      {/* Desktop Menu */}
      <div
        className={`hidden md:block fixed top-3 left-0 right-0 bg-[#0202021A] backdrop-blur-lg py-2 rounded-[48px] border-[1px] border-solid border-[#8FB2FB33]/20 mx-auto z-50 sm:w-11/12 2xl:w-10/12 transition-all duration-1000 ${
          visible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="w-full flex items-center justify-between sm:px-7 py-[2px]">
          <section>
            <Link href="/">
              <Image
                src={ProbitsLogs}
                height={40}
                width={131}
                alt="probits icon"
                className="object-contain"
              />
            </Link>
          </section>
          <section>
            <ul className="flex md:space-x-5 2xl:space-x-9 items-center justify-center">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    className={`text-[#DBDBE1] font-gotham font-medium text-base hover:text-gray-300 ${
                      pathname === item.path
                        ? "font-semibold underline decoration-gray-400 underline-offset-2 decoration-2"
                        : ""
                    }`}
                    href={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <Link href="/contact-us">
              <ContactBtn />
            </Link>
          </section>
        </div>
      </div>

      {/* Mobile Nav bar Menu */}
      <section className="w-full flex flex-1 items-center justify-center mx-auto">
        <div
          className={`md:hidden mx-auto text-center w-full max-w-[94%] flex items-center justify-between py-3 px-6 bg-[#0202021A]/10 border border-[#8FB2FB33]/20 rounded-[48px] backdrop-blur-[16px] fixed top-4 z-50 ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div>
            <Link href="/">
              <Image
                src={ProbitsLogs}
                height={32}
                width={104}
                alt="probits icon"
                className="object-contain"
              />
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-1.5 rounded-md hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isOpen ? <X className="h-7 w-7" /> : <AlignJustify />}
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#121F59]  pt-28 pb-9 px-5 z-40 transition-all duration-300">
          <div className="flex flex-col gap-6 items-start justify-between h-full">
            <ul className="flex flex-col items-start gap-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className={`text-[#DBDBE1] font-gotham font-semibold text-2xl hover:text-gray-300 ${
                      pathname === item.path
                        ? "font-semibold underline decoration-gray-400 underline-offset-2 decoration-2"
                        : ""
                    }`}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* copy right section */}
            <footer className="w-full flex items-center justify-center flex-col gap-5">
              <p className="text-[#F5F5F7] text-base font-normal font-gotham">
                &#169; Probits Technology | All right reserved
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: faceBook,
                    url: "https://www.facebook.com",
                    alt: "Facebook Icon",
                  },
                  {
                    icon: linkedin,
                    url: "https://www.linkedin.com",
                    alt: "LinkedIn Icon",
                  },
                  {
                    icon: xIcon,
                    url: "https://www.twitter.com",
                    alt: "Twitter Icon",
                  },
                  {
                    icon: BeIcon,
                    url: "https://www.behance.net",
                    alt: "Behance Icon",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-110 active:scale-90 bg-[#1E293B] rounded-full"
                  >
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </footer>
          </div>
        </div>
      )}
      {/* <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-40 transition-all duration-300`}
      >
        <div className="flex flex-col gap-6 items-center justify-center h-full">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  className={`text-white font-gotham font-medium text-xl hover:text-gray-300 ${
                    pathname === item.path
                      ? "font-semibold underline decoration-gray-400 underline-offset-2 decoration-2"
                      : ""
                  }`}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact-us" onClick={() => setIsOpen(false)}>
            <ContactBtn />
          </Link>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
