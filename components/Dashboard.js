"use client";

import { useRef } from "react";
import About from "./About";

export default function Dashboard() {
  const aboutRef = useRef(null);

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-6xl mx-auto px-8">
        {/* About Section */}
        <div ref={aboutRef}>
          <About aboutRef={aboutRef} />
        </div>
      </div>
    </div>
  );
}
