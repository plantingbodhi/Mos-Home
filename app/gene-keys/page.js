import ButtonOutline from "@/components/ButtonOutline";
import Image from "next/image";
import HeroSection from "@/components/gene-keys/HeroSection";
import WhatIsGeneKeys from "@/components/gene-keys/WhatIsGeneKeys";
import WhatToExpect from "@/components/gene-keys/WhatToExpect";
import EnergyExchange from "@/components/gene-keys/EnergyExchange";
import DiscoveryCallButton from "@/components/mos-coaching/DiscoveryCallButton";
import { getSEOTags } from "@/libs/seo";

export const metadata = {
  ...getSEOTags({
    title: "Gene Keys Guidance | Transform Your Life Through Gene Keys",
    description:
      "Experience personalized Gene Keys guidance and readings. Discover your unique genetic blueprint and unlock your highest potential through the wisdom of the Gene Keys.",
    canonicalUrlRelative: "/gene-keys",
    openGraph: {
      title: "Gene Keys Guidance | Transform Your Life Through Gene Keys",
      description:
        "Experience personalized Gene Keys guidance and readings. Discover your unique genetic blueprint and unlock your highest potential through the wisdom of the Gene Keys.",
      url: "/gene-keys",
    },
    twitter: {
      title: "Gene Keys Guidance | Transform Your Life Through Gene Keys",
      description:
        "Experience personalized Gene Keys guidance and readings. Discover your unique genetic blueprint and unlock your highest potential.",
    },
  }),
};

export default function GeneKeys() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <HeroSection />
        <WhatIsGeneKeys />
        <WhatToExpect />
        <EnergyExchange />

        {/* Call to Action */}
        <section className="mb-24">
          <div className="bg-white border-2 border-black rounded-[32px] p-8 text-center">
            <h2 className="text-3xl font-bold mb-8">
              🌟 Ready to Discover Your Keys?
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
              &quot;The Gene Keys are not just a system.
              <br />
              They are a living wisdom that speaks to your soul.
              <br />
              A map to your highest potential.
              <br />
              A key to unlocking your true nature.
              <br />
              Let me guide you on this journey.&quot;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
