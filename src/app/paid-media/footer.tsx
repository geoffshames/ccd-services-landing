"use client";

export function PaidMediaFooter() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-accent" />
          <span className="text-[13px] text-text-muted">
            © Crowd Control Digital
          </span>
        </div>
        <div className="text-[12px] text-text-muted">
          services.crowdcontroldigital.com
        </div>
      </div>
    </footer>
  );
}
