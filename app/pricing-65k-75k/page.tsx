import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { PricingTierPage } from "../components/pricing/PricingTierPage";

const SLUG = "pricing-65k-75k";
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
  name: "Custom Pool Construction $85k - $95k",
  serviceType: "Custom Gunite Pool Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Houston Cool Pools",
    telephone: "+1-281-645-6631",
  },
};

const IMAGES = [
  { src: "/images/pricing-65k-75k/01.jpg", alt: "Custom gunite pool with raised spa" },
  { src: "/images/pricing-65k-75k/02.jpg", alt: "Backyard pool with travertine decking" },
  { src: "/images/pricing-65k-75k/03.jpg", alt: "Freeform pool with natural stone accents" },
  { src: "/images/pricing-65k-75k/04.jpg", alt: "Modern pool with clean waterline tile" },
  { src: "/images/pricing-65k-75k/05.jpg", alt: "Backyard oasis with lush landscaping" },
  { src: "/images/pricing-65k-75k/06.jpg", alt: "Sparkling blue pool ready for summer" },
  { src: "/images/pricing-65k-75k/07.jpg", alt: "Pool and spa combination with stone coping" },
  { src: "/images/pricing-65k-75k/08.jpg", alt: "Resort-style pool with tanning ledge" },
  { src: "/images/pricing-65k-75k/09.jpg", alt: "Custom pool with spillway water feature" },
  { src: "/images/pricing-65k-75k/10.jpg", alt: "Evening pool view with landscape lighting" },
];

export default function Pricing65k75kPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PricingTierPage
        heading="Pool Pricing $85k – $95k"
        activeHref={`/${SLUG}`}
        heroImage="/images/pricing-65k-75k/hero.jpg"
        sectionHeading="Pools in the $85k – $95k Range"
        body="A collection of custom Houston Cool Pools projects built in the $85k–$95k range. Contact us for current pricing and available packages."
        images={IMAGES}
      />
    </>
  );
}
