"use client";

import { useRef } from "react";
import ButtonOutline from "./ButtonOutline";
import About from "./About";
import MOSEcosystem from "./MOSEcosystem";

export default function Dashboard() {
  const ecosystemRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToEcosystem = () => {
    ecosystemRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* The Way of Mos */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-center mb-4">
              The Way of Mos
            </h2>
            <p className="text-lg text-center mb-8">
              There&apos;s no one way to walk the Way.
            </p>

            <div className="border-2 border-black rounded-[32px] p-6">
              <div className="space-y-8">
                <p className="text-lg text-center">
                  Mos isn&apos;t a rigid method — it&apos;s a living system. You
                  can start with Mystery, move through Odyssey, or rest in
                  Sanctity. Or live all three in a single breath. Some come for
                  stillness. Some to create. Some to heal.
                </p>

                <p className="text-lg text-center">
                  Mos takes form — not just as an idea, but as something you can
                  use. A simple way to see where you are, and return to what
                  matters.
                </p>

                <p className="text-lg text-center">
                  It adapts to you. To your life, your season, your soul.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <ButtonOutline
              title="See MOS in Action"
              onClick={() => {
                window.location.href = "/mos-in-action";
              }}
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-24" ref={aboutRef}>
        <About aboutRef={aboutRef} />
      </div>

      {/* MOS Ecosystem Section */}
      <div className="pt-12">
        <MOSEcosystem ecosystemRef={ecosystemRef} />
      </div>
    </div>
  );
}
