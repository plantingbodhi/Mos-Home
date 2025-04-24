"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonHeader from "./ButtonHeader";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGuidanceOpen, setIsGuidanceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-4 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/logo 400.png"
            alt="MOS Dashboard"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold">Mos</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-3">
          <ButtonHeader
            title="What is Mos?"
            onClick={() => {
              const element = document.getElementById("what-is-mos");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          />
          <div className="relative">
            <ButtonHeader
              title="Guidance"
              onClick={() => setIsGuidanceOpen(!isGuidanceOpen)}
            />
            {isGuidanceOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-black rounded-lg shadow-lg">
                <div className="py-2">
                  <Link
                    href="/gene-keys"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsGuidanceOpen(false)}
                  >
                    Gene Keys
                  </Link>
                  <Link
                    href="/mos-coaching"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsGuidanceOpen(false)}
                  >
                    Mos Coaching
                  </Link>
                </div>
              </div>
            )}
          </div>
          <ButtonHeader
            title="Work With Me"
            onClick={() => {
              const element = document.getElementById("work-with-me");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
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
                    const element = document.getElementById("what-is-mos");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                    setIsMenuOpen(false);
                  }}
                />
                <div className="space-y-2">
                  <ButtonHeader
                    title="Guidance"
                    onClick={() => setIsGuidanceOpen(!isGuidanceOpen)}
                  />
                  {isGuidanceOpen && (
                    <div className="pl-4 space-y-2">
                      <Link
                        href="/gene-keys"
                        className="block text-sm hover:text-gray-600"
                        onClick={() => {
                          setIsGuidanceOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        Gene Keys
                      </Link>
                      <Link
                        href="/mos-coaching"
                        className="block text-sm hover:text-gray-600"
                        onClick={() => {
                          setIsGuidanceOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        1:1 MOS
                      </Link>
                    </div>
                  )}
                </div>
                <ButtonHeader
                  title="Work With Me"
                  onClick={() => {
                    const element = document.getElementById("work-with-me");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
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
