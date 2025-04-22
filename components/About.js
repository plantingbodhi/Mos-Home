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

        <div className="bg-white border-2 border-black rounded-[32px] overflow-hidden">
          {/* Hi, I'm Bodhi Section */}
          <div className="flex flex-col md:flex-row p-6">
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

          {/* Dividing line */}
          <div className="border-t-2 border-black pt-6 px-6"></div>

          {/* Work with me Section */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-center mb-4">
              Work with me
            </h3>
            <p className="text-lg text-center mb-8">
              Step into spaces designed for clarity, transformation, and real
              connection.
            </p>
          </div>

          {/* Three Offerings Sections */}
          <div className="pt-6 pb-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Gene Keys Guidance */}
              <div className="text-center px-6 border-b-2 md:border-b-0 md:border-r-2 border-black pb-8 md:pb-0">
                <div className="text-2xl mb-2">🔑</div>
                <h3 className="text-xl font-bold mb-2">Gene Keys Guidance</h3>
                <p className="text-muted-foreground mb-4">
                  Unlock your unique genetic blueprint and discover your
                  life&apos;s purpose through the wisdom of the Gene Keys.
                </p>
                <ButtonOutline title="Coming Soon" />
              </div>

              {/* 1:1 Guidance */}
              <div className="text-center px-6 border-b-2 md:border-b-0 md:border-r-2 border-black pb-8 md:pb-0">
                <div className="pt-8 md:pt-0">
                  <div className="text-2xl mb-2">💫</div>
                  <h3 className="text-xl font-bold mb-2">1:1 Guidance</h3>
                  <p className="text-muted-foreground mb-4">
                    Personalized spiritual guidance and mentorship to support
                    your unique journey of awakening and transformation.
                  </p>
                  <ButtonOutline title="Coming Soon" />
                </div>
              </div>

              {/* Live Events & Community Practice */}
              <div className="text-center px-6">
                <div className="pt-8 md:pt-0">
                  <div className="text-2xl mb-2">🌿</div>
                  <h3 className="text-xl font-bold mb-2">
                    Live Events & Community
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Join our community for live events, workshops, and group
                    practices that deepen your connection to self and others.
                  </p>
                  <ButtonOutline title="Coming Soon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
