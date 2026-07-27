import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { PoolDefinitionsClient } from "../components/info/PoolDefinitionsClient";

const SLUG = "pooldefinitions";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  title: "Pool Definitions - Terms Every Pool Owner Should Know",
  description:
    "A concise glossary of essential pool construction and equipment terms - beam, coping, gunite, plaster, tile and more.",
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Pool Definitions",
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
      <PoolDefinitionsClient />
    </>
  );
}
