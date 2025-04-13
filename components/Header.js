"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
        <div className="flex lg:flex-1">
          <Link className="flex items-center gap-2 shrink-0" href="/">
            <Image
              src={logo}
              alt="MOS Dashboard logo"
              className="w-8"
              width={32}
              height={32}
            />
            <span className="font-extrabold text-lg">MOS Dashboard</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
