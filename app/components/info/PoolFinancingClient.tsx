"use client";

import { motion } from "motion/react";
import { InfoHero } from "./InfoHero";
import { PoolCtaBanner } from "../PoolCtaBanner";

const ease = [0.22, 1, 0.36, 1] as const;

type Lender = {
  name: string;
  tag: string;
  blurb: string;
  href: string;
  cta?: string;
  contact?: { line: string; note?: string }[];
  featured?: boolean;
};

const LENDERS: Lender[] = [
  {
    name: "HFS Financial",
    tag: "Preferred Partner",
    featured: true,
    blurb:
      "HFS has one-of-a-kind loan programs and world-class service — 1,500+ five-star reviews and platform loans that need NO equity. All loans fund 100% direct-to-consumer. Soft credit check to present you with full loan options.",
    cta: "Check My Rates",
    href: "https://www.hfsfinancial.net/promo/HoustonCoolPoolsTX/",
    contact: [
      { line: "Whether you want to finance the pool, deck, landscaping and more — HFS is your trusted partner for the best loan and customer service in the home improvement industry." },
    ],
  },
  {
    name: "Lyon Financial",
    tag: "Broker",
    blurb:
      "Long-time Houston Cool Pools lending partner specializing in swimming-pool loans with fast pre-qualification and competitive rates.",
    cta: "Apply with Lyon",
    href: "https://www.lyonfinancial.net/dealer/houston-cool-pools-tx/",
    contact: [{ line: "www.LyonFinancial.net" }, { line: "877-754-5966" }],
  },
  {
    name: "Central Bank",
    tag: "Broker",
    blurb:
      "Whether you plan to put in a pool, remodel your home, or use the equity in your home for another reason — Ana Torrez at Central Bank is here to help.",
    cta: "Apply Now",
    href: "https://www.cbhou.com/Pool-Loans/Home/Apply-Now",
    contact: [
      { line: "Ana Torrez • NMLS #2259842" },
      { line: "713-388-1350" },
      { line: "ana.torrez@frostbank.com" },
    ],
  },
  {
    name: "LightStream Financial",
    tag: "Broker",
    blurb:
      "Online lending from LightStream with no fees, low fixed rates and same-day funding on approved loans.",
    cta: "Visit LightStream",
    href: "https://www.lightstream.com/central-bank?cid=LP-HIL-swimming_pool-cb-19435&subid=1093&fact=19435&AID=HoustonCoolPools&isredirect=True",
    contact: [{ line: "www.cbhou.com/poolloans" }],
  },
  {
    name: "Viking Capital",
    tag: "Broker",
    blurb:
      "Free loan consultation, soft credit pull (does not hurt your credit), high approval rates and fast funding — with veteran and military-family discounts and 5-star rated customer service.",
    cta: "Get a Free Consultation",
    href: "https://poolloan.net/houston-cool-pools/",
  },
  {
    name: "Texas Pool Financing",
    tag: "Broker",
    blurb: "Vince Gutierrez Mortgages — local Texas-based pool financing broker.",
    cta: "Learn More",
    href: "https://www.VinceGutierrezMortgages.com",
    contact: [{ line: "281-597-9234" }],
  },
];

export function PoolFinancingClient() {
  return (
    <>
      <InfoHero
        eyebrow="Financing Options"
        title="Pool Financing"
        subtitle="Trusted lending partners who make it easy to fund your new Houston pool, spa or remodel — from soft-credit pre-qualification to same-day funding."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pool Information", href: "/pool-information" },
          { label: "Financing" },
        ]}
      />

      <section className="relative bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto max-w-3xl rounded-3xl border border-slate-200/80 bg-gradient-to-br from-[var(--color-pool)]/5 via-white to-[var(--color-gold-light)]/5 p-6 text-center md:p-8"
          >
            <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool)]">
              Please note
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700">
              The companies listed below are in no way affiliated with Houston Cool Pools.
              We have, however, worked with each of them and can attest to their service and
              professionalism.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {LENDERS.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,27,36,0.35)] md:p-8 ${
                  l.featured
                    ? "border-[var(--color-pool)]/40 bg-gradient-to-br from-[var(--color-navy-deep)] to-[#022b3a] text-white md:col-span-2"
                    : "border-slate-200/80 bg-white text-slate-700 hover:border-[var(--color-pool)]/50"
                }`}
              >
                {l.featured && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-light)] to-[var(--color-gold)]"
                  />
                )}
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] ${
                      l.featured
                        ? "bg-[var(--color-gold)] text-[var(--color-navy-deep)]"
                        : "bg-[var(--color-pool)]/10 text-[var(--color-pool)]"
                    }`}
                  >
                    {l.tag}
                  </span>
                </div>
                <h3
                  className={`mt-4 font-display text-2xl font-extrabold tracking-tight ${
                    l.featured ? "text-white" : "text-[var(--color-navy-deep)]"
                  }`}
                >
                  {l.name}
                </h3>
                <p className={`mt-3 flex-1 text-[15px] leading-relaxed ${l.featured ? "text-white/80" : "text-slate-600"}`}>
                  {l.blurb}
                </p>
                {l.contact && l.contact.length > 0 && (
                  <ul className={`mt-5 space-y-1 border-t pt-4 text-[13px] ${l.featured ? "border-white/15 text-white/70" : "border-slate-200 text-slate-500"}`}>
                    {l.contact.map((c, j) => (
                      <li key={j}>{c.line}</li>
                    ))}
                  </ul>
                )}
                <span
                  className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.18em] transition ${
                    l.featured
                      ? "bg-[var(--color-gold)] text-[var(--color-navy-deep)] group-hover:brightness-110"
                      : "bg-[var(--color-navy-deep)] text-white group-hover:bg-[var(--color-pool-deep)]"
                  }`}
                >
                  {l.cta ?? "Learn More"}
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <PoolCtaBanner heading="Ready to talk about your dream pool? Let's get started." />
    </>
  );
}
