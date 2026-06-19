import type { Metadata } from "next";
import { PoolRemodelHero } from "../components/pool-remodel/PoolRemodelHero";
import { PoolRemodelIntro } from "../components/pool-remodel/PoolRemodelIntro";
import { RenovationIdeas } from "../components/pool-remodel/RenovationIdeas";
import { PoolCtaBanner } from "../components/PoolCtaBanner";

const TITLE = "Pool Renovation & Remodeling Services in Houston, TX";
const DESCRIPTION =
  "Is your old pool looking dated? Houston Cool Pools offers expert pool remodeling and renovation services in Houston, TX. Resurfacing, tile, spa additions and more.";
const CANONICAL = "https://houstoncoolpools.com/pool-remodel.html";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Pool Builder, Pool Remodel, Pool Renovation Houston TX, Pool Resurfacing",
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
  name: "Pool Remodel and Renovation Houston TX",
  serviceType: "Pool Renovation, Pool Resurfacing, Pool Remodeling",
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
};

const REASON_GROUPS: { heading: string; items: string[] }[] = [
  {
    heading: "Why Choose Houston Cool Pools?",
    items: [
      "25+ Years in Business",
      "A+ Rated with the BBB",
      "A Rated with Angie's List",
    ],
  },
  {
    heading: "Peace of Mind",
    items: [
      'We only use "Best Practice" Building Techniques',
      "Highest Quality Materials",
      "State of the Art Equipment",
    ],
  },
  {
    heading: "We Got You Covered!",
    items: [
      "Full showroom",
      "Prepare HOA Applications",
      "Coordinate Utility Reroutes",
      "One Stop Shopping: Outdoor Kitchens, Patios/Pergolas, Fire Pits/Fireplaces, Landscaping Packages",
    ],
  },
];

const RENOVATION_IDEAS: { label: string; icon: string }[] = [
  { label: "Resurfacing the pool", icon: "resurface" },
  { label: "Installing new tiles", icon: "tile" },
  { label: "New coping", icon: "coping" },
  { label: "Installing LED lighting", icon: "light" },
  { label: "Adding a spa", icon: "spa" },
  { label: "Putting in new equipment", icon: "equipment" },
  { label: "Update decking", icon: "decking" },
  { label: "Salt chlorination systems", icon: "salt" },
  { label: "Heat pumps", icon: "heat" },
  { label: "Adding waterfall features", icon: "waterfall" },
];

export default function PoolRemodelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <PoolRemodelHero />
      <PoolRemodelIntro reasonGroups={REASON_GROUPS} />
      <RenovationIdeas ideas={RENOVATION_IDEAS} />
      <PoolCtaBanner heading="Building our reputation one pool at a time" quote />
    </>
  );
}
