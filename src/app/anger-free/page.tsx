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

export default function AngerFree() {
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
            앵거프리
          </motion.h1>
          
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p>
              앵거프리 21일 프로젝트는
              &apos;분노&apos;라는 감정을 억제하지 않으면서 일상 속에서 심리적 유연성과 감정조절력을 키워나가는 자가 실천 프로그램입니다.
            </p>
            <br />
            <p>수용전념치료(ACT) 이론에 기반합니다.</p>
            <br />
            <p>
              당신이 감정을 선택할 수 있을 때 삶도 다시 선택할 수 있습니다.
              작지만 강력한 21일의 훈련으로 분노에 휘둘리지 않는 자신을 만나보세요.
            </p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>프로그램 구성</h2>
            <br />
            <p><strong>1) 21일간 매일 1개의 감정 과제</strong></p>
            <br />
            <p><strong>2) 고무밴드, 감정일기, 감각카드 등 도구 활용</strong></p>
            <br />
            <p><strong>3) 감정인식 → 반응멈춤 → 가치기반 선택 훈련</strong></p>
            <br />
            <p><strong>4) 수용전념치료(ACT) 이론에 기반</strong></p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>주요 효과</h2>
            <br />
            <p>분노의 원인을 더 깊이 이해</p>
            <br />
            <p>충동적 반응을 줄이고 감정 거리두기 향상</p>
            <br />
            <p>삶의 우선순위 재정비 및 자기 인식 확대</p>
          </motion.section>

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>앵거프리 프로젝트</h2>
            <br />
            <p>
              분노는 억제해야 할 감정이 아니라, 이해하고 안전하게 표현할 수 있어야 할 메시지입니다.
            </p>
            <br />
            <p>
              21일 챌린지를 비롯한 감정 조절 프로그램은 &apos;화내지 않는 사람&apos;이 아닌, &apos;화가 나도 나를 지킬 수 있는 사람&apos;으로 성장하도록 돕습니다.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  )
}