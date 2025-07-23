'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 },
  },
}

export default function MedicalGuideSection() {
  return (
    <section className="top_guide">
      <div className="wrap">
        <motion.div
          className="titles inview"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>
            <span className="narw">진료안내</span>
          </h2>
        </motion.div>
        <div className="one flex">
          <motion.section
            className="mono inview"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link href="#">
              <h3>
                <span className="narw">통합의학</span>
              </h3>
              <p className="exp">
              통합의학 카운슬링(Integrative Medicine Counseling)은
              의학적 진단과 치료를 넘어, 환자의 심리사회적, 정서적, 생활환경적 요인을 통합적으로 탐색하여 보다 지속가능한 회복을 돕는 전문 상담 프로그램입니다.
              </p>
            </Link>
          </motion.section>
          <p className="btn sp" style={{ marginBottom: '2.5em' }}>
            <Link href="/diabetes/">자세히 보기</Link>
          </p>
          <motion.section
            className="di inview"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link href="#">
              <h3>
                <span className="narw">사이먼튼테라피</span>
              </h3>
              <p className="exp">
              사이먼튼 테라피(Simonton Therapy)는 암을 비롯한 만성 질환 환자들의 심리적 회복력과 삶의 질 향상을 목적으로 개발된 심신의학 기반의 심리교육 및 상담 프로그램입니다.
              1970년대 방사선종양학자 Carl Simonton 박사에 의해 시작된 이 치료는, “환자의 태도와 감정이 치료 결과에 실질적 영향을 미친다”는 통합적 관점에 뿌리를 두고 있습니다.
              </p>
            </Link>
          </motion.section>
          <p className="btn sp" style={{ marginBottom: '2.5em' }}>
            <Link href="/lifestyle-diseases/">자세히 보기</Link>
          </p>
        </div>
        <div className="two flex">
          <motion.section
            className="tri inview"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link href="#">
              <h3>
                <span className="narw">생활습관의학</span>
              </h3>
              <p className="exp">
              생활습관의학(Lifestyle Medicine)은 과학적 근거에 기반하여, 비약물적 치료를 통해 만성질환의 예방 치료를 추구하는 의학의 한 분야입니다. 제2형 당뇨병, 고혈압, 고지혈증, 심혈관질환, 비만, 일부 암, 우울증, 수면장애 등에 적용될 수 있습니다.
              </p>
            </Link>
          </motion.section>
          <p className="btn sp" style={{ marginBottom: '2.5em' }}>
            <Link href="/thyroid/">자세히 보기</Link>
          </p>
          <motion.section
            className="tetra inview"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link href="#">
              <h3>
                <span className="narw">앵거프리</span>
              </h3>
              <p className="exp">
              앵거프리 21일 프로젝트는 ‘분노’라는 감정을 억제하지 않으면서 일상 속에서 심리적 유연성과 감정조절력을 키워나가는 자가 실천 프로그램입니다.
              <br />
              1) 21일간 매일 1개의 감정 과제
              <br />
              2) 고무밴드, 감정일기, 감각카드 등 도구 활용
              <br />
              3) 감정인식 → 반응멈춤 → 가치기반 선택 훈련
              <br />
              4) 수용전념치료(ACT) 이론에 기반합니다. 
              </p>
            </Link>
          </motion.section>
          <p className="btn sp">
            <Link href="#">자세히 보기</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
