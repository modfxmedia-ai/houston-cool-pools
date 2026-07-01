"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const ADDRESS = {
  line1: "21902 Highway 249",
  line2: "Houston, TX 77070",
  full: "21902 Highway 249, Houston, TX 77070",
};

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS.full,
)}`;

const EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS.full,
)}&output=embed`;

const HOURS = [
  { day: "Monday – Friday", hours: "8:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "By appointment" },
  { day: "Sunday", hours: "Closed" },
];

const SERVICE_AREAS = ["Houston", "Cypress", "Spring", "Tomball", "The Heights", "Katy"];

export function MapLocation() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-[var(--color-pool)]/8 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-10 h-[360px] w-[360px] rounded-full bg-[var(--color-gold-light)]/12 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-pool)]/25 bg-[var(--color-pool)]/5 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-pool)]" />
            Visit us
          </span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.6vw,2.5rem)] font-extrabold leading-[1.08] tracking-tight text-[var(--color-navy-deep)]">
            Come by the office &mdash; we&rsquo;d love to meet you.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed text-slate-600">
            Our showroom is right on Highway 249, minutes from the Willowbrook area
            and easy to reach from anywhere in northwest Houston.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-stretch">
          {/* ---------- MAP ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="relative lg:h-full"
          >
            {/* Offset shadow plate */}
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[28px] bg-gradient-to-br from-[var(--color-pool)] via-[var(--color-pool-deep)] to-[var(--color-navy-deep)] opacity-90"
            />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_30px_80px_-30px_rgba(0,27,36,0.4)]">
              <div className="relative aspect-[16/10] w-full flex-1 overflow-hidden rounded-[20px] bg-slate-100 sm:aspect-[16/9] lg:aspect-auto lg:min-h-[400px]">
                <iframe
                  title="Houston Cool Pools office location"
                  src={EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>

              {/* Directions button — anchored bottom-right of the map */}
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group absolute bottom-6 right-6 z-10 inline-flex items-center gap-2.5 rounded-full bg-[var(--color-navy-deep)] px-5 py-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_-14px_rgba(0,27,36,0.7)] ring-1 ring-white/10 transition hover:bg-[var(--color-pool-deep)] hover:-translate-y-0.5"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[var(--color-gold-light)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                    <path
                      d="M12 22s-8-7.58-8-13a8 8 0 1 1 16 0c0 5.42-8 13-8 13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                Get Directions
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7v9"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* ---------- INFO CARD ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="relative flex flex-col justify-between gap-6 rounded-[28px] border border-slate-200/80 bg-[#f7f6f2] p-7 shadow-[0_20px_60px_-30px_rgba(0,27,36,0.25)] md:p-8"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 rounded-t-[28px] bg-gradient-to-r from-[var(--color-pool)] via-[var(--color-gold-light)] to-[var(--color-gold)]"
            />

            <div>
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-pool)] to-[var(--color-pool-deep)] text-white shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M12 22s-8-7.58-8-13a8 8 0 1 1 16 0c0 5.42-8 13-8 13Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>

              <p className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[var(--color-pool)]">
                Our office
              </p>
              <p className="mt-1.5 font-display text-[22px] font-extrabold leading-tight text-[var(--color-navy-deep)] sm:text-[24px]">
                {ADDRESS.line1}
                <br />
                {ADDRESS.line2}
              </p>

              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-navy-deep)] px-6 py-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--color-pool-deep)] sm:w-auto"
              >
                Get Directions
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7v9"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Hours */}
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[var(--color-pool)]">
                Office hours
              </p>
              <dl className="mt-3 divide-y divide-slate-200/70 border-y border-slate-200/70">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between py-2.5">
                    <dt className="text-[13.5px] font-semibold text-[var(--color-navy-deep)]">
                      {h.day}
                    </dt>
                    <dd className="text-[13px] text-slate-600">{h.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Contact links */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+12816456631"
                className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 transition hover:border-[var(--color-pool)]/40"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-pool)]/10 text-[var(--color-pool-deep)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Call
                  </p>
                  <p className="truncate font-display text-[13.5px] font-bold text-[var(--color-navy-deep)] group-hover:text-[var(--color-pool)]">
                    (281) 645-6631
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@houstoncoolpools.com"
                className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 transition hover:border-[var(--color-pool)]/40"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--color-pool)]/10 text-[var(--color-pool-deep)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M3 8l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Email
                  </p>
                  <p className="truncate font-display text-[12.5px] font-bold text-[var(--color-navy-deep)] group-hover:text-[var(--color-pool)]">
                    info@houstoncoolpools.com
                  </p>
                </div>
              </a>
            </div>

            {/* Service areas */}
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-[var(--color-pool)]">
                Proudly serving
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {SERVICE_AREAS.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11.5px] font-semibold text-slate-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------- FREE ESTIMATE CTA BANNER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
            className="relative mt-8 overflow-hidden rounded-[24px] bg-gradient-to-r from-[var(--color-pool-deep)] via-[var(--color-pool)] to-[var(--color-pool-deep)] p-6 shadow-[0_24px_60px_-28px_rgba(0,124,182,0.6)] md:p-7"
        >
          {/* Ambient glow */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--color-gold-light)]/25 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          {/* Top hairline */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-gold-light)] to-transparent"
          />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.28em] text-[var(--color-gold-light)]">
                Start today
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-[28px]">
                Schedule your free in-home consultation
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/80">
                No pressure, no obligation — just a friendly walk-through of your
                backyard and the pool that could live there.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a
                href="/free-pool-quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[var(--color-navy-deep)] shadow-[0_16px_40px_-14px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)]"
              >
                Get Your Free Estimate
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7v9"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="tel:+12816456631"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)]"
              >
                Or Call (281) 645-6631
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
