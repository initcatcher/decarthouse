"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// 메뉴 데이터 타입
type NavItem = {
  id: string;
  title: string;
  href: string;
  children?: { title: string; href: string }[];
};

// 메뉴 데이터 상수
const NAV_ITEMS: NavItem[] = [
  {
    id: "concept",
    title: "컨셉",
    href: "#concept",
  },
  {
    id: "medical-guide",
    title: "상담안내",
    href: "#medical-guide",
    children: [
      { title: "통합의학", href: "/integrative-medicine/" },
      { title: "사이먼튼테라피", href: "/simonton-therapy/" },
      { title: "생활습관의학", href: "/lifestyle-medicine/" },
      { title: "앵거프리", href: "/anger-free/" },
    ],
  },
  {
    id: "doctor",
    title: "인물소개",
    href: "#doctor",
  },
];

// 애니메이션 variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function TopNavigation() {
  // 재사용 가능한 NavItem 컴포넌트
  const NavItemComponent = ({
    item,
    isChild = false,
  }: {
    item: Pick<NavItem, "title" | "href">;
    isChild?: boolean;
  }) => (
    <div>
      <Link
        href={item.href}
        className={`block px-6 py-3 text-center font-medium text-black transition-colors duration-200 hover:text-yellow-600 ${isChild ? "px-4 py-2 text-sm" : "md:px-8 md:py-4 md:text-lg"} `}
      >
        {item.title}
      </Link>
    </div>
  );

  return (
    <nav className="hidden px-6 py-8 md:px-12 lg:block lg:px-16">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex flex-row items-center justify-center gap-8"
      >
        {NAV_ITEMS.map((item, index) => (
          <React.Fragment key={item.id}>
            <motion.div variants={fadeIn} className="relative">
              {item.children ? (
                // 드롭다운이 있는 메뉴
                <div className="group">
                  <div className="cursor-pointer px-6 py-3 text-center font-medium text-black transition-colors duration-200 hover:text-yellow-600 md:px-8 md:py-4 md:text-lg">
                    {item.title}
                  </div>

                  {/* 드롭다운 메뉴 */}
                  <div className="invisible absolute top-full left-0 z-10 mt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[200px] rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                      {item.children.map((child, childIndex) => (
                        <div key={childIndex} className="mb-1 last:mb-0">
                          <Link
                            href={child.href}
                            className="block rounded-md px-4 py-2 font-medium text-black transition-colors duration-200 hover:text-yellow-600"
                          >
                            {child.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // 일반 메뉴
                <NavItemComponent item={item} />
              )}
            </motion.div>

            {/* Separator */}
            {index < NAV_ITEMS.length - 1 && (
              <div className="h-6 w-px bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </nav>
  );
}
