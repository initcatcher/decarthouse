"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PHONE_NUMBER } from "./utils";
import { HERO } from "@/const";

export default function Hero() {
  return (
    <div 
      className="relative h-[calc(100svh-100px)] overflow-hidden md:h-[700px] lg:h-[800px]"
      style={{
        "--object-position": "80% 50%",
        "--object-position-md": "50% 50%",
      } as React.CSSProperties}
    >
      {/* 배경 이미지 */}
      <Image
        src={HERO}
        fill
        className="object-cover [object-position:var(--object-position)] md:[object-position:var(--object-position-md)]"
        alt="치유와 상담을 위한 공간"
        priority
      />

      {/* 오버레이 */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* 콘텐츠 */}
      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
        <div className="px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              내면의 <span className="text-yellow-300">가치</span>를 향한 여정
            </h1>

            <h2 className="text-2xl font-bold text-white md:text-4xl lg:text-5xl">
              마음을 비워내는
              <span className="text-yellow-300">치유</span>의 시간
            </h2>
            <h2 className="pt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              내면의 들판 연구소
            </h2>
            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <motion.a
                href={`tel:${PHONE_NUMBER}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white/80 px-8 py-4 text-center text-xl font-semibold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:bg-white/90 hover:shadow-lg md:px-12 md:py-5 md:text-lg lg:text-xl"
              >
                상담 예약하기
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 하단 그라디언트 */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
}
