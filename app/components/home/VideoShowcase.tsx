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
  id: "jMgjSEhaS70",
  title: "Never Pay More Than Your Quote — Our 100% On-Budget Guarantee",
  category: "On-Budget Guarantee",
};

const VIDEOS: Video[] = [
  {
    id: "CntmSdpO0QQ",
    title: "How Long Does It Take to Build a Swimming Pool?",
    category: "Construction Timeline",
  },
  {
    id: "Z6jU28FnpJg",
    title: "Your Pool Construction Is Almost Complete!",
    category: "Construction Timeline",
  },
  {
    id: "GVYgeCQmIcM",
    title: "Lyons Financial for Houston Cool Pools",
    category: "Financing",
  },
  {
    id: "TIm9Qa9teQg",
    title: "Can You Pay Off a Pool Loan Early? Fees & Financing Explained",
    category: "Financing",
  },
  {
    id: "b0ZzAqaxDOc",
    title: "Vinyl, Fiberglass or Gunite — What's the Difference?",
    category: "Pool Education",
  },
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
            Process, Value &{" "}
            <span className="italic text-[var(--color-gold-light)]">Financing</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            From our 100% on-budget guarantee to construction timelines and pool
            financing — see how Houston Cool Pools delivers your dream pool with
            no surprises.
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
            className="relative aspect-video w-full min-w-0 max-w-full overflow-hidden rounded-2xl bg-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/10"
          >
            <iframe
              src={`https://www.youtube.com/embed/${active.id}?rel=0`}
              title={active.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full max-w-full"
            />
          </motion.div>

          {/* Playlist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="min-w-0 max-w-full rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md sm:p-4"
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
