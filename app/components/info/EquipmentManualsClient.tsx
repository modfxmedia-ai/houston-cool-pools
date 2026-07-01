"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { InfoHero } from "./InfoHero";
import { PoolCtaBanner } from "../PoolCtaBanner";

const ease = [0.22, 1, 0.36, 1] as const;

const PDF_BASE = "https://houstoncoolpools.com/pdf/";

type Manual = { name: string; file: string };
type Category = { title: string; manuals: Manual[] };

const CATEGORIES: Category[] = [
  {
    title: "Cleaning Systems",
    manuals: [
      { name: "Disposable Sand Silt Bag", file: "DisposableSandSiltBagIG.pdf" },
      { name: "Kreepy Krauly Platinum OM", file: "KreepyKraulyPlatinumOM.pdf" },
      { name: "Pentair Suction Side Cleaner", file: "Rebel_Warrior_Tucson_Eng_OM_20181025_062540.pdf" },
      { name: "Paramount Owners Manual", file: "ParamountOwnersManual.pdf" },
      { name: "Prowler 820-830 EOM", file: "Prowler820-830EOM.pdf" },
      { name: "Racer Eng OM", file: "RacerEngOM.pdf" },
      { name: "Pentair Prowler 920 Cleaner", file: "prowler920-warriorse-manual-english.pdf" },
    ],
  },
  {
    title: "Heater / Chiller",
    manuals: [
      { name: "MasterTemp Heater", file: "Mastertemp-Heater.pdf" },
      { name: "UltraTemp Heat Pump", file: "ultratemp-heat-pump-installation-and-users-guide-en-fr-sp.pdf" },
      { name: "Glacier Pool Chiller", file: "newer-glacier-pool-chiller-manual.pdf" },
    ],
  },
  {
    title: "Pool Control System",
    manuals: [
      { name: "Pentair IntelliConnect Control & Monitoring", file: "IntelliConnect_20180402_082936.pdf" },
      { name: "EasyTouch ICPUG", file: "EasyTouchICPUG.pdf" },
      { name: "EasyTouch QSG", file: "EasyTouchICPUG.pdf" },
      { name: "IntelliBrite Controller", file: "IntelliBrite-Controller.pdf" },
    ],
  },
  {
    title: "Pool Filters",
    manuals: [
      { name: "Clean & Clear Cartridge Filter OM", file: "DisposableSandSiltBagIG.pdf" },
      { name: "Triton II Sand Filter OM", file: "DisposableSandSiltBagIG.pdf" },
    ],
  },
  {
    title: "Pool Lighting",
    manuals: [
      { name: "Amerlite White Halogen OM", file: "Amerlite-White-Halogen-OM.pdf" },
      { name: "GloBrite Color LED Eng OM", file: "GloBriteColorLEDEngOM.pdf" },
      { name: "IntelliBrite Controller", file: "IntelliBrite-Controller.pdf" },
      { name: "IntelliBrite LED Pool Light OM", file: "IntelliBrite-LED-Pool-Light-OM.pdf" },
      { name: "IntelliBrite LED Spa Light OM", file: "IntelliBrite-LED-Spa-Light-OM.pdf" },
      { name: "IntelliBrite White LED Pool & Spa", file: "Intellibrite-White-LED-Pool-and-Spa.pdf" },
      { name: "Pentair MicroBrite Light", file: "AMP-30-1310.pdf" },
    ],
  },
  {
    title: "Pool Pumps",
    manuals: [
      { name: "BoostRite Booster Pump OM", file: "BoostRiteBoosterPumpOM.pdf" },
      { name: "IntelliFlo VS+SVRS", file: "IntelliFloSVRSOM.pdf" },
      { name: "IntelliFlo VS OM", file: "IntelliFloVSOM.pdf" },
      { name: "IntelliFlo XF / IntelliPro XF Variable Speed", file: "IntelliFloXFIntelliProXFVariableSpeedUG.pdf" },
      { name: "WhisperFlo XF OM", file: "Whisperflo-XF-OM.pdf" },
      { name: "WhisperFlo OM", file: "WhisperFloOM.pdf" },
    ],
  },
  {
    title: "Sanitation Systems",
    manuals: [
      { name: "Clear O3 Ozone Manual", file: "ClearO3OzoneManual.pdf" },
      { name: "IntelliChlor Quick Start Guide OM", file: "IntelliChlor-Quick-Start-GuideOM.pdf" },
      { name: "IntelliChlor Electronic Chlorine Generator", file: "IntelliChlor-Quick-Start-GuideOM.pdf" },
      { name: "Rainbow 320 Chlorine Feeder", file: "Rainbow320ChlorineFeeder.pdf" },
      { name: "Ultra UV Manual", file: "bioshield-uv-sanitizer-manual-english.pdf" },
      { name: "Pentair Bioshield UV System", file: "bioshield-uv-sanitizer-manual-english.pdf" },
    ],
  },
  {
    title: "Water Features",
    manuals: [
      { name: "Color Cascade Bubbler", file: "Color-Cascade-Bubbler.pdf" },
      { name: "Deck Jet II", file: "Deck-Jet-II.pdf" },
      { name: "Laminar Deck Jets", file: "Laminar-Deck-Jets.pdf" },
      { name: "Magic Falls Water Effects", file: "MagicFallsWaterEffects.pdf" },
    ],
  },
  {
    title: "Miscellaneous",
    manuals: [
      { name: "Paramount Twirly Byrd", file: "Paramount_Twirlybyrd.pdf" },
      { name: "Pentair IntelliValve Actuator", file: "IntelliValve%20OM_20151223_081419.pdf" },
      { name: "Valve OM", file: "ValveOM.pdf" },
    ],
  },
];

export function EquipmentManualsClient() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.map((c) => ({
      ...c,
      manuals: c.manuals.filter((m) => m.name.toLowerCase().includes(q)),
    })).filter((c) => c.manuals.length > 0);
  }, [query]);

  const total = CATEGORIES.reduce((sum, c) => sum + c.manuals.length, 0);

  return (
    <>
      <InfoHero
        eyebrow="Owner's Manuals"
        title="Pool Equipment Manuals"
        subtitle={`${total} downloadable manuals for the equipment installed on your Houston Cool Pools build — cleaners, pumps, filters, heaters, lighting, sanitation, water features and more.`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pool Information", href: "/pool-information" },
          { label: "Equipment Manuals" },
        ]}
      />

      <section className="bg-[#f7f6f2] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {/* Search */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Search manuals — IntelliFlo, MasterTemp, IntelliChlor…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-[14.5px] text-slate-700 shadow-[0_10px_40px_-24px_rgba(0,27,36,0.2)] placeholder:text-slate-400 focus:border-[var(--color-pool)] focus:outline-none focus:ring-4 focus:ring-[var(--color-pool)]/10"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-14 space-y-10">
            {filtered.length === 0 ? (
              <p className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
                No manuals matched &ldquo;{query}&rdquo;. Try a different search.
              </p>
            ) : (
              filtered.map((c, ci) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: ci * 0.04, ease }}
                  className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_40px_-28px_rgba(0,27,36,0.2)] md:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-pool)]/10 text-[var(--color-pool)]">
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                        <path
                          d="M14 3v5h5M9 13h6M9 17h6M9 9h1M6 21h12a2 2 0 0 0 2-2V8l-5-5H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h2 className="font-display text-xl font-extrabold text-[var(--color-navy-deep)] sm:text-2xl">
                      {c.title}
                    </h2>
                    <span className="ml-auto rounded-full bg-slate-100 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      {c.manuals.length} PDF
                    </span>
                  </div>

                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {c.manuals.map((m, mi) => (
                      <a
                        key={`${m.name}-${mi}`}
                        href={`${PDF_BASE}${m.file}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-[var(--color-pool)]/50 hover:shadow-[0_10px_30px_-20px_rgba(0,27,36,0.25)]"
                      >
                        <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-slate-100 text-[10px] font-bold text-slate-500 group-hover:bg-[var(--color-pool)]/10 group-hover:text-[var(--color-pool)]">
                          PDF
                        </span>
                        <span className="flex-1 text-[14px] font-semibold text-[var(--color-navy-deep)] group-hover:text-[var(--color-pool)]">
                          {m.name}
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-4 w-4 flex-none text-slate-400 transition-all group-hover:translate-y-0.5 group-hover:text-[var(--color-pool)]"
                        >
                          <path d="M12 4v12m0 0l4-4m-4 4l-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      <PoolCtaBanner heading="Need help operating your pool equipment? Our service team can walk you through it." />
    </>
  );
}
