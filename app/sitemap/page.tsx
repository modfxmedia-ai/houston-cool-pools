import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { SitemapClient } from "../components/sitemap/SitemapClient";

const SLUG = "sitemap";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  title: "Sitemap - Houston Cool Pools",
  description:
    "Every page on the Houston Cool Pools website, grouped by topic - pool design, pricing, galleries, service, FAQs, pool school and more.",
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

export default function Page() {
  return <SitemapClient />;
}
