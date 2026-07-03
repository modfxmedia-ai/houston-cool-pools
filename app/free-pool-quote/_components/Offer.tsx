"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { LP_OFFER_CHECKLIST } from "../_lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const list = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const TRUST_TAGS = [
  "100% Free",
  "No obligation",
  "1 business day response",
] as const;

export function Offer() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f5f8fa] via-white to-[#eef3f7] py-14 sm:py-24">
      <BackdropGraphics />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-16 xl:px-20">
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease }}
          className="relative"
        >
          {/* outer glow halo */}
          <motion.div
            aria-hidden
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.04, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#00b4d8]/35 via-transparent to-[#0ea5e9]/25 blur-2xl"
          />

          {/* slow-rotating dashed ring */}
          <motion.svg
            aria-hidden
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#00b4d8"
              strokeWidth="1"
              strokeDasharray="3 12"
            />
          </motion.svg>

          {/* Photo card */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/40 bg-white shadow-[0_30px_70px_-20px_rgba(15,32,53,0.35)] sm:aspect-[5/6]">
            <motion.div
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full"
            >
              <Image
                src="/images/gallery/featured-evening-pool.jpg"
                alt="Houston Cool Pools custom evening pool with deck jets"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
            </motion.div>

            {/* dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />

            {/* corner accents */}
            <span
              aria-hidden
              className="absolute left-4 top-4 h-3 w-3 border-l-2 border-t-2 border-[#00b4d8]/70"
            />
            <span
              aria-hidden
              className="absolute right-4 top-4 h-3 w-3 border-r-2 border-t-2 border-[#00b4d8]/70"
            />
            <span
              aria-hidden
              className="absolute bottom-4 left-4 h-3 w-3 border-b-2 border-l-2 border-[#00b4d8]/70"
            />
            <span
              aria-hidden
              className="absolute bottom-4 right-4 h-3 w-3 border-b-2 border-r-2 border-[#00b4d8]/70"
            />

            {/* Floating FREE badge top-right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 14,
                delay: 0.6,
              }}
              className="absolute -right-3 top-8 sm:-right-4 sm:top-10"
            >
              <div className="relative">
                <motion.span
                  aria-hidden
                  animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-2xl bg-[#00b4d8]"
                />
                <div className="relative rounded-2xl bg-gradient-to-br from-[#00b4d8] to-[#0ea5e9] px-4 py-2 text-white shadow-xl shadow-[#00b4d8]/40">
                  <div className="font-display text-[10px] font-semibold uppercase tracking-[0.18em] opacity-90">
                    Today
                  </div>
                  <div className="font-display text-lg font-extrabold leading-none">
                    100% FREE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating stat card (bottom-left) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            whileHover={{ y: -3 }}
            className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,32,53,0.25)] backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b4d8] to-[#0ea5e9] text-white shadow-md shadow-[#00b4d8]/30">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                    <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9L9.5 8 12 3z" />
                  </svg>
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-display text-3xl font-extrabold leading-none">
                  <span className="bg-gradient-to-br from-[#00b4d8] to-[#0ea5e9] bg-clip-text text-transparent">
                    1,600+
                  </span>
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0a1628]">
                  Pools Built · Houston
                </div>
                <div className="mt-0.5 text-[11px] text-slate-500">Since 1996</div>
              </div>
            </div>
          </motion.div>

          {/* Floating mini avatars / "today reviewing" card (top-left) */}
          <motion.div
            initial={{ opacity: 0, x: -16, y: -8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            whileHover={{ y: -3 }}
            className="absolute -left-3 top-6 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_40px_-22px_rgba(15,32,53,0.25)] sm:flex"
          >
            <div className="flex -space-x-2">
              {[
                "from-[#4285F4] to-[#1a73e8]",
                "from-[#34A853] to-[#188038]",
                "from-[#EA4335] to-[#c5221f]",
              ].map((g, i) => (
                <span
                  key={i}
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br ${g} text-[10px] font-bold text-white`}
                >
                  {["H", "S", "M"][i]}
                </span>
              ))}
            </div>
            <div className="text-[10px] leading-tight">
              <div className="font-bold text-[#0a1628]">12 homeowners</div>
              <div className="text-slate-500">requested today</div>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-[#00b4d8]/30 bg-[#00b4d8]/10 px-4 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00b4d8] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00b4d8]" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00b4d8]">
              The Free Quote Includes
            </span>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-5 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-[#0a1628] sm:text-5xl lg:text-6xl"
          >
            Everything you need to say{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#00b4d8] via-[#22d3ee] to-[#0ea5e9] bg-clip-text text-transparent">
                YES
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-[#00b4d8] to-transparent"
              />
            </span>{" "}
            before you spend a dime.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            Real numbers, real designs, real timelines. Zero pressure. We
            send you home with everything you need to decide on your own terms.
          </motion.p>

          {/* Checklist as 2-col card grid */}
          <motion.ul
            variants={list}
            className="mt-8 grid gap-3 sm:grid-cols-2"
          >
            {LP_OFFER_CHECKLIST.map((c) => (
              <motion.li
                key={c}
                variants={item}
                whileHover={{ y: -2 }}
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white/70 p-3.5 backdrop-blur transition hover:border-[#00b4d8]/40 hover:bg-white"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0ea5e9] text-white shadow-sm">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-3.5 w-3.5 fill-current"
                    aria-hidden
                  >
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0L3.3 8.9a1 1 0 0 1 1.4-1.4l4 4 6.6-6.6a1 1 0 0 1 1.4.4Z" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-[#0a1628]">{c}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA + trust tags */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#quote-form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#0ea5e9] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#00b4d8]/30 transition hover:shadow-xl hover:shadow-[#00b4d8]/40"
            >
              Get My Free Quote
              <span className="inline-block transition group-hover:translate-x-1">
                &rarr;
              </span>
            </a>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              {TRUST_TAGS.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-[#00b4d8]" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Backdrop motion graphics ---------- */

function BackdropGraphics() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,22,40,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [-40, 30, -40], y: [-20, 30, -20] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[-8%] top-[6%] h-[400px] w-[400px] rounded-full bg-[#00b4d8]/18 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [40, -30, 40], y: [20, 70, 20] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-8%] bottom-[5%] h-[440px] w-[440px] rounded-full bg-[#22d3ee]/14 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00b4d8]/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00b4d8]/30 to-transparent"
      />
    </>
  );
}
