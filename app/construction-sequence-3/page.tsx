import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { ConstructionSequencePage } from "../components/construction-sequence/ConstructionSequencePage";
import { getSequencePage } from "../../lib/construction-sequence";

const SLUG = "construction-sequence-3";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

const data = getSequencePage(SLUG)!;

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Pool Construction Sequence - ${data.page.label}`,
  url: CANONICAL,
  isPartOf: {
    "@type": "WebSite",
    name: "Houston Cool Pools",
    url: "https://houstoncoolpools.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://houstoncoolpools.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pool Information",
        item: "https://houstoncoolpools.com/pool-information",
      },
      { "@type": "ListItem", position: 3, name: "Construction Sequence", item: CANONICAL },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <ConstructionSequencePage
        page={data.page}
        total={data.total}
        prev={data.prev}
        next={data.next}
      />
    </>
  );
}
