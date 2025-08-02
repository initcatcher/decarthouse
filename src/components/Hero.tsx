'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PHONE_NUMBER } from './utils';

const fadeIn = {
  hidden: { opacity: 0, scale: 1.035 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, delay: 0.1 },
  },
};

const textFadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay: 0.8 },
  },
};

const buttonFadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, delay: 1.2 },
  },
};

export default function Hero() {
  return (
    <>
      {/* Main Hero Section */}
      <div className='px-[3%] md:px-[6.5%]'>
        <motion.div
          className='relative w-full h-[calc(100vh-120px)] md:h-[calc(100vh-8vh)] lg:h-[calc(100vh-70px)] overflow-hidden mx-auto'
          variants={fadeIn}
          initial='hidden'
          animate='show'
        >
          {/* Background Image */}
          <Image
            src='/img/hero.jpg'
            alt='Hero image'
            fill
            className='object-cover object-center md:object-right'
            priority
          />

          {/* Text Overlay */}
          <div className='absolute inset-10 z-10 p-8 md:p-16 lg:p-20 text-left'>
            <div className='mt-16 md:mt-20 lg:mt-24'>
              <motion.div
                variants={textFadeIn}
                initial='hidden'
                animate='show'
                className='text-white mb-8 md:mb-12 px-4 md:px-8 lg:px-12'
              >
                <h1 className='text-3xl md:text-6xl lg:text-7xl font-light mb-4 md:mb-6 tracking-wide leading-relaxed'>
                  내면의 가치를 향한 여정
                </h1>
                <p className='text-2xl md:text-6xl lg:text-7xl font-light tracking-wide leading-relaxed'>
                  마음을 비워내는 치유의시간
                </p>
              </motion.div>

              <motion.div
                variants={buttonFadeIn}
                initial='hidden'
                animate='show'
                className='px-4 md:px-8 lg:px-12'
              >
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className='inline-block px-8 py-4 md:px-16 md:py-8 lg:px-20 lg:py-10 border-2 border-white text-white text-lg md:text-2xl lg:text-3xl font-light tracking-wide hover:bg-white transition-all duration-300 relative overflow-hidden group'
                >
                  <span className='relative z-10 text-white hover:text-black'>
                    상담 예약하기
                  </span>
                  <div className='absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300'></div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
