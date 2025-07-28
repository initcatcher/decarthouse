"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0, scale: 1.035 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, delay: 0.1 },
  },
};

const imageTransition = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2 },
  },
};

export default function Hero() {
  const images = ["/img/main1.jpg", "/img/mani2.jpg", "/img/main3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile Contact Links */}
      {/* <div className="splinks">
        <p className="sptel">
          <Link href="tel:03-6274-6007">전화하기</Link>
        </p>
      </div> */}

      {/* Main Image Slideshow Section */}
      <div className="px-[3%] md:px-[6.5%]">
        <div className="relative bg-cover bg-center bg-no-repeat pb-[56.25%] md:pb-[121%]">
          <div className="relative top-0 left-0 w-full h-full flex items-center justify-center -mt-[5%]">
            <div className="relative flex items-center justify-center">
              <div className="w-full mt-0 flex-none transition-all duration-200">
                <motion.div
                  className="w-full h-[53vw] md:w-auto md:-ml-[80%] md:h-[120vw] relative overflow-hidden"
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                >
                  {images.map((image, index) => (
                    <motion.div
                      key={image}
                      className="absolute inset-0 w-full h-full"
                      variants={imageTransition}
                      initial="hidden"
                      animate={index === currentImageIndex ? "show" : "hidden"}
                    >
                      <Image
                        src={image}
                        alt={`Slideshow image ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 100vw"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
