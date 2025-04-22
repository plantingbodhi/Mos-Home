"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonHeader from "./ButtonHeader";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo 400.png"
            alt="MOS Dashboard"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold">Mos</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3">
          <ButtonHeader
            title="What is Mos?"
            onClick={() => (window.location.href = "/")}
          />
          <ButtonHeader
            title="MOS in Action"
            onClick={() => (window.location.href = "/mos-in-action")}
          />
          <ButtonHeader
            title="Explore Offerings"
            onClick={() => (window.location.href = "/#work-with-me")}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-64 bg-white border-l-2 border-black p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold">Menu</h2>
                <button className="p-2" onClick={() => setIsMenuOpen(false)}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <ButtonHeader
                  title="What is Mos?"
                  onClick={() => {
                    window.location.href = "/";
                    setIsMenuOpen(false);
                  }}
                />
                <ButtonHeader
                  title="MOS in Action"
                  onClick={() => {
                    window.location.href = "/mos-in-action";
                    setIsMenuOpen(false);
                  }}
                />
                <ButtonHeader
                  title="Explore Offerings"
                  onClick={() => {
                    window.location.href = "/#work-with-me";
                    setIsMenuOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
