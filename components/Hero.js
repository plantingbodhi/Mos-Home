"use client";

import Image from "next/image";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Navigate life with purpose, clarity and love
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Mos is a simple system to help you reconnect with your truth, take
          aligned action, and find belonging in a changing world. Built for
          seekers, creators and healers walking the sacred path.
        </p>
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
      </div>
      <div className="lg:w-full">
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
