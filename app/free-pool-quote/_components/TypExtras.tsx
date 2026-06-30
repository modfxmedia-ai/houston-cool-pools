"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LP_TYP_GALLERY, LP_TESTIMONIALS } from "../_lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function TypGallery() {
  return (
    <section className="bg-[#0a1628] py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 xl:px-20">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Take a look at some of our recent work
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {LP_TYP_GALLERY.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/5"
            >
              <Image
                src={src}
                alt="Houston Cool Pools recent work"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[#94a3b8]">
          These are real pools we&apos;ve built for Houston families. Yours
          could be next.
        </p>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#fbbf24]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 fill-current"
        >
          <path d="M12 2l2.9 6.1 6.7.7-5 4.6 1.4 6.6L12 16.9l-5.9 3.1L7.4 13.4 2.4 8.8l6.7-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TypTestimonials() {
  const items = LP_TESTIMONIALS;
  return (
    <section className="bg-[#0f2035] py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-16 xl:px-20">
        <h2 className="text-center font-display text-3xl font-extrabold text-white sm:text-4xl">
          Loved by{" "}
          <span className="text-[#00b4d8]">Houston Homeowners</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#112240] p-6"
            >
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-[#cbd5e1]">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-white/5 pt-4 text-sm">
                <div className="font-semibold text-white">{t.name}</div>
                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#00b4d8]">
                  Verified Customer
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
