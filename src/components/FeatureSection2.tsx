'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FeatureSection2() {
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
          <span className="text-red-600">암환자들</span>의 고충을
          <br />
          <span className="text-red-600">종합</span>적으로 진료합니다
        </h2>
        <p className="text-gray-700 text-base leading-relaxed sm:text-lg sm:leading-loose">
          사이먼트 심리치료는 암 환자들의 심리적 안정과 정서적 회복을 돕는
          통합적인 치료 접근법입니다. 암 치료 과정에서의 스트레스와 불안은 몸과
          마음 모두에 큰 영향을 미칠 수 있습니다. 이 치료법은 과학적 연구를
          기반으로 심리적 안정을 찾고 긍정적인 마음가짐을 통해 치유력을
          극대화하는 데 중점을 둡니다.
        </p>
      </motion.div>

      {/* Left: Image Content */}
      <motion.div
        className="flex-1 relative w-full"
        variants={itemVariants}
        style={{
          aspectRatio: '3 / 2',
        }}
      >
        <Image
          src="/images/section2.jpg" // 실제 이미지 경로로 변경하세요
          alt="Portrait of a doctor"
          fill
          className="rounded-lg object-cover shadow-md"
          sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw"
        />
      </motion.div>
    </motion.div>
  )
}
