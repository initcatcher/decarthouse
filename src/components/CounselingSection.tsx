"use client";

import { SECTION2_1, SECTION2_2, SECTION2_3, SECTION2_4 } from "@/const";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// 애니메이션 variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 글자가 써지듯이 나타나는 애니메이션
const typewriter = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    transition: {
      duration: 1.0,
    },
  },
};

const cardHover = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

export default function CounselingSection() {
  const images = [SECTION2_1, SECTION2_2, SECTION2_3, SECTION2_4];
  const links = [
    "/integrative-medicine",
    "/simonton-therapy",
    "/lifestyle-medicine",
    "/anger-free",
  ];

  return (
    <div className="mx-auto w-full max-w-7xl space-y-20 px-10 text-left md:px-10 lg:px-0">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp}>
          <motion.h1
            className="overflow-hidden pb-4 text-4xl font-medium"
            variants={typewriter}
          >
            상담안내
          </motion.h1>
        </motion.div>

        <motion.div
          className="flex flex-col flex-wrap items-center justify-center gap-12 md:flex-row md:gap-4 lg:justify-between"
          variants={staggerContainer}
        >
          {images.map((imgUrl, index) => (
            <motion.div key={imgUrl} variants={fadeInUp} whileHover="hover">
              <Link href={links[index]}>
                <motion.div
                  className="relative size-[320px] overflow-hidden rounded-lg md:size-[300px]"
                  variants={cardHover}
                >
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="h-full w-full"
                  >
                    <Image
                      src={imgUrl}
                      fill
                      className="object-contain"
                      alt={`상담안내 이미지 ${index + 1}`}
                    />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
