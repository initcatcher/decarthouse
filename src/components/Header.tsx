'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import InViewWrapper from './InViewWrapper';
import { ADDRESS, PHONE_NUMBER, PHONE_NUMBER_2 } from './utils';

// Smooth scroll 함수
const smoothScrollTo = (targetId: string) => {
  const element = document.getElementById(targetId.replace('#', ''));
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      smoothScrollTo(href);
    }
    setIsMenuOpen(false); // 메뉴 닫기
  };

  return (
    <motion.header
      initial={{ visibility: 'hidden' }}
      animate={{ visibility: 'visible' }}
      transition={{ delay: 0.5 }}
    >
      <h1 className='logo'>
        <Link href='/'>
          <img
            src='/img/logo.png'
            alt='데카르트하우스 클리닉'
            width={282}
            height={50}
          />
        </Link>
      </h1>

      <div className='infos'>
        <div className='tel flex flex-col'>
          <div className='phone'>
            <span className='contact'>예약 및 문의</span>
            <span className='num'>
              <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
            </span>
          </div>
          <div className='phone'>
            <span className='contact'>위치</span>
            <span className='num'>{ADDRESS}</span>
          </div>
        </div>

        <div className='time-date'>
          <p className='time'>
            진료시간 : <span className='en'>9:30</span>～
            <span className='en'>13:00 / 14:30</span>～
            <span className='en'>18:30</span>
          </p>
          <p className='date'>진료일: 월～금 / 휴진일: 토일공휴일</p>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div id='nav-humbg'>
        <input
          className='nav-unshown'
          id='nav-input'
          type='checkbox'
          checked={isMenuOpen}
          onChange={handleMenuToggle}
        />
        <label id='nav-open' htmlFor='nav-input'>
          <span></span>
        </label>
        <label
          className='nav-unshown'
          id='nav-close'
          htmlFor='nav-input'
        ></label>
        <div id='nav-content'>
          <ul>
            <li>
              <Link href='#' onClick={() => setIsMenuOpen(false)}>
                <InViewWrapper animation='opin'>
                  <span className='narw92'>컨셉</span>
                  <span className='line'></span>
                </InViewWrapper>
              </Link>
            </li>
            <li>
              <span className='menues'>
                <InViewWrapper animation='opin'>
                  <span className='narw92'>진료안내</span>
                  <span className='line'></span>
                </InViewWrapper>
              </span>
              <ul className='menu-child'>
                <li>
                  <Link
                    href='/integrative-medicine/'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className='narw92'>통합의학</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/simonton-therapy/'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className='narw92'>사이먼튼테라피</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/lifestyle-medicine/'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className='narw92'>생활습관의학</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href='/anger-free/'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className='narw92'>앵거 매니지먼트</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='#' onClick={() => setIsMenuOpen(false)}>
                <InViewWrapper animation='opin'>
                  <span className='narw92'>인물소개</span>
                  <span className='line'></span>
                </InViewWrapper>
              </Link>
            </li>
          </ul>
          <p className='contact'>예약 및 문의</p>
          <p className='num'>
            <Link href={`tel:${PHONE_NUMBER}`}>
              <span className='en'>{PHONE_NUMBER}</span>
            </Link>
            <br />
            <Link href={`tel:${PHONE_NUMBER_2}`}>
              <span className='en'>{PHONE_NUMBER_2}</span>
            </Link>
          </p>
          <p className='time'>
            상담시간: <br />
            주중 <span className='en'>오전10:00</span> ~{' '}
            <span className='en'>오후 6:00</span>
            <br />
            주말 <span className='en'>오전 10:00</span> ~{' '}
            <span className='en'>오후 3:00</span>
          </p>
        </div>
      </div>
    </motion.header>
  );
}
