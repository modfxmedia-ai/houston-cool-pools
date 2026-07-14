"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const LOOKING_FOR = [
  "Choose One",
  "Custom Pool",
  "Remodel Pool",
  "Service",
  "Clean My Pool",
  "Advice!",
];

export function PoolServiceForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const inputCls =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[var(--color-pool)] focus:outline-none focus:ring-2 focus:ring-[var(--color-pool)]/25";
  const labelCls =
    "text-xs font-semibold uppercase tracking-[0.14em] text-slate-500";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const lookingForRaw = String(fd.get("lookingFor") || "");
    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      smsConsent: fd.get("smsConsent") === "on",
      email: String(fd.get("email") || "").trim(),
      address: String(fd.get("address") || "").trim(),
      city: String(fd.get("city") || "").trim(),
      state: String(fd.get("state") || "").trim(),
      zip: String(fd.get("zip") || "").trim(),
      hearAbout: String(fd.get("hearAbout") || "").trim(),
      lookingFor: lookingForRaw === "Choose One" ? "" : lookingForRaw,
      message: String(fd.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/service-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Submission failed.");
      }
      setStatus("success");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-emerald-800">
          Thanks — we&rsquo;ll be in touch shortly.
        </h3>
        <p className="mt-3 text-sm text-emerald-700">
          A Houston Cool Pools representative will call or text you soon. For
          immediate help, dial{" "}
          <a
            href="tel:+12816456631"
            className="font-semibold underline decoration-emerald-700/40 underline-offset-2"
          >
            (281) 645-6631
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-700/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 transition-colors hover:bg-emerald-100"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(0,27,36,0.35)] md:p-8"
    >
      <div className="grid gap-1.5">
        <label htmlFor="ps-name" className={labelCls}>
          Name (required)
        </label>
        <input
          id="ps-name"
          name="name"
          required
          autoComplete="name"
          className={inputCls}
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="ps-phone" className={labelCls}>
          Phone (required)
        </label>
        <input
          id="ps-phone"
          name="phone"
          type="tel"
          required
          placeholder="xxx-xxx-xxxx"
          autoComplete="tel"
          className={inputCls}
        />
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
        <input
          type="checkbox"
          name="smsConsent"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[var(--color-pool)] focus:ring-[var(--color-pool)]/40"
        />
        <span>
          <span className="font-semibold text-slate-800">I Agree</span> — Houston
          Cool Pools, I agree to receive communication by text message about my
          inquiry. You may opt-out by replying STOP or reply HELP for more
          information. Message frequency varies. Message and data rates may
          apply. You may review our{" "}
          <Link
            href="/privacynotice"
            className="font-semibold text-[var(--color-pool-deep)] underline decoration-[var(--color-pool)]/30 underline-offset-2 hover:text-[var(--color-pool)]"
          >
            Privacy Policy
          </Link>{" "}
          to learn how your data is used.
        </span>
      </label>

      <div className="grid gap-1.5">
        <label htmlFor="ps-email" className={labelCls}>
          Email
        </label>
        <input
          id="ps-email"
          name="email"
          type="email"
          placeholder="you@domain.com"
          autoComplete="email"
          className={inputCls}
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="ps-address" className={labelCls}>
          Address
        </label>
        <input
          id="ps-address"
          name="address"
          autoComplete="street-address"
          className={inputCls}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="grid gap-1.5">
          <label htmlFor="ps-city" className={labelCls}>
            City
          </label>
          <input
            id="ps-city"
            name="city"
            autoComplete="address-level2"
            className={inputCls}
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="ps-state" className={labelCls}>
            St
          </label>
          <input
            id="ps-state"
            name="state"
            autoComplete="address-level1"
            maxLength={2}
            className={inputCls}
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="ps-zip" className={labelCls}>
            Zip
          </label>
          <input
            id="ps-zip"
            name="zip"
            autoComplete="postal-code"
            inputMode="numeric"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="ps-hear" className={labelCls}>
          How did you hear about us?
        </label>
        <input id="ps-hear" name="hearAbout" className={inputCls} />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="ps-looking" className={labelCls}>
          Looking For?
        </label>
        <select
          id="ps-looking"
          name="lookingFor"
          defaultValue="Choose One"
          className={inputCls}
        >
          {LOOKING_FOR.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="ps-message" className={labelCls}>
          How can we help you?
        </label>
        <textarea
          id="ps-message"
          name="message"
          rows={4}
          className={`${inputCls} resize-y`}
        />
      </div>

      {status === "error" && error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-pool)] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Submit"}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-3 w-3 transition-transform group-hover:translate-x-1"
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
      </div>
    </form>
  );
}
