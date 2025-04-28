"use client";

import Image from "next/image";
import ButtonOutline from "./ButtonOutline";

export default function About({ aboutRef }) {
  return (
    <section ref={aboutRef} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hi, I'm Bodhi Section */}
        <div className="flex flex-col md:flex-row p-6 mb-16">
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
              <h3 className="text-2xl font-bold">Hi, I&apos;m Bodhi</h3>
              <p className="text-lg text-gray-600">
                A guide, creator, and student of the sacred path.
              </p>

              <p className="text-lg">
                My journey has taken me through depression, deep spiritual
                awakening, love, loss, and rebuilding my life from the ground up
                more than once.
              </p>

              <p className="text-lg">
                Through it all, I discovered that true freedom isn&apos;t about
                escaping life&apos;s challenges — it&apos;s about meeting them
                fully, and awakening the magnificence already within.
              </p>

              <p className="text-lg">
                MOS is the living map born from this journey — a way to help
                others remember who they are, and live from their deepest truth.
              </p>

              <div className="pt-4">
                <ButtonOutline
                  title="Bodhi's story"
                  onClick={() => (window.location.href = "/about")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Work with me Section with border */}
        <div
          id="work-with-me"
          className="bg-white border-2 border-black rounded-[32px] overflow-hidden"
        >
          {/* Work with me Section */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-center mb-4">
              Work With Me
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
                <ButtonOutline
                  title="Learn More"
                  onClick={() => (window.location.href = "/gene-keys")}
                />
              </div>

              {/* 1:1 Guidance */}
              <div className="text-center px-6 border-b-2 md:border-b-0 md:border-r-2 border-black pb-8 md:pb-0">
                <div className="pt-8 md:pt-0">
                  <div className="text-2xl mb-2">💫</div>
                  <h3 className="text-xl font-bold mb-2">
                    Guidance Through Mos
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Personalized spiritual guidance and mentorship to support
                    your unique journey of awakening and transformation.
                  </p>
                  <ButtonOutline
                    title="Learn More"
                    onClick={() => (window.location.href = "/mos-coaching")}
                  />
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
