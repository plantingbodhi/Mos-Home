"use client";

import Image from "next/image";
import DiscoveryCallButton from "@/components/mos-coaching/DiscoveryCallButton";

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
        &quot;Your genetic blueprint holds the keys to your highest
        potential.&quot;
      </h1>
      <p className="text-xl mb-8">
        Through the Gene Keys, we unlock the brilliance encoded in your DNA -
        <br />
        and walk the contemplative path from shadow to gift, from
        <br />
        confusion to clarity, from effort to trust.
      </p>
      <DiscoveryCallButton />
    </section>
  );
}
