import type { MetadataRoute } from "next";
import { SITE_URLS } from "../lib/site-urls";
import { getLiveCombos } from "../data/pseo/slugs";
import { SITE_URL } from "../lib/business";

function frequencyFor(priority: number): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (priority >= 0.9) return "weekly";
  if (priority >= 0.7) return "monthly";
  return "yearly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const legacy = SITE_URLS.map(({ path, priority, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: frequencyFor(priority),
    priority,
  }));

  // Programmatic SEO combos (service × location) - live-only.
  const pseo = getLiveCombos().map((c) => ({
    url: `${SITE_URL}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: c.location.tier === 1 ? 0.72 : 0.6,
  }));

  return [
    ...legacy,
    {
      url: `${SITE_URL}/areas-we-serve`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...pseo,
  ];
}
