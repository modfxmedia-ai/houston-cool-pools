"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { AnimatedDarkBackdrop } from "./AnimatedDarkBackdrop";

const ease = [0.22, 1, 0.36, 1] as const;

type Service = {
  title: string;
  desc: string;
  href: string;
  image: string;
  icon: ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Pricing",
    desc: "Transparent pool pricing with packages from $45K to $55K and up.",
    href: "/pricing-45k-55k",
    image: "/images/gallery/_mg_0210.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Features",
    desc: "Waterfalls, spas, fire bowls, bubblers and dozens of custom features.",
    href: "/custom-pool-features-1",
    image: "/images/gallery/_mg_0611.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 3s-5 5-5 9a5 5 0 0010 0c0-4-5-9-5-9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Financing",
    desc: "Flexible pool financing options to fit any budget.",
    href: "/poolfinancing",
    image: "/images/gallery/_mg_0078.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 10h20M6 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Why Choose Us",
    desc: "30 years building Houston's most beautiful custom gunite pools.",
    href: "/whychoosehcp",
    image: "/images/gallery/_mg_0300.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Pool Service",
    desc: "Professional pool service and maintenance — now offered to our customers.",
    href: "/contact",
    image: "/images/gallery/_mg_0701.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M14.7 6.3a4 4 0 00-5.4 5.4l-6 6 2 2 6-6a4 4 0 005.4-5.4l-2.4 2.4-2-2 2.4-2.4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Pool Remodel",
    desc: "Transform your old pool into a backyard paradise with a custom remodel.",
    href: "/pool-remodel",
    image: "/images/gallery/_mg_0033.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-deep)] py-24 text-white md:py-32">
      <AnimatedDarkBackdrop />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-pool)]">
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
            What We Do
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          </p>
          <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
            Custom Pool{" "}
            <span className="italic text-[var(--color-gold-light)]">Services</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            From design and pricing to lifetime service, every detail is handled by our award-winning team.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }}
      className="relative"
    >
      <Link
        href={service.href}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white text-[var(--color-navy-deep)] ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1.5 hover:ring-[var(--color-pool)]/30 hover:shadow-[0_24px_60px_-20px_rgba(0,124,182,0.35)]"
      >
        <div className="relative h-56 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-deep)]/45 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-[var(--color-navy-deep)] backdrop-blur">
            <span className="text-[var(--color-pool)]">0{index + 1}</span>
            <span className="text-[var(--color-navy-deep)]/30">/</span>
            <span className="text-[var(--color-navy-deep)]/40">06</span>
          </span>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--color-pool)]/10 text-[var(--color-pool)] transition-colors group-hover:bg-[var(--color-pool)] group-hover:text-white sm:h-11 sm:w-11">
              {service.icon}
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-[1.25rem] leading-tight tracking-tight text-[var(--color-navy-deep)] sm:text-[1.4rem] md:text-[1.55rem]">
              {service.title}
            </h3>
          </div>
          <p className="mt-4 flex-1 text-[14px] leading-[1.7] text-[var(--color-navy-deep)]/60">
            {service.desc}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool)]">
              Learn More
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-navy-deep)]/[0.04] text-[var(--color-navy-deep)] transition-all group-hover:bg-[var(--color-pool)] group-hover:text-white group-hover:translate-x-0">
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
