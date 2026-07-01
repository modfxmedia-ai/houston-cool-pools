import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { TestimonialsClient } from "../components/info/TestimonialsClient";

const SLUG = "customer-reviews-testimonials";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}.html`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  title: "Customer Reviews & Testimonials — Houston Cool Pools",
  description:
    "Read real 5-star reviews from Houston Cool Pools customers across Cypress, Spring, Tomball, Katy and the greater Houston area.",
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Houston Cool Pools",
  url: CANONICAL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "15",
    bestRating: "5",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestimonialsClient />
    </>
  );
}
