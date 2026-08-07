"use client";

import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { VERIXA_ABI, VERIXA_REGISTRY } from "@/lib/contracts";

type RegisterButtonProps = {
  hash: string;
};

export default function RegisterButton({ hash }: RegisterButtonProps) {
  const { writeContract, data: txHash, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  function handleRegister() {
    if (!hash) return;

    writeContract({
      address: VERIXA_REGISTRY,
      abi: VERIXA_ABI,
      functionName: "register",
      args: [`0x${hash} as 0x${string}`],
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

      {error && <p className="mt-4 text-red-400">{error.message}</p>}
    </div>
  );
}
