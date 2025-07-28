'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import InViewWrapper from './InViewWrapper'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 },
  },
}



export default function ConceptSection() {
  return (
    <section className="top_concept" id="concept">
      <div className="wrap1">
        <div className="one flex">
          <motion.div
            className="txt inview"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2>
              <span className="narw">사이먼튼 심리치료</span>
              <span className="narw">새로운 관점으로 암을 바라보다</span>
            </h2>
            <InViewWrapper animation="inview" className="exp">
              <p>
                오래전부터 우리에게 암에 대해 의학적 결론만을 따르게 한 탓으로
                암을
                잘라내고, 녹이고, 태워죽여야 하는 존재로 인식하는 잘못된
                도그마가 심겨 있었습니다.
                그러나 암은 계속해서 우리에게 마음과 몸이 생명의 질서에서 벗어나
                있음을 알리고 있었습니다.
                이제 우리는 암이 보낸 메시지를 통해 생명의 질서에서 얼마나
                벗어나 있는지 확인해야 합니다.
                암을 대면하고 있는 모든 이가 스스로 마음과 몸의 환경을 관리할 수
                있는 마지막 생명의 기회를 놓치게 해서는 절대 안 됩니다.
              </p>
            </InViewWrapper>
          </motion.div>
          <div className="slides">
            {/* <InViewWrapper animation="inv" className="cover">
              <div></div>
            </InViewWrapper> */}
            <img 
              src="/img/concept1_1.jpg" 
              alt="컨셉 이미지" 
              className="slider"
            />
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="two flex">
          <motion.div
            className="txt"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <InViewWrapper animation="inview" className="exp">
              <p>
                사이먼튼 심리치료는 암 환자들의 심리적 안정과 정서적 회복을{' '}
                <br />
                돕는 통합적인 치료 접근법입니다. 암 치료 과정에서의 스트레스와
                불안은 몸과 마음 모두에 큰 영향을 미칠 수 있습니다.
                <br />이 치료법은 과학적 연구를 기반으로 심리적 안정을 찾고
                긍정적인 마음가짐을 통해 치유력을 극대화하는 데 중점을 둡니다.
              </p>
            </InViewWrapper>
            {/* <InViewWrapper animation="inview" className="btn">
              <p>
                <Link href="/concept/">진료 컨셉</Link>
              </p>
            </InViewWrapper> */}
          </motion.div>
          <div className="slides">
            {/* <InViewWrapper animation="inv" className="cover">
              <div></div>
            </InViewWrapper> */}
            <img 
              src="/img/concept2_1.jpg" 
              alt="컨셉 이미지" 
              className="slider"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
