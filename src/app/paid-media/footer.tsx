"use client";

import Image from "next/image";

export function PaidMediaFooter() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/brand/CC-LOGO-2025-PROFILE.png" 
            alt="Crowd Control Digital" 
            width={24} 
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span className="text-[13px] text-text-muted">
            © Crowd Control Digital
          </span>
        </div>
      </div>
    </footer>
  );
}
