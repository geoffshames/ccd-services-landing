"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function PaidMediaNav() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="https://crowdcontroldigital.com" className="flex-shrink-0">
          <Image
            src="/brand/CC-LOGO-2024-WHITE.png"
            alt="Crowd Control Digital"
            width={200}
            height={28}
            className="h-7 w-auto"
          />
        </Link>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="whitespace-nowrap text-[11px] sm:text-[13px] font-semibold text-text-primary px-3 sm:px-5 py-2 border border-accent/30 rounded-none hover:border-accent transition-colors uppercase tracking-wide"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get a Proposal
        </motion.a>
      </div>
    </motion.nav>
  );
}
