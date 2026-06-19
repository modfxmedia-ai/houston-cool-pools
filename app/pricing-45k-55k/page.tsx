import type { Metadata } from "next";
import { PricingTierPage } from "../components/pricing/PricingTierPage";

const TITLE = "Affordable Pool Construction Pricing in Houston, TX";
const DESCRIPTION =
  "Explore affordable pool pricing options within $45k-$55k at Houston Cool Pools. We're the premier pool builder serving Cypress, Spring, Tomball, The Heights, and Katy.";
const CANONICAL = "https://houstoncoolpools.com/pricing-45k-55k.html";

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
  name: "Custom Pool Construction $45k - $55k",
  serviceType: "Custom Gunite Pool Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Houston Cool Pools",
    telephone: "+1-281-645-6631",
  },
};

const IMAGES = [
  { src: "/images/pricing-45k-55k/01.jpg", alt: "Custom gunite pool with spacious patio" },
  { src: "/images/pricing-45k-55k/02.jpg", alt: "Backyard pool with travertine decking" },
  { src: "/images/pricing-45k-55k/03.jpg", alt: "Freeform pool with natural stone accents" },
  { src: "/images/pricing-45k-55k/04.jpg", alt: "Modern pool with clean waterline tile" },
  { src: "/images/pricing-45k-55k/05.jpg", alt: "Backyard oasis with lush landscaping" },
  { src: "/images/pricing-45k-55k/06.jpg", alt: "Sparkling blue pool ready for summer" },
  { src: "/images/pricing-45k-55k/07.jpg", alt: "Pool and spa combination with stone coping" },
  { src: "/images/pricing-45k-55k/08.jpg", alt: "Resort-style pool with tanning ledge" },
  { src: "/images/pricing-45k-55k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
  { src: "/images/pricing-45k-55k/10.jpg", alt: "Pool with decorative tile and water features" },
  { src: "/images/pricing-45k-55k/11.jpg", alt: "Evening pool view with landscape lighting" },
];

export default function Pricing45k55kPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PricingTierPage
        heading="Pool Pricing $65k – $75k"
        activeHref="/pricing-45k-55k"
        heroImage="/images/pricing-45k-55k/hero.jpg"
        sectionHeading="Pools in the $65k – $75k Range"
        body="A collection of custom Houston Cool Pools projects. Contact us for current pool pricing and available packages in this range."
        images={IMAGES}
      />
    </>
  );
}
