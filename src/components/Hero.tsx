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

      {/* Main Hero Section */}
      <div className="topmv">
        <motion.div 
          className="background"
          variants={fadeIn}
          initial="hidden"
          animate="show"
        >
        </motion.div>
      </div>
    </>
  )
}
