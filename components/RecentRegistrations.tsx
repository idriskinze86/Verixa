"use client";

import { useEffect, useState } from "react";

type Registration = {
  fileName: string;
  hash: string;
  timestamp: number;
};

export default function RecentRegistrations() {
  const [items, setItems] = useState<Registration[]>([]);

  useEffect(() => {
    function loadRegistrations() {
      const saved = localStorage.getItem("verixa-registrations");

      if (!saved) {
        setItems([]);
        return;
      }

      setItems(JSON.parse(saved));
    }

    // Load registrations when the component first appears
    loadRegistrations();

    // Listen for new registrations
    window.addEventListener("verixa-registration-added", loadRegistrations);

    return () => {
      window.removeEventListener(
        "verixa-registration-added",
        loadRegistrations,
      );
    };
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="mx-auto my-20 max-w-5xl px-6">
      <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl">
        <div>
          <h2 className="text-3xl font-bold">Recent Registrations</h2>

          <p className="mt-2 text-sm text-gray-400">
            Your latest files registered on the Flare blockchain.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-purple-500/20 bg-black/30 p-5 transition hover:border-purple-400/40 hover:bg-white/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-xl">
                  📄
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">{item.fileName}</h3>

                  <p className="mt-2 break-all font-mono text-sm text-gray-400">
                    {item.hash}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <span>🕒</span>
                    <span>{new Date(item.timestamp).toLocaleString()}</span>
                  </div>
                </div>

                <div className="shrink-0 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  Registered
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
