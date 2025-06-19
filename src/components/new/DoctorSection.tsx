'use client'

import { motion } from 'framer-motion'
// import InViewWrapper from './InViewWrapper'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 },
  },
}

export default function DoctorSection() {
  return (
    <section className="top_doctor">
      {/* <InViewWrapper animation="inv" className="cover">
        <div></div>
      </InViewWrapper> */}
      <div className="wrap flex">
        <h2>
          <span className="narw">원장소개</span>
        </h2>
        <p className="img">
          <img src="/img/drtanaka_sp.jpg" alt="원장" width={400} height={500} />
        </p>
        <motion.div
          className="prof"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* <InViewWrapper animation="inview"> */}
          <h3>
            <span className="narw">이동훈(토마스)</span>
          </h3>
          {/* </InViewWrapper> */}
          <motion.div
            className="prof1"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            대학원에서 생물공학을 전공한 후 의과대학에서 통합의학을 전공하였다.
            <br />
            현재 암 환자를 돕는 데카르트하우스 &lt;내면의 들판 연구소&gt;의
            &nbsp;
            <span>앵거프리 프로젝트</span>의 대표 활동가
            <br />
            <span>암 환자들</span>을 대변하는 통합의학 컨설턴트
            <br />
            <span>사이먼튼</span> 심리상담가
          </motion.div>
          <motion.div
            className="prof2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p>
              2018년 49세로 반짇고리형 위암 림프 전이 진단으로 위 전체 적출 후
              식도와 소장을 연결하는 수술과 세포독성 항암을 권유받았다. 그러나
              그는 수술과 화학 항암요법을 받지 않았고, 암세포에 대항하지도
              않았다. 치유를 위해서 통합의학에 근거하여 마음과 몸의 제독과 영양
              보급에 헌신적이었고, 암 치유의 가장 큰 걸림돌이 스트레스와 심리적
              불안증이라고 생각하여 암 전문 심리치료와 알아차림 명상에
              열중하였다
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
