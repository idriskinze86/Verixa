import Logo from "./Logo";
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-purple-600/30 blur-[140px]" />
        <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-indigo-600/30 blur-[140px]" />
      </div>

      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        {/* Left Side */}
        <div className="max-w-xl">
          <span className="rounded-full border border-purple-500 px-4 py-2 text-sm text-purple-300">
            Built on Flare Network
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight md:text-7xl">
            Verify
            <br />
            Anything.
          </h1>

          <h2 className="mt-2 text-5xl font-black text-purple-400 md:text-6xl">
            Trust Everything.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Protect documents, certificates, media, and digital assets with
            tamper-proof blockchain verification powered by the Flare Network.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-semibold transition hover:scale-105">
              🚀 Start Verifying
            </button>

            <button className="rounded-xl border border-gray-700 px-8 py-4 transition hover:border-purple-500">
              📄 View Docs
            </button>
          </div>

          {/* Platform Highlights */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold text-purple-400">SHA-256</h3>
              <p className="text-sm text-gray-400">Secure Hashing</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400">Flare</h3>
              <p className="text-sm text-gray-400">Blockchain Powered</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400">Wallet</h3>
              <p className="text-sm text-gray-400">Authentication</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400">24/7</h3>
              <p className="text-sm text-gray-400">Verification</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm">
              ✅ Built on Flare
            </span>

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm">
              🔒 Immutable Records
            </span>

            <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm">
              ⚡ Instant Verification
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex h-[480px] w-[480px] items-center justify-center">
          {/* Outer Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-3xl" />

          {/* Orb */}
          <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full border border-purple-500/20 bg-white/5 backdrop-blur-xl shadow-2xl shadow-purple-600/20">
            <div className="absolute inset-6 rounded-full border border-white/10" />

            <div className="flex flex-col items-center text-center">
              <div className="animate-pulse">
                <Logo />
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                Blockchain Verification
              </h3>

              <p className="mt-4 max-w-xs text-gray-400">
                Every digital asset receives an immutable fingerprint secured on
                the Flare blockchain.
              </p>
            </div>
          </div>

          {/* Floating Status Cards */}
          <div className="absolute left-0 top-16 rounded-xl border border-green-500/20 bg-black/70 px-4 py-3 backdrop-blur">
            <p className="text-sm text-green-400">✓ Verified</p>
          </div>

          <div className="absolute right-0 bottom-16 rounded-xl border border-purple-500/20 bg-black/70 px-4 py-3 backdrop-blur">
            <p className="text-sm text-purple-300">SHA-256 Protected</p>
          </div>
        </div>
      </div>
    </section>
  );
}
