import type { Metadata } from "next";
import Link from "next/link";

const TITLE =
  "Houston Cool Pools offers a wide variety of pool services - Cleaning, maintenance and repair.";
const DESCRIPTION =
  "With Houston Cool Pools' superior pool service, keep your pool clean. For pool maintenance, repair, and services call or visit us in Houston, TX.";
const CANONICAL = "https://houstoncoolpools.com/pool-service.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "Pool service, pool cleaning, pool maintenance, pool repair, Tomball",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "Houston Cool Pools",
    type: "website",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pool Service and Maintenance Houston TX",
  description:
    "Full service pool cleaning, maintenance and repair in Houston, Tomball, Cypress, Spring, Katy",
  provider: {
    "@type": "LocalBusiness",
    name: "Houston Cool Pools",
    telephone: "+1-281-645-6631",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21902 Highway 249",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77070",
    },
  },
  areaServed: [
    "Houston",
    "Tomball",
    "Cypress",
    "Spring",
    "Katy",
    "The Heights",
    "Magnolia",
    "The Woodlands",
    "Hockley",
    "Garden Oaks",
    "Pinehurst",
  ],
  serviceType: "Pool Cleaning, Pool Maintenance, Pool Repair",
};

const WEEKLY_SERVICE = [
  "Chemical check",
  "We do a full check once a month and check for Chlorine/pH/Alkalinity every week",
  "Standard Chemicals added: Chlorine, Acid, Cyanuric Acid/Stabilizer, Calcium, Salt",
  "Pool Brushing",
  "Clean Pool Skimmers",
  "Clean Pump Baskets",
  "Inspect Pool Equipment",
  "Pool Netting of floating Debris",
  "Pool vacuuming as needed",
];

export default function PoolServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ----- Section 1: Hero ----- */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] px-6 pb-20 pt-36 text-white md:px-10 md:pb-28 md:pt-44 lg:pt-48">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,182,0.3),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[var(--color-pool)]">
            Pool Service &amp; Maintenance
          </p>
          <h1 className="font-[family-name:var(--font-display)] mt-4 text-4xl leading-tight md:text-6xl">
            Pool Service and Maintenance in Houston, TX.
          </h1>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Get a Free Quote
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="tel:+12816456631"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
            >
              Call (281) 645-6631
            </a>
          </div>
        </div>
      </section>

      {/* ----- Section 2: Intro ----- */}
      <section className="bg-white px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--color-navy-deep)] md:text-4xl">
            Is your pool looking dirty or equipment failing?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            Houston Cool Pools, is a full service pool company that provides pool service
            and maintenance to homes throughout the Tomball and the Houston area. We provide
            top of the line service and customer care. From maintaining and repairing the
            pool to communicating with the clients, we take pride in how we do business with
            our customers.
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
            For a wide variety of pool services - cleaning, scheduled service and
            maintenance, Houston Cool Pools is your best choice. Our service technicians and
            specialists know exactly how to care for your pool. With a wide range of
            expertise, Houston Cool Pools specialists are able to diagnose, and solve
            problems quickly and effectively. Our company provides prompt, professional pool
            services at affordable rates. Leave it to the pros at Houston Cool Pools to help
            you enjoy your pool without the fuss!
          </p>
        </div>
      </section>

      {/* ----- Section 3: Pricing ----- */}
      <section className="relative overflow-hidden bg-[var(--color-navy-deep)] px-6 py-20 text-white md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,124,182,0.22),transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-4xl">
            Weekly Full Service, Starting{" "}
            <span className="text-[var(--color-gold-light)]">$215 per month</span>
          </h2>

          <ul className="mt-8 space-y-3">
            {WEEKLY_SERVICE.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base text-white/80">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--color-pool)]/15 text-[var(--color-pool)]">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-[family-name:var(--font-display)] mt-12 text-2xl text-white md:text-3xl">
            Filter Clean Twice a year minimum ($150)
          </h3>
          <p className="mt-4 text-base text-white/70">
            Charge for Extra Chemicals - Metal Remover, Algaecide, Phosphate Remover,
            Chlorine Reducer
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-pool)] px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              Request Service
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ----- Section 4: CTA Banner ----- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-navy-deep)] to-[var(--color-pool)] px-6 py-16 text-white md:px-10">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight md:text-4xl">
            Ready to keep your pool in perfect condition?
          </h2>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-navy-deep)] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Get Your Free Estimate
            <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
