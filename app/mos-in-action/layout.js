import { Suspense } from "react";
import Footer from "@/components/Footer";

export default function LayoutMOSInAction({ children }) {
  return (
    <div>
      <main className="min-h-screen bg-background">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}
