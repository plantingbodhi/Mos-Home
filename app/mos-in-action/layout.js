import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutMOSInAction({ children }) {
  return (
    <div>
      <Suspense>
        <Header />
      </Suspense>

      <main className="min-h-screen bg-background">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}
