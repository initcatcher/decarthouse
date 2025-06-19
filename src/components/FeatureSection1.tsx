'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FeatureSection1() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Left: Text Content */}
      <motion.div className="flex-1" variants={itemVariants}>
        <h2 className="text-2xl sm:text-3xl sm:leading-relaxed text-gray-900 mb-4">
          <span className="text-red-600">사이먼튼</span> 심리치료
          <br />
          새로운 관점으로 <span className="text-red-600">암</span>을 바라보다
        </h2>
        <p className="text-gray-700 text-base leading-relaxed sm:text-lg sm:leading-loose">
          오래전부터 우리에게 암에 대해 의학적 결론만을 따르게 한 탓으로 암을
          잘라내고, 녹이고, 태워죽여야 하는 존재로 인식하는 잘못된 도그마가 심겨
          있었다. 그러나 암은 계속해서 우리에게 마음과 몸이 생명의 질서에서
          벗어나 있음을 알리고 있었다. 이제 우리는 암이 보낸 메시지를 통해
          생명의 질서에서 얼마나 벗어나 있는지 확인하고 받아들여야 한다. 암을
          대면하고 있는 모든 이가 스스로 마음과 몸의 환경을 관리할 수 있는
          마지막 생명의 기회를 놓치게 해서는 절대 안 된다.
        </p>
      </motion.div>

      {/* Right: Image Content */}
      <motion.div
        className="flex-1 relative w-full"
        variants={itemVariants}
        style={{
          aspectRatio: '3 / 2', // 3:2 비율로 설정
        }}
      >
        <Image
          src="/images/section1.jpg" // 실제 이미지 경로로 변경하세요
          alt="Portrait of a doctor"
          fill
          className="rounded-lg object-cover shadow-md"
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
        />
      </motion.div>
    </motion.div>
  )
}
