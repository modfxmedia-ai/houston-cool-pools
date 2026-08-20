"use client";

import { useEffect, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

const POOL_ISSUES = [
  "Green or cloudy water",
  "Algae",
  "Equipment not working / broken pump",
  "Leak",
  "Routine weekly or bi-weekly maintenance",
  "Something else",
] as const;

const CONTACT_TIMES = [
  "Morning (8am\u201312pm)",
  "Afternoon (12pm\u20134pm)",
  "Evening (4pm\u20137pm)",
  "Anytime",
] as const;

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition-colors focus:border-[var(--color-pool)] focus:ring-2 focus:ring-[var(--color-pool)]/20";

const labelClasses = "block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400";

// Bottom-sheet booking form, opened from any element pointing at #booking or
// tagged [data-booking-modal] (see click-delegation effect below), so every
// "Book a Call" CTA on the page opens this popup instead of scrolling.
export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = e.target as Element | null;
      if (!el) return;
      const trigger = el.closest(
        'a[href="#booking"], a[href$="#booking"], [data-booking-modal]',
      );
      if (!trigger) return;
      e.preventDefault();
      setError(null);
      setOpen(true);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = new FormData(event.currentTarget);
    const contactTime = String(form.get("contactTime") ?? "");

    try {
      const res = await fetch("/api/service-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? ""),
          phone: String(form.get("phone") ?? ""),
          email: String(form.get("email") ?? ""),
          lookingFor: String(form.get("issue") ?? ""),
          message: contactTime ? `Preferred contact time: ${contactTime}` : undefined,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setOpen(false);
      router.push("/pool-maintenance/thank-you");
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
      setSubmitting(false);
    }
  }

  return (
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            key="booking-modal"
            className="fixed inset-0 z-[200] flex items-center justify-center px-3 py-6 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              aria-label="Close booking form"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-[var(--color-navy-deep)]/70 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.4, ease }}
              className="relative z-10 flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-white/15 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
            >
              {/* Header */}
              <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[var(--color-navy-deep)] via-[var(--color-pool-deep)] to-[var(--color-navy-deep)] px-6 py-7 text-white sm:px-8 sm:py-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,195,224,0.35),transparent_55%)]"
                />
                <motion.div
                  aria-hidden
                  animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--color-gold-light)]/25 blur-2xl"
                />

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close booking form"
                  className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </button>

                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold-light)]/30 bg-[var(--color-gold-light)]/10 px-3 py-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-gold-light)] opacity-70" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold-light)]" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold-light)]">
                      Fast Response &middot; No Obligation
                    </span>
                  </div>

                  <h2
                    id="booking-modal-title"
                    className="mt-3 font-[family-name:var(--font-display)] text-2xl font-extrabold leading-tight sm:text-3xl"
                  >
                    Book Your Service Call
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Tell us what&rsquo;s going on and a technician will
                    reach out to get it scheduled.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="overflow-y-auto bg-white px-6 py-6 sm:px-8">
                <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="booking-modal-name" className={labelClasses}>
                      Name
                    </label>
                    <input
                      id="booking-modal-name"
                      name="name"
                      type="text"
                      required
                      className={`mt-2 ${inputClasses}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-modal-phone" className={labelClasses}>
                      Phone
                    </label>
                    <input
                      id="booking-modal-phone"
                      name="phone"
                      type="tel"
                      required
                      className={`mt-2 ${inputClasses}`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="booking-modal-email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="booking-modal-email"
                      name="email"
                      type="email"
                      required
                      className={`mt-2 ${inputClasses}`}
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-modal-issue" className={labelClasses}>
                      Pool issue
                    </label>
                    <select
                      id="booking-modal-issue"
                      name="issue"
                      required
                      defaultValue=""
                      className={`mt-2 ${inputClasses}`}
                    >
                      <option value="" disabled>
                        Select an issue
                      </option>
                      {POOL_ISSUES.map((issue) => (
                        <option key={issue} value={issue}>
                          {issue}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="booking-modal-time" className={labelClasses}>
                      Preferred contact time
                    </label>
                    <select
                      id="booking-modal-time"
                      name="contactTime"
                      required
                      defaultValue=""
                      className={`mt-2 ${inputClasses}`}
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      {CONTACT_TIMES.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {error && (
                    <p className="sm:col-span-2 text-sm font-medium text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group mt-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-pool)] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl disabled:pointer-events-none disabled:opacity-60 sm:col-span-2"
                  >
                    {submitting ? "Sending\u2026" : "Book a Call"}
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Footer */}
              <div className="flex shrink-0 items-center justify-center gap-2 border-t border-slate-100 bg-slate-50 px-6 py-3 text-center text-[11px] text-slate-500 sm:px-8">
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current text-[var(--color-pool)]" aria-hidden>
                  <path d="M12 1 3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z" />
                </svg>
                Your info is private. We never share or sell your details.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    )
  );
}
