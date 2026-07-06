"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TESTIMONIALS } from "../../../lib/testimonials";

const ease = [0.22, 1, 0.36, 1] as const;

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < n ? "var(--color-pool)" : "transparent"}
          stroke="var(--color-pool)"
          strokeWidth="1.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  return name
    .replace(/[^A-Za-z. ]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  const t = TESTIMONIALS[index];

  // sliver preview cards (prev / next)
  const prev = TESTIMONIALS[(index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length];
  const next = TESTIMONIALS[(index + 1) % TESTIMONIALS.length];

  return (
    <section
      className="relative overflow-hidden bg-white py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* subtle backdrop accents */}
      <span className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[var(--color-pool)]/8 blur-[160px]" />
      <span className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[var(--color-pool)]/6 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        {/* ----- Header ----- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-pool)]">
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
            What Our Clients Say
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          </p>
          <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl leading-[1.05] tracking-tight text-[var(--color-navy-deep)] md:text-5xl lg:text-[3.5rem]">
            Five-Star{" "}
            <span className="italic text-[var(--color-pool)]">Reviews</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-navy-deep)]/65">
            Real words from real Houston homeowners who trusted us to build their backyard escape.
          </p>
        </motion.div>

        {/* ----- Carousel ----- */}
        <div className="relative mt-16">
          {/* Side preview chips (desktop) */}
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            aria-label="Previous review"
            className="group absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex"
          >
            <div className="flex items-center gap-3 rounded-full bg-white px-3 py-3 shadow-lg ring-1 ring-black/5 transition-all hover:-translate-x-1 hover:shadow-xl">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-pool)]/10 text-[var(--color-pool)] transition-colors group-hover:bg-[var(--color-pool)] group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
            aria-label="Next review"
            className="group absolute right-0 top-1/2 hidden -translate-y-1/2 lg:flex"
          >
            <div className="flex items-center gap-3 rounded-full bg-white px-3 py-3 shadow-lg ring-1 ring-black/5 transition-all hover:translate-x-1 hover:shadow-xl">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-pool)]/10 text-[var(--color-pool)] transition-colors group-hover:bg-[var(--color-pool)] group-hover:text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </button>

          {/* Featured card */}
          <div className="relative mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.name + index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease }}
                className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_30px_70px_-30px_rgba(0,55,73,0.25)] ring-1 ring-black/5 sm:p-10 md:p-14"
              >
                {/* Decorative quote glyph */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-2 right-4 font-[family-name:var(--font-display)] text-[6rem] leading-none text-[var(--color-pool)]/8 sm:-top-4 sm:right-6 sm:text-[10rem] md:text-[14rem]"
                >
                  &ldquo;
                </span>

                <div className="relative">
                  <Stars n={t.rating} />

                  <blockquote className="mt-6 text-base leading-[1.7] text-[var(--color-navy-deep)]/85 md:text-[17px]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-8 flex items-center gap-4 border-t border-black/5 pt-6">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[var(--color-pool)] to-[var(--color-pool-deep)] text-sm font-bold tracking-wide text-white shadow-md">
                      {initials(t.name)}
                    </span>
                    <div className="leading-tight">
                      <span className="block text-sm font-semibold text-[var(--color-navy-deep)]">
                        {t.name}
                      </span>
                      <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-pool)]">
                        Verified Customer
                      </span>
                    </div>

                    {/* Google badge */}
                    <span className="ml-auto hidden items-center gap-2 rounded-full bg-[var(--color-pool)]/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-pool)] sm:inline-flex">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      5.0 Rating
                    </span>
                  </figcaption>
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Prev / next sliver labels (desktop only) */}
          <div className="pointer-events-none mx-auto mt-6 hidden max-w-3xl items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-navy-deep)]/40 lg:flex">
            <span>← {prev.name}</span>
            <span>{next.name} →</span>
          </div>
        </div>

        {/* ----- Bottom controls ----- */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="flex items-center gap-1">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className="group flex h-10 w-8 items-center justify-center"
              >
                <span
                  aria-hidden
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-10 bg-[var(--color-pool)]"
                      : "w-1.5 bg-[var(--color-navy-deep)]/15 group-hover:bg-[var(--color-navy-deep)]/30"
                  }`}
                />
              </button>
            ))}
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-navy-deep)]/50">
            {String(index + 1).padStart(2, "0")}{" "}
            <span className="mx-2 text-[var(--color-navy-deep)]/20">/</span>{" "}
            {String(TESTIMONIALS.length).padStart(2, "0")} Reviews
          </p>
        </div>
      </div>
    </section>
  );
}
