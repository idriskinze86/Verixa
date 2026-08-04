export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 rounded-full border border-purple-500 px-4 py-1 text-sm text-purple-300">
          Built on Flare
        </span>

        <h1 className="text-5xl font-extrabold md:text-7xl">Verixa</h1>

        <p className="mt-4 text-xl text-gray-300 md:text-2xl">
          Verify Anything. Trust Everything.
        </p>

        <p className="mt-6 max-w-2xl text-gray-400">
          A decentralized trust platform that verifies the authenticity,
          ownership, and integrity of digital content using the Flare
          blockchain.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-700">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-600 px-6 py-3 font-semibold transition hover:border-white">
            Connect Wallet
          </button>
        </div>
      </section>
    </main>
  );
}
