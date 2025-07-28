'use client'

import Image from 'next/image'
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
    <section className="top_doctor" style={{ position: 'relative' }}>
      <Image 
        src="/img/dr-shunichi_토마스.jpg" 
        alt="원장 배경" 
        fill
        priority
        style={{
          objectFit: 'cover',
          zIndex: -1
        }}
      />
      {/* <InViewWrapper animation="inv" className="cover">
        <div></div>
      </InViewWrapper> */}
      <div className="wrap flex">
        <h2>
          <span className="narw">카운슬러 소개</span>
        </h2>
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
            토마스(Tomas)는 생물공학을 전공한 후 의과대학에서 통합의학을 연구하며, 생명과학과 의학의 경계를 넘나드는 통합적 시야를 바탕으로 암 환자들과 깊이 교감해온 실천가입니다.
            <br />
            현재는 암 환자의 정서적 회복과 삶의 질 향상을 돕는 통합의학 플랫폼 <span>&apos;데카르트하우스 &lt;내면의 들판 연구소&gt;&apos;</span>의 대표 활동가로 활동 중이며,
            <br />
            <span>사이먼튼</span> 심리상담가, <span>통합의학 컨설턴트</span>, <span>&apos;앵거프리 프로젝트&apos;</span> 운영자로서 암과 싸우는 많은 환우들의 삶에 실제적인 도움을 주고 있습니다.
          </motion.div>
          {/* <motion.div
            className="prof2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p>
              2018년, 저는 49세의 나이에 위 전체에 걸친 반짇고리형 위암과 림프 전이라는 중대한 진단을 받았습니다. 당시 식도와 소장을 연결하는 전절제 수술과 고용량 세포독성 항암요법을 권유받았지만, 저는 수술과 화학 항암을 선택하지 않았습니다. 암과 싸우기보다는 몸과 마음을 정화하고 회복하는 길을 선택했습니다.
            </p>
            <p>
              저는 통합의학적 접근을 기반으로 한 자기 치유 여정에 뛰어들어, 해독과 영양, 생활습관 개선에 헌신하며, 심리적 회복과 스트레스 완화의 중요성을 인식하고 암 전문 심리치료와 알아차림 명상에 깊이 몰입했습니다.
            </p>
            <p>
              그 결과, 그는 진단 3년 만에 암을 자연적으로 관해시키며 스스로의 회복력을 입증했고, 현재는 암을 새로운 삶의 전환점으로 바라보는 통합의학적 시각을 바탕으로, 암 환우들에게 현실적인 길잡이이자 동반자가 되고자 제2의 삶을 살고 있습니다.
            </p>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}
