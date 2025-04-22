"use client";

import { useRef } from "react";
import ButtonOutline from "./ButtonOutline";
import About from "./About";

export default function Dashboard() {
  const aboutRef = useRef(null);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* Action Button */}
        <div className="flex justify-center mb-24">
          <ButtonOutline
            title="See MOS in Action"
            onClick={() => {
              window.location.href = "/mos-in-action";
            }}
          />
        </div>

        {/* About Section */}
        <div ref={aboutRef}>
          <About aboutRef={aboutRef} />
        </div>
      </div>
    </div>
  );
}
