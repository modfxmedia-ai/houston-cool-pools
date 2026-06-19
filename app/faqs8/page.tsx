import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { FaqPage } from "../components/faqs/FaqPage";
import { getFaq, faqJsonLd } from "../../lib/faqs";

const SLUG = "faqs8";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}.html`;

const base = buildPageMetadata(`/${SLUG}`);
export const metadata: Metadata = {
  ...base,
  alternates: { canonical: CANONICAL },
  openGraph: { ...base.openGraph, url: CANONICAL },
};

export default function Page() {
  const { faq, index, total, prev, next } = getFaq(SLUG);
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <FaqPage faq={faq} index={index} total={total} prev={prev} next={next} />
    </>
  );
}
