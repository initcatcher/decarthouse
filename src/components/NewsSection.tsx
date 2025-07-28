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

export default function NewsSection() {
  return (
    <section className="top_news">
      <div className="wrap flex">
        <motion.div
          className="titles inview"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>
            <span className="narw">공지사항</span>
          </h2>

          <div className="box01">
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <span className="date">2025.04.01</span>
                <span className="title">
                  <Link href="/news/" className="link">
                    새로운 외래진료를 시작합니다
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="box01">
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <span className="date">2025.04.01</span>
                <span className="title">
                  <Link href="/news/" className="link">
                    특별 휴진 안내
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="box01">
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <span className="date">2025.03.31</span>
                <span className="title">
                  <Link href="/news/" className="link">
                    정보통신기기를 이용한 진료에서의 향정신약 처방 취급
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="box01">
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <span className="date">2024.03.26</span>
                <span className="title">
                  <Link href="/news/" className="link">
                    원장의 미디어 출연 정보를 업데이트했습니다.
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="box01">
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <span className="date">2023.02.16</span>
                <span className="title">
                  <Link href="/news/" className="link">
                    전체 게놈 분석을 시작합니다.
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="box01">
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <span className="date">2023.02.17</span>
                <span className="title">
                  <Link href="/news/" className="link">
                    주식회사 iLAC과 전체 유전자 발현 분석으로 연계 협정을
                    체결했습니다.
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
