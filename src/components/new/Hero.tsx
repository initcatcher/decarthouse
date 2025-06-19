'use client'

import { motion } from 'framer-motion'
// import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0, scale: 1.035 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, delay: 0.1 },
  },
}

export default function Hero() {
  return (
    <>
      {/* Mobile Contact Links */}
      {/* <div className="splinks">
        <p className="sptel">
          <Link href="tel:03-6274-6007">전화하기</Link>
        </p>
      </div> */}

      {/* Main Video Section */}
      <div className="topmv">
        <div className="background">
          <div className="background-wrap">
            <div className="background-movie">
              <div id="background-movie-player">
                <motion.video
                  className="video"
                  id="main_pc"
                  poster="/img/image.jpg"
                  loop
                  muted
                  playsInline
                  autoPlay
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                >
                  <source src="/movie/top_mv.mp4" type="video/mp4" />
                </motion.video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
