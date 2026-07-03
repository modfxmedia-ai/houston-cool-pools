"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { BUSINESS } from "../../../lib/business";
import { PHONE_DISPLAY, PHONE_HREF } from "../../../lib/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

// Fields mirror the live "Free Home Quote" HubSpot form on
// houstoncoolpools.com (contact.html and whychoosehcp.html share the same form).
const HELP_OPTIONS = [
  "New Pool Construction",
  "Pool Remodel / Renovation",
  "Outdoor Living / Hardscape",
  "Pool Service / Repair",
  "General Question",
] as const;

const HEAR_OPTIONS = [
  "Google Search",
  "Social Media",
  "Referral / Word of Mouth",
  "Saw a Pool We Built",
  "Other",
] as const;

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[var(--color-pool)] focus:ring-2 focus:ring-[var(--color-pool)]/20";

/**
 * The cloned "Free Home Quote" form card. Self-contained: holds its own
 * state, builds a pre-filled mailto, and shows an inline success state. Shared
 * between the contact page and the why-choose page.
 */
export function ConsultationForm({ className }: { className?: string }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    help: HELP_OPTIONS[0] as string,
    hear: "",
    message: "",
    smsConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const mailtoHref = useMemo(() => {
    const subject = `Free Pool Quote Request - ${form.help}`;
    const body = [
      `First Name: ${form.firstName}`,
      `Last Name: ${form.lastName}`,
      `Phone Number: ${form.phone}`,
      `Email: ${form.email}`,
      `Street Address: ${form.address}`,
      `City: ${form.city}`,
      `Postal Code: ${form.zip}`,
      `What can we help you with?: ${form.help}`,
      `How did you hear about us?: ${form.hear}`,
      `SMS consent: ${form.smsConsent ? "Yes" : "No"}`,
      "",
      "Details:",
      form.message,
    ].join("\n");
    return `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailtoHref;
    setSubmitted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease }}
      className={`relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_30px_70px_-30px_rgba(0,55,73,0.35)] md:p-10 ${className ?? ""}`}
    >
      <span className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-pool)]/10 blur-3xl" />

      <div className="relative">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--color-pool)]">
          Free Pool Quote
        </p>
        <h2 className="font-[family-name:var(--font-display)] mt-3 text-3xl leading-tight text-[var(--color-navy)] md:text-4xl">
          Contact us for a free Pool Quote
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Fill out the form and we&apos;ll reach out with your free, no-pressure
          pool quote - usually within one business day.
        </p>
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease }}
          className="relative mt-8 rounded-2xl border border-[var(--color-pool)]/20 bg-[var(--color-pool)]/5 p-8 text-center"
        >
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--color-pool)] text-white">
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="font-[family-name:var(--font-display)] mt-5 text-2xl text-[var(--color-navy)]">
            Thank you, {form.firstName || "friend"}!
          </h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">
            Your email client should have opened with your request. Prefer to talk now?
            Call us at{" "}
            <a href={PHONE_HREF} className="font-semibold text-[var(--color-pool)]">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-pool)] underline-offset-4 hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative mt-8 flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First Name" htmlFor="firstName" required>
              <input
                id="firstName"
                type="text"
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                placeholder="Jane"
                className={inputClass}
              />
            </Field>
            <Field label="Last Name" htmlFor="lastName" required>
              <input
                id="lastName"
                type="text"
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                placeholder="Smith"
                className={inputClass}
              />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone Number" htmlFor="phone" required>
              <input
                id="phone"
                type="tel"
                required
                autoComplete="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="(281) 555-0123"
                className={inputClass}
              />
            </Field>
            <Field label="Email" htmlFor="email" required>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="you@email.com"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="Street Address" htmlFor="address">
            <input
              id="address"
              type="text"
              autoComplete="street-address"
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="123 Main St"
              className={inputClass}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="City" htmlFor="city">
              <input
                id="city"
                type="text"
                autoComplete="address-level2"
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="Houston"
                className={inputClass}
              />
            </Field>
            <Field label="Postal Code" htmlFor="zip" required>
              <input
                id="zip"
                type="text"
                required
                inputMode="numeric"
                autoComplete="postal-code"
                value={form.zip}
                onChange={(e) => update("zip", e.target.value)}
                placeholder="77070"
                className={inputClass}
              />
            </Field>
          </div>

          <Field label="What can we help you with?" htmlFor="help" required>
            <select
              id="help"
              required
              value={form.help}
              onChange={(e) => update("help", e.target.value)}
              className={inputClass}
            >
              {HELP_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>

          <Field label="How did you hear about us?" htmlFor="hear">
            <select
              id="hear"
              value={form.hear}
              onChange={(e) => update("hear", e.target.value)}
              className={inputClass}
            >
              <option value="">Please Select</option>
              {HEAR_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label="Give us a bit more detail on what we can help you with…"
            htmlFor="message"
          >
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Lot size, must-have features, timeline, budget range…"
              className={`${inputClass} resize-none`}
            />
          </Field>

          <label className="flex items-start gap-3 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={form.smsConsent}
              onChange={(e) => update("smsConsent", e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-[var(--color-pool)] accent-[var(--color-pool)]"
            />
            <span>
              Houston Cool Pools, I agree to receive communication by text message about my
              inquiry. Message &amp; data rates may apply. Reply STOP to opt out at any time.
            </span>
          </label>

          <button
            type="submit"
            className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[var(--color-pool)] to-[var(--color-pool-deep)] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-[0_18px_40px_-12px_rgba(0,124,182,0.6)] transition-all hover:-translate-y-0.5"
          >
            Request My Free Pool Quote
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-center text-xs text-slate-400">
            No obligation. We never share your information.
          </p>
        </form>
      )}
    </motion.div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
        {required && <span className="text-[var(--color-pool)]"> *</span>}
      </span>
      {children}
    </label>
  );
}
