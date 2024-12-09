"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Icon from "../../public/assets/icon/blueIcon.svg";
import email_Icon from "../../public/assets/images/email.png";
import adress_Icon from "../../public/assets/images/address.png";
import BeIcon from "../../public/assets/icon/beIcon.svg";
import faceBook from "../../public/assets/icon/faceBook.svg";
import linkedin from "../../public/assets/icon/linkind.svg";
import xIcon from "../../public/assets/icon/xicon.svg";

const footerData = {
  services: [
    { name: "DevOps" },
    { name: "Web Development" },
    { name: "Mobile Development" },
    { name: "Design" },
    { name: "Tech Consulting" },
    { name: "Support" },
  ],
  aboutUs: [
    { name: "Our Company", link: "/about-us" },
    { name: "How We Work", link: "/how-we-work" },
    { name: "Case Studies", link: "/blogs" },
    { name: "Contact", link: "/contact-us" },
    { name: "Career", link: "/career" },
    { name: "Support", link: "/support" },
  ],
};

const Footer = () => {
  useEffect(() => {
    // Inject the Tawk.to script into the page
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6705e52f02d78d1a30ee736c/1i9ngeh65";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  let mail = "info@probits.com.au";

  return (
    <div className="border-t-[1px] border-[#FFFFFF1A]/10 w-full border-solid pt-5 relative bg-transparent">
      <footer className="w-full px-4 md:px-0 z-50 md:w-11/12 2xl:w-10/12 mx-auto py-8 flex flex-col gap-14">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-start justify-between gap-8">
          <div className="sm:col-span-2 lg:col-span-5">
            <Image
              src={Icon}
              width={144}
              height={44}
              alt="Probits Icon"
              className="object-contain"
            />
            <p className="text-[#DBDBE1] text-base font-normal mt-4 font-gotham">
              Unleash the potential of your visions with Probits, your ultimate
              wingman dedicated to transforming ambitious concepts into tangible
              realities through our expert services.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-lg italic sm:not-italic font-medium sm:font-bold text-white font-gotham">
              SERVICES
            </h2>
            <ul className="text-[#DBDBE1] space-y-2 font-normal text-sm font-gotham">
              {footerData.services.map((service, index) => (
                <li key={index}>{service.name}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-lg italic sm:not-italic font-medium sm:font-bold text-white font-gotham">
              ABOUT
            </h2>
            <ul className="text-[#DBDBE1] space-y-2 font-normal text-sm font-gotham">
              {footerData.aboutUs.map((about, index) => (
                <li key={index}>
                  <Link href={about.link}>{about.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-3">
            <h2 className="text-lg italic sm:not-italic font-medium sm:font-bold text-white font-gotham">
              CONTACT US
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Image
                  src={email_Icon}
                  alt="email icon"
                  // width={20}
                  // height={20}
                  className="object-contain"
                />

                <a
                  href={`mailto:${mail}`}
                  className="text-[#DBDBE1] font-normal text-sm font-gotham hover:text-blue-500 transition-colors duration-300"
                >
                  <span>{mail}</span>
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-2">
                  <Image
                    src={adress_Icon}
                    alt="address Icon"
                    // width={20}
                    // height={20}
                    className="object-contain"
                  />
                </div>
                {/* address for the larger screnn  */}
                <p className="text-[#DBDBE1] hidden sm:inline font-normal text-sm font-gotham">
                  <span className="block">15/43, Sheffield St,</span>{" "}
                  <span className="block">MerryLands, NSW,</span>{" "}
                  <span className="block">Australia</span>{" "}
                </p>
                {/* address for the small screen */}
                <p className="text-[#DBDBE1] block sm:hidden font-normal text-sm font-gotham mt-[15px]">
                  15/43, Sheffield St, MerryLands, NSW, Australia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center space-y-4">
          <p className="font-gotham text-primary font-normal text-base">
            &#169; Probits Technology || All rights reserved
          </p>
          <div className="flex space-x-4">
            {[
              {
                icon: faceBook,
                url: "https://www.facebook.com/probits",
                alt: "Facebook Icon",
              },
              {
                icon: linkedin,
                url: "https://www.linkedin.com/",
                alt: "LinkedIn Icon",
              },
              {
                icon: xIcon,
                url: "https://www.twitter.com/probits",
                alt: "Twitter Icon",
              },
              {
                icon: BeIcon,
                url: "https://www.behance.net/probits",
                alt: "Behance Icon",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 active:scale-90"
              >
                <Image
                  src={social.icon}
                  alt={social.alt}
                  // width={24}
                  // height={24}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
