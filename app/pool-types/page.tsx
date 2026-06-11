import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "../../lib/business";
import { POOL_TYPES } from "../../lib/pool-types";
import { PHONE_DISPLAY, PHONE_HREF, QUOTE_HREF } from "../../lib/navigation";
import {
  PoolTypeNav,
  PoolTypeSection,
} from "../components/pool-types/PoolTypeSection";

export const metadata: Metadata = buildPageMetadata("/pool-types");

export default function PoolTypesPage() {
  return (
    <>
      {/* ----- Hero ----- */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] pt-44 pb-20 text-white md:pt-52 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,182,0.35),transparent_60%)]" />
        <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[var(--color-pool)]/20 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--color-pool-deep)]/30 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-pool)]">
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
            Pool Types
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          </p>
          <h1 className="font-[family-name:var(--font-display)] mx-auto mt-5 max-w-4xl text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-[4.5rem]">
            Find the pool style{" "}
            <span className="italic text-[var(--color-gold-light)]">that fits your home</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            From clean modern geometrics to free-form naturalistic pools and full
            outdoor environments — explore the styles Houston Cool Pools has built
            across greater Houston.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={QUOTE_HREF}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-pool)] to-[var(--color-pool-deep)] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_14px_36px_-10px_rgba(0,124,182,0.65)] transition-all hover:-translate-y-0.5"
            >
              Get Your Free Estimate
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
            >
              Or Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <PoolTypeNav />

      {/* ----- Sections ----- */}
      <main className="relative bg-white">
        {POOL_TYPES.map((category, i) => (
          <PoolTypeSection key={category.id} category={category} index={i} />
        ))}
      </main>

      {/* ----- Closing CTA ----- */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,124,182,0.3),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[var(--color-pool)]">
            Ready to design yours?
          </p>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-4xl leading-tight md:text-5xl">
            Every Houston Cool Pool is{" "}
            <span className="italic text-[var(--color-gold-light)]">custom designed</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
            Tell us your style, your space, and your budget — we&apos;ll design a
            pool that fits all three with our 100% on-budget guarantee.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={QUOTE_HREF}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get Your Free Estimate
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
            >
              Browse by Price Tier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
