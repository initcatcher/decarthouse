'use client'

import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { ReactNode } from 'react'

interface InViewWrapperProps {
  children: ReactNode
  animation?:
    | 'inview'
    | 'deview'
    | 'upview'
    | 'fadein'
    | 'opin'
    | 'splitview'
    | 'inv'
  className?: string
  threshold?: number
  triggerOnce?: boolean
  delay?: number
  duration?: number
}

export default function InViewWrapper({
  children,
  animation = 'inview',
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
  duration = 0.6,
}: InViewWrapperProps) {
  const { ref, isInView, hasTriggered } = useInView({
    threshold,
    triggerOnce,
  })

  // 애니메이션 타입에 따른 초기값과 애니메이션 값 설정
  const getAnimationValues = () => {
    const shouldAnimate = triggerOnce ? hasTriggered : isInView

    switch (animation) {
      case 'inview':
        return {
          initial: { opacity: 0, y: 60 },
          animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
        }
      case 'deview':
        return {
          initial: { opacity: 0, y: -60 },
          animate: shouldAnimate
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: -60 },
        }
      case 'upview':
        return {
          initial: { opacity: 0, y: 80 },
          animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 },
        }
      case 'fadein':
        return {
          initial: { opacity: 0 },
          animate: shouldAnimate ? { opacity: 1 } : { opacity: 0 },
        }
      case 'opin':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: shouldAnimate
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.8 },
        }
      case 'splitview':
        return {
          initial: { opacity: 0, x: -100 },
          animate: shouldAnimate
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: -100 },
        }
      case 'inv':
        return {
          initial: { opacity: 0, scale: 1.2 },
          animate: shouldAnimate
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 1.2 },
        }
      default:
        return {
          initial: { opacity: 0, y: 60 },
          animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
        }
    }
  }

  const { initial, animate } = getAnimationValues()

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${className} ${animation}`}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
