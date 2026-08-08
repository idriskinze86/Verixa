"use client";

type ToastProps = {
  message: string;
};

export default function Toast({ message }: ToastProps) {
  return (
    <div className="fixed top-6 right-6 z-50 rounded-xl border border-purple-500 bg-purple-600 px-5 py-3 text-white shadow-xl">
      ✅ {message}
    </div>
  );
}
