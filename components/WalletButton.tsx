"use client";

import { useConnection, useConnect, useConnectors, useDisconnect } from "wagmi";

export default function WalletButton() {
  const connection = useConnection();
  const connectors = useConnectors();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  // Wallet is connecting/reconnecting
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

  // Wallet is connected
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

  // Find available connectors
  const injectedConnector = connectors.find(
    (connector) => connector.id === "injected",
  );

  const walletConnectConnector = connectors.find(
    (connector) => connector.id === "walletConnect",
  );

  // Browser wallet
  const handleInjected = async () => {
    if (!injectedConnector) {
      return;
    }

    try {
      await connect({
        connector: injectedConnector,
      });
    } catch (error) {
      console.error("Browser wallet connection failed:", error);
    }
  };

  // WalletConnect / mobile wallet
  const handleWalletConnect = async () => {
    if (!walletConnectConnector) {
      return;
    }

    try {
      await connect({
        connector: walletConnectConnector,
      });
    } catch (error: unknown) {
      const walletError = error as {
        code?: number;
        name?: string;
      };

      // Closing or rejecting the WalletConnect modal is normal.
      // Do not report it as an application error.
      if (
        walletError.code === 4001 ||
        walletError.name === "UserRejectedRequestError"
      ) {
        return;
      }

      console.error("WalletConnect connection failed:", error);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {injectedConnector && (
        <button
          onClick={handleInjected}
          disabled={isPending}
          className="rounded-xl border border-purple-500/30 px-4 py-3 font-semibold transition hover:bg-purple-600/20 disabled:opacity-50"
        >
          🦊 Browser Wallet
        </button>
      )}

      {walletConnectConnector && (
        <button
          onClick={handleWalletConnect}
          disabled={isPending}
          className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3 font-semibold transition hover:scale-105 disabled:opacity-50"
        >
          {isPending ? "Connecting..." : "📱 Connect Wallet"}
        </button>
      )}
    </div>
  );
}
