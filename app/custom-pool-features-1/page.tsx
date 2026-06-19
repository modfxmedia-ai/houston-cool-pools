import type { Metadata } from "next";
import { FeaturePage } from "../components/features/FeaturePage";

const TITLE = "Customize Your Pool Experience in Houston, TX";
const DESCRIPTION =
  "Sheer descent waterfalls and falling-water effects from Houston Cool Pools. Custom pool features serving Cypress, Spring, Tomball, The Heights, and Katy.";
const CANONICAL = "https://houstoncoolpools.com/custom-pool-features-1.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Pool Features, Sheer Descents, Waterfalls, Custom Pool Features, Pool Builder Tomball, Pool Company Tomball",
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
  name: "Swimming Pool Features",
  isPartOf: {
    "@type": "WebSite",
    name: "Houston Cool Pools",
    url: "https://houstoncoolpools.com",
  },
};

const IMAGES = [
  { src: "/images/features/custom-pool-features-1/01.jpg", alt: "Sheer descent waterfall cascading into a custom pool" },
  { src: "/images/features/custom-pool-features-1/02.jpg", alt: "Glasslike sheet of water falling from a raised pool wall" },
  { src: "/images/features/custom-pool-features-1/03.jpg", alt: "Sheer descent water feature on a modern pool" },
  { src: "/images/features/custom-pool-features-1/04.jpg", alt: "Arc sheet waterfall projecting into a pool" },
  { src: "/images/features/custom-pool-features-1/05.jpg", alt: "Curtain water effect along a pool wall" },
  { src: "/images/features/custom-pool-features-1/06.jpg", alt: "Rainfall water effect on a backyard pool" },
  { src: "/images/features/custom-pool-features-1/07.jpg", alt: "Multiple sheer descents combined for dramatic effect" },
  { src: "/images/features/custom-pool-features-1/08.jpg", alt: "Custom pool with sheer descent waterfall feature" },
];

const SECTIONS = [
  {
    body:
      "Perhaps no other feature contributes more to the beauty and tranquility of your poolscape than the sight and sound of falling water. No wonder they are one of the most popular accessories in today's most elegant backyard retreats. The many options available allow you to integrate these mesmerizing water effects in either dramatic or subtle ways that transform any pool environment from great to spectacular.",
  },
  {
    title: "Sheet Waterfall Effect",
    body: "The sheet effect creates an almost silent, glasslike sheet of water that projects away from the pool wall.",
  },
  {
    title: "Arc Sheet Waterfall Effect",
    body: "The arc sheet effect propels a smooth arc of water that projects up and away from the pool wall.",
  },
  {
    title: "Curtain Effect",
    body: "With the curtain water effect, water falls straight down, creating a sheer wall of water.",
  },
  {
    title: "Rainfall Effect",
    body: "The rainfall effect projects falling water that looks and sounds like a gentle spring shower.",
  },
  {
    title: "Arc Rainfall Effect",
    body: "The arc rainfall effect produces an arc of falling water that cascades into your pool like a summer rainfall.",
  },
  {
    title: "Sheer Descent Width",
    body: "Sheer Descent Waterfalls can vary in width from 8\" to 8' and can be combined for additional effect.",
  },
];

export default function CustomPoolFeatures1Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <FeaturePage
        heading="Swimming Pool Features"
        intro="Transform your backyard retreat with mesmerizing falling-water effects — from silent glasslike sheets to gentle rainfall."
        activeHref="/custom-pool-features-1"
        heroImage="/images/features/custom-pool-features-1/hero.jpg"
        sectionHeading="Sheer Descents"
        sections={SECTIONS}
        images={IMAGES}
        nextHref="/features-2"
        nextLabel="Scuppers & Spillways"
      />
    </>
  );
}
