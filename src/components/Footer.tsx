'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import InViewWrapper from './InViewWrapper'
import { PHONE_NUMBER } from './utils'

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 },
  },
}

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <motion.div
          className="one flex"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <InViewWrapper animation="inview" className="txt">
            <div>
              <h2>
                <img
                  src="/img/logo.png"
                  alt="데카르트하우스 클리닉"
                  width={300}
                  height={50}
                />
              </h2>
              <p className="exp">
                당원에서는 「예약진료」를 실시하고 있습니다.
                <br />
                처음 오시는 분도, 당일 전화로 예약이 가능합니다.
                <br />
                일반 진료는 보험적용입니다.
              </p>
              <section className="treat flex">
                <h3>진료내용</h3>
                <p className="con">
                </p>
              </section>
              <div className="times">
                <table>
                  <tbody>
                    <tr className="mono">
                      <th className="title">
                        <span className="narw">접수시간</span>
                      </th>
                      <th>월</th>
                      <th>화</th>
                      <th>수</th>
                      <th>목</th>
                      <th>금</th>
                      <th>토</th>
                      <th>일</th>
                    </tr>
                    <tr className="di">
                      <td>
                        <span className="jp">오전：</span>
                        <span className="en">9:30</span>～
                        <span className="en">13:00</span>
                      </td>
                      <td>◯</td>
                      <td>◯</td>
                      <td>◯</td>
                      <td>◯</td>
                      <td>◯</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                    <tr className="tres">
                      <td>
                        <span className="jp">오후：</span>
                        <span className="en">14:30</span>～
                        <span className="en">18:30</span>
                      </td>
                      <td>◯</td>
                      <td>◯</td>
                      <td>◯</td>
                      <td>◯</td>
                      <td>◯</td>
                      <td>×</td>
                      <td>×</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </InViewWrapper>
          <div className="maps" id="access">
            <div className="map">
              {/* <InViewWrapper animation="inv" className="cover">
                <div></div>
              </InViewWrapper> */}
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.3125317565235!2d139.76388454090392!3d35.67084265817415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x316b049f848a74aa!2z6YqA5bqn44Kv44Oq44OL44OD44Kv!5e0!3m2!1sen!2sjp!4v1605104933795!5m2!1sen!2sjp"
                width="100%"
                height="415"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
              /> */}
            </div>
            {/* <InViewWrapper animation="inview" className="flex"> */}
            <div className="footer-map">
              <div className="address">
                <p>
                  〒104-0061 <br className="sp" />
                  서울특별시 강남구 테헤란로 123 데카르트빌딩 5층
                </p>
                <p>지하철 2호선 「강남역」 6번출구에서 도보 5분</p>
              </div>
              <Link href="https://maps.google.com" target="_blank">
                <span className="en">Google Map</span>
              </Link>
            </div>
            {/* </InViewWrapper> */}
          </div>
        </motion.div>
        <motion.div
          className="two infos"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="tel">
            <div className="phone">
              <span className="contact">예약・문의</span>
              <span className="num">
                <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
              </span>
            </div>
          </div>
          <div className="time-date">
            <p className="completely sp">완전예약제</p>
            <p className="time">
              진료시간 : <br className="sp" />
              <span className="en">9:30</span>～
              <span className="en">13:00 / 14:30</span>～
              <span className="en">18:30</span>
            </p>
            <p className="date">
              진료일：월～금 / 휴진일：토일공휴일
              <span className="completely pc">완전예약제</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          className="thr flex"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <ul>
            <li>
              <Link href="https://minatomirai.or.jp/" target="_blank">
                의료법인 데카르트하우스（법인사이트）
              </Link>
            </li>
            <li>
              <Link
                href="https://job-medley.com/facility/284782/"
                target="_blank"
              >
                채용정보
              </Link>
            </li>
            <li>
              <Link
                href="https://minatomirai-clinic.com/privacy-policy/"
                target="_blank"
              >
                개인정보보호방침
              </Link>
            </li>
          </ul>
          <p className="copy">
            <span className="en">2022 c Medical Corporation Decarthouse</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
