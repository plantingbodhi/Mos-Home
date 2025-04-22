"use client";

import Image from "next/image";
import ButtonOutline from "@/components/ButtonOutline";

export default function HeroSection() {
  return (
    <section className="text-center mb-24">
      <div className="flex justify-center mb-8">
        <Image
          src="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/mos-icons//logo.png"
          alt="MOS Logo"
          width={200}
          height={200}
          className="w-40 h-40 object-contain"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">
        &quot;You weren&apos;t born to fit into the world.
        <br />
        You were born to remember who you are.&quot;
      </h1>
      <p className="text-xl mb-8">
        A one-on-one coaching experience for those walking the Way —
        <br />
        From restlessness to stillness. From seeking to surrender.
        <br />
        From burnout to devotion.
      </p>
      <ButtonOutline>Apply to Walk the Way</ButtonOutline>
    </section>
  );
}
