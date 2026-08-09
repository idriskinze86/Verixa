"use client";

import { useEffect, useState } from "react";
import type { Hex } from "viem";
import { useReadContract } from "wagmi";
import { VERIXA_ABI, VERIXA_REGISTRY } from "@/lib/contracts";

export default function VerifyCard() {
  const [hash, setHash] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    function handleVerifyHash(event: Event) {
      const customEvent = event as CustomEvent<string>;

      if (!customEvent.detail) return;

      setHash(customEvent.detail);

      setTimeout(() => {
        document.getElementById("verify-document")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }

    window.addEventListener("verixa-verify-hash", handleVerifyHash);

    return () => {
      window.removeEventListener("verixa-verify-hash", handleVerifyHash);
    };
  }, []);

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    const buffer = await file.arrayBuffer();

    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashHex);
  }

  const { data, isLoading } = useReadContract({
    address: VERIXA_REGISTRY,
    abi: VERIXA_ABI,
    functionName: "verify",
    args: [
      hash.length === 64
        ? (("0x" + hash) as Hex)
        : (("0x" + "0".repeat(64)) as Hex),
    ],
  });

  const result = data as readonly [boolean, Hex, bigint] | undefined;

  return (
    <section id="verify-document" className="mx-auto my-24 max-w-5xl px-6">
      <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="text-4xl font-bold">Verify Document</h2>

        <p className="mt-3 text-gray-400">
          Upload a file or paste its SHA-256 fingerprint to verify it on the
          Flare blockchain.
        </p>

        <div className="mt-8 rounded-2xl border-2 border-dashed border-purple-500/30 p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10 text-3xl">
            🔍
          </div>

          <h3 className="mt-4 text-xl font-semibold">
            {fileName || "Upload a file to verify"}
          </h3>

          <p className="mt-2 text-gray-400">
            {fileName
              ? "SHA-256 fingerprint generated."
              : "Verixa will calculate the fingerprint automatically."}
          </p>

          <label className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold transition hover:scale-105">
            📤 Choose File
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-sm text-gray-400">
            Or paste SHA-256 fingerprint
          </p>

          <input
            value={hash}
            onChange={(e) => {
              setHash(e.target.value);
              setFileName("");
            }}
            placeholder="Paste SHA-256 hash..."
            className="w-full rounded-xl border border-purple-500/20 bg-black/30 p-4 font-mono text-sm outline-none"
          />
        </div>

        {hash.length === 64 && (
          <div className="mt-4 rounded-xl border border-purple-500/20 bg-black/30 p-4">
            <p className="text-sm text-gray-400">SHA-256 Fingerprint</p>

            <p className="mt-2 break-all font-mono text-sm text-gray-300">
              {hash}
            </p>
          </div>
        )}
        {isLoading && hash.length === 64 && (
          <p className="mt-6 text-gray-400">🔎 Checking blockchain...</p>
        )}

        {result && hash.length === 64 && (
          <div className="mt-8 rounded-xl border border-purple-500/20 bg-black/30 p-6">
            {result[0] ? (
              <>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-xl">
                    ✅
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-green-400">
                      Document Verified
                    </h3>

                    <p className="text-sm text-gray-400">
                      This file is registered on the Flare blockchain.
                    </p>
                  </div>
                </div>

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
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-xl">
                  ❌
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-400">
                    Not Registered
                  </h3>

                  <p className="text-sm text-gray-400">
                    This file was not found in the Flare registry.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
