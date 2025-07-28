'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SliderImage {
  src: string
  alt: string
}

interface ReactSliderProps {
  images: SliderImage[]
  auto?: boolean
  speed?: number
  pause?: number
  mode?: 'fade' | 'slide'
  className?: string
  showPager?: boolean
  showControls?: boolean
}

const fadeVariants = {
  enter: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  center: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

export default function ReactSlider({
  images,
  auto = true,
  speed = 1000,
  pause = 2500,
  mode = 'fade',
  className = 'react-slider',
  showPager = false,
  showControls = false,
}: ReactSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [isHovered, setIsHovered] = useState(false)

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setCurrentIndex((prevIndex) => {
        if (newDirection === 1) {
          return prevIndex === images.length - 1 ? 0 : prevIndex + 1
        } else {
          return prevIndex === 0 ? images.length - 1 : prevIndex - 1
        }
      })
    },
    [images.length]
  )

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!auto || isHovered) return

    timeoutRef.current = setTimeout(() => {
      paginate(1)
    }, pause)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex, auto, pause, isHovered, paginate])

  const variants = mode === 'fade' ? fadeVariants : slideVariants

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        mode={mode === 'fade' ? 'wait' : 'sync'}
      >
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: speed / 1000,
            ease: [0.165, 0.84, 0.44, 1], // cubic-bezier from original
          }}
          style={{
            position: mode === 'slide' ? 'absolute' : 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {showControls && (
        <>
          <button
            onClick={() => paginate(-1)}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              cursor: 'pointer',
              zIndex: 2,
            }}
          >
            ❮
          </button>
          <button
            onClick={() => paginate(1)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.5)',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              cursor: 'pointer',
              zIndex: 2,
            }}
          >
            ❯
          </button>
        </>
      )}

      {showPager && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px',
            zIndex: 2,
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background:
                  index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
