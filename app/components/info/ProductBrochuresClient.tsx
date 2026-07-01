"use client";

import { motion } from "motion/react";
import { InfoHero } from "./InfoHero";
import { PoolCtaBanner } from "../PoolCtaBanner";

const ease = [0.22, 1, 0.36, 1] as const;

type Product = { name: string; href: string; brand: string };
type Group = { title: string; products: Product[] };

const GROUPS: Group[] = [
  {
    title: "Skimmers & Drains",
    products: [
      { name: "A&A Manufacturing Venturi Powered Skimmers", brand: "A&A Manufacturing", href: "https://aamfg.com/product/quikskim-venturi-powered/" },
      { name: "A&A Manufacturing AVSC Anti-Vortex Heavy Debris Safety Drains", brand: "A&A Manufacturing", href: "https://aamfg.com/product/avsc-heavy-debris-removal/" },
    ],
  },
  {
    title: "Pumps & Filters",
    products: [
      { name: "Pentair IntelliFlo Variable Speed Pump", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-pumps/intelliflo_variablespeedhighperfomancepump.html" },
      { name: "Pentair 420 sf Clean & Clear Cartridge Filter", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-filtration/clean_and_clear_pluscartridgefilters.html" },
      { name: "WaterCo Cyclonic Pre-Filter", brand: "WaterCo", href: "https://waterco.us/pool-spa/centrifugal-filters/multicyclone-16" },
    ],
  },
  {
    title: "Cleaners & Lighting",
    products: [
      { name: "Pentair Rebel Suction Cleaner", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-cleaners/pentair_rebel_suction-sideingroundpoolcleaner.html" },
      { name: "Pentair GloBrite LED Lights", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-lighting/globrite_pool_andspaledlights.html" },
    ],
  },
  {
    title: "Sanitation & Ozone",
    products: [
      { name: "Pentair 320 In-Line Chlorinator", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-water-treatment/rainbow_automaticchlorineandbrominefeeders.html" },
      { name: "A&A QuikPure 3 Ozone System", brand: "A&A Manufacturing", href: "https://aamfg.com/product/quikpure-3-ozone-oxidation-system/" },
      { name: "A&A QuikCirc Circulation / Cleaning System", brand: "A&A Manufacturing", href: "https://www.youtube.com/watch?v=Fh6o_k84TIY" },
    ],
  },
  {
    title: "Water Management",
    products: [
      { name: "Pentair Automated Water Fill", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-white-goods/automatic_water_fillers.html" },
      { name: "Pentair Overflow System", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-white-goods/gutter_drains.html" },
    ],
  },
  {
    title: "Heater & Automation",
    products: [
      { name: "Pentair MasterTemp 400k Heater", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-heaters/mastertemp_125_highperformanceheater.html" },
      { name: "Pentair EasyTouch Remote Automation System", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-automation/easytouch_controlsystems.html" },
    ],
  },
  {
    title: "Interior Finish",
    products: [
      { name: "WetEdge Quartz or Pebble Interior Finish", brand: "WetEdge Technologies", href: "https://wetedgetechnologies.com/products" },
    ],
  },
];

const FEATURED_PDF = {
  label: "Ten Steps to a Perfect Pool",
  href: "https://houstoncoolpools.com/pdfs/10-Steps-to-the-Perfect-Pool-hcp.pdf",
};

export function ProductBrochuresClient() {
  return (
    <>
      <InfoHero
        eyebrow="Product Library"
        title="Product Brochures & Information"
        subtitle="Manufacturer spec sheets and product pages for the equipment we install in every Houston Cool Pools build. Click any item for full manufacturer details."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pool Information", href: "/pool-information" },
          { label: "Product Brochures" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {/* Featured PDF callout */}
          <motion.a
            href={FEATURED_PDF.href}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="group relative flex flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-navy-deep)] to-[#022b3a] p-7 text-white shadow-[0_20px_60px_-30px_rgba(0,27,36,0.5)] sm:flex-row sm:items-center sm:justify-between md:p-8"
          >
            <span aria-hidden className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[var(--color-pool)]/30 blur-3xl" />
            <span aria-hidden className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-[var(--color-gold-light)]/25 blur-3xl" />
            <div className="relative">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-light)]">
                Free PDF download
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">
                {FEATURED_PDF.label}
              </h3>
              <p className="mt-2 max-w-md text-[15px] text-white/75">
                Our free guide walks you through every stage of designing and building your pool.
              </p>
            </div>
            <span className="relative inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-[11.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-navy-deep)] transition group-hover:brightness-110">
              Download PDF
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path d="M12 4v12m0 0l4-4m-4 4l-4-4M4 20h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </motion.a>

          <p className="mt-14 text-center text-[13px] italic text-slate-500">
            (Click any item for more information.)
          </p>

          {/* Grouped products */}
          <div className="mt-6 space-y-10">
            {GROUPS.map((g, gi) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: gi * 0.04, ease }}
              >
                <div className="flex items-center gap-3">
                  <span className="h-px flex-1 bg-slate-200" />
                  <h2 className="font-display text-[11.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool)]">
                    {g.title}
                  </h2>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {g.products.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[var(--color-pool)]/50 hover:shadow-[0_10px_40px_-24px_rgba(0,27,36,0.25)]"
                    >
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                          {p.brand}
                        </p>
                        <p className="mt-1 text-[15px] font-semibold text-[var(--color-navy-deep)] transition group-hover:text-[var(--color-pool)]">
                          {p.name}
                        </p>
                      </div>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mt-1 h-4 w-4 flex-none text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-[var(--color-pool)]"
                      >
                        <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PoolCtaBanner heading="Ready to design a pool built on premium equipment? Let's talk." />
    </>
  );
}
