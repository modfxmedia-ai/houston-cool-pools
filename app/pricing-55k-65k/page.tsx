import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { PricingTierPage } from "../components/pricing/PricingTierPage";

const SLUG = "pricing-55k-65k";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}.html`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Pool Construction $75k - $85k",
  serviceType: "Custom Gunite Pool Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Houston Cool Pools",
    telephone: "+1-281-645-6631",
  },
};

const IMAGES = [
  { src: "/images/pricing-55k-65k/01.jpg", alt: "Custom gunite pool with spacious patio" },
  { src: "/images/pricing-55k-65k/02.jpg", alt: "Backyard pool with travertine decking" },
  { src: "/images/pricing-55k-65k/03.jpg", alt: "Freeform pool with natural stone accents" },
  { src: "/images/pricing-55k-65k/04.jpg", alt: "Modern pool with clean waterline tile" },
  { src: "/images/pricing-55k-65k/05.jpg", alt: "Backyard oasis with lush landscaping" },
  { src: "/images/pricing-55k-65k/06.jpg", alt: "Sparkling blue pool ready for summer" },
  { src: "/images/pricing-55k-65k/07.jpg", alt: "Pool and spa combination with stone coping" },
  { src: "/images/pricing-55k-65k/08.jpg", alt: "Resort-style pool with tanning ledge" },
  { src: "/images/pricing-55k-65k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
  { src: "/images/pricing-55k-65k/10.jpg", alt: "Pool with decorative tile and water features" },
  { src: "/images/pricing-55k-65k/11.jpg", alt: "Evening pool view with landscape lighting" },
];

export default function Pricing55k65kPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PricingTierPage
        heading="Pool Pricing $75k – $85k"
        activeHref={`/${SLUG}`}
        heroImage="/images/pricing-55k-65k/hero.jpg"
        sectionHeading="Pools in the $75k – $85k Range"
        body="A collection of custom Houston Cool Pools projects built in the $75k–$85k range. Contact us for current pricing and available packages."
        images={IMAGES}
      />
    </>
  );
}
