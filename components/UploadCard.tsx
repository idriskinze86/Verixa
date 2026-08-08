"use client";

import { useRef, useState } from "react";
import RegisterButton from "./RegisterButton";
import Toast from "./Toast";
import { UploadCloud } from "lucide-react";

export default function UploadCard() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileHash, setFileHash] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  async function processFile(file: File) {
    setFileName(file.name);
    setFileSize((file.size / 1024).toFixed(2) + " KB");

    const buffer = await file.arrayBuffer();

    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setFileHash(hashHex);
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    await processFile(file);
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(true);
  }
  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
  }

  async function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (!file) return;

    await processFile(file);
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

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`mt-10 rounded-2xl border-2 border-dashed p-14 text-center transition-all duration-300 ${
            isDragging
              ? "border-purple-400 bg-purple-500/10 scale-[1.02]"
              : "border-purple-500/30 hover:border-purple-400"
          }`}
        >
          <div className="flex justify-center">
            <UploadCloud
              className={`h-16 w-16 transition-all duration-300 ${
                isDragging ? "text-purple-300 scale-110" : "text-purple-400"
              }`}
            />
          </div>

          <h3 className="mt-6 text-2xl font-semibold">
            {fileName
              ? fileName
              : isDragging
                ? "Drop your file here"
                : "Drag & Drop your file"}
          </h3>
          <p className="mt-3 text-gray-400">
            {fileName
              ? `File selected successfully • ${fileSize}`
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

              <div className="mt-3 flex items-center gap-3">
                <p className="flex-1 break-all font-mono text-sm text-gray-300">
                  {fileHash}
                </p>

                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(fileHash);

                    setShowToast(true);

                    setTimeout(() => {
                      setShowToast(false);
                    }, 2000);
                  }}
                  className="rounded-lg border border-purple-500/30 px-3 py-2 text-sm hover:bg-purple-600/20"
                >
                  📋 Copy
                </button>
              </div>
            </div>
          )}

          <RegisterButton hash={fileHash} fileName={fileName} />
        </div>
      </div>

      {showToast && <Toast message="Hash copied to clipboard!" />}
    </section>
  );
}
