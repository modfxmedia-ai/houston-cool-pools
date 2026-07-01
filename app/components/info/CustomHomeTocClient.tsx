"use client";

import { motion } from "motion/react";
import { InfoHero } from "./InfoHero";
import { PoolCtaBanner } from "../PoolCtaBanner";

const ease = [0.22, 1, 0.36, 1] as const;

type Partner = {
  name: string;
  location: string;
  blurb: string;
  href: string;
  initials: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Ridgewater Homes",
    location: "Houston, TX",
    blurb:
      "Award-winning custom home builder crafting luxury estates across greater Houston with signature attention to outdoor living.",
    href: "https://houstoncoolpools.com/ridgewater-homes.html",
    initials: "RH",
  },
  {
    name: "Mazzarino Construction",
    location: "Houston, TX",
    blurb:
      "Boutique builder known for modern, architecturally distinctive homes in the Heights, West University, and Bellaire.",
    href: "https://houstoncoolpools.com/mazzarino-construction.html",
    initials: "MC",
  },
  {
    name: "Robert Sanders Custom Homes",
    location: "Houston, TX",
    blurb:
      "Multi-generational Houston builder specializing in one-of-a-kind estate homes with fully integrated backyard resorts.",
    href: "https://houstoncoolpools.com/robert-sanders.html",
    initials: "RS",
  },
  {
    name: "Timeline Construction",
    location: "Houston, TX",
    blurb:
      "Design-forward custom home construction with an emphasis on collaboration, craftsmanship, and on-time delivery.",
    href: "https://houstoncoolpools.com/timeline-construction.html",
    initials: "TC",
  },
  {
    name: "Nautilus Real Estate",
    location: "Houston, TX",
    blurb:
      "Custom homes and development where great architecture, great neighborhoods, and great backyards come together.",
    href: "https://houstoncoolpools.com/nautilus-real-estate.html",
    initials: "NR",
  },
];

export function CustomHomeTocClient() {
  return (
    <>
      <InfoHero
        eyebrow="Builder Network"
        title="Custom Home Builder Associations"
        subtitle="The Houston-area custom home builders we've worked side-by-side with — pool-first coordination from foundation through final punch list."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pool Information", href: "/pool-information" },
          { label: "Custom Home Builder" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool)]">
              Trusted network
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[var(--color-navy-deep)] sm:text-4xl">
              Building great backyards, together.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-slate-600">
              When your builder and pool company collaborate from day one, the whole project
              runs smoother — from siting the pool to routing utilities to matching materials.
              These are the partners we work with regularly.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PARTNERS.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-pool)]/50 hover:shadow-[0_20px_60px_-30px_rgba(0,27,36,0.35)]"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 flex-none place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-navy-deep)] to-[var(--color-pool-deep)] text-lg font-bold text-white shadow-md">
                    {p.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-navy-deep)] transition group-hover:text-[var(--color-pool)]">
                      {p.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{p.location}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-slate-600">{p.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.2em] text-[var(--color-pool)]">
                  Visit builder
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <PoolCtaBanner heading="Building a new home? Let's design the pool alongside it." />
    </>
  );
}
