/**
 * Real-search-phrase lookup extracted from the last 16 months of Google Search
 * Console data (see /gsc-report/Queries.csv).
 *
 * We surface actual query strings - not guesses - into H1s, meta descriptions,
 * and FAQ questions on the pSEO pages. Every entry below traces back to a row
 * in the GSC export with `impressions > 0`.
 *
 * Volume is a coarse bucket: `hi` (100+ impressions), `mid` (25-99), `lo` (1-24).
 */

export type KeywordEntry = {
  query: string;
  impressions: number;
  clicks: number;
  /** Average position in Google results during the reporting window */
  position: number;
  volume: "hi" | "mid" | "lo";
};

export type ServiceKeywordMap = {
  /** service slug */
  service: string;
  /** Real queries associated with this service across all locations */
  queries: KeywordEntry[];
};

export type LocationKeywordMap = {
  /** location slug */
  location: string;
  /** Real queries mentioning this location */
  queries: KeywordEntry[];
};

const bucket = (impressions: number): "hi" | "mid" | "lo" =>
  impressions >= 100 ? "hi" : impressions >= 25 ? "mid" : "lo";

const k = (
  query: string,
  impressions: number,
  clicks: number,
  position: number,
): KeywordEntry => ({
  query,
  impressions,
  clicks,
  position,
  volume: bucket(impressions),
});

// ─── Service-level query patterns (aggregated across locations) ────────────
export const SERVICE_KEYWORDS: ServiceKeywordMap[] = [
  {
    service: "custom-pool-builder",
    queries: [
      k("pool installation houston", 1136, 12, 8.82),
      k("houston pool builders", 987, 12, 6.37),
      k("houston pool builder", 943, 1, 6.83),
      k("pool builders houston", 1301, 10, 8.19),
      k("houston pool companies", 556, 6, 5.05),
      k("pool builder houston", 519, 2, 6.57),
      k("pool companies in houston", 542, 1, 9.93),
      k("pool builders houston tx", 411, 2, 5.6),
      k("pool contractors", 545, 1, 9.5),
      k("custom pools houston", 644, 1, 9.11),
      k("houston custom pool builders", 252, 1, 6.69),
      k("houston custom pools", 112, 1, 2.35),
      k("best pool builders in houston", 502, 3, 6.88),
      k("gunite pools", 81, 1, 6.02),
    ],
  },
  {
    service: "pool-design-construction",
    queries: [
      k("houston pool construction", 481, 1, 13.73),
      k("houston swimming pool builders", 466, 1, 9.69),
      k("new pool construction", 386, 1, 63.22),
      k("pool construction houston tx", 102, 1, 8.34),
      k("pool design", 0, 0, 0),
      k("pool and spa builder in houston tx", 154, 0, 0),
    ],
  },
  {
    service: "pool-remodeling",
    queries: [
      k("pool remodeling houston", 439, 0, 0),
      k("pool renovation houston", 438, 0, 0),
      k("houston pool remodeling", 379, 0, 0),
      k("swimming pool renovations houston", 357, 0, 0),
      k("pool remodelers in houston tx", 306, 0, 0),
      k("pool remodeling", 301, 0, 0),
      k("pool remodel", 298, 0, 0),
      k("pool renovation", 221, 0, 0),
      k("swimming pool renovation houston", 200, 0, 0),
      k("swimming pool remodel houston", 187, 0, 0),
      k("pool renovation houston tx", 184, 0, 0),
      k("pool remodel houston", 178, 0, 0),
      k("pool resurfacing houston", 173, 0, 0),
    ],
  },
  {
    service: "pool-service-maintenance",
    queries: [
      k("pool maintenance", 605, 0, 0),
      k("pool cleaning", 292, 0, 0),
      k("pool maintenance houston tx", 139, 0, 0),
      k("pool maintenance school", 195, 0, 0),
      k("pool school", 167, 11, 10.58),
      k("pool school near me", 61, 8, 5),
    ],
  },
];

// ─── Location-level query patterns (aggregated across services) ────────────
export const LOCATION_KEYWORDS: LocationKeywordMap[] = [
  {
    location: "cypress",
    queries: [
      k("swimming pool builders cypress tx", 247, 1, 36.17),
      k("pool remodeling services in cypress", 169, 0, 0),
      k("pool renovation services in cypress", 166, 0, 0),
      k("above ground pool cypress tx", 88, 0, 0),
      k("pool builders cypress tx", 48, 0, 0),
      k("pool company cypress tx", 19, 1, 42.53),
      k("swimming pool builders in cypress tx", 6, 1, 44.83),
      k("pool builder cypress texas", 28, 0, 0),
      k("finance swimming pool cypress", 24, 0, 0),
      k("pool financing options cypress", 25, 0, 0),
    ],
  },
  {
    location: "spring",
    queries: [
      k("swimming pool builders spring tx", 187, 0, 0),
      k("pool builders spring tx", 117, 0, 0),
      k("pool construction spring texas", 103, 0, 0),
      k("spring tx pool builder", 86, 0, 0),
      k("pool construction spring tx", 82, 0, 0),
      k("pool contractors near spring tx", 72, 0, 0),
      k("pool builders in spring texas", 72, 0, 0),
      k("swimming pool builders spring", 64, 0, 0),
      k("inground pool builder spring tx", 54, 0, 0),
      k("pool builder spring tx", 51, 0, 0),
      k("pool builder spring", 38, 0, 0),
      k("spring pool builder", 32, 0, 0),
      k("swimming pool builder spring tx", 28, 0, 0),
      k("spring texas pool builders", 25, 0, 0),
      k("top rated pool builder spring tx", 24, 0, 0),
    ],
  },
  {
    location: "katy",
    queries: [
      k("katy pool builders", 110, 0, 0),
      k("pool builders katy", 65, 0, 0),
      k("custom commercial pools katy tx", 37, 0, 0),
      k("pool builder katy tx", 35, 0, 0),
      k("pool builder katy", 24, 0, 0),
      k("pool builders katy tx", 29, 0, 0),
      k("best pool builders in katy", 27, 0, 0),
    ],
  },
  {
    location: "tomball",
    queries: [
      k("pool builders tomball tx", 38, 1, 18.58),
      k("tomball custom swimming pool", 52, 0, 0),
      k("pool builders tomball", 32, 0, 0),
      k("swimming pool financing tomball", 31, 0, 0),
      k("tomball swimming pool contractor", 24, 0, 0),
    ],
  },
  {
    location: "the-heights",
    queries: [
      k("custom pools heights houston", 24, 0, 0),
    ],
  },
  {
    location: "conroe",
    queries: [
      k("custom pool builder conroe", 110, 0, 0),
      k("pool builders conroe", 55, 0, 0),
      k("pool builders conroe texas", 42, 0, 0),
      k("custom pool builders conroe", 24, 0, 0),
    ],
  },
  {
    location: "friendswood",
    queries: [
      k("custom pool construction friendswood tx", 141, 0, 0),
    ],
  },
  {
    location: "league-city",
    queries: [
      k("pool financing league city", 70, 0, 0),
      k("custom pool design league city tx", 32, 0, 0),
    ],
  },
  {
    location: "clear-lake",
    queries: [
      k("custom pools clear lake", 69, 0, 0),
    ],
  },
  {
    location: "baytown",
    queries: [
      k("baytown pool builder", 79, 0, 0),
    ],
  },
  {
    location: "deer-park",
    queries: [
      k("pool builders deer park", 24, 0, 0),
    ],
  },
  {
    location: "kingwood",
    queries: [
      k("pool builders kingwood tx", 31, 0, 0),
    ],
  },
  {
    location: "west-university",
    queries: [
      k("west university pool builder", 26, 0, 0),
    ],
  },
  {
    location: "bunker-hill-village",
    queries: [
      k("bunker hill village pool builder", 48, 0, 0),
    ],
  },
  {
    location: "the-woodlands",
    queries: [
      k("custom pool builder the woodlands", 1, 1, 41),
    ],
  },
];

/** Look up the top-N most relevant real queries for a given service+location combo. */
export function getKeywordsFor(
  serviceSlug: string,
  locationSlug: string,
  limit = 6,
): KeywordEntry[] {
  const svc = SERVICE_KEYWORDS.find((s) => s.service === serviceSlug)?.queries ?? [];
  const loc = LOCATION_KEYWORDS.find((l) => l.location === locationSlug)?.queries ?? [];

  // Interleave: location-specific queries first (higher local intent), then service-level.
  const merged = [...loc, ...svc];

  // De-dupe by query string, keep first occurrence (location-first).
  const seen = new Set<string>();
  const unique: KeywordEntry[] = [];
  for (const q of merged) {
    if (seen.has(q.query)) continue;
    seen.add(q.query);
    unique.push(q);
  }
  return unique.slice(0, limit);
}

/** Return real queries mentioning this location, if any (for FAQ phrasing). */
export function getLocationQueries(locationSlug: string): KeywordEntry[] {
  return LOCATION_KEYWORDS.find((l) => l.location === locationSlug)?.queries ?? [];
}

/** Return service-level queries (used when the location has no direct GSC signal). */
export function getServiceQueries(serviceSlug: string): KeywordEntry[] {
  return SERVICE_KEYWORDS.find((s) => s.service === serviceSlug)?.queries ?? [];
}
