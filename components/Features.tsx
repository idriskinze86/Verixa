export default function Features() {
  const features = [
    {
      icon: "🔒",
      title: "Secure Verification",
      description:
        "Register digital assets on Flare with tamper-proof ownership records.",
    },
    {
      icon: "⚡",
      title: "Instant Proof",
      description: "Verify documents, certificates, and media in seconds.",
    },
    {
      icon: "🌍",
      title: "Decentralized Trust",
      description:
        "No centralized authority. Transparent blockchain verification.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
          Why Verixa
        </span>

        <h2 className="mt-5 text-4xl font-bold md:text-5xl">
          Powerful Features
        </h2>

        <p className="mt-4 text-gray-400">
          Everything you need to create, protect, and verify blockchain-backed
          digital trust.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group relative rounded-2xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10"
          >
            <div className="absolute right-6 top-6 text-xs font-semibold text-purple-400/60">
              0{index + 1}
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-3xl transition group-hover:scale-105">
              {feature.icon}
            </div>

            <h3 className="mt-7 text-2xl font-bold">{feature.title}</h3>

            <p className="mt-4 leading-7 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
