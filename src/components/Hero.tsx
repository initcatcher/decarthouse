"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
  ];

  const sliderVariants = {
    animate: {
      x: [0, -400 * (images.length - 1)], // 전체 이미지를 왼쪽으로 슬라이딩
      transition: {
        x: {
          repeat: Infinity, // 무한 반복
          repeatType: "loop",
          duration: 100, // 슬라이드 애니메이션 시간 (조정 가능)
          ease: "linear", // 일정 속도로 슬라이드
        },
      },
    },
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-black">
      {/* 슬라이더 이미지 영역 */}
      <motion.div
        className="absolute flex h-full"
        variants={sliderVariants}
        animate="animate"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="h-full flex-shrink-0"
            style={{
              width: 400, // 화면 크기에 맞게 너비 설정
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </motion.div>

      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 flex items-center justify-center sm:justify-start h-full text-center sm:text-left px-4">
        <motion.div
          className="text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-snug">
            내면의 가치를 향한 여정
            <br />
            마음을 비워내는 치유의 시간
          </h1>
          <p className="mt-4 text-sm sm:text-base">
            당신의 마음을 편안하게 할 수 있는 시간
          </p>
          <Button className="mt-6 px-6 py-3 text-sm sm:text-base bg-white text-black font-medium rounded-md shadow-lg hover:bg-gray-200">
            상담 예약하기
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
