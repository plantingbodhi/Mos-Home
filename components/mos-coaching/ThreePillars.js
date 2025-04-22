"use client";

import Image from "next/image";

export default function ThreePillars() {
  return (
    <section className="mb-24">
      <h2 className="text-3xl font-bold mb-8 text-center">
        The Three Pillars of the Work
      </h2>
      <p className="text-lg mb-8 text-center">
        We walk the Way of MOS.
        <br />
        Not as a concept — as a path.
      </p>
      <p className="text-lg mb-12 text-center">
        Each of these holds part of the map. Together they form the Way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mystery Card */}
        <div className="bg-white border-2 border-black rounded-[32px] p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4">
            <Image
              src="/images/mystery icon.png"
              alt="Mystery"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4">Mystery</h3>
          <p className="text-lg">
            Stillness, self-inquiry, and the wisdom of the unknown.
            <br />
            We explore belief systems, patterns, and the silent space behind the
            mind.
          </p>
        </div>

        {/* Odyssey Card */}
        <div className="bg-white border-2 border-black rounded-[32px] p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4">
            <Image
              src="/images/odyssey icon.png"
              alt="Odyssey"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4">Odyssey</h3>
          <p className="text-lg">
            Grounded embodiment, clarity, and aligned action.
            <br />
            We take steps in your life. We build. We move through the
            resistance.
          </p>
        </div>

        {/* Sanctity Card */}
        <div className="bg-white border-2 border-black rounded-[32px] p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4">
            <Image
              src="/images/sanctity icon.png"
              alt="Sanctity"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4">Sanctity</h3>
          <p className="text-lg">
            The heart&apos;s way — compassion, connection, and surrender.
            <br />
            Here we rest in love. Here we forgive, release, and remember our
            wholeness.
          </p>
        </div>
      </div>
    </section>
  );
}
