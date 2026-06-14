"use client";

import { App } from "@/types/app";

interface RandomAppButtonProps {
  apps: App[];
}

export default function RandomAppButton({ apps }: RandomAppButtonProps) {
  function openRandom() {
    const app = apps[Math.floor(Math.random() * apps.length)];
    window.open(app.url, "_blank", "noopener,noreferrer");
  }

  return (
    <button
      onClick={openRandom}
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-600 hover:bg-green-700 active:scale-95 text-white text-sm font-medium transition-all shadow-sm"
    >
      <span>🎲</span>
      ഭാഗ്യ പരീക്ഷണം!
    </button>
  );
}
