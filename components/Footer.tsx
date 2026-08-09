export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold tracking-tight">Verixa</h3>

          <p className="mt-1 text-sm text-gray-500">
            Blockchain-powered digital asset verification.
          </p>
        </div>

        <div className="text-center text-sm text-gray-500 md:text-right">
          <p>© 2026 Verixa</p>
          <p className="mt-1 text-purple-400/70">Built on Flare Network</p>
        </div>
      </div>
    </footer>
  );
}
