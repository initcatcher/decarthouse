"use client";

import { SECTION1_1, SECTION1_2 } from "@/const";
import { motion } from "framer-motion";
import Image from "next/image";

// 애니메이션 variants
const fadeInLeft = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.4 },
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
      duration: 1.2,
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

export default function IntroduceSection() {
  return (
    <div
      className="mx-auto w-full max-w-7xl space-y-20 px-4 pt-10 text-left md:px-10 lg:px-0"
      id="concept"
    >
      {/* 첫 번째 섹션 */}
      <motion.section
        className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="flex-1" variants={fadeInLeft}>
          <motion.h2
            className="pb-4 text-2xl leading-relaxed font-medium md:text-3xl"
            variants={staggerContainer}
          >
            <motion.span
              className="block overflow-hidden"
              variants={typewriter}
            >
              사이먼튼 심리치료
            </motion.span>
            <motion.span
              className="block overflow-hidden"
              variants={typewriter}
            >
              새로운 관점으로 암을 바라보다
            </motion.span>
          </motion.h2>

          <motion.div
            className="space-y-6 text-xl leading-loose"
            variants={staggerContainer}
          >
            <motion.p variants={textReveal}>
              오래전부터 우리에게 암에 대해 의학적 결론만을 따르게 한 탓으로
              암을 잘라내고, 녹이고, 태워죽여야 하는 존재로 인식하는 잘못된
              도그마가 심겨 있었습니다. 그러나 암은 계속해서 우리에게 마음과
              몸이 생명의 질서에서 벗어나 있음을 알리고 있었습니다.
            </motion.p>
            <motion.p variants={textReveal}>
              이제 우리는 암이 보낸 메시지를 통해 생명의 질서에서 얼마나 벗어나
              있는지 확인해야 합니다. 암을 대면하고 있는 모든 이가 스스로 마음과
              몸의 환경을 관리할 수 있는 마지막 생명의 기회를 놓치게 해서는 절대
              안 됩니다.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-h-[400px] flex-1 overflow-hidden rounded-lg shadow-lg"
          variants={fadeInRight}
        >
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <Image
              src={SECTION1_1}
              alt="데카르트하우스-이미지1"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 두 번째 섹션 */}
      <motion.section
        className="flex flex-col gap-20 lg:flex-row-reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="flex-1" variants={fadeInRight}>
          <motion.div
            className="text-xl leading-loose"
            variants={staggerContainer}
          >
            <motion.p variants={textReveal}>
              데카르트하우스 내면의 들판 연구소는 암 환자들의 심리적 안정과
              정서적 회복을 도와 암 치유 전 과정에 걸쳐 통합의학적인 자기
              치유법을 제공합니다. 통합의학적 자기 치유법은 과학적 연구를
              기반으로 해독, 단식, 영양 공급, 운동과 수면, 심리 상담 프로그램을
              의, 과학적 연구를 기반으로 제공되며 자기 치유력을 극대화하는 데
              중점을 둡니다.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative min-h-[400px] flex-1 overflow-hidden rounded-lg shadow-lg"
          variants={fadeInLeft}
        >
          <motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <Image
              src={SECTION1_2}
              alt="데카르트하우스-이미지2"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
