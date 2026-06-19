import type { Metadata } from "next";
import { PricingTierPage } from "../components/pricing/PricingTierPage";

const TITLE = "Pool Pricing $115k+ in Houston, TX";
const DESCRIPTION =
  "Browse Houston Cool Pools luxury custom gunite pool projects in the $115k+ range. Premier pool builder serving Cypress, Spring, Tomball, The Heights, and Katy.";
const CANONICAL = "https://houstoncoolpools.com/pricing-level-5.html";

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
  name: "Custom Pool Construction $115k+",
  serviceType: "Custom Gunite Pool Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Houston Cool Pools",
    telephone: "+1-281-645-6631",
  },
};

const IMAGES = [
  { src: "/images/pricing-level-5/01.jpg", alt: "Luxury gunite pool with raised spa" },
  { src: "/images/pricing-level-5/02.jpg", alt: "Resort-style pool with travertine decking" },
  { src: "/images/pricing-level-5/03.jpg", alt: "Freeform pool with natural stone accents" },
  { src: "/images/pricing-level-5/04.jpg", alt: "Modern pool with clean waterline tile" },
  { src: "/images/pricing-level-5/05.jpg", alt: "Backyard oasis with lush landscaping" },
  { src: "/images/pricing-level-5/06.jpg", alt: "Sparkling blue pool ready for summer" },
  { src: "/images/pricing-level-5/07.jpg", alt: "Pool and spa combination with stone coping" },
  { src: "/images/pricing-level-5/08.jpg", alt: "Resort-style pool with tanning ledge" },
  { src: "/images/pricing-level-5/09.jpg", alt: "Custom pool with elevated spa and spillway" },
  { src: "/images/pricing-level-5/10.jpg", alt: "Pool with decorative tile and water features" },
  { src: "/images/pricing-level-5/11.jpg", alt: "Outdoor living area with covered patio" },
  { src: "/images/pricing-level-5/12.jpg", alt: "Pool with sun shelf and bubbler jets" },
  { src: "/images/pricing-level-5/13.jpg", alt: "Backyard retreat with fire and water features" },
  { src: "/images/pricing-level-5/14.jpg", alt: "Infinity-edge pool with panoramic views" },
  { src: "/images/pricing-level-5/15.jpg", alt: "Evening pool view with landscape lighting" },
];

export default function PricingLevel5Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PricingTierPage
        heading="Pool Pricing $115k+"
        activeHref="/pricing-level-5"
        heroImage="/images/pricing-level-5/hero.jpg"
        sectionHeading="Pools in the $115k+ Range"
        body="A collection of luxury custom Houston Cool Pools projects built in the $115k+ range. Contact us for current pricing and available packages."
        images={IMAGES}
      />
    </>
  );
}
