import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { EquipmentManualsClient } from "../components/info/EquipmentManualsClient";

const SLUG = "pool-equipment-manuals";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}.html`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  title: "Pool Equipment Manuals - Houston Cool Pools",
  description:
    "Downloadable owner\u2019s manuals for the Pentair, A&A, and Paramount pool equipment we install - cleaners, pumps, filters, heaters, lighting, chlorinators, ozone systems and water features.",
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Pool Equipment Manuals",
  url: CANONICAL,
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EquipmentManualsClient />
    </>
  );
}
