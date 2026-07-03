import type { Metadata } from "next";
import { FeaturePage } from "../components/features/FeaturePage";

const TITLE = "Custom Pool Features - Houston Cool Pools";
const DESCRIPTION =
  "Custom water features make your pool a work of art. Explore creative, one-of-a-kind pool designs from Houston Cool Pools serving Cypress, Spring, Tomball, and Katy.";
const CANONICAL = "https://houstoncoolpools.com/features-11.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Custom Pool Features, Water Features, Pool Design, Custom Pools, Pool Builder Tomball, Pool Company Tomball",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "Houston Cool Pools",
    type: "website",
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Custom Features",
  isPartOf: {
    "@type": "WebSite",
    name: "Houston Cool Pools",
    url: "https://houstoncoolpools.com",
  },
};

const IMAGES = [
  { src: "/images/features/features-11/01.jpg", alt: "Custom water feature on a designer pool" },
  { src: "/images/features/features-11/02.jpg", alt: "Artistic pool with integrated water feature" },
  { src: "/images/features/features-11/03.jpg", alt: "One-of-a-kind custom pool design" },
  { src: "/images/features/features-11/04.jpg", alt: "Custom pool with unique water elements" },
  { src: "/images/features/features-11/05.jpg", alt: "Creative water feature in a backyard pool" },
  { src: "/images/features/features-11/06.jpg", alt: "Signature custom pool feature" },
  { src: "/images/features/features-11/07.jpg", alt: "Bespoke pool with sculptural water feature" },
  { src: "/images/features/features-11/08.jpg", alt: "Inspirational custom pool design" },
];

const SECTIONS = [
  {
    body:
      "Water features in your custom pool are one of the most creative and integral parts of a pool design experience. This section shows the special inspirations that allow our pools to be works of art that will be enjoyed and admired now and into the future.",
  },
];

export default function Features11Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <FeaturePage
        heading="Custom Features"
        intro="Creative, one-of-a-kind water features that turn our pools into works of art."
        activeHref="/features-11"
        heroImage="/images/features/features-11/hero.jpg"
        sectionHeading="Custom Water Features · Gallery 1"
        sections={SECTIONS}
        images={IMAGES}
        prevHref="/features-10"
        prevLabel="Fire Features Gallery 2"
        nextHref="/features-12"
        nextLabel="Custom Features Gallery 2"
      />
    </>
  );
}
