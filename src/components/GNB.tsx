"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const GNB = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "개념", href: "#concept" },
    { name: "진료안내", href: "#guide" },
    { name: "소개", href: "#intro" },
    { name: "공지", href: "#notice" },
    { name: "엑세스", href: "#access" },
  ];

  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto max-w-screen-lg w-full flex items-center justify-between py-4 px-4">
        {/* Logo Section */}
        <div className="flex items-center sm:pl-4">
          <Image
            src="/images/logo.png" // Replace with your logo path
            alt="Descartes House"
            width={150}
            height={72}
          />
        </div>

        {/* Centered Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Tel Button */}
        <div className="hidden md:flex">
          <Button variant="ghost">TEL: 010-1234-5678</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="p-2"
                onClick={() => setMenuOpen(true)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-lg font-bold">메뉴</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <SheetClose>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4"
                >
                  <X size={24} />
                </Button>
              </SheetClose> */}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default GNB;
