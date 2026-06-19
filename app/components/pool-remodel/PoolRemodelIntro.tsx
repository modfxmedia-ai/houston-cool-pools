"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export type ReasonGroup = { heading: string; items: string[] };

export function PoolRemodelIntro({ reasonGroups }: { reasonGroups: ReasonGroup[] }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 px-6 py-20 md:px-10 md:py-28">
      {/* soft decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--color-pool)]/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[var(--color-gold-light)]/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left column — tall sticky image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease }}
          className="group relative lg:sticky lg:top-28"
        >
          {/* gradient frame glow */}
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--color-pool)]/25 via-transparent to-[var(--color-gold-light)]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 shadow-[0_30px_70px_-30px_rgba(0,55,73,0.45)] ring-1 ring-slate-200/70">
            <Image
              src="/images/pool-remodel/pool-remodel-body.jpg"
              alt="Houston Cool Pools pool remodel and renovation projects"
              width={558}
              height={1455}
              sizes="(max-width: 1024px) 100vw, 460px"
              className="h-auto w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)]/35 via-transparent to-transparent" />

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-[var(--color-navy-deep)]/70 px-4 py-3 text-white backdrop-blur-md"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--color-pool)]/30 text-[var(--color-gold-light)]">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M12 3l2.5 6.5L21 10l-5 4.5L17.5 21 12 17l-5.5 4L8 14.5 3 10l6.5-.5L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-xs font-semibold leading-snug tracking-wide">
                Real Houston Cool Pools renovation in progress
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right column — text + cards */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-pool)]">
              <span className="h-px w-8 bg-[var(--color-pool)]/50" />
              Reimagine Your Backyard
            </p>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              If so - you might be interested in a pool remodel or renovation. A simple
              re-plaster, face-lift or complete renovation can save you time and money while
              adding to the beauty of your backyard. Pools and sunshine are some of the great
              things about Texas. In a few months you could be dipping your feet in your
              newly remodeled pool, and sipping your favorite drink. What sounds better than
              that? If you are looking for ideas and resources to create your dream backyard,
              you have come to the right place.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
            className="mt-10 space-y-5"
          >
            {reasonGroups.map((group, gi) => (
              <motion.div
                key={group.heading}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/80 p-7 shadow-[0_10px_30px_-18px_rgba(0,55,73,0.3)] backdrop-blur-sm transition-all hover:border-[var(--color-pool)]/40 hover:shadow-[0_30px_60px_-30px_rgba(0,124,182,0.55)]"
              >
                {/* corner gradient wash */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--color-pool)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-pool)] to-[var(--color-pool-deep)] font-[family-name:var(--font-display)] text-lg font-bold text-white shadow-[0_10px_24px_-10px_rgba(0,124,182,0.8)]">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-[var(--color-navy-deep)]">
                    {group.heading}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-600"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--color-pool)]/12 text-[var(--color-pool)] ring-1 ring-[var(--color-pool)]/20">
                        <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
