"use client";

import { useConnection, useConnect, useConnectors, useDisconnect } from "wagmi";

export default function WalletButton() {
  const connection = useConnection();
  const connectors = useConnectors();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  if (connection.status === "connected") {
    const address = connection.address!;
    const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

    return (
      <button
        onClick={() => disconnect()}
        className="rounded-xl bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-700"
      >
        🟢 {shortAddress}
      </button>
    );
  }

  return (
    <button
      onClick={() =>
        connect({
          connector: connectors[0],
        })
      }
      disabled={isPending}
      className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold transition hover:scale-105 disabled:opacity-50"
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}
