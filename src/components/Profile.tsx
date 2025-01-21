"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Profile = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
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
      className="container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Profile Image */}
        <motion.div
          className="w-full flex-1 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative w-full lg:w-[300px] lg:h-[300px] aspect-square">
            <Image
              src="/images/figure.png" // 실제 이미지 경로로 변경하세요
              alt="이동훈"
              fill
              className="rounded-lg object-cover shadow-md"
            />
          </div>
        </motion.div>

        {/* Profile Content */}
        <motion.div
          className="w-full flex-1 text-gray-800"
          variants={itemVariants}
        >
          <h1 className="text-2xl mb-4">이동훈</h1>
          <p className="text-base leading-relaxed mb-4">
            요코하마 시립 대학 의학부 졸업
            <br />
            의료법인 미나토미라이 이사장/의학박사
            <br />
            일본 당뇨병 학회 당뇨병 전문의·연수 지도 의
            <br />
            미국 당뇨병학회 정회원(Professional Section Member)
          </p>
          <p className="text-base leading-relaxed">
            미국 마운트 사이나이 의과 대학 조교수, 국제 의료 복지 대학 교수,
            요코하마 시립 대학 교수를 거쳐 매달 5000명 이상의 당뇨병, 3000명
            이상의 수면 무호흡 환자가 통원하는 의료법인 미나토미라이의 대표로
            환자 씨의 일상 데이터를 전자화하고 과학적 의료를 실현하는 것을
            목표로 매일 활동하고 있다.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
