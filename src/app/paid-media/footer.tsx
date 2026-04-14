"use client";

import Image from "next/image";

export function PaidMediaFooter() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/brand/cc-icon.ico" 
            alt="Crowd Control Digital" 
            width={20} 
            height={20}
            className="w-5 h-5 object-contain"
          />
          <span className="text-[13px] text-text-muted">
            © Crowd Control Digital
          </span>
        </div>
      </div>
    </footer>
  );
}
