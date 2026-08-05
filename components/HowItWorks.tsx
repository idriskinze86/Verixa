export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-8 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">How Verixa Works</h2>

      <div className="grid gap-8 md:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="mb-4 text-4xl">📤</div>
          <h3 className="font-bold">Upload</h3>
          <p className="mt-2 text-sm text-gray-400">
            Upload your digital asset.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="mb-4 text-4xl">🔑</div>
          <h3 className="font-bold">Hash</h3>
          <p className="mt-2 text-sm text-gray-400">
            Generate a unique fingerprint.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="mb-4 text-4xl">⛓️</div>
          <h3 className="font-bold">Register</h3>
          <p className="mt-2 text-sm text-gray-400">Save proof on Flare.</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="mb-4 text-4xl">✅</div>
          <h3 className="font-bold">Verify</h3>
          <p className="mt-2 text-sm text-gray-400">
            Verify authenticity anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
