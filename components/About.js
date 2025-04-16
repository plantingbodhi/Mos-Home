"use client";

import Image from "next/image";
import ButtonOutline from "./ButtonOutline";

export default function About() {
  return (
    <div className="bg-white max-w-7xl mx-auto px-8">
      <div className="p-6">
        <div className="border-2 border-black rounded-[32px] p-6">
          {/* Top 2/3 Section */}
          <div className="flex mb-8">
            {/* Left column - Video */}
            <div className="w-1/3 pr-6">
              <div className="border-2 border-black rounded-[32px] aspect-[9/16] w-full overflow-hidden">
                <Image
                  src="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/profile-photos//BodhiPlantingGIF.webp"
                  alt="Bodhi Planting"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Vertical divider */}
            <div className="border-l-2 border-black mx-6"></div>

            {/* Right column - Text */}
            <div className="w-2/3 pl-6">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Hi, I&apos;m Bodhi.</h3>

                <p className="text-lg">
                  This isn&apos;t just a framework I created — it&apos;s a path
                  I walk.
                </p>

                <p className="text-lg">
                  From depression to devotion.
                  <br />
                  From burnout to reverence.
                  <br />
                  From searching outward to remembering inward.
                </p>

                <p className="text-lg">
                  MOS wasn&apos;t built in a boardroom.
                  <br />
                  It grew through meditation, heartbreak, planting trees,
                  <br />
                  and years of listening to what&apos;s real.
                </p>

                <p className="text-lg">
                  This is my work.
                  <br />
                  My prayer.
                  <br />
                  My way of serving.
                </p>

                <p className="text-lg">Let&apos;s walk it together.</p>

                <div className="pt-4">
                  <ButtonOutline title="Bodhi's story" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 1/3 Section */}
          <div className="border-t-2 border-black pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-x-2 divide-black">
              {/* Gene Keys Guidance */}
              <div className="space-y-4 px-8">
                <div className="text-2xl">🧬</div>
                <h4 className="text-xl font-bold">Gene Keys Guidance</h4>
                <p className="text-lg">
                  Discover your inner genius.
                  <br />
                  We&apos;ll explore your hologenetic profile together —
                  unlocking the patterns, gifts, and shadows written into your
                  DNA.
                  <br />
                  This is a contemplative, intuitive path back to who you truly
                  are.
                </p>
                <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
                  → Begin your contemplation
                </button>
              </div>

              {/* 1:1 Guidance */}
              <div className="space-y-4 px-8">
                <div className="text-2xl">🌿</div>
                <h4 className="text-xl font-bold">1:1 Guidance</h4>
                <p className="text-lg">
                  Support through transformation.
                  <br />
                  These are sacred conversations — held in presence, love, and
                  clarity.
                  <br />
                  Whether you&apos;re in a threshold, a low, or a blooming, we
                  walk the journey together.
                </p>
                <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
                  → Book a session
                </button>
              </div>

              {/* Live Events & Community Practice */}
              <div className="space-y-4 px-8">
                <div className="text-2xl">🕊️</div>
                <h4 className="text-xl font-bold">
                  Live Events & Community Practice
                </h4>
                <p className="text-lg">
                  Rest into Sanctity.
                  <br />
                  Join me for meditations, movement, and honest presence in
                  community.
                  <br />
                  Here we remember that we don&apos;t heal alone — we heal
                  together.
                </p>
                <button className="px-4 py-2 bg-transparent hover:bg-transparent text-black hover:text-[#d988d7] transition-colors">
                  → Join a practice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
