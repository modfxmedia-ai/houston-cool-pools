import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "../../lib/business";
import { CustomHomeBuilderPage } from "../components/info/CustomHomeBuilderPage";
import { getCustomHomeBuilder } from "../../lib/custom-home-builders";

const SLUG = "mazzarino-construction";
const builder = getCustomHomeBuilder(SLUG);
const CANONICAL = `https://houstoncoolpools.com/${SLUG}.html`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  title: `${builder?.shortName ?? SLUG} - Houston Cool Pools Builder Partner`,
  description: builder?.cardBlurb,
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

export default function Page() {
  if (!builder) notFound();
  return <CustomHomeBuilderPage builder={builder} />;
}
