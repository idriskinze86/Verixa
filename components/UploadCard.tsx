"use client";

import { useRef, useState } from "react";
import RegisterButton from "./RegisterButton";

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [fileHash, setFileHash] = useState("");

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

    setFileHash(hashHex);
  }

  return (
    <section className="mx-auto my-24 max-w-5xl px-6">
      <div className="rounded-3xl border border-purple-500/20 bg-white/5 p-8 backdrop-blur-xl">
        <h2 className="text-4xl font-bold">Upload & Verify</h2>

        <p className="mt-3 text-gray-400">
          Upload any file to generate its blockchain fingerprint before
          registering it on Flare.
        </p>

        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />

        <div className="mt-10 rounded-2xl border-2 border-dashed border-purple-500/30 p-14 text-center">
          <div className="text-6xl">📤</div>

          <h3 className="mt-6 text-2xl font-semibold">
            {fileName || "Drag & Drop your file"}
          </h3>

          <p className="mt-3 text-gray-400">
            {fileName
              ? "File selected successfully."
              : "or click to browse your computer"}
          </p>

          <button
            onClick={() => inputRef.current?.click()}
            className="mt-8 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 font-semibold transition hover:scale-105"
          >
            Choose File
          </button>
          {fileHash && (
            <div className="mt-8 rounded-xl border border-purple-500/20 bg-black/30 p-5 text-left">
              <h4 className="font-semibold text-purple-300">
                SHA-256 Fingerprint
              </h4>

              <p className="mt-3 break-all font-mono text-sm text-gray-300">
                {fileHash}
              </p>
            </div>
          )}
          <RegisterButton hash={fileHash} />
        </div>
      </div>
    </section>
  );
}
