"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const PageNotFound = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/home");
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-transparent px-4 mx-auto">
      {/* Inner flex container */}http://localhost:3000/
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-2xl md:text-3xl text-primary text-center">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          type="button"
          className="px-3 py-2 md:px-6 md:py-3 italic cursor-pointer text-white bg-blue-500 hover:bg-blue-600 font-normal text-sm md:font-semibold md:text-base rounded-full transition duration-300 flex items-center justify-center gap-2"
          onClick={handleButtonClick}
        >
          Go Back Home
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
