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

export default function LifestyleMedicine() {
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
            생활습관의학
          </motion.h1>
          
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p>
              생활습관의학(Lifestyle Medicine)은 과학적 근거에 기반하여, 비약물적 치료를 통해 만성질환의 예방 치료를 추구하는 의학의 한 분야입니다.
            </p>
            <br />
            <p>
              제2형 당뇨병, 고혈압, 고지혈증, 심혈관질환, 비만, 일부 암, 우울증, 수면장애 등에 적용될 수 있습니다.
            </p>
            <br />
            <p>
              생활습관의학은 기존의 '치료 중심' 의료를 넘어 환자의 행동 변화와 삶의 총체적 질 향상을 목표로 하는 미래 지향적, 실천 중심의 의학입니다.
            </p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>핵심 6대 영역</h2>
            <br />
            <p><strong>식이 요법</strong></p>
            <p>식물성 위주, 항염증 식단</p>
            <br />
            <p><strong>신체 활동</strong></p>
            <p>맞춤형 유산소 및 근력 운동</p>
            <br />
            <p><strong>수면 개선</strong></p>
            <p>수면위생과 생체리듬 회복</p>
            <br />
            <p><strong>스트레스 관리</strong></p>
            <p>명상, 호흡, 심리치료적 개입</p>
            <br />
            <p><strong>금연 및 절주</strong></p>
            <p>행동변화 중심의 중재</p>
            <br />
            <p><strong>사회적 연결</strong></p>
            <p>관계망 회복 및 소속감 강화</p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}