import ButtonOutline from "@/components/ButtonOutline";
import Image from "next/image";
import HeroSection from "@/components/mos-coaching/HeroSection";
import WhoThisIsFor from "@/components/mos-coaching/WhoThisIsFor";
import WhatHappensInSession from "@/components/mos-coaching/WhatHappensInSession";
import ThreePillars from "@/components/mos-coaching/ThreePillars";

export default function MOSCoaching() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HeroSection />
        <WhoThisIsFor />
        <ThreePillars />
        <WhatHappensInSession />

        {/* Journey Structure */}
        <section className="mb-24">
          <div className="bg-white border-2 border-black rounded-[32px] p-8">
            <h2 className="text-3xl font-bold mb-8">
              🌕 The Journey Structure
            </h2>
            <p className="text-lg mb-8">
              This is a sacred container of transformation.
              <br />
              It is not &quot;coaching&quot; as usual.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Opening Ceremony – 90-minute initiation session
                </h3>
                <p className="text-lg">
                  We map your journey and orient you in the MOS framework.
                  <br />
                  We meet your story with love and awareness.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Ongoing Sessions – Biweekly 60-minute sessions (or monthly)
                </h3>
                <p className="text-lg">
                  Held over 3 or 6 months depending on the depth you&apos;re
                  ready for.
                  <br />
                  Includes messaging support between calls.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Integration & Reflection – Closing session to anchor your
                  shifts
                </h3>
                <p className="text-lg">
                  We harvest your insights and create a practice path forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-24">
          <div className="bg-white border-2 border-black rounded-[32px] p-8">
            <h2 className="text-3xl font-bold mb-8">
              🧡 What Others Have Said
            </h2>
            <div className="space-y-8 text-lg">
              <p>
                &quot;Working with Bodhi felt like being seen for the first
                time.&quot;
              </p>
              <p>
                &quot;I came in confused and burnt out. I left with clarity and
                calm.&quot;
              </p>
              <p>
                &quot;His presence is both fierce and tender. I felt safe to
                fall apart — and rebuild.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Energy Exchange */}
        <section className="mb-24">
          <div className="bg-white border-2 border-black rounded-[32px] p-8">
            <h2 className="text-3xl font-bold mb-8">💸 Energy Exchange</h2>
            <p className="text-lg mb-8">
              There is a cost to walking this path — and a gift.
            </p>

            <div className="space-y-4 text-lg">
              <p>3-month container – $999</p>
              <p>6-month deep work – $1,800</p>
              <p>
                Payment plans available. Sliding scale for those in financial
                difficulty.
              </p>
            </div>

            <p className="text-lg mt-8">
              You are not paying for my time.
              <br />
              You are offering your commitment to your soul.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-24">
          <div className="bg-white border-2 border-black rounded-[32px] p-8 text-center">
            <h2 className="text-3xl font-bold mb-8">
              🌟 Ready to Walk the Way?
            </h2>
            <p className="text-lg mb-8">
              This is not for everyone.
              <br />
              But if something in your heart is stirring, I&apos;d love to hear
              from you.
            </p>
            <ButtonOutline>Apply Now</ButtonOutline>
          </div>
        </section>

        {/* Final Words */}
        <section>
          <div className="bg-white border-2 border-black rounded-[32px] p-8 text-center">
            <p className="text-xl italic">
              &quot;This isn&apos;t a method I created.
              <br />
              It&apos;s a path I&apos;ve walked.
              <br />
              From silence and sorrow to purpose and peace.
              <br />
              And now I walk it with others.
              <br />
              Maybe with you.&quot;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
