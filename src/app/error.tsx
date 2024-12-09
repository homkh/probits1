"use client";
import React, { useEffect } from "react";
interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-5">
      <h2 className="flex items-center justify-center text-rose-700">
        Something went wrong!
      </h2>
      <button
        className="px-6 py-2 bg-cyan-700 text-center text-gray-200 rounded-xl hover:bg-cyan-600 hover:text-white animate-pulse"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
