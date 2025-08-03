"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ADDRESS, PHONE_NUMBER, PHONE_NUMBER_2 } from "./utils";
import Image from "next/image";
import { LOGO } from "@/const";

// 메뉴 데이터 상수
type MenuItem = {
  id: string;
  title: string;
  href: string;
  children?: { title: string; href: string }[];
};

const MENU_ITEMS: MenuItem[] = [
  {
    id: "concept",
    title: "컨셉",
    href: "#",
  },
  {
    id: "medical-guide",
    title: "진료안내",
    href: "#",
    children: [
      { title: "통합의학", href: "/integrative-medicine/" },
      { title: "사이먼튼테라피", href: "/simonton-therapy/" },
      { title: "생활습관의학", href: "/lifestyle-medicine/" },
      { title: "앵거 매니지먼트", href: "/anger-free/" },
    ],
  },
  {
    id: "introduction",
    title: "인물소개",
    href: "#",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 스타일 상수들
  const HEADER_STYLES = {
    container: "flex w-full items-center px-4 py-6 md:px-10",
    logo: "h-[52px] object-contain",
    hamburgerButton:
      "flex h-8 w-8 flex-col items-center justify-center space-y-1",
    hamburgerLine: "block h-0.5 w-6 bg-black transition-transform",
    mobileOverlay: "fixed inset-0 z-50 bg-white lg:hidden",
    mobileContent: "flex h-full flex-col overflow-y-auto p-4",
    menuItem:
      "text-lg font-medium text-gray-900 hover:text-gray-600 block py-2",
    subMenuItem: "text-gray-600 hover:text-gray-900 block py-1",
  };

  // 공통 컴포넌트들
  const LogoComponent = ({ onClick }: { onClick?: () => void }) => (
    <Link href={"/"} onClick={onClick}>
      <Image
        src={LOGO}
        width={100}
        height={52}
        alt="logo"
        className={HEADER_STYLES.logo}
      />
    </Link>
  );

  const HamburgerButton = ({ isOpen }: { isOpen: boolean }) => (
    <button
      onClick={handleMenuToggle}
      className={HEADER_STYLES.hamburgerButton}
      aria-label="메뉴 토글"
    >
      <span
        className={`${HEADER_STYLES.hamburgerLine} ${
          isOpen ? "translate-y-1.5 rotate-45" : ""
        }`}
      ></span>
      <span
        className={`${HEADER_STYLES.hamburgerLine} transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`${HEADER_STYLES.hamburgerLine} ${
          isOpen ? "-translate-y-1.5 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );

  return (
    <motion.header
      initial={{ visibility: "hidden" }}
      animate={{ visibility: "visible" }}
      transition={{ delay: 0.5 }}
      className="relative"
    >
      <div className={HEADER_STYLES.container}>
        <div className="flex flex-1">
          <LogoComponent />
        </div>

        {/* 햄버거 메뉴 - lg 이하에서만 표시 */}
        <div className="lg:hidden">
          <HamburgerButton isOpen={isMenuOpen} />
        </div>
        <div className="hidden gap-4 lg:flex">
          <div>
            <div className="">
              <span className="">예약 및 문의</span>
              <span className="">
                <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</Link>
              </span>
            </div>
            <div>
              <span className="contact">위치</span>
              <span className="num">{ADDRESS}</span>
            </div>
          </div>
          <div>
            <div>
              <span>상담시간</span>
              <span className="en">9:30</span>～
              <span className="en">13:00 / 14:30</span>～
              <span className="en">18:30</span>
            </div>
            <div>
              <span>상담일: </span>
              <span>진료일: 월～금 / 휴진일: 토일공휴일</span>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 - 전체 화면 오버레이 */}
      {isMenuOpen && (
        <div
          className={HEADER_STYLES.mobileOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
        >
          {/* 모바일 메뉴 헤더 */}
          <div className="flex w-full items-center justify-between px-4 py-6 md:px-10">
            <LogoComponent onClick={() => setIsMenuOpen(false)} />
            <HamburgerButton isOpen={true} />
          </div>

          {/* 모바일 메뉴 컨텐츠 */}
          <div className={HEADER_STYLES.mobileContent}>
            <nav role="navigation" aria-label="메인 네비게이션">
              <ul className="space-y-4">
                {MENU_ITEMS.map((item) => (
                  <li key={item.id}>
                    {item.children ? (
                      <div>
                        <div className="mb-2 text-lg font-medium text-gray-900">
                          {item.title}
                        </div>
                        <ul className="ml-4 space-y-2">
                          {item.children.map((child, index) => (
                            <li key={index}>
                              <Link
                                href={child.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={HEADER_STYLES.subMenuItem}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={HEADER_STYLES.menuItem}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* 연락처 정보 */}
              <div className="mt-8 border-t border-gray-200 pt-8">
                <p className="mb-2 text-lg font-medium text-gray-900">
                  예약 및 문의
                </p>
                <div className="mb-4 space-y-1">
                  <Link
                    href={`tel:${PHONE_NUMBER}`}
                    className="block text-lg text-blue-600"
                  >
                    {PHONE_NUMBER}
                  </Link>
                  <Link
                    href={`tel:${PHONE_NUMBER_2}`}
                    className="block text-lg text-blue-600"
                  >
                    {PHONE_NUMBER_2}
                  </Link>
                </div>
                <div className="text-gray-600">
                  <p className="mb-1">상담시간:</p>
                  <p>주중 오전10:00 ~ 오후 6:00</p>
                  <p>주말 오전 10:00 ~ 오후 3:00</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </motion.header>
  );
}
