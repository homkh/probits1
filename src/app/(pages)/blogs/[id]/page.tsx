"use client";

import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { richTextReducer } from "@/../utils/utils";
import { SocialDetails } from "./data";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { motion } from "framer-motion";

import faceBookicon from "@/../../public/assets/icon/faceBook.svg";
import linkidinIcon from "@/../../public/assets/icon/linkind.svg";
import xIcon from "@/../../public/assets/icon/xicon.svg";
import email from "@/../../public/assets/icon/email.svg";

interface BlogsProps {
  params: {
    id: number | string;
  };
}

interface BlogData {
  attributes: {
    category: string;
    title: string;
    author_name: string;
    author_image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    image2: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    content: any;
    createdAt: string;
  };
}

// Base URL
const strapiBackendUrl = process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL;

const BlogId: FC<BlogsProps> = ({ params }) => {
  const [blogData, setBlogData] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [contentAboveImage, setContentAboveImage] = useState<string>("");
  const [contentBelowImage, setContentBelowImage] = useState<string>("");

  // Function to open a new window for sharing
  const openShareWindow = (url: any) => {
    window.open(url, "_blank");
  };

  // Generate URL for sharing on Facebook
  const shareOnFacebook = (url: any) => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    openShareWindow(shareUrl);
  };

  // Generate URL for sharing on Twitter
  const shareOnTwitter = (url: any, title: string) => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    openShareWindow(shareUrl);
  };

  // Generate URL for sharing on LinkedIn
  const shareOnLinkedIn = (url: any, title: string) => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    openShareWindow(shareUrl);
  };

  // Function to share via email
  const shareViaEmail = (subject: string, body: any) => {
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    openShareWindow(mailtoUrl);
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const result = await fetch(
          `${strapiBackendUrl}/api/blogs/${params.id}?populate=*`,
        );

        if (!result.ok) {
          throw new Error(`Failed to fetch blog data: ${result.statusText}`);
        }

        const data = await result.json();

        if (data?.data) {
          setBlogData(data.data);

          // Split content above and below the image
          const richText = await richTextReducer(data.data.attributes.content);

          const contentSplit = richText.split(/<\/p>/);
          setContentAboveImage(contentSplit[0] + "</p>");
          setContentBelowImage(contentSplit.slice(1).join("</p>"));
        } else {
          setBlogData(null);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (strapiBackendUrl) {
      fetchBlogData();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center mx-auto w-full h-screen">
        <div className="loader" />
      </div>
    );
  }

  if (!blogData) {
    return (
      <motion.div
        className="w-full h-screen flex items-center justify-center text-red-600 text-3xl font-bold mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          type: "spring",
          stiffness: 150,
          damping: 8,
        }}
      >
        <span className="italic">&quot; Sorry, no blog found. </span>
        <span className="text-[#0B2F9F]">
          &nbsp; Why not explore our other posts instead? &quot;
        </span>
      </motion.div>
    );
  }

  const { category, title, author_name, image, createdAt, author_image, image2 } =
    blogData.attributes;
  const imageUrl = image?.data?.attributes?.url;
  const image2Url = image2?.data?.attributes?.url;
  const authorImgUrl = author_image?.data?.attributes?.url;
  const wordsPerMinute = 150;

  // Calculate reading time
  const totalWordCount = blogData.attributes.content.reduce(
    (count: number, block: any) =>
      count +
      block.children.reduce((childCount: number, child: any) => {
        const text = child.text || "";
        return childCount + text.split(/\s+/).length;
      }, 0),
    0,
  );

  const readingTime = Math.ceil(totalWordCount / wordsPerMinute);

  return (
    <div className="py-28 md:py-36 relative top-0 left-0 mx-auto bg-ellips-bg bg-center bg-cover bg-repeat-y">
      <section className="w-full sm:max-w-4xl mx-auto px-4 sm:px-0">
        <section className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex px-3 py-1.5 rounded-lg text-sm font-medium border border-white outline-none bg-transparent hover:bg-blue-700 text-white transition-all duration-300">
              {category}
            </div>
          </div>
          <h1 className="sm:text-[3.625rem] text-[2.25rem] font-bold text-primary">
            {title}
          </h1>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center justify-start space-x-2">
              {authorImgUrl && (
                <Image
                  src={authorImgUrl}
                  alt="Author profile"
                  width={32}
                  height={32}
                  className="object-contain rounded-full"
                />
              )}
              <p className="text-sm font-medium text-[#DBDBE1]">
                {author_name || "Unknown Author"}
              </p>
            </div>

            <div className="flex items-center space-x-3 justify-start">
              <span className="w-1.5 h-1.5 bg-[#D9D9D980]/50 rounded-full" />
              <p className="text-sm font-normal text-[#DBDBE1]">
                {readingTime || "N/A"} min read
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 bg-[#D9D9D980]/50 rounded-full" />
              <p className="text-sm font-normal text-[#DBDBE1]">
                {new Date(createdAt).toLocaleDateString() || "Unknown Date"}
              </p>
            </div>
          </div>

          {/* Content above image */}
          <div
            className="text-[1.25rem] font-normal text-left text-[#F5F5F7] flex-1 font-gotham"
            dangerouslySetInnerHTML={{ __html: contentAboveImage }}
          />
        </section>
      </section>

      {/* Image section */}
      {imageUrl && (
        <section className="mx-auto px-4 sm:px-0 flex items-center justify-center">
          <Image
            src={imageUrl}
            alt="Blog Image"
            width={1040}
            height={400}
            className="rounded-xl shadow-2xl object-cover outline-none cursor-pointer sm:h-[480px] h-[170px]"
          />
        </section>
      )}

      <section className="max-w-4xl mx-auto pt-9 flex flex-col sm:flex-row-reverse gap-10 px-4 sm:px-0 sm:items-start items-center justify-center">
        {/* Blog content below the image */}
        <div className="bg-blogs-bg w-full h-full bg-center bg-contain bg-no-repeat flex-1">
          <div
            className="text-base text-[#F5F5F7] font-normal font-gotham"
            dangerouslySetInnerHTML={{ __html: contentBelowImage }}
          />
        </div>
        {/* {imageUrl && (
          <section className="mx-auto px-4 sm:px-0 flex items-center justify-center">
            <Image
              src={image2Url}
              alt="Blog Image2"
              width={1040}
              height={400}
              className="rounded-xl shadow-2xl object-cover outline-none cursor-pointer sm:h-[480px] h-[170px]"
            />
          </section>
        )} */}

        {/* social media section */}
        {/* <div className="flex flex-row md:flex-col gap-3 md:pb-0 items-center justify-center">
          {SocialDetails.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={item.hoverData}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                height={40}
                width={40}
                className="object-contain rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
              />
            </a>
          ))}
        </div> */}

        <div className="flex flex-row md:flex-col gap-3 md:pb-0 items-center justify-center">
          {/* Facebook Share */}
          <button
            onClick={() => shareOnFacebook(window.location.href)}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Share on Facebook"
          >
            <Image
              src={faceBookicon}
              alt="Facebook"
              height={40}
              width={40}
              className="object-contain rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
            />
          </button>

          {/* Twitter Share */}
          <button
            onClick={() =>
              shareOnTwitter(window.location.href, blogData?.attributes?.title)
            }
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Share on Twitter"
          >
            <Image
              src={xIcon}
              alt="Twitter"
              height={40}
              width={40}
              className="object-contain rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
            />
          </button>

          {/* LinkedIn Share */}
          <button
            onClick={() =>
              shareOnLinkedIn(window.location.href, blogData?.attributes?.title)
            }
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Share on LinkedIn"
          >
            <Image
              src={linkidinIcon}
              alt="LinkedIn"
              height={40}
              width={40}
              className="object-contain rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
            />
          </button>

          {/* Email Share */}
          <button
            onClick={() =>
              shareViaEmail(
                `Check out this blog: ${blogData?.attributes?.title}`,
                `I found this interesting blog and thought you might like it: ${window.location.href}`,
              )
            }
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Share via Email"
          >
            <Image
              src={email}
              alt="Email"
              height={40}
              width={40}
              className="object-contain rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-600 hover:shadow-lg"
            />
          </button>
        </div>
      </section>
      <div className="hidden md:block">
        <Tooltip
          id="my-tooltip"
          place="right"
          style={{
            color: "white",
            borderRadius: "4px",
            border: "1px solid #FFFFFF",
            backgroundColor: "#2A58BB",
          }}
        />
      </div>

      <div className="block md:hidden">
        <Tooltip
          id="my-tooltip"
          place="bottom"
          style={{
            color: "white",
            borderRadius: "4px",
            border: "1px solid #FFFFFF",
            backgroundColor: "#2A58BB",
          }}
        />
      </div>
    </div>
  );
};

export default BlogId;
