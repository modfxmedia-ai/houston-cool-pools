import type { MetadataRoute } from "next";
import { SITE_URLS } from "../lib/site-urls";
import { getLiveCombos } from "../data/pseo/slugs";

const BASE_URL = "https://houstoncoolpools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const legacy = SITE_URLS.map(({ path, priority, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    priority,
  }));

  // Programmatic SEO combos (service × location) — live-only.
  const pseo = getLiveCombos().map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: c.location.tier === 1 ? 0.72 : 0.6,
  }));

  return [
    ...legacy,
    {
      url: `${BASE_URL}/areas-we-serve`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...pseo,
  ];
}
