import type { Metadata } from "next";
import { PricingTierPage } from "../components/pricing/PricingTierPage";

const TITLE = "Pool Pricing $85k – $95k in Houston, TX";
const DESCRIPTION =
  "Browse Houston Cool Pools custom gunite pool projects in the $85k–$95k range. Premier pool builder serving Cypress, Spring, Tomball, The Heights, and Katy.";
const CANONICAL = "https://houstoncoolpools.com/pricing-level-2.html";

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
  name: "Custom Pool Construction $85k - $95k",
  serviceType: "Custom Gunite Pool Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Houston Cool Pools",
    telephone: "+1-281-645-6631",
  },
};

const IMAGES = [
  { src: "/images/pricing-level-2/01.jpg", alt: "Custom gunite pool with raised spa" },
  { src: "/images/pricing-level-2/02.jpg", alt: "Backyard pool with travertine decking" },
  { src: "/images/pricing-level-2/03.jpg", alt: "Freeform pool with natural stone accents" },
  { src: "/images/pricing-level-2/04.jpg", alt: "Modern pool with clean waterline tile" },
  { src: "/images/pricing-level-2/05.jpg", alt: "Backyard oasis with lush landscaping" },
  { src: "/images/pricing-level-2/06.jpg", alt: "Sparkling blue pool ready for summer" },
  { src: "/images/pricing-level-2/07.jpg", alt: "Pool and spa combination with stone coping" },
  { src: "/images/pricing-level-2/08.jpg", alt: "Resort-style pool with tanning ledge" },
  { src: "/images/pricing-level-2/09.jpg", alt: "Custom pool with spillway water feature" },
  { src: "/images/pricing-level-2/10.jpg", alt: "Evening pool view with landscape lighting" },
];

export default function PricingLevel2Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PricingTierPage
        heading="Pool Pricing $85k – $95k"
        activeHref="/pricing-level-2"
        heroImage="/images/pricing-level-2/hero.jpg"
        sectionHeading="Pools in the $85k – $95k Range"
        body="A collection of custom Houston Cool Pools projects built in the $85k–$95k range. Contact us for current pricing and available packages."
        images={IMAGES}
      />
    </>
  );
}
