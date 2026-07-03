import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "../../../lib/business";
import { TEAM } from "../../../lib/team";
import { PHONE_DISPLAY, PHONE_HREF, QUOTE_HREF } from "../../../lib/navigation";
import { TeamBioBlock } from "../../components/about/TeamBioBlock";

export const metadata: Metadata = buildPageMetadata("/about/team");

export default function TeamPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] pt-36 pb-20 text-white md:pt-44 md:pb-24 lg:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,182,0.4),transparent_60%)]" />
        <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[var(--color-pool)]/20 blur-[140px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[var(--color-pool-deep)]/30 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-pool)]">
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
            Meet The Team
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          </p>
          <h1 className="font-[family-name:var(--font-display)] mx-auto mt-6 max-w-4xl text-5xl leading-[0.98] tracking-tight md:text-6xl lg:text-7xl">
            The faces behind your{" "}
            <span className="italic text-[var(--color-gold-light)]">backyard</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            We&apos;ve put together an amazing group of people who help design,
            build, maintain, and repair beautiful pools all across Houston.
          </p>

          {/* Inline meta */}
          <p className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            <span>{TEAM.length} Teammates</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-pool)]" />
            <span>90+ years combined experience</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-pool)]" />
            <span>One mission - fun, on-budget pools</span>
          </p>
        </div>
      </section>

      {/* ─── Bio blocks ─── */}
      <main className="relative bg-[#fafbfc]">
        {TEAM.map((m, i) => (
          <TeamBioBlock key={m.id} member={m} index={i} />
        ))}
      </main>

      {/* ─── Closing CTA ─── */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,124,182,0.3),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
          <h2 className="font-[family-name:var(--font-display)] text-4xl leading-tight md:text-5xl">
            Want to talk pools?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            Schedule a free in-home quote with the HCP team and we&apos;ll
            start sketching your backyard.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href={QUOTE_HREF}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] shadow-lg transition-all hover:-translate-y-0.5"
            >
              Get Your Free Estimate
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-3 w-3 transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
