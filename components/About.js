"use client";

import Image from "next/image";
import ButtonOutline from "./ButtonOutline";

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          In Service of the Sacred
        </h2>
        <p className="text-lg text-center mb-8">
          Offerings born from my own life of lessons — here to support yours.
        </p>

        {/* Hi, I'm Bodhi Section */}
        <div className="bg-white border-2 border-black rounded-[32px] overflow-hidden mb-16">
          <div className="flex flex-col md:flex-row mb-8 p-6">
            {/* Left column - Video */}
            <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-6">
              <div className="border-2 border-black rounded-[32px] w-full h-full overflow-hidden">
                <Image
                  src="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/profile-photos//BodhiPlantingGIF.webp"
                  alt="Bodhi"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Vertical divider - Hidden on mobile */}
            <div className="hidden md:block border-l-2 border-black mx-6"></div>

            {/* Right column - Text */}
            <div className="w-full md:w-2/3 md:pl-6">
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
                  <ButtonOutline>Bodhi&apos;s story</ButtonOutline>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work with me Section */}
        <div id="work-with-me" className="mb-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Work with me</h3>
          <p className="text-lg">
            Step into spaces designed for clarity, transformation, and real
            connection.
          </p>
        </div>

        {/* Three Offerings Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Gene Keys Guidance */}
          <div className="bg-white border-2 border-black rounded-[32px] p-4 sm:p-6 lg:p-8">
            <div className="text-2xl mb-2">🔑</div>
            <h3 className="text-xl font-bold mb-2">Gene Keys Guidance</h3>
            <p className="text-muted-foreground mb-4">
              Unlock your unique genetic blueprint and discover your life&apos;s
              purpose through the wisdom of the Gene Keys.
            </p>
            <ButtonOutline title="Coming Soon" />
          </div>

          {/* 1:1 Guidance */}
          <div className="bg-white border-2 border-black rounded-[32px] p-4 sm:p-6 lg:p-8">
            <div className="text-2xl mb-2">💫</div>
            <h3 className="text-xl font-bold mb-2">1:1 Guidance</h3>
            <p className="text-muted-foreground mb-4">
              Personalized spiritual guidance and mentorship to support your
              unique journey of awakening and transformation.
            </p>
            <ButtonOutline title="Coming Soon" />
          </div>

          {/* Live Events & Community Practice */}
          <div className="bg-white border-2 border-black rounded-[32px] p-4 sm:p-6 lg:p-8">
            <div className="text-2xl mb-2">🌿</div>
            <h3 className="text-xl font-bold mb-2">
              Live Events & Community Practice
            </h3>
            <p className="text-muted-foreground mb-4">
              Join our community for live events, workshops, and group practices
              that deepen your connection to self and others.
            </p>
            <ButtonOutline title="Coming Soon" />
          </div>
        </div>
      </div>
    </section>
  );
}
