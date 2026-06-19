import type { Metadata } from "next";
import { PricingTierPage } from "../components/pricing/PricingTierPage";

const TITLE = "Pool Pricing $95k – $105k in Houston, TX";
const DESCRIPTION =
  "Browse Houston Cool Pools custom gunite pool projects in the $95k–$105k range. Premier pool builder serving Cypress, Spring, Tomball, The Heights, and Katy.";
const CANONICAL = "https://houstoncoolpools.com/pricing-level-3.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Pool Builder, Pool Builder Tomball, Pool Company, Pool Company Tomball, Pool Construction, Pool Construction Tomball, Pool Contractor",
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
  name: "Custom Pool Construction $95k - $105k",
  serviceType: "Custom Gunite Pool Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Houston Cool Pools",
    telephone: "+1-281-645-6631",
  },
};

const IMAGES = [
  { src: "/images/pricing-level-3/01.jpg", alt: "Custom gunite pool with raised spa" },
  { src: "/images/pricing-level-3/02.jpg", alt: "Backyard pool with travertine decking" },
  { src: "/images/pricing-level-3/03.jpg", alt: "Freeform pool with natural stone accents" },
  { src: "/images/pricing-level-3/04.jpg", alt: "Modern pool with clean waterline tile" },
  { src: "/images/pricing-level-3/05.jpg", alt: "Backyard oasis with lush landscaping" },
  { src: "/images/pricing-level-3/06.jpg", alt: "Sparkling blue pool ready for summer" },
  { src: "/images/pricing-level-3/07.jpg", alt: "Pool and spa combination with stone coping" },
  { src: "/images/pricing-level-3/08.jpg", alt: "Resort-style pool with tanning ledge" },
  { src: "/images/pricing-level-3/09.jpg", alt: "Custom pool with elevated spa and spillway" },
  { src: "/images/pricing-level-3/10.jpg", alt: "Pool with decorative tile and water features" },
  { src: "/images/pricing-level-3/11.jpg", alt: "Evening pool view with landscape lighting" },
];

export default function PricingLevel3Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PricingTierPage
        heading="Pool Pricing $95k – $105k"
        activeHref="/pricing-level-3"
        heroImage="/images/pricing-level-3/hero.jpg"
        sectionHeading="Pools in the $95k – $105k Range"
        body="A collection of custom Houston Cool Pools projects built in the $95k–$105k range. Contact us for current pricing and available packages."
        images={IMAGES}
      />
    </>
  );
}
