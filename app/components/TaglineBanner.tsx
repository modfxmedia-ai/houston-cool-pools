import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF, QUOTE_HREF } from "../../lib/navigation";

/**
 * Site-wide tagline strip that renders directly above the global Footer.
 * Mounted once from app/layout.tsx so every page inherits it.
 */
export function TaglineBanner() {
  return (
    <section
      aria-label="Houston Cool Pools tagline"
      className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white"
    >
      {/* Subtle water-tone glows */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--color-pool)]/25 blur-[110px]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--color-pool-deep)]/30 blur-[110px]"
      />
      {/* Faint water-line gradient */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,124,182,0.18),transparent_65%)]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-7 px-6 py-14 text-center md:flex-row md:justify-between md:gap-10 md:py-16 md:text-left md:px-10">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[var(--color-pool)]">
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
            Houston Cool Pools
          </p>
          <p className="font-[family-name:var(--font-display)] mt-4 text-2xl italic leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
            &ldquo;Building our reputation{" "}
            <span className="text-[var(--color-gold-light)]">one pool</span>{" "}
            at a time.&rdquo;
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
          <Link
            href={QUOTE_HREF}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Get Your Free Estimate
            <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
