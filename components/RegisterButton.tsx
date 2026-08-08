"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { VERIXA_ABI, VERIXA_REGISTRY } from "@/lib/contracts";
import { useEffect, useState } from "react";

type RegisterButtonProps = {
  hash: string;
  fileName: string;
};

export default function RegisterButton({
  hash,
  fileName,
}: RegisterButtonProps) {
  const [showDuplicate, setShowDuplicate] = useState(false);

  const { writeContract, data: txHash, isPending, error } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess,
    isError: isTransactionError,
  } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  useEffect(() => {
    if (!isSuccess || !hash) return;

    const registrations = JSON.parse(
      localStorage.getItem("verixa-registrations") || "[]",
    );

    registrations.unshift({
      fileName: fileName || "Uploaded File",
      hash,
      timestamp: Date.now(),
    });

    localStorage.setItem(
      "verixa-registrations",
      JSON.stringify(registrations.slice(0, 5)),
    );

    window.dispatchEvent(new Event("verixa-registration-added"));
  }, [isSuccess, hash, fileName]);

  useEffect(() => {
    if (isTransactionError) {
      setShowDuplicate(true);
    }
  }, [isTransactionError]);

  function handleRegister() {
    if (!hash) return;

    setShowDuplicate(false);

    writeContract({
      address: VERIXA_REGISTRY,
      abi: VERIXA_ABI,
      functionName: "register",
      args: [`0x${hash}` as `0x${string}`],
    });
  }

  return (
    <div className="mt-6">
      <button
        onClick={handleRegister}
        disabled={!hash || isPending || isConfirming}
        className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-semibold transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending
          ? "Confirm in Rabby..."
          : isConfirming
            ? "Waiting for confirmation..."
            : "🚀 Register on Flare"}
      </button>

      {isSuccess && (
        <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-4">
          <p className="font-semibold text-green-400">
            ✅ Hash successfully registered!
          </p>

          {txHash && (
            <a
              href={`https://coston2-explorer.flare.network/tx/${txHash}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm text-purple-300 underline"
            >
              View transaction on Flare Explorer
            </a>
          )}
        </div>
      )}

      {showDuplicate && (
        <div className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <p className="font-semibold text-yellow-400">⚠️ Already Registered</p>

          <p className="mt-2 text-sm text-gray-300">
            This file has already been registered on the Flare blockchain.
          </p>

          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("verixa-verify-hash", {
                  detail: hash,
                }),
              );
            }}
            className="mt-4 rounded-lg border border-yellow-500/30 px-4 py-2 text-sm font-semibold text-yellow-300 transition hover:bg-yellow-500/10"
          >
            🔍 Verify This File
          </button>
        </div>
      )}

      {error && !showDuplicate && (
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
          <p className="font-semibold text-red-400">❌ Registration failed</p>

          <p className="mt-2 break-words text-sm text-gray-300">
            {error.message}
          </p>
        </div>
      )}
    </div>
  );
}
