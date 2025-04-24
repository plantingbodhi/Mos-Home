"use client";

import { useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import WhatIsMOS from "@/components/WhatIsMOS";
import Footer from "@/components/Footer";
import VisionOfMOS from "@/components/VisionOfMOS";
import MOSEcosystem from "@/components/MOSEcosystem";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WhatIsMOS />
      <Dashboard />
      <VisionOfMOS />
      <MOSEcosystem />
      <FAQ />

      {/* Newsletter Section */}
      <section className="pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-white rounded-[32px] p-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Letters on the way</h2>
            <div className="flex justify-center mb-8">
              <iframe
                src="https://embeds.beehiiv.com/8057e0cb-db8a-457e-8045-e1b0d891591e?slim=true"
                data-test-id="beehiiv-embed"
                height="52"
                frameBorder="0"
                scrolling="no"
                style={{
                  margin: 0,
                  borderRadius: "0px !important",
                  backgroundColor: "transparent",
                }}
              />
            </div>
            <p className="text-lg">
              Receive gentle guidance, tools, and reflections to walk your
              sacred path, straight to your inbox.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
