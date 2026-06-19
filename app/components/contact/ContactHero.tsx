"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PHONE_DISPLAY, PHONE_HREF } from "../../../lib/navigation";
import { BUSINESS } from "../../../lib/business";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Redesigned hero for the contact page — a modern reimagining of the live
 * houstoncoolpools.com/contact.html header. Bright backyard backdrop, a tight
 * "Free Home Consultation" headline, the at-a-glance contact rail, and a soft
 * scroll cue down into the form.
 */
export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-navy-deep)] pt-36 text-white md:pt-44 lg:pt-48">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/gallery/hd/silverman-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-deep)]/85 via-[var(--color-navy-deep)]/72 to-[var(--color-navy-deep)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_25%,rgba(0,124,182,0.4),transparent_60%)]" />

        <motion.div
          aria-hidden
          className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--color-pool)]/15 blur-[160px]"
          animate={{ x: [0, 60, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-10 text-center md:px-10 md:pb-24 md:pt-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[var(--color-pool)]"
        >
          <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          Get In Touch
          <span className="h-px w-8 bg-[var(--color-pool)]/60" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="font-[family-name:var(--font-display)] mx-auto mt-5 max-w-3xl text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
        >
          Your free home{" "}
          <span className="italic text-[var(--color-gold-light)]">consultation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          Houston&apos;s premier pool builder since {BUSINESS.foundingDate}. Tell us about
          your backyard and we&apos;ll bring the design ideas, transparent pricing, and our
          100% on-budget guarantee.
        </motion.p>

        {/* Quick contact rail */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <HeroChip
            href={PHONE_HREF}
            label={PHONE_DISPLAY}
            icon={
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            }
          />
          <HeroChip
            href={`mailto:${BUSINESS.email}`}
            label={BUSINESS.email}
            icon={
              <>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </>
            }
          />
          <HeroChip
            label={`${BUSINESS.address.addressLocality}, ${BUSINESS.address.addressRegion}`}
            icon={
              <>
                <path d="M12 22s-7-7.58-7-13a7 7 0 1114 0c0 5.42-7 13-7 13z" />
                <circle cx="12" cy="9" r="2.5" />
              </>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}

function HeroChip({
  href,
  label,
  icon,
}: {
  href?: string;
  label: string;
  icon: React.ReactNode;
}) {
  const inner = (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
      <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-pool)]/20 text-[var(--color-pool)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          {icon}
        </svg>
      </span>
      {label}
    </span>
  );

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
      }}
    >
      {href ? <a href={href}>{inner}</a> : inner}
    </motion.div>
  );
}
