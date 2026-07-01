"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MIKE_LOPEZ } from "../../../lib/team";

const ease = [0.22, 1, 0.36, 1] as const;

const CREDENTIALS = [
  { label: "Years in the pool industry", value: "20+" },
  { label: "Years building HCP", value: "28+" },
  { label: "BBB rating", value: "A+" },
  { label: "MLB ballparks visited", value: "13 / 30" },
];

const SIGNATURES = [
  "Founder & Owner",
  "A+ BBB Rated",
  "Angie's List Super Service Award",
  "Houston-born, Houston-built",
];

export function OwnerIntro() {
  return (
    <section className="relative overflow-hidden bg-[#f7f6f2] py-20 md:py-28">
      {/* ambient orbs */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 0.6, 0.35], y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-[var(--color-pool)]/12 blur-3xl"
      />
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.55, 0.3], y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-[var(--color-gold-light)]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-pool)]/25 bg-white px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-pool)]" />
            Meet the owner
          </span>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--color-navy-deep)]">
            The man behind{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Houston Cool Pools</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, delay: 0.3, ease }}
                className="absolute inset-x-0 bottom-1 z-0 h-2.5 origin-left rounded-full bg-gradient-to-r from-[var(--color-gold-light)]/70 to-[var(--color-gold)]/70"
              />
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-slate-600">
            Every stunning backyard we build starts with one person&rsquo;s obsession with getting it right.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16">
          {/* ---------- PORTRAIT ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="relative mx-auto w-full max-w-[440px] lg:max-w-none"
          >
            {/* decorative frame ring */}
            <motion.span
              aria-hidden
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[32px] bg-gradient-to-br from-[var(--color-pool)] via-[var(--color-pool-deep)] to-[var(--color-navy-deep)] md:-translate-x-6 md:translate-y-6"
            />
            <motion.span
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.4 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, delay: 0.35, ease }}
              className="absolute inset-0 translate-x-3 -translate-y-3 rounded-[32px] border-2 border-[var(--color-gold)]/60 md:translate-x-5 md:-translate-y-5"
            />

            {/* portrait card */}
            <div className="relative overflow-hidden rounded-[32px] bg-white p-2 shadow-[0_30px_80px_-30px_rgba(0,27,36,0.4)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
                <Image
                  src={MIKE_LOPEZ.portrait}
                  alt={`${MIKE_LOPEZ.name} — ${MIKE_LOPEZ.title} of Houston Cool Pools`}
                  fill
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 60vw, 90vw"
                  className="object-cover"
                  priority
                />
                {/* subtle bottom gradient for legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-navy-deep)]/70 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-white">
                  <div>
                    <p className="font-display text-[22px] font-extrabold leading-none">
                      {MIKE_LOPEZ.name}
                    </p>
                    <p className="mt-1 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
                      {MIKE_LOPEZ.title} &middot; Houston Cool Pools
                    </p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur-md">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[var(--color-gold-light)]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Floating years badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-[var(--color-navy-deep)] px-4 py-3 shadow-[0_20px_50px_-15px_rgba(0,27,36,0.55)] ring-1 ring-[var(--color-pool)]/30 md:-bottom-8 md:left-8"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-pool)] to-[var(--color-pool-deep)] text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M12 8v4l3 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="leading-tight text-white">
                <p className="font-display text-[19px] font-extrabold">
                  20<span className="text-[var(--color-gold-light)]">+</span> yrs
                </p>
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
                  Pool industry
                </p>
              </div>
            </motion.div>

            {/* Floating quote card — top right */}
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.75, ease }}
              className="absolute -right-2 top-6 hidden max-w-[210px] rounded-2xl bg-white p-4 shadow-[0_16px_40px_-12px_rgba(0,124,182,0.35)] ring-1 ring-[var(--color-pool)]/15 sm:block md:-right-6"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[var(--color-pool)]">
                <path d="M7 7h4v4H7c0 2 1 3 3 3v2c-3.5 0-6-2.5-6-6V7Zm10 0h4v4h-4c0 2 1 3 3 3v2c-3.5 0-6-2.5-6-6V7Z" />
              </svg>
              <p className="mt-2 font-display text-[13.5px] font-semibold leading-snug text-[var(--color-navy-deep)]">
                &ldquo;{MIKE_LOPEZ.favoriteSaying}.&rdquo;
              </p>
              <p className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Mike&rsquo;s motto
              </p>
            </motion.div>
          </motion.div>

          {/* ---------- BIO ---------- */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease }}
              className="text-[10.5px] font-bold uppercase tracking-[0.28em] text-[var(--color-pool)]"
            >
              {MIKE_LOPEZ.title} &middot; Founder
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="mt-3 font-display text-[clamp(1.8rem,3.6vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight text-[var(--color-navy-deep)]"
            >
              Hi, I&rsquo;m Mike Lopez.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mt-5 text-[16px] leading-relaxed text-slate-600"
            >
              I love all things outdoor living. That I get to be a part of building amazing backyards
              for people to create memories with their family and friends is a true blessing. We&rsquo;ve
              put together an amazing group of people who help design, build, maintain, and repair
              these beautiful pools &mdash; and our job is all about fun.
            </motion.p>

            {/* Signature chips */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
              }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {SIGNATURES.map((s) => (
                <motion.li
                  key={s}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11.5px] font-semibold text-slate-600"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-[var(--color-pool)]">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {s}
                </motion.li>
              ))}
            </motion.ul>

            {/* Credential stat grid */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
              }}
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {CREDENTIALS.map((c) => (
                <motion.div
                  key={c.label}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[var(--color-pool)]/40 hover:shadow-[0_12px_40px_-24px_rgba(0,27,36,0.3)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[var(--color-pool)] via-[var(--color-gold-light)] to-[var(--color-gold)] opacity-0 transition group-hover:opacity-100"
                  />
                  <p className="font-display text-2xl font-extrabold leading-none text-[var(--color-navy-deep)]">
                    {c.value}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase leading-tight tracking-[0.16em] text-slate-500">
                    {c.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-navy-deep)] px-6 py-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--color-pool-deep)]"
              >
                Read Mike&rsquo;s full story
                <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/free-pool-quote"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-deep)] transition hover:border-[var(--color-pool)] hover:text-[var(--color-pool)]"
              >
                Get a free quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
