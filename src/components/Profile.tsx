'use client'
import { motion } from 'framer-motion'

const Profile = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

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
        {/* <motion.div
          className="w-full flex-1 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative w-full lg:w-[300px] lg:h-[300px] aspect-square">
            <Image
              src="/images/figure.png" // 실제 이미지 경로로 변경하세요
              alt="토마스"
              fill
              className="rounded-lg object-cover shadow-md"
            />
          </div>
        </motion.div> */}

        {/* Profile Content */}
        <motion.div
          className="w-full flex-1 text-gray-800"
          variants={itemVariants}
        >
          <h1 className="text-2xl mb-4">
            이동훈(<span className="text-red-600">토마스</span>)
          </h1>
          <p className="text-base leading-relaxed mb-4">
            대학원에서 생물공학을 전공한 후 의과대학에서 통합의학을 전공하였다.
            <br />
            현재 암 환자를 돕는 데카르트하우스 &lt;내면의 들판 연구소&gt;의
            <span className="text-red-600">앵거프리 프로젝트</span>의 대표
            활동가
            <br />
            <span className="text-red-600">암 환자들</span>을 대변하는 통합의학
            컨설턴트
            <br />
            <span className="text-red-600">사이먼튼</span> 심리상담가
          </p>
          <p className="text-base leading-relaxed mb-4">
            2018년 49세로 반짇고리형 위암 림프 전이 진단으로 위 전체 적출 후
            식도와 소장을 연결하는 수술과 세포독성 항암을 권유받았다. 그러나
            그는 수술과 화학 항암요법을 받지 않았고, 암세포에 대항하지도 않았다.
            치유를 위해서 통합의학에 근거하여 마음과 몸의 제독과 영양 보급에
            헌신적이었고, 암 치유의 가장 큰 걸림돌이 스트레스와 심리적
            불안증이라고 생각하여 암 전문 심리치료와 알아차림 명상에 열중하였다.
          </p>
          <p className="text-base leading-relaxed">
            결국 그는 생활 습관의 극적인 전환을 이루었고 스스로 암의 자연관해를
            성공시켰다.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Profile
