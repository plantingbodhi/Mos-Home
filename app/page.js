"use client";

import { useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import WhatIsMOS from "@/components/WhatIsMOS";
import Footer from "@/components/Footer";
import VisionOfMOS from "@/components/VisionOfMOS";
import MOSEcosystem from "@/components/MOSEcosystem";
import Hero from "@/components/Hero";

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
      <Footer />
    </main>
  );
}
