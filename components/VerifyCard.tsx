"use client";

import { useState } from "react";
import { useReadContract } from "wagmi";
import { VERIXA_ABI, VERIXA_REGISTRY } from "@/lib/contracts";

export default function VerifyCard() {
  const [hash, setHash] = useState("");

  const { data, isLoading } = useReadContract({
    address: VERIXA_REGISTRY,
    abi: VERIXA_ABI,
    functionName: "verify",
    args: [
      hash.length === 64
        ? (`0x${hash}` as `0x${string}`)
        : (("0x" + "0".repeat(64)) as `0x${string}`),
    ],
  });

  const result = data as readonly [boolean, `0x${string}`, bigint] | undefined;

  return (
    <section className="mx-auto my-24 max-w-5xl px-6">
      <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="text-4xl font-bold">Verify Document</h2>

        <p className="mt-3 text-gray-400">
          Paste a SHA-256 fingerprint to verify its authenticity.
        </p>

        <input
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          placeholder="Paste SHA-256 hash..."
          className="mt-8 w-full rounded-xl border border-purple-500/20 bg-black/30 p-4 font-mono text-sm outline-none"
        />

        {isLoading && (
          <p className="mt-6 text-gray-400">Checking blockchain...</p>
        )}

        {result && (
          <div className="mt-8 rounded-xl border border-purple-500/20 bg-black/30 p-6">
            {result[0] ? (
              <>
                <h3 className="text-xl font-bold text-green-400">
                  ✅ Registered
                </h3>

                <p className="mt-4">
                  <strong>Owner:</strong>
                </p>

                <p className="break-all font-mono">{result[1]}</p>

                <p className="mt-4">
                  <strong>Timestamp:</strong>
                </p>

                <p>{new Date(Number(result[2]) * 1000).toLocaleString()}</p>
              </>
            ) : (
              <h3 className="text-xl font-bold text-red-400">
                ❌ Hash not registered
              </h3>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
