import ButtonOutline from "@/components/ButtonOutline";
import Image from "next/image";
import HeroSection from "@/components/mos-coaching/HeroSection";
import WhoThisIsFor from "@/components/mos-coaching/WhoThisIsFor";
import WhatHappensInSession from "@/components/mos-coaching/WhatHappensInSession";
import ThreePillars from "@/components/mos-coaching/ThreePillars";
import JourneyStructure from "@/components/mos-coaching/JourneyStructure";
import EnergyExchange from "@/components/mos-coaching/EnergyExchange";
import DiscoveryCallButton from "@/components/mos-coaching/DiscoveryCallButton";
import { getSEOTags } from "@/libs/seo";

export const metadata = {
  ...getSEOTags({
    title: "1:1 MOS Coaching | Transform Your Life Through Spiritual Guidance",
    description:
      "Experience personalized spiritual coaching through the Way of MOS. Deep presence, meditation, Gene Keys contemplation, and somatic practices to guide your journey of transformation.",
    canonicalUrlRelative: "/mos-coaching",
    openGraph: {
      title:
        "1:1 MOS Coaching | Transform Your Life Through Spiritual Guidance",
      description:
        "Experience personalized spiritual coaching through the Way of MOS. Deep presence, meditation, Gene Keys contemplation, and somatic practices to guide your journey of transformation.",
      url: "/mos-coaching",
    },
    twitter: {
      title:
        "1:1 MOS Coaching | Transform Your Life Through Spiritual Guidance",
      description:
        "Experience personalized spiritual coaching through the Way of MOS. Deep presence, meditation, Gene Keys contemplation, and somatic practices.",
    },
  }),
};

export default function MOSCoaching() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HeroSection />
        <WhoThisIsFor />
        <ThreePillars />
        <WhatHappensInSession />
        <JourneyStructure />
        <EnergyExchange />

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
            <DiscoveryCallButton />
          </div>
        </section>

        {/* Final Words */}
        <section>
          <div className="bg-white p-8 text-center">
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
