"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo 400.png"
            alt="MOS"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold">mos</h1>
        </div>
      </div>
    </header>
  );
}
