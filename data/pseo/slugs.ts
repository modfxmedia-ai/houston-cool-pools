import { SERVICES, type PseoService } from "./services";
import { LOCATIONS, type PseoLocation } from "./locations";

export type PseoCombo = {
  slug: string;
  service: PseoService;
  location: PseoLocation;
  live: boolean;
};

/**
 * Cross-join every service x location into the full pSEO combo list.
 * A combo is live only if the underlying location has `live: true`.
 */
export function getAllCombos(): PseoCombo[] {
  const out: PseoCombo[] = [];
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      out.push({
        slug: `${service.slug}-${location.slug}-tx`,
        service,
        location,
        live: location.live,
      });
    }
  }
  return out;
}

export function getLiveCombos(): PseoCombo[] {
  return getAllCombos().filter((c) => c.live);
}

export function getComboBySlug(slug: string): PseoCombo | undefined {
  return getAllCombos().find((c) => c.slug === slug);
}

/**
 * Rotating intro paragraph templates - 5 variants selected by combo slug hash so
 * the same combo always renders the same variant. Prevents "swap-the-city"
 * duplicate-content patterns across pages.
 */
export function pickIntroVariant(slug: string, count: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h % count;
}
