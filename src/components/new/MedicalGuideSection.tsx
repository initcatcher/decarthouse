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
            <span className="narw">외래진료</span>
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
            <Link href="/diabetes/">
              <h3>
                <span className="narw">당뇨병</span>
              </h3>
              <p className="sub">1형 당뇨병 / 2형 당뇨병 / 당 대사 이상</p>
              <p className="exp">
                당뇨병은 단순한 혈당 수치의 문제가 아닙니다. 그것은 우리 몸의
                에너지 대사 시스템이 보내는 신호이며, 삶의 균형을 되찾아야
                한다는 메시지입니다. 인슐린 주사나 약물치료는 물론,
                식사·운동·수면 등의 생활 요소들을 통합적으로 관리하여 환자님만의
                맞춤형 치료를 제공합니다. 관리 영양사와의 상담을 통해 음식과
                몸의 조화를 찾습니다.
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
            <Link href="/lifestyle-diseases/">
              <h3>
                <span className="narw">생활습관병</span>
              </h3>
              <p className="sub">생활습관병 통합 치료</p>
              <p className="exp">
                생활습관병은 단순히 잘못된 식사나 운동 부족으로 생기는 병이
                아닙니다. 그것은 삶의 방식 자체가 균형을 잃었음을, 존재의 리듬이
                왜곡되었음을 우리 몸이 고통으로 알려오는 철학적 알림입니다.
                생활습관병을 치유한다는 것은 단지 몸을 고치는 일이 아니라, 삶의
                태도를 재구성하는 일입니다. 그것은 &apos;치료&apos;가 아닌,
                &apos;회복&apos;이며, &apos;정복&apos;이 아닌,
                &apos;조화&apos;입니다.
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
            <Link href="/thyroid/">
              <h3>
                <span className="narw">내분비·갑상선</span>
              </h3>
              <p className="sub">
                각종 갑상선 질환 / 갑상선 기능 이상에 의한 불임
              </p>
              <p className="exp">
                바세도우병 등의 갑상선 기능 항진증, 하시모토병 등의 갑상선 기능
                저하증, 갑상선종대·종양 등의 전문진료를 실시하고 있습니다. 또한,
                갑상선 호르몬의 이상이 관계하는 불임의 치료에도 힘쓰고 있습니다.
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
            <Link href="/sas/">
              <h3>
                <span className="narw">수면무호흡증후군</span>
              </h3>
              <p className="sub">코골이 / 기상시의 두통 / 야간각성</p>
              <p className="exp">
                수면의 질을 검사하여, 중증도에 맞춘 치료를 실시합니다. 중등증
                이상의 분에게는 원칙 CPAP치료를 실시하고, 빈맥, 고혈압, 2형
                당뇨병, 동맥경화성의 합병증의 유무를 정기적으로 체크합니다.
              </p>
            </Link>
          </motion.section>
          <p className="btn sp">
            <Link href="/sas/">자세히 보기</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
