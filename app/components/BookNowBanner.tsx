"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { PHONE_DISPLAY, PHONE_HREF } from "../../lib/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

const SHOW_AFTER_PX = 480;

// Routes where the sticky "free quote" banner should never appear - pages
// that already surface a full quote/contact form on-page (except the
// homepage, which keeps the banner even though it has BookingForm).
const HIDDEN_PATHS = [
  "/contact",
  "/free-pool-quote",
  "/pricing-65k-90k",
  "/pricing-90k-115k",
  "/pricing-115k-150k",
  "/pricing-150k-plus",
  "/how-to-choose-a-pool-builder",
  "/pool-specifications",
  "/custom-home-toc",
  "/poolfinancing",
];

export function BookNowBanner() {
  const pathname = usePathname() ?? "";
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("hcp-booknow-dismissed") === "1") {
        setDismissed(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide once the footer scrolls into view so the banner never sits on top of it.
  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  function handleDismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem("hcp-booknow-dismissed", "1");
    } catch {
      /* ignore */
    }
  }

  // Route the CTA to the dedicated contact page so users land on the full
  // free-quote form.
  const bookHref = "/contact";

  const hiddenRoute = HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const show = visible && !dismissed && !hiddenRoute && !nearFooter;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="free-estimate-banner"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease }}
          className="fixed inset-x-0 bottom-0 z-40 pl-3 pr-20 pb-2 sm:pl-6 sm:pr-28 sm:pb-3"
          role="complementary"
          aria-label="Get a free pool estimate"
        >
          <div className="pointer-events-none mx-auto max-w-4xl">
            <div className="pointer-events-auto relative overflow-hidden rounded-xl border border-white/10 bg-[var(--color-navy-deep)]/95 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              {/* Ambient glows */}
              <span
                aria-hidden
                className="pointer-events-none absolute -left-16 top-0 h-32 w-32 rounded-full bg-[var(--color-pool)]/30 blur-3xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 bottom-0 h-32 w-32 rounded-full bg-[var(--color-gold-light)]/20 blur-3xl"
              />
              {/* Top accent line */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--color-pool)] via-[var(--color-gold-light)] to-[var(--color-gold)]"
              />

              {/* Mobile: icon-only row, no wrapping text */}
              <div className="relative flex items-center justify-end gap-2 px-3 py-2 sm:hidden">
                <a
                  href={PHONE_HREF}
                  aria-label={`Call ${PHONE_DISPLAY}`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 text-white transition hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)]"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <Link
                  href={bookHref}
                  aria-label="Get a free pool estimate"
                  className="grid h-10 flex-1 max-w-[168px] place-items-center rounded-full bg-gradient-to-r from-[var(--color-pool)] to-[var(--color-pool-deep)] text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_10px_28px_-8px_rgba(0,124,182,0.7)]"
                >
                  Free Estimate
                </Link>
                <button
                  type="button"
                  onClick={handleDismiss}
                  aria-label="Dismiss booking banner"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Desktop/tablet: full copy + labeled CTAs */}
              <div className="relative hidden items-center gap-4 px-5 py-2.5 sm:flex">
                {/* Pulsing calendar avatar */}
                <div className="relative shrink-0">
                  <motion.span
                    aria-hidden
                    animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0, 0.55] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-xl bg-[var(--color-pool)]/60"
                  />
                  <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-pool)] to-[var(--color-pool-deep)] text-white shadow-md">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M8 2v3M16 2v3M3.5 9h17M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                      />
                      <path d="M9 14h2M9 17h6M13 14h2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>

                {/* Copy */}
                <div className="min-w-0 flex-1">
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.22em] text-[var(--color-gold-light)]">
                    Free quote
                  </p>
                  <p className="mt-0.5 truncate font-display text-[15px] font-extrabold leading-tight text-white">
                    Ready to build your dream pool?
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex shrink-0 items-center gap-1.5">
                  <a
                    href={PHONE_HREF}
                    aria-label={`Call ${PHONE_DISPLAY}`}
                    className="hidden items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)] md:inline-flex"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {PHONE_DISPLAY}
                  </a>
                  <Link
                    href={bookHref}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--color-pool)] to-[var(--color-pool-deep)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_28px_-8px_rgba(0,124,182,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-8px_rgba(79,195,224,0.85)]"
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">Free Estimate</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="relative h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <button
                    type="button"
                    onClick={handleDismiss}
                    aria-label="Dismiss booking banner"
                    className="grid h-7 w-7 place-items-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                      <path
                        d="M6 6l12 12M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
