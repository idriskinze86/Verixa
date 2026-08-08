import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UploadCard from "@/components/UploadCard";
import VerifyCard from "@/components/VerifyCard";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import RecentRegistrations from "@/components/RecentRegistrations";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <UploadCard />
      <VerifyCard />
      <RecentRegistrations />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
