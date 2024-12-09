'use client'
import React from "react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-3xl font-bold mb-4">Welcome to the Services Page</h2>
        <p className="text-lg text-gray-600">
          This page is currently under development. Please check back soon for updates!
        </p>
      </motion.div>
    </div>
  );
};

export default ServicesPage;
