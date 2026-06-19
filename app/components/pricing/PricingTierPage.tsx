"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { CountUp } from "../why-choose/CountUp";
import { PHONE_DISPLAY, PHONE_HREF } from "../../../lib/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

export type PricingTierProps = {
  /** Hero H1 text */
  heading: string;
  /** Slug of the current page so its pill highlights */
  activeHref: string;
  /** Background hero image path */
  heroImage: string;
  /** Section heading above the pool grid */
  sectionHeading: string;
  /** Section intro paragraph */
  body: string;
  /** Gallery images for this tier */
  images: { src: string; alt: string }[];
};

/** The real pricing pages from the live site, used by the sticky pills + side-rail navigation. */
const PRICING_PAGES: { label: string; range: string; href: string }[] = [
  { label: "$65k–$75k", range: "$65k – $75k", href: "/pricing-45k-55k" },
  { label: "$75k–$85k", range: "$75k – $85k", href: "/pricing-level-1" },
  { label: "$85k–$95k", range: "$85k – $95k", href: "/pricing-level-2" },
  { label: "$95k–$105k", range: "$95k – $105k", href: "/pricing-level-3" },
  { label: "$105k–$115k", range: "$105k – $115k", href: "/pricing-level-4" },
  { label: "$115k+", range: "$115k+", href: "/pricing-level-5" },
];

const STATS: { value: number; suffix?: string; label: string }[] = [
  { value: 25, suffix: "+", label: "Years Building" },
  { value: 500, suffix: "+", label: "Pools Completed" },
  { value: 100, suffix: "%", label: "On-Budget" },
  { value: 6, label: "Areas Served" },
];

export function PricingTierPage({
  heading,
  activeHref,
  heroImage,
  sectionHeading,
  body,
  images,
}: PricingTierProps) {
  return (
    <>
      {/* ----- Hero ----- */}
      <section className="relative isolate overflow-hidden bg-[var(--color-navy-deep)] pt-36 text-white md:pt-44 lg:pt-48">
        {/* Real project photo background */}
        <div className="absolute inset-0 -z-20">
          <Image
            src={heroImage}
            alt="Houston Cool Pools custom pool project"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[var(--color-navy-deep)]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-deep)]/70 via-[var(--color-navy-deep)]/85 to-[var(--color-navy-deep)]" />
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(0,124,182,0.32),transparent_60%)]" />
          <motion.div
            aria-hidden
            className="absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-[var(--color-pool)]/15 blur-[160px]"
            animate={{ x: [0, 60, 0], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[var(--color-gold-light)]/15 blur-[160px]"
            animate={{ x: [0, -50, 0], opacity: [0.6, 0.35, 0.6] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-10 text-center md:px-10 md:pb-16 md:pt-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[var(--color-pool)]"
          >
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
            Custom Pool Pricing
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-[family-name:var(--font-display)] mx-auto mt-5 max-w-3xl text-4xl leading-[1.04] tracking-tight md:text-6xl lg:text-7xl"
          >
            {heading}
          </motion.h1>
        </div>

        {/* ----- Animated motion-graph stats ----- */}
        <div className="relative mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-20">
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {STATS.map((s) => (
              <motion.li
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-md md:p-6"
              >
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  className="font-[family-name:var(--font-display)] block text-3xl text-white md:text-5xl"
                />
                <span className="mt-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">
                  {s.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ----- Sticky pill nav (follows on scroll) ----- */}
      <div className="sticky top-[64px] z-30 border-y border-slate-200/80 bg-white/85 backdrop-blur-xl md:top-[72px]">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-3 md:px-10">
          <span className="hidden shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 lg:inline">
            Jump to:
          </span>
          <nav className="flex flex-1 items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {PRICING_PAGES.map((item) => {
              const active = item.href === activeHref;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex shrink-0 items-center rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-all ${
                    active
                      ? "bg-gradient-to-r from-[var(--color-pool)] to-[var(--color-pool-deep)] text-white shadow-[0_10px_24px_-10px_rgba(0,124,182,0.8)]"
                      : "border border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-[var(--color-pool)]/40 hover:text-[var(--color-pool-deep)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* ----- Fixed side-rail slider (desktop) ----- */}
      <nav
        aria-label="Jump to pricing tier"
        className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 xl:block"
      >
        <div className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-[0_24px_60px_-28px_rgba(0,55,73,0.55)] backdrop-blur-xl">
          <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
            Price Range
          </p>
          <ul className="relative flex flex-col gap-5">
            {/* vertical track line */}
            <span
              aria-hidden
              className="absolute left-[5px] bottom-2 top-2 w-px bg-slate-200"
            />
            {PRICING_PAGES.map((p) => {
              const active = p.href === activeHref;
              return (
                <li key={p.href} className="relative">
                  <Link href={p.href} className="group flex items-center gap-3">
                    <span
                      className={`relative z-10 grid h-[11px] w-[11px] shrink-0 place-items-center rounded-full transition-all ${
                        active
                          ? "bg-gradient-to-br from-[var(--color-pool)] to-[var(--color-pool-deep)] ring-4 ring-[var(--color-pool)]/20"
                          : "bg-white ring-2 ring-slate-300 group-hover:ring-[var(--color-pool)]"
                      }`}
                    />
                    <span
                      className={`whitespace-nowrap text-xs font-bold tracking-wide transition-colors ${
                        active
                          ? "text-[var(--color-navy)]"
                          : "text-slate-400 group-hover:text-[var(--color-pool-deep)]"
                      }`}
                    >
                      {p.range}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* ----- Pool Grid ----- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-6 py-20 md:px-10 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--color-pool)]/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[var(--color-gold-light)]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-pool)]">
              <span className="h-px w-8 bg-[var(--color-pool)]/50" />
              Our Work
              <span className="h-px w-8 bg-[var(--color-pool)]/50" />
            </p>
            <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl leading-tight text-[var(--color-navy-deep)] md:text-4xl">
              {sectionHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              {body}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {images.map((img, i) => (
              <motion.figure
                key={img.src}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.97 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_12px_36px_-20px_rgba(0,55,73,0.4)] transition-shadow hover:shadow-[0_30px_60px_-28px_rgba(0,124,182,0.55)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1100ms] group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)]/55 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-navy-deep)]/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-gold-light)] backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-light)]" />
                    Houston Cool Pools
                  </span>
                  <figcaption className="absolute inset-x-4 bottom-4 translate-y-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {img.alt}
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ----- CTA Banner ----- */}
      <section className="relative isolate overflow-hidden bg-[var(--color-navy-deep)] px-6 py-20 text-white md:px-10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,124,182,0.3),transparent_60%)]" />
          <motion.div
            aria-hidden
            className="absolute -bottom-32 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-[var(--color-pool)]/15 blur-[150px]"
            animate={{ opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left"
        >
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-4xl">
              Ready to build your dream pool?
            </h2>
            <p className="mt-3 text-white/70">
              Tell us your vision and we&rsquo;ll put together a custom quote.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Get Your Free Estimate
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
