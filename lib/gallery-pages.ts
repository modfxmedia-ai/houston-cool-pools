// Gallery sub-page image data. NOTE: this used to hotlink live images from
// `houstoncoolpools.com/<folder>_files/vlb_images1/<name>` (the OLD pre-Next.js
// site's raw scraped file paths) via next/image `unoptimized`. That domain now
// serves THIS Next.js app, so those legacy file paths all 404 and every image
// on every gallery sub-page rendered blank. Fixed by using real, locally-hosted
// project photos from `public/images/gallery/hd/` (the same curated set used
// on /gallery, /custom-pool-types, /pool-information, etc.) instead.

export type GalleryImage = { src: string; alt: string };

type GalleryEntry = {
  /** Locally-hosted images for this gallery sub-page. */
  extras?: GalleryImage[];
};

const HD = "/images/gallery/hd";

const DATA: Record<string, GalleryEntry> = {
  // ===== Free Form Pools (curved / naturalistic shapes only) =====
  // NOTE: only 11 genuinely curved/naturalistic pool photos exist in the HD
  // asset library, so photo counts vary per page rather than repeating any
  // image across pages 1-5.
  "gallery-free-form-pools-1": {
    extras: [
      { src: `${HD}/le-pool-1.jpg`, alt: "Free form pool by Houston Cool Pools - oval infinity-edge pool overlooking the lake" },
      { src: `${HD}/family-4.jpg`, alt: "Free form pool by Houston Cool Pools - kidney-shaped pool with tanning ledge and bubblers" },
      { src: `${HD}/clark-estate.jpg`, alt: "Free form pool by Houston Cool Pools - naturalistic pool with rock waterfall" },
    ],
  },
  "gallery-free-form-pools-2": {
    extras: [
      { src: `${HD}/le-pool-2.jpg`, alt: "Free form pool by Houston Cool Pools - curved lakefront pool with raised spa" },
      { src: `${HD}/family-5.jpg`, alt: "Free form pool by Houston Cool Pools - curved pool with raised spa and fire bowls" },
    ],
  },
  "gallery-free-form-pools-3": {
    extras: [
      { src: `${HD}/stidham.jpg`, alt: "Free form pool by Houston Cool Pools - kidney-shaped pool with round spa and fire bowls" },
      { src: `${HD}/estate-premier.jpg`, alt: "Free form pool by Houston Cool Pools - curved pool and spa with rock waterfall" },
    ],
  },
  "gallery-free-form-pools-4": {
    extras: [
      { src: `${HD}/lifestyle-1.jpg`, alt: "Free form pool by Houston Cool Pools - naturalistic pool with rock grotto" },
      { src: `${HD}/estate-lagoon.jpg`, alt: "Free form pool by Houston Cool Pools - lagoon-shaped pool with rock waterfall grotto" },
    ],
  },
  "gallery-free-form-pools-5": {
    extras: [
      { src: `${HD}/cove-spa.jpg`, alt: "Free form pool by Houston Cool Pools - curved cove pool with raised spa and stone column" },
      { src: `${HD}/rock-grotto.jpg`, alt: "Free form pool by Houston Cool Pools - naturalistic pool with rock waterfall grotto" },
    ],
  },

  // ===== Geometric Pools (straight-line / rectangular shapes only, all unique) =====
  "geometric-pools-1": {
    extras: [
      { src: `${HD}/merlin-1.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with raised spa and fire trough" },
      { src: `${HD}/breth-1.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with stone steps and tanning ledge" },
      { src: `${HD}/anderson-tarr-1.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with sun shelf" },
    ],
  },
  "geometric-pools-2": {
    extras: [
      { src: `${HD}/merlin-2.jpg`, alt: "Geometric pool by Houston Cool Pools - linear pool with fire trough at dusk" },
      { src: `${HD}/breth-2.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with fountain feature" },
      { src: `${HD}/anderson-tarr-2.jpg`, alt: "Geometric pool by Houston Cool Pools - square pool and spa" },
    ],
  },
  "geometric-pools-3": {
    extras: [
      { src: `${HD}/merlin-3.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool and spa with fire feature" },
      { src: `${HD}/kros.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with raised spa and pergola" },
      { src: `${HD}/modern-geometric.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with architectural lines" },
    ],
  },
  "geometric-pools-4": {
    extras: [
      { src: `${HD}/family-3.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with stacked-stone waterfall wall" },
      { src: `${HD}/silverman-1.jpg`, alt: "Geometric pool by Houston Cool Pools - linear lap pool with glass-tile spa" },
      { src: `${HD}/puranik-1.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular reflecting pool by the lake" },
    ],
  },
  "geometric-pools-5": {
    extras: [
      { src: `${HD}/silverman-2.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular lap pool with sun shelf" },
      { src: `${HD}/puranik-2.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with raised glass-tile spa" },
      { src: `${HD}/corbeil-1.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular estate pool" },
    ],
  },
  "geometric-pools-6": {
    extras: [
      { src: `${HD}/corbeil-2.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with premium coping" },
      { src: `${HD}/estate-luxe.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular pool with fountains" },
      { src: `${HD}/newcastle-1.jpg`, alt: "Geometric pool by Houston Cool Pools - rectangular remodel with raised spa" },
    ],
  },

  // ===== Fireplace & Fire Pits =====
  "fireplace-firepits-gallery-1": {
    extras: [
      { src: `${HD}/sunset-pool.jpg`, alt: "Fireplace and firepit by Houston Cool Pools - fire features at sunset" },
      { src: `${HD}/heritage-estate.jpg`, alt: "Fireplace and firepit by Houston Cool Pools - heritage estate outdoor environment" },
    ],
  },
  "fireplace-firepits-gallery-2": {
    extras: [
      { src: `${HD}/estate-twilight.jpg`, alt: "Fireplace and firepit by Houston Cool Pools - twilight lighting package" },
      { src: `${HD}/nc-resort.jpg`, alt: "Fireplace and firepit by Houston Cool Pools - resort-style pool" },
    ],
  },
  "fireplace-firepits-gallery-3": {
    extras: [
      { src: `${HD}/sunset-pool.jpg`, alt: "Fireplace and firepit by Houston Cool Pools - fire features at sunset" },
      { src: `${HD}/estate-twilight.jpg`, alt: "Fireplace and firepit by Houston Cool Pools - twilight lighting package" },
    ],
  },

  // ===== Pool Decks =====
  "pool-deck-1": {
    extras: [
      { src: `${HD}/courtyard-pool.jpg`, alt: "Pool deck by Houston Cool Pools - courtyard setting" },
      { src: `${HD}/huckleberry-1.jpg`, alt: "Pool deck by Houston Cool Pools - resort backyard with decking" },
    ],
  },
  "pool-deck-2": {
    extras: [
      { src: `${HD}/family-1.jpg`, alt: "Pool deck by Houston Cool Pools - tanning ledge and deck" },
      { src: `${HD}/feature-pool-1.jpg`, alt: "Pool deck by Houston Cool Pools - sheer-descent water feature" },
    ],
  },
  "pool-deck-3": {
    extras: [
      { src: `${HD}/huckleberry-3.jpg`, alt: "Pool deck by Houston Cool Pools - resort pool retreat" },
      { src: `${HD}/feature-pool-2.jpg`, alt: "Pool deck by Houston Cool Pools - custom outdoor environment" },
    ],
  },
  "pool-deck-4": {
    extras: [
      { src: `${HD}/family-2.jpg`, alt: "Pool deck by Houston Cool Pools - backyard environment with seating" },
      { src: `${HD}/feature-pool-3.jpg`, alt: "Pool deck by Houston Cool Pools - stacked-stone spillway wall" },
    ],
  },

  // ===== Outdoor Structures =====
  "outdoor-structures-gallery-1": {
    extras: [
      { src: "/images/gallery/hd/antisdel-1.jpg", alt: "Outdoor structure by Houston Cool Pools - covered patio with outdoor kitchen" },
      { src: "/images/gallery/hd/antisdel-2.jpg", alt: "Outdoor structure by Houston Cool Pools - covered patio with wood ceiling and lounge seating" },
      { src: "/images/gallery/hd/antisdel-3.jpg", alt: "Outdoor structure by Houston Cool Pools - covered patio with columns overlooking pool" },
      { src: "/images/gallery/hd/poolside-1.jpg", alt: "Outdoor structure by Houston Cool Pools - lakeside wood pavilion with pool" },
    ],
  },
  "outdoor-structures-gallery-2": {
    extras: [
      { src: "/images/gallery/hd/antisdel-4.jpg", alt: "Outdoor structure by Houston Cool Pools - twilight LED color scenes" },
      { src: "/images/gallery/hd/antisdel-5.jpg", alt: "Outdoor structure by Houston Cool Pools - covered patio design" },
      { src: "/images/gallery/hd/antisdel-6.jpg", alt: "Outdoor structure by Houston Cool Pools - full design view" },
      { src: "/images/gallery/hd/antisdel-7.jpg", alt: "Outdoor structure by Houston Cool Pools - covered outdoor living space" },
      { src: "/images/gallery/hd/antisdel-8.jpg", alt: "Outdoor structure by Houston Cool Pools - mood lighting package" },
    ],
  },

  // ===== Commercial Projects =====
  "commercial-projects-gallery-1": {
    extras: [
      { src: "/images/gallery/hd/family-1.jpg", alt: "Commercial courtyard fountain by Houston Cool Pools" },
      { src: "/images/gallery/hd/portrait-1.jpg", alt: "Commercial courtyard fountain by Houston Cool Pools" },
    ],
  },

  // ===== Water Features =====
  "water-features-gallery-1": {
    extras: [
      { src: "/images/gallery/hd/feature-pool-3.jpg", alt: "Water feature by Houston Cool Pools - stacked-stone spillway wall" },
    ],
  },
};

/** Build the local image list for a gallery slug. `altPrefix` is unused now
 * that every entry ships its own descriptive `alt` text, but kept in the
 * signature to avoid touching every call site. */
export function getGalleryImages(slug: string, _altPrefix: string): GalleryImage[] {
  const entry = DATA[slug];
  if (!entry) return [];
  return entry.extras ?? [];
}

/** ImageGallery JSON-LD for a gallery sub-page. */
export function galleryJsonLd(name: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    url: `https://houstoncoolpools.com/${slug}`,
    author: { "@type": "LocalBusiness", name: "Houston Cool Pools" },
  };
}
