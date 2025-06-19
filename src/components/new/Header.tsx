'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import InViewWrapper from './InViewWrapper'

// Smooth scroll 함수
const smoothScrollTo = (targetId: string) => {
  const element = document.getElementById(targetId.replace('#', ''))
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      smoothScrollTo(href)
    }
    setIsMenuOpen(false) // 메뉴 닫기
  }

  return (
    <motion.header
      initial={{ visibility: 'hidden' }}
      animate={{ visibility: 'visible' }}
      transition={{ delay: 0.5 }}
    >
      <h1 className="logo">
        <Link href="/">
          <img
            src="/img/logo.png"
            alt="데카르트하우스 클리닉"
            width={282}
            height={50}
          />
        </Link>
      </h1>

      <div className="infos">
        <div className="tel">
          <div className="phone">
            <span className="contact">예약 및 문의</span>
            <span className="num">
              <Link href="tel:010-2222-3333">010-2222-3333</Link>
            </span>
          </div>
        </div>
        <div className="time-date">
          <p className="time">
            진료시간 : <span className="en">9:30</span>～
            <span className="en">13:00 / 14:30</span>～
            <span className="en">18:30</span>
          </p>
          <p className="date">
            진료일: 월～금 / 휴진일: 토일공휴일
            <span className="completely">완전예약제</span>
          </p>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div id="nav-humbg">
        <input
          className="nav-unshown"
          id="nav-input"
          type="checkbox"
          checked={isMenuOpen}
          onChange={handleMenuToggle}
        />
        <label id="nav-open" htmlFor="nav-input">
          <span></span>
        </label>
        <label
          className="nav-unshown"
          id="nav-close"
          htmlFor="nav-input"
        ></label>
        <div id="nav-content">
          <ul>
            <li>
              <Link href="/concept/" onClick={() => setIsMenuOpen(false)}>
                <InViewWrapper animation="opin">
                  <span className="narw92">컨셉</span>
                  <span className="line"></span>
                </InViewWrapper>
              </Link>
            </li>
            <li>
              <span className="menues">
                <InViewWrapper animation="opin">
                  <span className="narw92">진료안내</span>
                  <span className="line"></span>
                </InViewWrapper>
              </span>
              <ul className="menu-child">
                <li>
                  <Link href="/diabetes/" onClick={() => setIsMenuOpen(false)}>
                    <span className="narw92">당뇨병</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lifestyle-diseases/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="narw92">생활습관병</span>
                  </Link>
                </li>
                <li>
                  <Link href="/thyroid/" onClick={() => setIsMenuOpen(false)}>
                    <span className="narw92">내분비·갑상선</span>
                  </Link>
                </li>
                <li>
                  <Link href="/sas/" onClick={() => setIsMenuOpen(false)}>
                    <span className="narw92">수면무호흡증</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/doctors/" onClick={() => setIsMenuOpen(false)}>
                <InViewWrapper animation="opin">
                  <span className="narw92">의사소개</span>
                  <span className="line"></span>
                </InViewWrapper>
              </Link>
            </li>
            <li>
              <Link href="/news/" onClick={() => setIsMenuOpen(false)}>
                <InViewWrapper animation="opin">
                  <span className="narw92">공지사항</span>
                  <span className="line"></span>
                </InViewWrapper>
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick('#access')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                <InViewWrapper animation="opin">
                  <span className="narw92">오시는길</span>
                  <span className="line"></span>
                </InViewWrapper>
              </button>
            </li>
          </ul>
          <p className="contact">예약 및 문의</p>
          <p className="num">
            <Link href="tel:03-6274-6007">
              <span className="en">03-6274-6007</span>
            </Link>
          </p>
          <p className="completely">완전예약제</p>
          <p className="time">
            진료시간 : <br />
            <span className="en">9:30</span>～
            <span className="en">13:00 / 14:30</span>～
            <span className="en">18:30</span>
          </p>
          <p className="date">진료일: 월～금 / 휴진일: 토일공휴일</p>
        </div>
      </div>
    </motion.header>
  )
}
