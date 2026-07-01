"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const HELP_OPTIONS = [
  "Build a new custom pool",
  "Remodel an existing pool",
  "Add a spa or water feature",
  "Pool service & maintenance",
  "Equipment repair or upgrade",
  "Something else — I'll explain",
];

const HEAR_OPTIONS = [
  "Google search",
  "Referred by a friend",
  "Angie's List",
  "BBB",
  "Houzz",
  "Facebook / Instagram",
  "Drove by a project",
  "Other",
];

const PROMISES = [
  { label: "Reply within 1 business day", body: "A real Houston Cool Pools team member — never a bot." },
  { label: "No pressure, ever", body: "We\u2019ll answer your questions and let you decide on your timeline." },
  { label: "Free & fully custom", body: "Your quote is tailored to your yard, your budget, and your dream." },
];

type Status = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: String(fd.get("firstName") || ""),
      lastName: String(fd.get("lastName") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      address: String(fd.get("address") || ""),
      city: String(fd.get("city") || ""),
      postalCode: String(fd.get("postalCode") || ""),
      helpWith: String(fd.get("helpWith") || ""),
      hearAbout: String(fd.get("hearAbout") || ""),
      message: String(fd.get("message") || ""),
      smsConsent: fd.get("smsConsent") === "on",
    };

    try {
      const res = await fetch("/api/quote-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section
      id="book-appointment"
      className="relative overflow-hidden bg-[var(--color-navy-deep)] py-20 text-white md:py-28"
    >
      {/* Ambient glow */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 0.6, 0.35], y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-[var(--color-pool)]/25 blur-3xl"
      />
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.55, 0.3], y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-[var(--color-gold-light)]/25 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/25 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
          {/* ---------- LEFT PITCH ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold-light)]/30 bg-white/5 px-4 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-gold-light)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-light)]" />
              Book Appointment
            </span>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold leading-[1.05] tracking-tight">
              Let&rsquo;s design your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[var(--color-gold-light)]">
                  dream backyard
                </span>
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.9, delay: 0.35, ease }}
                  className="absolute inset-x-0 bottom-1 z-0 h-2.5 origin-left rounded-full bg-[var(--color-gold)]/50"
                />
              </span>
              .
            </h2>
            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-white/75">
              Tell us a little about your project and one of our Houston pool
              specialists will reach out to schedule a free, no-pressure design
              consultation.
            </p>

            <ul className="mt-9 grid gap-4">
              {PROMISES.map((p, i) => (
                <motion.li
                  key={p.label}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease }}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
                >
                  <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-xl bg-gradient-to-br from-[var(--color-pool)] to-[var(--color-pool-deep)] text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-display text-[15px] font-bold leading-tight">
                      {p.label}
                    </p>
                    <p className="mt-0.5 text-[13.5px] leading-snug text-white/65">
                      {p.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="tel:+12816456631"
                className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-4 transition hover:border-[var(--color-gold-light)]/40 hover:bg-white/[0.07]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[var(--color-gold-light)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Prefer to talk?
                  </p>
                  <p className="font-display text-[15px] font-bold">
                    (281) 645-6631
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@houstoncoolpools.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] p-4 transition hover:border-[var(--color-gold-light)]/40 hover:bg-white/[0.07]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-[var(--color-gold-light)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M3 8l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-white/50">
                    Email us
                  </p>
                  <p className="font-display text-[13.5px] font-bold">
                    info@houstoncoolpools.com
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* ---------- FORM CARD ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="relative"
          >
            {/* offset gold plate */}
            <span
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[28px] border-2 border-[var(--color-gold)]/50"
            />
            <div className="relative overflow-hidden rounded-[28px] bg-white p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] sm:p-8 md:p-10">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-pool)] via-[var(--color-gold-light)] to-[var(--color-gold)]"
              />

              {status === "success" ? (
                <SuccessCard onReset={() => setStatus("idle")} />
              ) : (
                <form onSubmit={onSubmit} className="grid gap-4">
                  <div>
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-[var(--color-pool)]">
                      Free Consultation
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-extrabold leading-tight text-[var(--color-navy-deep)] sm:text-[28px]">
                      Request your appointment
                    </h3>
                    <p className="mt-1 text-[13.5px] text-slate-500">
                      Fields marked * are required.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="First name *" name="firstName" required autoComplete="given-name" />
                    <Field label="Last name *" name="lastName" required autoComplete="family-name" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone *" name="phone" type="tel" required autoComplete="tel" placeholder="(281) 555-0000" />
                    <Field label="Email *" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[2fr_1fr_1fr]">
                    <Field label="Street address" name="address" autoComplete="street-address" />
                    <Field label="City" name="city" autoComplete="address-level2" />
                    <Field label="ZIP *" name="postalCode" required autoComplete="postal-code" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <SelectField label="How can we help? *" name="helpWith" required options={HELP_OPTIONS} />
                    <SelectField label="How did you hear about us?" name="hearAbout" options={HEAR_OPTIONS} />
                  </div>

                  <label className="block">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                      Tell us more (optional)
                    </span>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Yard size, style you love, budget range, timeline\u2026"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-800 placeholder:text-slate-400 focus:border-[var(--color-pool)] focus:outline-none focus:ring-4 focus:ring-[var(--color-pool)]/10"
                    />
                  </label>

                  <label className="flex items-start gap-3 rounded-xl bg-slate-50 p-3 text-[12.5px] leading-snug text-slate-600">
                    <input
                      type="checkbox"
                      name="smsConsent"
                      className="mt-0.5 h-4 w-4 flex-none rounded border-slate-300 text-[var(--color-pool)] focus:ring-[var(--color-pool)]/30"
                    />
                    <span>
                      Yes, you can text me at the number above about my project. Message &amp; data rates may apply.
                    </span>
                  </label>

                  {status === "error" && error && (
                    <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-semibold text-red-700">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group relative mt-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--color-navy-deep)] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_16px_40px_-14px_rgba(0,27,36,0.6)] transition hover:bg-[var(--color-pool-deep)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative">
                      {status === "submitting" ? "Sending\u2026" : "Book my appointment"}
                    </span>
                    {status !== "submitting" && (
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
                    )}
                  </button>

                  <p className="text-center text-[11.5px] text-slate-500">
                    Prefer the full quote form?{" "}
                    <Link href="/free-pool-quote" className="font-semibold text-[var(--color-pool)] hover:underline">
                      Use our detailed intake
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-800 placeholder:text-slate-400 focus:border-[var(--color-pool)] focus:outline-none focus:ring-4 focus:ring-[var(--color-pool)]/10"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-[14px] text-slate-800 focus:border-[var(--color-pool)] focus:outline-none focus:ring-4 focus:ring-[var(--color-pool)]/10"
      >
        <option value="" disabled>
          Select&hellip;
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function SuccessCard({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease }}
      className="grid place-items-center gap-4 py-10 text-center"
    >
      <motion.span
        initial={{ scale: 0.6, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
        className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-[var(--color-pool)] to-[var(--color-pool-deep)] text-white shadow-lg"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
          <path
            d="M5 13l4 4L19 7"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
      <h3 className="font-display text-2xl font-extrabold text-[var(--color-navy-deep)]">
        Thanks &mdash; we&rsquo;ve got it!
      </h3>
      <p className="max-w-sm text-[14.5px] text-slate-600">
        A Houston Cool Pools specialist will reach out within one business day to
        confirm your appointment.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[var(--color-pool)] hover:underline"
      >
        Submit another request
      </button>
    </motion.div>
  );
}
