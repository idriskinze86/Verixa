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

      <section id="about" className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 text-center backdrop-blur-xl md:p-12">
          <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            About Verixa
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Digital Trust, Secured on Flare
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Verixa provides blockchain-powered verification for digital assets.
            Each file is transformed into a unique SHA-256 fingerprint that can
            be registered and verified on the Flare blockchain.
          </p>

          <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
            <div className="rounded-2xl border border-purple-500/20 bg-black/30 p-5">
              <h3 className="font-semibold">🔐 Tamper Evidence</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                A changed file produces a different fingerprint.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/20 bg-black/30 p-5">
              <h3 className="font-semibold">⛓️ Blockchain Proof</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Registration creates verifiable on-chain proof.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-500/20 bg-black/30 p-5">
              <h3 className="font-semibold">🌍 Easy Verification</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Verify a file using its fingerprint whenever needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Footer />
    </main>
  );
}
