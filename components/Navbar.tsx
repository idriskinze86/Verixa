import Logo from "./Logo";
import WalletButton from "./WalletButton";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold">
            V
          </div>

          <div>
            <h1 className="text-xl font-bold">Verixa</h1>
            <p className="text-xs text-gray-400">Built on Flare</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="transition hover:text-purple-400">
            Features
          </a>

          <a href="#how" className="transition hover:text-purple-400">
            How It Works
          </a>

          <a href="#about" className="transition hover:text-purple-400">
            About
          </a>
        </div>

        {/* Wallet Button */}
        <WalletButton />
      </div>
    </nav>
  );
}
