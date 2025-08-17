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
              토마스(Tomas)는 생물공학을 전공한 후, 의과대학에서 통합의학을
              연구하며 과학적 근거에 기반한 심신의학적 접근을 실천해온 통합의학
              전문가입니다. 그는 생명과학의 정밀성과 의학의 임상적 통찰, 그리고
              심리치료의 인간 중심적 시각을 융합하여, 암 환자의 정서적 회복과
              삶의 질 향상을 위한 다학제적 상담과 중재를 실천하고 있습니다.
            </motion.p>
            <motion.p variants={textReveal}>
              현재는 통합의학 기반 암 환자 치유 플랫폼 데카르트하우스 &lt;내면의
              들판 연구소&gt;의 대표 활동가로, 통합의학 카운슬러이자 사이먼튼
              테라피 임상 적용자, &apos;앵거프리 프로젝트&apos; 촉진자로
              활동하며, 다양한 심신 중재 프로그램을 기획·운영하고 있습니다.
            </motion.p>
            <motion.p variants={textReveal} className="font-medium">
              그의 주요 중재 영역은 다음과 같습니다.
            </motion.p>
            <motion.div variants={textReveal}>
              <ul className="space-y-2 pl-4 text-base">
                <li>
                  • 암 환자의 부정정서 조절 및 심리적 유연성 향상을 통한
                  자율신경의 균형 강화.
                </li>
                <li>
                  • 감각 매개 기반 수용전념치료(ACT)의 임상 적용을 통한 분노,
                  우울, 불안, 스트레레스 해결.
                </li>
                <li>
                  • 인지행동치료(CBT)를 통한 인지적 재구성을 포함한 통합적 삶의
                  질 개선 전략 카운슬링
                </li>
                <li>
                  • 앵거프리 밴드를 사용한 자기 돌봄 및 내적 회복력 증진을 위한
                  자기주도적 치유 촉진.
                </li>
                <li>
                  • 과학적 연구를 기반 통합의학적 자기 치유법을 통해 해독, 단식,
                  영양 공급, 운동과 수면, 심리 상담 프로그램 운영.
                </li>
              </ul>
            </motion.div>
            <motion.p variants={textReveal}>
              토마스는 &apos;환자가 단순한 치료의 대상이 아닌, 스스로 삶을
              회복할 수 있는 존재임&apos;을 전제로, 의과학과 철학, 그리고 따뜻한
              인간적 연대를 바탕으로 암 환우들의 전인적 회복을 지원하고
              있습니다.
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
        <motion.section className="relative min-h-[1300px]">
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
            className="absolute inset-0 z-20 mx-auto flex w-full max-w-7xl flex-col items-start px-10 py-10 text-left text-white lg:px-0"
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
                  토마스(Tomas)는 생물공학을 전공한 후, 의과대학에서 통합의학을
                  연구하며 과학적 근거에 기반한 심신의학적 접근을 실천해온
                  통합의학 전문가입니다. 그는 생명과학의 정밀성과 의학의 임상적
                  통찰, 그리고 심리치료의 인간 중심적 시각을 융합하여, 암 환자의
                  정서적 회복과 삶의 질 향상을 위한 다학제적 상담과 중재를
                  실천하고 있습니다.
                </motion.p>
                <motion.p variants={textReveal}>
                  현재는 통합의학 기반 암 환자 치유 플랫폼 데카르트하우스
                  &lt;내면의 들판 연구소&gt;의 대표 활동가로, 통합의학
                  카운슬러이자 사이먼튼 테라피 임상 적용자, &apos;앵거프리
                  프로젝트&apos; 촉진자로 활동하며, 다양한 심신 중재 프로그램을
                  기획·운영하고 있습니다.
                </motion.p>
                <motion.p variants={textReveal} className="font-medium">
                  그의 주요 중재 영역은 다음과 같습니다.
                </motion.p>
                <motion.ul
                  variants={textReveal}
                  className="space-y-2 pl-4 text-lg lg:text-xl"
                >
                  <li>
                    • 암 환자의 부정정서 조절 및 심리적 유연성 향상을 통한
                    자율신경의 균형 강화.
                  </li>
                  <li>
                    • 감각 매개 기반 수용전념치료(ACT)의 임상 적용을 통한 분노,
                    우울, 불안, 스트레레스 해결.
                  </li>
                  <li>
                    • 인지행동치료(CBT)를 통한 인지적 재구성을 포함한 통합적
                    삶의 질 개선 전략 카운슬링
                  </li>
                  <li>
                    • 앵거프리 밴드를 사용한 자기 돌봄 및 내적 회복력 증진을
                    위한 자기주도적 치유 촉진.
                  </li>
                  <li>
                    • 과학적 연구를 기반 통합의학적 자기 치유법을 통해 해독,
                    단식, 영양 공급, 운동과 수면, 심리 상담 프로그램 운영.
                  </li>
                </motion.ul>
                <motion.p variants={textReveal}>
                  토마스는 &apos;환자가 단순한 치료의 대상이 아닌, 스스로 삶을
                  회복할 수 있는 존재임&apos;을 전제로, 의과학과 철학, 그리고
                  따뜻한 인간적 연대를 바탕으로 암 환우들의 전인적 회복을
                  지원하고 있습니다.
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
