'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 },
  },
}

export default function IntegrativeMedicine() {
  return (
    <>
      <Header />
      <main>
        <div className="contents pages">
          <motion.h1
            className="inview"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            통합의학
          </motion.h1>
          
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p>
              통합의학 카운슬링(Integrative Medicine Counseling)은
              의학적 진단과 치료를 넘어, 환자의 심리사회적, 정서적, 생활환경적 요인을 통합적으로 탐색하여 보다 지속가능한 회복을 돕는 전문 상담 프로그램입니다.
            </p>
            <br />
            <p>
              의학적 치료만으로는 해결되지 않는 만성질환, 암, 자가면역질환, 심신증 등에서
              환자의 역할을 회복시키고 삶의 주도권을 되찾도록 돕는 것을 목표로 합니다.
            </p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>주요 접근 방식</h2>
            <br />
            <p><strong>생활습관 기반 상담</strong></p>
            <p>식이, 수면, 스트레스, 운동 패턴 분석</p>
            <br />
            <p><strong>심리정서 중재</strong></p>
            <p>감정 인식, 스트레스 반응 이해, 자기 조절력 향상</p>
            <br />
            <p><strong>의학-심리 통합 설명</strong></p>
            <p>진단명에 국한되지 않고 전인적 건강 상태로 재해석</p>
            <br />
            <p><strong>행동 변화 유도</strong></p>
            <p>작은 실천을 통해 신체-심리의 자기 회복력 활성화</p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}