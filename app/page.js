"use client";

import { useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import WhatIsMOS from "@/components/WhatIsMOS";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Dashboard />
      <Footer />
    </main>
  );
}
