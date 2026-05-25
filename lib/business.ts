import type { Metadata } from "next";
import { getPageMeta } from "./site-metadata";

export const SITE_URL = "https://houstoncoolpools.com";

export const BUSINESS = {
  name: "Houston Cool Pools",
  legalName: "Houston Cool Pools",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  telephone: "+1-281-645-6631",
  email: "info@houstoncoolpools.com",
  foundingDate: "1996",
  priceRange: "$$$",
  address: {
    streetAddress: "21902 Highway 249",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77070",
    addressCountry: "US",
  },
  areaServed: ["Houston", "Cypress", "Spring", "Tomball", "The Heights", "Katy"],
  awards: [
    "A+ Rated with the Better Business Bureau",
    "BBB 2018 Gold Star Certificate",
    "Angie's List Super Service Award Winner",
  ],
  sameAs: [] as string[],
} as const;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    foundingDate: BUSINESS.foundingDate,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    award: BUSINESS.awards,
    sameAs: BUSINESS.sameAs,
  };
}

/**
 * Build a Next.js Metadata object for a given clean path using the metadata
 * scraped from the live site. Returns an empty Metadata if the path is unknown
 * so callers can spread/extend safely.
 */
export function buildPageMetadata(path: string): Metadata {
  const meta = getPageMeta(path);
  const canonical = `${SITE_URL}${path}`;
  if (!meta) {
    return { alternates: { canonical } };
  }
  return {
    title: meta.title,
    description: meta.description ?? undefined,
    keywords: meta.keywords ?? undefined,
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description ?? undefined,
      url: canonical,
      siteName: BUSINESS.name,
      type: "website",
    },
  };
}
