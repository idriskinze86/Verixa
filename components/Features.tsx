export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold">Powerful Features</h2>
        <p className="mt-4 text-gray-400">
          Secure digital trust powered by Flare.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur">
          <h3 className="mb-4 text-2xl font-bold">🔒 Secure Verification</h3>

          <p className="text-gray-400">
            Register digital assets on Flare with tamper-proof ownership
            records.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur">
          <h3 className="mb-4 text-2xl font-bold">⚡ Instant Proof</h3>

          <p className="text-gray-400">
            Verify documents, certificates, and media in seconds.
          </p>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur">
          <h3 className="mb-4 text-2xl font-bold">🌍 Decentralized Trust</h3>

          <p className="text-gray-400">
            No centralized authority. Transparent blockchain verification.
          </p>
        </div>
      </div>
    </section>
  );
}
