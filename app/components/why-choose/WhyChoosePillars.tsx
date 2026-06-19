"use client";

import { motion } from "motion/react";
import { PILLARS } from "../../../lib/why-choose";
import { PillarCard } from "./PillarCard";

const ease = [0.22, 1, 0.36, 1] as const;

/** The three primary pillars from the live page: Stability, Cutting Edge
 *  Technology, and Peace of Mind. */
export function WhyChoosePillars() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <span className="pointer-events-none absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-[var(--color-pool)]/8 blur-[140px]" />
      <span className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[var(--color-gold-light)]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-pool)]">
            The HCP Difference
          </p>
          <h2 className="font-[family-name:var(--font-display)] mt-4 text-3xl leading-tight text-[var(--color-navy)] md:text-5xl">
            Built on stability, technology &amp;{" "}
            <span className="italic text-[var(--color-pool)]">peace of mind</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PILLARS.slice(0, 3).map((p, i) => (
            <PillarCard key={p.title} pillar={p} index={i} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
