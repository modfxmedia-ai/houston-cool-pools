"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

type Post = {
  title: string;
  excerpt: string;
  href: string;
  tag: string;
  readTime: string;
  img: string;
};

const POSTS: Post[] = [
  {
    title: "Choosing the Right Pool Size for Your Backyard",
    excerpt:
      "From available space to intended use, budget, and maintenance — several factors influence your decision. Find out how to select the perfect pool size.",
    href: "/choosing-the-right-pool-size-for-your-backyard",
    tag: "Pool Design",
    readTime: "6 min read",
    img: "/images/gallery/_mg_0078.jpg",
  },
  {
    title: "Modern Pool Design Trends You Need to Know",
    excerpt:
      "Explore the latest pool design trends — from infinity edges and geometric shapes to natural materials and smart technology integration.",
    href: "/modern-pool-design-trends-you-need-to-know",
    tag: "Trends",
    readTime: "5 min read",
    img: "/images/gallery/_mg_0210.jpg",
  },
  {
    title: "10 Steps to Building Your Dream Pool",
    excerpt:
      "Our free PDF guide walks you through every step of the custom pool process — from design consultation through final fill.",
    href: "/swimming-pool-articles",
    tag: "Free Guide",
    readTime: "PDF Download",
    img: "/images/gallery/_mg_0300.jpg",
  },
];

export function BlogPreview() {
  const [featured, ...rest] = POSTS;

  return (
    <section className="relative overflow-hidden bg-[#f6f8fa] py-24 md:py-32">
      <span className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-pool)]/8 blur-[140px]" />
      <span className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[var(--color-pool-deep)]/6 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* ----- Header row ----- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-pool)]">
              <span className="h-px w-8 bg-[var(--color-pool)]/60" />
              Information & Resources
            </p>
            <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl leading-[1.05] tracking-tight text-[var(--color-navy-deep)] md:text-5xl lg:text-[3.5rem]">
              From Our{" "}
              <span className="italic text-[var(--color-pool)]">Pool School</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-navy-deep)]/60">
              Tips, trends and inspiration from three decades of building custom Houston pools.
            </p>
            <Link
              href="/swimming-pool-articles"
              className="group hidden shrink-0 items-center gap-3 rounded-full border border-[var(--color-navy-deep)]/15 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-pool)] hover:text-[var(--color-pool)] hover:shadow-lg md:inline-flex"
            >
              All Articles
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* ----- Grid: Featured + 2 stacked ----- */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid gap-8 lg:grid-cols-[1.25fr_1fr]"
        >
          {/* Featured */}
          <FeaturedCard post={featured} />

          {/* Stacked */}
          <div className="flex flex-col gap-8">
            {rest.map((p) => (
              <CompactCard key={p.href} post={p} />
            ))}
          </div>
        </motion.div>

        {/* Mobile-only all-articles link */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/swimming-pool-articles"
            className="group inline-flex items-center gap-3 rounded-full border border-[var(--color-navy-deep)]/15 bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] transition-all hover:border-[var(--color-pool)] hover:text-[var(--color-pool)]"
          >
            All Articles
            <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
      }}
      className="group"
    >
      <Link
        href={post.href}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_70px_-30px_rgba(0,55,73,0.25)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_40px_90px_-30px_rgba(0,124,182,0.35)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.img}
            alt={post.title}
            fill
            sizes="(min-width:1024px) 55vw, 100vw"
            className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Featured ribbon */}
          <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-navy-deep)]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-pool)]" />
            Featured Article
          </span>
        </div>

        <div className="flex flex-1 flex-col p-8 md:p-10">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-pool)]">
            <span>{post.tag}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-pool)]/40" />
            <span className="text-[var(--color-navy-deep)]/40">{post.readTime}</span>
          </div>

          <h3 className="font-[family-name:var(--font-display)] mt-4 text-2xl leading-tight text-[var(--color-navy-deep)] transition-colors group-hover:text-[var(--color-pool)] md:text-[2rem]">
            {post.title}
          </h3>
          <p className="mt-4 flex-1 text-[15px] leading-[1.7] text-[var(--color-navy-deep)]/65">
            {post.excerpt}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-pool)]">
            Read Article
            <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function CompactCard({ post }: { post: Post }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
      }}
      className="group"
    >
      <Link
        href={post.href}
        className="flex h-full flex-col gap-5 overflow-hidden rounded-2xl bg-white p-5 shadow-[0_20px_50px_-25px_rgba(0,55,73,0.2)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(0,124,182,0.3)] sm:flex-row"
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl sm:aspect-square sm:w-44">
          <Image
            src={post.img}
            alt={post.title}
            fill
            sizes="(min-width:640px) 176px, 100vw"
            className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col py-1">
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-pool)]">
            <span>{post.tag}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-pool)]/40" />
            <span className="text-[var(--color-navy-deep)]/40">{post.readTime}</span>
          </div>

          <h3 className="font-[family-name:var(--font-display)] mt-2.5 text-xl leading-snug text-[var(--color-navy-deep)] transition-colors group-hover:text-[var(--color-pool)]">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-[13.5px] leading-[1.6] text-[var(--color-navy-deep)]/60">
            {post.excerpt}
          </p>

          <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--color-pool)]">
            Read More
            <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
