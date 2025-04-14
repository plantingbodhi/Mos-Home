"use client";

import Link from "next/link";
import Image from "next/image";
import ButtonHeader from "./ButtonHeader";

export default function Header() {
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
          <h1 className="text-xl font-bold">mos</h1>
        </div>

        {/* Header Buttons */}
        <div className="flex gap-3">
          <ButtonHeader title="What is Mos?" />
          <ButtonHeader title="Explore Offerings" />
        </div>
      </div>
    </header>
  );
}
