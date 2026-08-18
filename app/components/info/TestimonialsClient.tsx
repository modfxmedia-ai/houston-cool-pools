"use client";

import { motion } from "motion/react";
import { InfoHero } from "./InfoHero";
import { ReviewsWidget } from "../ReviewsWidget";
import { TESTIMONIALS } from "../../../lib/testimonials";

const ease = [0.22, 1, 0.36, 1] as const;

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[var(--color-gold)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < n ? "currentColor" : "transparent"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-4 w-4"
        >
          <path d="M12 2l2.9 6.9 7.6.6-5.8 5 1.8 7.5L12 17.8 5.5 22l1.8-7.5-5.8-5 7.6-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsClient() {
  return (
    <>
      <InfoHero
        eyebrow="Customer Stories"
        title="Reviews & Testimonials"
        subtitle="Every 5-star review below comes from a real Houston Cool Pools customer. We build our reputation one pool at a time."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pool Information", href: "/pool-information" },
          { label: "Customer Reviews" },
        ]}
        backgroundImage="/images/gallery/hd/family-1.jpg"
        backgroundAlt="Houston family enjoying their Houston Cool Pools backyard"
      />

      <section className="bg-[#f7f6f2] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-[0_10px_40px_-28px_rgba(0,27,36,0.2)]"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-extrabold text-[var(--color-navy-deep)]">
                5.0
              </span>
              <span className="text-[13px] font-semibold text-slate-500">/ 5</span>
            </div>
            <Stars />
            <p className="text-[14px] text-slate-600">
              Based on <strong className="text-[var(--color-navy-deep)]">{TESTIMONIALS.length}</strong> verified reviews.
              We&rsquo;re also A+ rated with the BBB and an Angie&rsquo;s List Super Service Award winner.
            </p>
          </motion.div>
        </div>
      </section>

      <ReviewsWidget />
    </>
  );
}


