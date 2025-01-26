'use client'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Hero.jpg')" }} // 경로를 실제 이미지 경로로 수정
    >
      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* 텍스트 콘텐츠 */}
      <div className="relative z-10 flex items-center justify-center sm:justify-start h-full text-center sm:text-left px-4">
        <div className="text-white">
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
        </div>
      </div>
    </div>
  )
}
