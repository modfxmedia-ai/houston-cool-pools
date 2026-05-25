import type { MetadataRoute } from "next";
import { SITE_URLS } from "../lib/site-urls";

const BASE_URL = "https://houstoncoolpools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_URLS.map(({ path, priority, lastModified }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModified),
    priority,
  }));
}
