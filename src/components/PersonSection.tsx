"use client";

import { SECTION3_1, SECTION3_2 } from "@/const";
import { motion } from "framer-motion";
import Image from "next/image";

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
      staggerChildren: 0.2,
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

const textReveal = {
  hidden: {
    opacity: 0,
    y: 10,
    clipPath: "inset(0 0 100% 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.8,
    },
  },
};

export default function PersonSection() {
  return (
    <>
      {/* 모바일 버전 */}
      <motion.div
        className="px-4 md:hidden md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        id="introduction"
      >
        <motion.section className="text-left" variants={staggerContainer}>
          <motion.h1
            className="overflow-hidden pb-4 text-3xl leading-relaxed font-medium"
            variants={typewriter}
          >
            카운슬러 소개
          </motion.h1>

          <motion.div
            className="relative mb-4 h-[300px] overflow-hidden"
            variants={fadeInUp}
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="h-full w-full"
            >
              <Image
                src={SECTION3_1}
                fill
                alt="토마스 프로필"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4 text-lg leading-relaxed"
            variants={staggerContainer}
          >
            <motion.p variants={textReveal}>
              토마스(Tomas)는 생물공학을 전공한 후 의과대학에서 통합의학을
              연구하며, 생명과학과 의학의 경계를 넘나드는 통합적 시야를 바탕으로
              암 환자들과 깊이 교감해온 실천가입니다.
            </motion.p>
            <motion.p variants={textReveal}>
              현재는 암 환자의 정서적 회복과 삶의 질 향상을 돕는 통합의학 플랫폼{" "}
              &apos;데카르트하우스 &lt;내면의 들판 연구소&gt;&apos;의 대표
              활동가로 활동 중이며,
            </motion.p>
            <motion.p variants={textReveal}>
              사이먼튼 심리상담가, 통합의학 컨설턴트, &apos;앵거프리
              프로젝트&apos; 운영자로서 암과 싸우는 많은 환우들의 삶에 실제적인
              도움을 주고 있습니다.
            </motion.p>
          </motion.div>
        </motion.section>
      </motion.div>

      {/* 데스크톱 버전 */}
      <motion.div
        className="hidden md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.section className="relative min-h-[680px]">
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <Image
              src={SECTION3_2}
              fill
              alt="토마스 배경"
              className="object-cover"
              style={{ objectPosition: "70%" }}
              sizes="100vw"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/20" />

          <motion.div
            className="absolute inset-0 z-20 mx-auto flex w-full max-w-7xl flex-col items-start px-10 pt-10 text-left text-white lg:px-0"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <motion.h1
                className="overflow-hidden pb-4 text-3xl leading-relaxed font-medium md:text-4xl"
                variants={typewriter}
              >
                카운슬러 소개
              </motion.h1>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.h2
                className="overflow-hidden pb-4 text-2xl leading-relaxed font-medium md:text-3xl"
                variants={typewriter}
              >
                이동훈(토마스)
              </motion.h2>
            </motion.div>

            <motion.div className="flex" variants={fadeInUp}>
              <motion.div
                className="flex-1 space-y-4 text-xl leading-relaxed lg:text-2xl"
                variants={staggerContainer}
              >
                <motion.p variants={textReveal}>
                  토마스(Tomas)는 생물공학을 전공한 후 의과대학에서 통합의학을
                  연구하며, 생명과학과 의학의 경계를 넘나드는 통합적 시야를
                  바탕으로 암 환자들과 깊이 교감해온 실천가입니다.
                </motion.p>
                <motion.p variants={textReveal}>
                  현재는 암 환자의 정서적 회복과 삶의 질 향상을 돕는 통합의학
                  플랫폼 &apos;데카르트하우스 &lt;내면의 들판 연구소&gt;&apos;
                  의 대표 활동가로 활동 중이며,
                </motion.p>
                <motion.p variants={textReveal}>
                  사이먼튼 심리상담가, 통합의학 컨설턴트, &apos;앵거프리
                  프로젝트&apos; 운영자로서 암과 싸우는 많은 환우들의 삶에
                  실제적인 도움을 주고 있습니다.
                </motion.p>
              </motion.div>
              <div className="flex-1"></div>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  );
}
