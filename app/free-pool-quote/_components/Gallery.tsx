"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "motion/react";
import { LP_GALLERY } from "../_lib/data";

const FILTERS = [
  "All",
  "Geometric",
  "Free Form",
  "Pool & Spa",
  "Resort Style",
  "Estate",
] as const;
type Filter = (typeof FILTERS)[number];

const ease = [0.22, 1, 0.36, 1] as const;

export function Gallery() {
  const [active, setActive] = useState<Filter>("All");

  const items = useMemo(
    () => (active === "All" ? LP_GALLERY : LP_GALLERY.filter((g) => g.category === active)),
    [active],
  );

  return (
    <section className="bg-[#eef3f7] py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00b4d8]"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mt-3 font-display text-3xl font-extrabold text-[#0a1628] sm:text-5xl"
          >
            1,600+ pools built across{" "}
            <span className="text-[#00b4d8]">Houston</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mx-auto mt-4 max-w-2xl text-base text-slate-600"
          >
            Browse a sample of the custom gunite pools we&apos;ve designed and
            built for Houston families.
          </motion.p>
        </div>

        <LayoutGroup>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition sm:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:text-[#0a1628]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gallery-pill"
                      className="absolute inset-0 rounded-full bg-[#00b4d8]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((g) => (
              <motion.figure
                key={g.src}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease }}
                className="group relative aspect-square overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-90 transition group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#00b4d8]/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#0a1628] sm:text-xs">
                    {g.badge}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600">
            56+ real Houston builds · 4 price tiers · 100% on-budget guarantee
          </p>
          <a
            href="#quote-form"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-[#00b4d8] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#00b4d8]/30 transition hover:bg-[#0a1628]"
          >
            See More of Our Work → Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
