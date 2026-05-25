"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";
import { AnimatedDarkBackdrop } from "./AnimatedDarkBackdrop";

const ease = [0.22, 1, 0.36, 1] as const;

type Video = {
  id: string;
  title: string;
  category: string;
};

const FEATURED: Video = {
  id: "5mntkenhJSE",
  title: "Swimming Pool Water Color — Wet Edge Finishes",
  category: "Pool Design",
};

const VIDEOS: Video[] = [
  { id: "nsbj2SLf7tA", title: "Captain Brad's Coastal", category: "Community" },
  { id: "NjxokH4iPCE", title: "Kings Blu Jam Cafe", category: "Community" },
  { id: "TQN1QHbG9GM", title: "Mandi Cocina Mexicana", category: "Community" },
  { id: "W52OTihpfS8", title: "The Marquis 2 Bar", category: "Community" },
  { id: "f9MaBiBnaQ0", title: "Step Inside the Kitchen", category: "Community" },
  { id: "bvkHny6R6hk", title: "Paws for Heroes", category: "Community" },
];

export function VideoShowcase() {
  const [active, setActive] = useState<Video>(FEATURED);

  return (
    <section className="relative overflow-hidden bg-[var(--color-navy-deep)] py-24 text-white md:py-32">
      <AnimatedDarkBackdrop />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* ----- Header ----- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-pool)]">
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
            Watch
            <span className="h-px w-8 bg-[var(--color-pool)]/60" />
          </p>
          <h2 className="font-[family-name:var(--font-display)] mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
            Pools, People &{" "}
            <span className="italic text-[var(--color-gold-light)]">Houston Stories</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            From pool finishes to the local businesses and causes we love — a quick look at the world of Houston Cool Pools.
          </p>
        </motion.div>

        {/* ----- Player + Playlist ----- */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Featured player */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
          >
            <iframe
              src={`https://www.youtube.com/embed/${active.id}?rel=0`}
              title={active.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </motion.div>

          {/* Playlist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md"
          >
            <p className="px-3 pb-3 pt-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
              Up Next
            </p>
            <ul className="max-h-[60vh] space-y-2 overflow-y-auto pr-1 sm:max-h-[480px]">
              {[FEATURED, ...VIDEOS].map((v) => (
                <PlaylistItem
                  key={v.id}
                  video={v}
                  active={v.id === active.id}
                  onSelect={() => setActive(v)}
                />
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ----- Community grid (thumbnails) ----- */}
        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-pool)]">
                Community Series
              </p>
              <h3 className="font-[family-name:var(--font-display)] mt-2 text-2xl md:text-3xl">
                Featuring local Houston businesses & causes
              </h3>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
          >
            {VIDEOS.map((v) => (
              <VideoThumb key={v.id} video={v} onSelect={() => setActive(v)} isActive={v.id === active.id} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlaylistItem({
  video,
  active,
  onSelect,
}: {
  video: Video;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        className={`group flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors ${
          active ? "bg-[var(--color-pool)]/15 ring-1 ring-[var(--color-pool)]/40" : "hover:bg-white/5"
        }`}
      >
        <span className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg bg-black">
          <Image
            src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
            alt={video.title}
            fill
            sizes="96px"
            unoptimized
            className="object-cover"
          />
          <span className="absolute inset-0 grid place-items-center bg-black/30">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--color-pool)] text-white shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 translate-x-[1px]">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-white">{video.title}</span>
          <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            {video.category}
          </span>
        </span>
      </button>
    </li>
  );
}

function VideoThumb({
  video,
  onSelect,
  isActive,
}: {
  video: Video;
  onSelect: () => void;
  isActive: boolean;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
      }}
      className={`group relative aspect-video overflow-hidden rounded-xl bg-black text-left ring-1 transition-all hover:-translate-y-1 ${
        isActive
          ? "ring-[var(--color-pool)]/70 shadow-[0_20px_50px_-20px_rgba(0,124,182,0.6)]"
          : "ring-white/10 hover:ring-[var(--color-pool)]/50"
      }`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        fill
        sizes="(min-width:1024px) 28vw, (min-width:768px) 33vw, 100vw"
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Play button */}
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-pool)] text-white shadow-lg shadow-black/40 ring-4 ring-white/15 transition-transform group-hover:scale-110">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 translate-x-[2px]">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      {/* Caption */}
      <span className="absolute inset-x-0 bottom-0 p-4">
        <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold-light)]">
          {video.category}
        </span>
        <span className="mt-1 block text-sm font-semibold leading-tight text-white">
          {video.title}
        </span>
      </span>
    </motion.button>
  );
}
