'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface ImageSliderProps {
  images: Array<{
    src: string
    alt: string
  }>
  className?: string
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: 0.1 },
  },
}

export default function ImageSlider({
  images,
  className = 'concept_slider',
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="slide-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              display: index === currentIndex ? 'block' : 'none',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>

      <div className="slider-nav">
        {images.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  )
}
