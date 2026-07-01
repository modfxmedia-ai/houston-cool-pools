"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { InfoHero } from "./InfoHero";
import { PoolCtaBanner } from "../PoolCtaBanner";

const ease = [0.22, 1, 0.36, 1] as const;

type Lesson = {
  title: string;
  youtubeId: string;
  blurb: string;
};

const LESSONS: Lesson[] = [
  { title: "Water Test for Chemical Balance", youtubeId: "quEPTFAsHL0", blurb: "How to test your pool water and interpret the results." },
  { title: "Equipment Shut Off", youtubeId: "OgkiqHqy6JU", blurb: "The correct way to shut off pool equipment for maintenance or a storm." },
  { title: "3 Way Valve Operation", youtubeId: "IWvmB3f44I0", blurb: "How the three-way valve routes water between pool and spa." },
  { title: "Pool Filter System Overview", youtubeId: "fgQuEYJMVWA", blurb: "A tour of your pool's filtration system and how the pieces work together." },
  { title: "Pool Suction Cleaner", youtubeId: "_chE1HtOrw0", blurb: "How the suction-side cleaner keeps your pool floor spotless." },
  { title: "Pool Chlorinator", youtubeId: "F40bGRXjMtI", blurb: "Loading, adjusting and maintaining your chlorine tablet feeder." },
  { title: "Pump Basket Cleaning", youtubeId: "WDXjGitk2bg", blurb: "Weekly maintenance for your pump basket to keep flow strong." },
  { title: "Leaf Canister Cleaning", youtubeId: "SPyJIEQregU", blurb: "How to empty and clean your leaf canister for automatic cleaner systems." },
  { title: "Cyclone Cleaning", youtubeId: "Wgmb7MB6FMM", blurb: "Servicing your cyclone pre-filter to extend cartridge life." },
  { title: "Filter Cleaning", youtubeId: "C2RBBt1NwbE", blurb: "Deep-clean your cartridge filter properly, once or twice a season." },
  { title: "Clean In Floor Heads", youtubeId: "EsTMTFUN_Xw", blurb: "Servicing pop-up in-floor cleaning heads." },
  { title: "Ozone System", youtubeId: "NveIWrsPm-0", blurb: "How your Clear O3 ozone system works alongside chlorine." },
];

export function PoolSchoolClient() {
  const [active, setActive] = useState<Lesson>(LESSONS[0]);

  return (
    <>
      <InfoHero
        eyebrow="Video Tutorials"
        title="Pool School"
        subtitle="Everything a new pool owner needs to know — from water testing to filter cleaning to storm shutdown — taught by our service team, on demand."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pool Information", href: "/pool-information" },
          { label: "Pool School" },
        ]}
      />

      <section className="bg-[#f7f6f2] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Active video player */}
            <motion.div
              key={active.youtubeId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-[0_20px_60px_-30px_rgba(0,27,36,0.5)] ring-1 ring-black/5">
                <iframe
                  key={active.youtubeId}
                  src={`https://www.youtube-nocookie.com/embed/${active.youtubeId}?rel=0&modestbranding=1`}
                  title={active.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200/80 bg-white p-6 md:p-7">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool)]">
                  Now playing
                </p>
                <h2 className="mt-2 font-display text-[24px] font-extrabold leading-tight text-[var(--color-navy-deep)] sm:text-[28px]">
                  {active.title}
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-slate-600">{active.blurb}</p>
              </div>
            </motion.div>

            {/* Lesson list */}
            <aside>
              <div className="sticky top-28">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool)]">
                  Curriculum
                </p>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[var(--color-navy-deep)]">
                  {LESSONS.length} lessons
                </h3>

                <ol className="mt-5 space-y-2 lg:max-h-[70vh] lg:overflow-y-auto lg:pr-2">
                  {LESSONS.map((l, i) => {
                    const isActive = l.youtubeId === active.youtubeId;
                    return (
                      <li key={l.youtubeId}>
                        <button
                          type="button"
                          onClick={() => setActive(l)}
                          className={`group flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition ${
                            isActive
                              ? "border-[var(--color-pool)] bg-[var(--color-pool)]/5 shadow-[0_10px_30px_-20px_rgba(0,124,182,0.4)]"
                              : "border-slate-200/80 bg-white hover:border-[var(--color-pool)]/40 hover:bg-slate-50"
                          }`}
                        >
                          <span
                            className={`grid h-9 w-9 flex-none place-items-center rounded-xl text-[12px] font-bold ${
                              isActive
                                ? "bg-[var(--color-pool)] text-white"
                                : "bg-slate-100 text-slate-500 group-hover:bg-[var(--color-pool)]/10 group-hover:text-[var(--color-pool)]"
                            }`}
                          >
                            {isActive ? (
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            ) : (
                              String(i + 1).padStart(2, "0")
                            )}
                          </span>
                          <span className="flex flex-col leading-tight">
                            <span
                              className={`text-[14px] font-semibold ${
                                isActive ? "text-[var(--color-navy-deep)]" : "text-slate-700"
                              }`}
                            >
                              {l.title}
                            </span>
                            <span className="mt-0.5 text-[11.5px] uppercase tracking-[0.16em] text-slate-400">
                              Video · Lesson {i + 1}
                            </span>
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <PoolCtaBanner heading="Need hands-on help with your pool? Our service team is one call away." />
    </>
  );
}
