'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import InViewWrapper from './InViewWrapper'

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, delay: 0.1 },
  },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Border 애니메이션 variants
const borderVariants = {
  top: {
    initial: { scaleX: 0, transformOrigin: 'left' },
    hover: { scaleX: 1, transformOrigin: 'left' },
  },
  bottom: {
    initial: { scaleX: 0, transformOrigin: 'right' },
    hover: { scaleX: 1, transformOrigin: 'right' },
  },
  left: {
    initial: { scaleY: 0, transformOrigin: 'bottom' },
    hover: { scaleY: 1, transformOrigin: 'bottom' },
  },
  right: {
    initial: { scaleY: 0, transformOrigin: 'top' },
    hover: { scaleY: 1, transformOrigin: 'top' },
  },
}

export default function TopNavigation() {
  return (
    <nav className="topnav">
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        style={{ listStyle: 'none', padding: 0, margin: 0 }}
      >
        <motion.li variants={fadeIn} style={{ listStyle: 'none' }}>
          <motion.div
            style={{
              position: 'relative',
              display: 'inline-block',
            }}
            initial="initial"
            whileHover="hover"
          >
            <Link
              href="#concept"
              style={{
                padding: '4px 30px 5px',
                display: 'block',
                position: 'relative',
                textAlign: 'center',
              }}
            >
              <span
                className="narw92"
                style={{ transform: 'translateY(-2px)' }}
              >
                컨셉
              </span>

              {/* Top border */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-current"
                variants={borderVariants.top}
                transition={{ duration: 0.3 }}
              />

              {/* Right border */}
              <motion.div
                className="absolute top-0 right-0 w-0.5 h-full bg-current"
                variants={borderVariants.right}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              {/* Bottom border */}
              <motion.div
                className="absolute bottom-0 right-0 w-full h-0.5 bg-current"
                variants={borderVariants.bottom}
                transition={{ duration: 0.3, delay: 0.2 }}
              />

              {/* Left border */}
              <motion.div
                className="absolute bottom-0 left-0 w-0.5 h-full bg-current"
                variants={borderVariants.left}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.li>
        <motion.li variants={fadeIn} style={{ listStyle: 'none' }}>
          <span className="menues">
            <span className="narw92" style={{ transform: 'translateY(-2px)' }}>
              진료안내
            </span>
          </span>
          <ul
            className="menu-child"
            style={{ listStyle: 'none', padding: 0, margin: 0 }}
          >
            <motion.li style={{ listStyle: 'none' }}>
              <motion.div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  href="/integrative-medicine/"
                  style={{
                    padding: '4px 30px 5px',
                    display: 'block',
                    position: 'relative',
                    textAlign: 'center',
                  }}
                >
                  <span
                    className="narw92"
                    style={{ transform: 'translateY(-2px)' }}
                  >
                    통합의학
                  </span>

                  {/* Top border */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-current"
                    variants={borderVariants.top}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Right border */}
                  <motion.div
                    className="absolute top-0 right-0 w-0.5 h-full bg-current"
                    variants={borderVariants.right}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />

                  {/* Bottom border */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-current"
                    variants={borderVariants.bottom}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />

                  {/* Left border */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0.5 h-full bg-current"
                    variants={borderVariants.left}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.li>
            <motion.li style={{ listStyle: 'none' }}>
              <motion.div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  href="/simonton-therapy/"
                  style={{
                    padding: '4px 30px 5px',
                    display: 'block',
                    position: 'relative',
                    textAlign: 'center',
                  }}
                >
                  <span
                    className="narw92"
                    style={{ transform: 'translateY(-2px)' }}
                  >
                    사이먼튼테라피
                  </span>

                  {/* Top border */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-current"
                    variants={borderVariants.top}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Right border */}
                  <motion.div
                    className="absolute top-0 right-0 w-0.5 h-full bg-current"
                    variants={borderVariants.right}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />

                  {/* Bottom border */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-current"
                    variants={borderVariants.bottom}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />

                  {/* Left border */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0.5 h-full bg-current"
                    variants={borderVariants.left}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.li>
            <motion.li style={{ listStyle: 'none' }}>
              <motion.div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  href="/lifestyle-medicine/"
                  style={{
                    padding: '4px 30px 5px',
                    display: 'block',
                    position: 'relative',
                    textAlign: 'center',
                  }}
                >
                  <span
                    className="narw92"
                    style={{ transform: 'translateY(-2px)' }}
                  >
                    생활습관의학
                  </span>

                  {/* Top border */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-current"
                    variants={borderVariants.top}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Right border */}
                  <motion.div
                    className="absolute top-0 right-0 w-0.5 h-full bg-current"
                    variants={borderVariants.right}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />

                  {/* Bottom border */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-current"
                    variants={borderVariants.bottom}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />

                  {/* Left border */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0.5 h-full bg-current"
                    variants={borderVariants.left}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.li>
            <motion.li style={{ listStyle: 'none' }}>
              <motion.div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  href="/anger-free/"
                  style={{
                    padding: '4px 30px 5px',
                    display: 'block',
                    position: 'relative',
                    textAlign: 'center',
                  }}
                >
                  <span
                    className="narw92"
                    style={{ transform: 'translateY(-2px)' }}
                  >
                    앵거프리
                  </span>

                  {/* Top border */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-0.5 bg-current"
                    variants={borderVariants.top}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Right border */}
                  <motion.div
                    className="absolute top-0 right-0 w-0.5 h-full bg-current"
                    variants={borderVariants.right}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />

                  {/* Bottom border */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-full h-0.5 bg-current"
                    variants={borderVariants.bottom}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />

                  {/* Left border */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0.5 h-full bg-current"
                    variants={borderVariants.left}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.li>
          </ul>
        </motion.li>
        <motion.li variants={fadeIn} style={{ listStyle: 'none' }}>
          <motion.div
            style={{
              position: 'relative',
              display: 'inline-block',
            }}
            initial="initial"
            whileHover="hover"
          >
            <Link
              href="#doctor"
              style={{
                padding: '4px 30px 5px',
                display: 'block',
                position: 'relative',
                textAlign: 'center',
              }}
            >
              <InViewWrapper animation="opin">
                <span
                  className="narw92"
                  style={{ transform: 'translateY(-2px)' }}
                >
                  인물소개
                </span>
              </InViewWrapper>

              {/* Top border */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-current"
                variants={borderVariants.top}
                transition={{ duration: 0.3 }}
              />

              {/* Right border */}
              <motion.div
                className="absolute top-0 right-0 w-0.5 h-full bg-current"
                variants={borderVariants.right}
                transition={{ duration: 0.3, delay: 0.1 }}
              />

              {/* Bottom border */}
              <motion.div
                className="absolute bottom-0 right-0 w-full h-0.5 bg-current"
                variants={borderVariants.bottom}
                transition={{ duration: 0.3, delay: 0.2 }}
              />

              {/* Left border */}
              <motion.div
                className="absolute bottom-0 left-0 w-0.5 h-full bg-current"
                variants={borderVariants.left}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.li>
      </motion.ul>
    </nav>
  )
}
