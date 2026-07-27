import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { ProductBrochuresClient } from "../components/info/ProductBrochuresClient";

const SLUG = "product-brochures";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  title: "Product Brochures & Information - Houston Cool Pools",
  description:
    "Manufacturer brochures and product specs for the equipment we install - Pentair, A&A Manufacturing, WaterCo, WetEdge and more.",
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Product Brochures and Information",
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
      <ProductBrochuresClient />
    </>
  );
}
