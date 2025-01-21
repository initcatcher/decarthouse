"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureSection1() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="flex flex-col-reverse lg:flex-row items-center gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      {/* Left: Text Content */}
      <motion.div className="flex-1" variants={itemVariants}>
        <h2 className="text-2xl sm:text-3xl sm:leading-relaxed text-gray-900 mb-4">
          암환자들의 고충을
          <br />
          종합적으로 진료합니다
        </h2>
        <p className="text-gray-700 text-base leading-relaxed sm:text-lg sm:leading-loose">
          사이먼트 심리치료는 암 환자들의 심리적 안정과 정서적 회복을 돕는
          통합적인 치료 접근법입니다. 암 치료 과정에서의 스트레스와 불안은 몸과
          마음 모두에 큰 영향을 미칠 수 있습니다. 이 치료법은 과학적 연구를
          기반으로 심리적 안정을 찾고 긍정적인 마음가짐을 통해 치유력을
          극대화하는 데 중점을 둡니다.
        </p>
      </motion.div>

      {/* Right: Image Content */}
      <motion.div
        className="flex-1 relative w-full"
        variants={itemVariants}
        style={{
          aspectRatio: "4 / 3", // 16:9 비율로 설정
        }}
      >
        <Image
          src="/images/section1.jpeg" // 실제 이미지 경로로 변경하세요
          alt="Portrait of a doctor"
          fill
          className="rounded-lg object-cover shadow-md"
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
        />
      </motion.div>
    </motion.div>
  );
}
