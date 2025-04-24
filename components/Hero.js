"use client";

import Image from "next/image";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      {/* Logo - Top in mobile, right in desktop */}
      <div className="lg:hidden w-48">
        <Image
          src="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/mos-icons//logo.png"
          alt="MOS Logo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>

      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Navigate life with purpose, clarity and love
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Mos is a simple system to help you reconnect with your truth, take
          aligned action, and find belonging in a changing world. Built for
          seekers, creators and healers walking the sacred path.
        </p>

        <div className="w-full max-w-md">
          <h3 className="text-xl font-semibold mb-2">Letters on the way</h3>
          <iframe
            src="https://embeds.beehiiv.com/8057e0cb-db8a-457e-8045-e1b0d891591e?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            frameBorder="0"
            scrolling="no"
            style={{
              margin: 0,
              borderRadius: "0px !important",
              backgroundColor: "transparent",
            }}
          />
          <p className="text-base text-gray-600 mt-4">
            Receive gentle guidance, tools, and reflections to walk your sacred
            path, straight to your inbox.
          </p>
        </div>
      </div>

      {/* Logo - Hidden in mobile, shown in desktop */}
      <div className="hidden lg:block lg:w-full">
        <Image
          src="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/mos-icons//logo.png"
          alt="MOS Logo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
