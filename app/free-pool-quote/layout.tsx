import type { Metadata } from "next";
import { TopBar } from "./_components/TopBar";
import { QuoteModal } from "./_components/QuoteModal";
import { MobileStickyCTA } from "./_components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Get a Free Pool Quote | Houston Cool Pools",
  description:
    "Claim your free custom pool quote from Houston's most trusted gunite pool builder since 1996. 1,600+ pools built. 100% on-budget guarantee.",
  alternates: { canonical: "/free-pool-quote" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Get a Free Pool Quote | Houston Cool Pools",
    description:
      "Free in-home quote from Houston's most trusted custom gunite pool builder. 1,600+ pools built since 1996. 100% on-budget guarantee.",
    url: "https://houstoncoolpools.com/free-pool-quote",
    siteName: "Houston Cool Pools",
    type: "website",
    images: [
      {
        url: "/images/gallery/hd/silverman-1.jpg",
        width: 1200,
        height: 630,
        alt: "Houston Cool Pools | Free Pool Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Pool Quote | Houston Cool Pools",
    description:
      "Free in-home quote. 1,600+ pools built since 1996. 100% on-budget guarantee.",
    images: ["/images/gallery/hd/silverman-1.jpg"],
  },
};

export default function FreePoolQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lp-root min-h-screen bg-[#0a1628] pb-20 text-white md:pb-0">
      {/* TODO: Insert Google Ads / GA4 / GTM tag here for conversion tracking. */}
      <TopBar />
      {children}
      <QuoteModal />
      <MobileStickyCTA />
    </div>
  );
}
