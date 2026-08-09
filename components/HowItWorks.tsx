export default function HowItWorks() {
  const steps = [
    {
      icon: "📤",
      title: "Upload",
      description: "Upload your document or digital asset.",
    },
    {
      icon: "🔑",
      title: "Hash",
      description: "Generate a unique SHA-256 fingerprint.",
    },
    {
      icon: "⛓️",
      title: "Register",
      description: "Secure the fingerprint on the Flare blockchain.",
    },
    {
      icon: "✅",
      title: "Verify",
      description: "Verify the asset's authenticity anytime.",
    },
  ];

  return (
    <section id="how" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
          Simple & Secure
        </span>

        <h2 className="mt-5 text-4xl font-bold md:text-5xl">
          How Verixa Works
        </h2>

        <p className="mt-4 text-gray-400">
          Turn any digital asset into verifiable blockchain-backed proof in four
          simple steps.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="group relative rounded-2xl border border-purple-500/20 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10"
          >
            <div className="absolute right-4 top-4 text-xs font-semibold text-purple-400/60">
              0{index + 1}
            </div>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-3xl transition group-hover:scale-105">
              {step.icon}
            </div>

            <h3 className="mt-6 text-lg font-bold">{step.title}</h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
