"use client";

import { useState, type FormEvent } from "react";

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

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  // TODO: wire to a real endpoint (see /api/service-form + /api/quote-form
  // pattern in lib/lead-mailer.ts) once the submission target is confirmed -
  // for now this only shows the local confirmation state.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-[0_24px_60px_-35px_rgba(0,55,73,0.4)] md:p-10">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--color-pool)]/15 text-[var(--color-pool)]">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="font-[family-name:var(--font-display)] mt-5 text-xl text-[var(--color-navy-deep)]">
          Thanks{name ? `, ${name}` : ""}, request received.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          We reply within 1 business day to schedule your service call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_24px_60px_-35px_rgba(0,55,73,0.4)] md:p-9"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-pool)] via-[var(--color-gold-light)] to-[var(--color-gold)]"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-name" className={labelClasses}>
            Name
          </label>
          <input
            id="booking-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            required
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="booking-email" className={labelClasses}>
            Email
          </label>
          <input
            id="booking-email"
            name="email"
            type="email"
            required
            className={`mt-2 ${inputClasses}`}
          />
        </div>
        <div>
          <label htmlFor="booking-issue" className={labelClasses}>
            Pool issue
          </label>
          <select id="booking-issue" name="issue" required defaultValue="" className={`mt-2 ${inputClasses}`}>
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
          <label htmlFor="booking-time" className={labelClasses}>
            Preferred contact time
          </label>
          <select id="booking-time" name="contactTime" required defaultValue="" className={`mt-2 ${inputClasses}`}>
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
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-pool)] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
      >
        Book a Call
        <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
          <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
