import Logo from "./Logo";
import WalletButton from "./WalletButton";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-purple-500/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo />

          <div>
            <h1 className="text-xl font-bold tracking-tight">Verixa</h1>

            <p className="text-xs text-purple-300/70">Built on Flare</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-gray-300 transition hover:text-purple-400"
          >
            Features
          </a>

          <a
            href="#how"
            className="text-sm text-gray-300 transition hover:text-purple-400"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-purple-400"
          >
            About
          </a>
        </div>
        {/* Wallet Button */}
        <WalletButton />
      </div>
    </nav>
  );
}
