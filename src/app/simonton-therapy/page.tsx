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

export default function SimontonTherapy() {
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
            사이먼튼테라피
          </motion.h1>
          
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p>
              사이먼튼 테라피(Simonton Therapy)는 암을 비롯한 만성 질환 환자들의 심리적 회복력과 삶의 질 향상을 목적으로 개발된 심신의학 기반의 심리교육 및 상담 프로그램입니다.
            </p>
            <br />
            <p>
              1970년대 방사선종양학자 Carl Simonton 박사에 의해 시작된 이 치료는, "환자의 태도와 감정이 치료 결과에 실질적 영향을 미친다"는 통합적 관점에 뿌리를 두고 있습니다.
            </p>
            <br />
            <p>
              사이먼튼 테라피는 단지 '심리적 지지'를 넘어 생존율 향상과 삶의 질 개선을 위한 실천적 접근으로 전 세계 암 센터와 통합의학기관에서 널리 활용되고 있습니다.
            </p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>주요 구성 요소</h2>
            <br />
            <p><strong>스트레스 및 감정 관리</strong></p>
            <p>분노, 불안, 좌절 등 억압된 감정의 인식과 해소</p>
            <br />
            <p><strong>심상 훈련(Guided Imagery)</strong></p>
            <p>암세포에 대응하는 면역세포의 이미지화를 통한 자기 치유력 강화</p>
            <br />
            <p><strong>의미 중심 상담</strong></p>
            <p>삶의 목적, 가치, 희망을 회복하는 내면 탐색</p>
            <br />
            <p><strong>행동 변화 촉진</strong></p>
            <p>건강한 생활습관과 심리적 지지체계 구축</p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>사이먼튼 테라피의 새로운 관점</h2>
            <br />
            <p>
              암은 단지 세포의 돌연변이가 아니라, 삶 전체가 우리에게 던지는 깊고도 거대한 질문입니다.
            </p>
            <br />
            <p>
              "지금의 나로 살아가는 이 삶은 정말 괜찮은가?"<br />
              "나는 어떤 감정과 생각으로, 어떤 리듬으로 나를 살아내고 있는가?"
            </p>
            <br />
            <p>
              사이먼튼 테라피(Simonton Therapy)는
              이 질문에 귀 기울이고 그 질문 속에서 다시 살아갈 수 있는 나만의 방식을 찾아가는 심리 정서적 치유 여정입니다.
            </p>
            <br />
            <p>
              칼 사이먼튼(Carl Simonton) 박사는 말했습니다.<br />
              "치료는 의사가 하지만, 치유는 환자 스스로의 선택에서 시작된다."
            </p>
            <br />
            <p>
              그는 암 치료의 성패는 단지 항암제의 종류나 수술 여부가 아니라, 환자의 마음 상태, 삶에 대한 태도, 관계 속에서의 지지 경험과 같은 비물질적인 요소에서 결정된다고 보았습니다.
            </p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}