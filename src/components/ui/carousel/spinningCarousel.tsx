"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./spinningCarousel.module.css";
import { RotationCardsData } from "./data";
import Image from "next/image";

import circleBackground from "@/../../public/assets/images/circalAnimationBg.png";

const SpinningCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const rotateNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % RotationCardsData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle item click
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const rotationDegree = 360 / RotationCardsData.length;

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.halfCircle}
        // style={{
        //   backgroundImage: `url(${circleBackground})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <motion.div
          className={styles.iconsContainer}
          animate={{ rotate: -activeIndex * rotationDegree }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {RotationCardsData.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.carouselItem}
              onClick={() => handleItemClick(index)}
              style={{
                transform: `rotate(${index * rotationDegree}deg) translate(150px) rotate(-${index * rotationDegree}deg)`,
              }}
            >
              <div className={`${styles.outerIcon} ${activeIndex} === ${index}? '':''`} >
                <div className={styles.innerIcon}>
                  <Image
                    src={item.icon}
                    alt="item icon"
                    className="object-contain"
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className={styles.centerIcon}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {RotationCardsData.map(
            (item, index) =>
              activeIndex === index && (
                <div key={item.id}>
                  <Image
                    src={item.icon}
                    alt="items icon"
                    className="object-contain"
                  />
                </div>
              ),
          )}
        </motion.div>
      </div>

      <div className={styles.descriptionCardContainer}>
        <AnimatePresence>
          {RotationCardsData.map(
            (item, index) =>
              activeIndex === index && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`${styles.descriptionCard} ${index === activeIndex ? styles.activeCard : ""}`}
                >
                  <h2>{item.title}</h2>
                  <p>{item.points[0]}</p>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpinningCarousel;
