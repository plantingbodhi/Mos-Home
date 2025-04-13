import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
