"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { PHONE_DISPLAY, PHONE_HREF, QUOTE_HREF } from "../../../lib/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Redesigned Pool Remodel hero. Two-column split on desktop:
 *  - Left: eyebrow / headline / subtitle / CTAs / compact trust chips
 *  - Right: prominent photo card with offset gradient plate + floating badge
 *
 * On mobile the columns stack (copy first, then image).
 */
export function PoolRemodelHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-navy-deep)] pt-24 text-white md:pt-28 lg:pt-32">
      {/* Ambient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(0,124,182,0.28),transparent_60%)]" />
        <motion.div
          aria-hidden
          className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[var(--color-pool)]/15 blur-[160px]"
          animate={{ x: [0, 60, 0], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[var(--color-gold-light)]/12 blur-[160px]"
          animate={{ x: [0, -50, 0], opacity: [0.55, 0.35, 0.55] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-6 md:px-10 md:pb-20 md:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        {/* ---------- Left copy ---------- */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[var(--color-pool)]"
          >
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
            Pool Remodel &amp; Renovation
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-[family-name:var(--font-display)] mx-auto mt-5 max-w-3xl text-4xl leading-[1.04] tracking-tight md:text-5xl lg:mx-0 lg:text-6xl"
          >
            Is your old pool looking{" "}
            <span className="italic text-[var(--color-gold-light)]">dated?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg lg:mx-0"
          >
            A re-plaster, face-lift, or full renovation can save you time and money
            while breathing new life into your backyard. In a few months you could
            be dipping your feet in your newly remodeled pool.
          </motion.p>

          {/* Trust chips */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } } }}
            className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:mx-0 lg:justify-start"
          >
            {[
              "25+ Yrs in Business",
              "A+ BBB Rated",
              "Angie's List A Rated",
              "10+ Ways to Renovate",
            ].map((chip) => (
              <motion.li
                key={chip}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
                }}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-white/85 backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-[var(--color-gold-light)]">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {chip}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link
              href={QUOTE_HREF}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-pool)] to-[var(--color-pool-deep)] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_14px_36px_-10px_rgba(0,124,182,0.65)] transition-all hover:-translate-y-0.5"
            >
              Start My Remodel Quote
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur transition-colors hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)]"
            >
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>
        </div>

        {/* ---------- Right photo card ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          {/* Offset gradient plate */}
          <span
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] bg-gradient-to-br from-[var(--color-gold)] via-[var(--color-gold-light)]/60 to-[var(--color-pool)] opacity-60"
          />
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-black/40 p-2 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] backdrop-blur">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 rounded-t-[28px] bg-gradient-to-r from-[var(--color-pool)] via-[var(--color-gold-light)] to-[var(--color-gold)]"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] bg-black">
              <Image
                src="/images/pool-remodel/hero.jpg"
                alt="Houston Cool Pools backyard remodel project"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              {/* Corner brand chip */}
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/95 backdrop-blur-sm ring-1 ring-white/15">
                <motion.span
                  aria-hidden
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-light)]"
                />
                Real HCP Remodel
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
