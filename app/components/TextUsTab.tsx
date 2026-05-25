"use client";

import { motion } from "motion/react";
import { SMS_HREF } from "../../lib/navigation";

export function TextUsTab() {
  return (
    <motion.a
      href={SMS_HREF}
      aria-label="Text us"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
      whileHover={{ x: 4 }}
      className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 origin-left rotate-90 -translate-x-[calc(50%-12px)] sm:block"
    >
      <span className="flex items-center gap-2 rounded-b-sm bg-[var(--color-gold)] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-navy-deep)] shadow-lg">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="-rotate-90">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Text Us
      </span>
    </motion.a>
  );
}
