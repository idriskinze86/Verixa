"use client";

import {
  useConnection,
  useConnect,
  useConnectors,
  useDisconnect,
  useSwitchChain,
} from "wagmi";

import { flareCoston2 } from "@/lib/config";

export default function WalletButton() {
  const connection = useConnection();
  const connectors = useConnectors();

  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitching } = useSwitchChain();

  const injectedConnector = connectors.find(
    (connector) => connector.id === "injected",
  );

  if (
    connection.status === "connecting" ||
    connection.status === "reconnecting" ||
    isPending
  ) {
    return (
      <button
        disabled
        className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-semibold opacity-70"
      >
        Connecting...
      </button>
    );
  }

  if (connection.status === "connected") {
    const address = connection.address;

    if (!address) {
      return null;
    }

    const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

    const onFlare = connection.chainId === flareCoston2.id;

    if (!onFlare) {
      const handleSwitchToFlare = async () => {
        try {
          await switchChain({
            chainId: flareCoston2.id,
          });
        } catch (error) {
          console.error("Failed to switch to Flare Coston2:", error);
        }
      };

      return (
        <div className="flex items-center gap-2">
          <button
            onClick={handleSwitchToFlare}
            disabled={isSwitching}
            className="rounded-xl bg-orange-600 px-5 py-3 font-semibold transition hover:bg-orange-700 disabled:opacity-50"
          >
            {isSwitching ? "Switching..." : "⚠️ Switch to Flare"}
          </button>

          <button
            onClick={() => disconnect()}
            className="rounded-xl border border-purple-500/30 px-4 py-3 font-semibold transition hover:bg-purple-600/20"
          >
            {shortAddress}
          </button>
        </div>
      );
    }

    return (
      <button
        onClick={() => disconnect()}
        className="rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-700"
      >
        🟢 Flare · {shortAddress}
      </button>
    );
  }

  const handleConnect = async () => {
    if (!injectedConnector) {
      console.error("No browser wallet detected.");
      return;
    }

    try {
      await connect({
        connector: injectedConnector,
      });
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  return (
    <button
      onClick={handleConnect}
      disabled={isPending || !injectedConnector}
      className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-semibold transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isPending ? "Connecting..." : "🔗 Connect Wallet"}
    </button>
  );
}
