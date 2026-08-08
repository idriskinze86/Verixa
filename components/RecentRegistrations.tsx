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
        <h2 className="text-3xl font-bold">Recent Registrations</h2>

        <div className="mt-8 space-y-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-purple-500/20 bg-black/30 p-5"
            >
              <h3 className="font-semibold">📄 {item.fileName}</h3>

              <p className="mt-2 break-all font-mono text-sm text-gray-400">
                {item.hash}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
