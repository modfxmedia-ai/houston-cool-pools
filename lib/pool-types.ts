export type PoolTypePhoto = {
  src: string;
  alt: string;
};

export type PoolTypeCategory = {
  /** URL slug used as anchor id. */
  id: string;
  /** Display label. */
  label: string;
  /** One-line subtitle. */
  tagline: string;
  /** Short marketing description. */
  description: string;
  /** Bullet feature list. */
  features: string[];
  /** Photos in the category, all curated HD. */
  photos: PoolTypePhoto[];
};

/**
 * Pool styles & types showcased on /pool-types. Photos are sourced from the
 * HD set under `public/images/gallery/hd/`. Outdated low-resolution photos
 * from the legacy site have intentionally been excluded.
 */
export const POOL_TYPES: PoolTypeCategory[] = [
  {
    id: "modern-geometric",
    label: "Modern Geometric",
    tagline: "Clean lines, architectural elegance",
    description:
      "Rectangular and contemporary pools that complement modern Houston homes - straight edges, glass tile, and minimalist sun shelves designed to read as a backyard centerpiece.",
    features: [
      "Rectangular & geometric shapes",
      "Glass-tile waterlines",
      "Tanning ledges & bench seating",
      "Travertine or porcelain decking",
    ],
    photos: [
      { src: "/images/gallery/hd/modern-geometric.jpg", alt: "Modern geometric pool with architectural lines" },
      { src: "/images/gallery/hd/silverman-1.jpg", alt: "Modern luxe pool with glass tile" },
      { src: "/images/gallery/hd/silverman-2.jpg", alt: "Geometric pool with sun shelf" },
      { src: "/images/gallery/hd/family-4.jpg", alt: "Modern geometric pool with bubblers" },
      { src: "/images/gallery/hd/family-5.jpg", alt: "Classic rectangular pool" },
    ],
  },
  {
    id: "freeform",
    label: "Free Form & Naturalistic",
    tagline: "Organic shapes that flow with the landscape",
    description:
      "Curved, naturalistic pools designed to feel like part of the backyard. Rock features, lush plantings, and waterfalls bring the resort vibe home.",
    features: [
      "Custom curved shapes",
      "Natural rock features",
      "Waterfalls & grottos",
      "Pebble & quartz finishes",
    ],
    photos: [
      { src: "/images/gallery/hd/merlin-1.jpg", alt: "Free-form pool with rock features" },
      { src: "/images/gallery/hd/merlin-2.jpg", alt: "Naturalistic pool with stonework" },
      { src: "/images/gallery/hd/merlin-3.jpg", alt: "Custom free-form backyard pool" },
      { src: "/images/gallery/hd/kros.jpg", alt: "Free-form pool with waterfall" },
      { src: "/images/gallery/hd/le-pool-2.jpg", alt: "Estate-scale free-form pool" },
    ],
  },
  {
    id: "pool-spa-combo",
    label: "Pool & Spa Combos",
    tagline: "Integrated spas with spillover features",
    description:
      "Raised spas designed as the architectural focal point - overflowing into the pool with sheer-descent or weir spillways and matched tile detailing.",
    features: [
      "Raised spa with spillover",
      "Custom tile detailing",
      "Sheer-descent water features",
      "Color-matched coping & deck",
    ],
    photos: [
      { src: "/images/gallery/hd/antisdel-1.jpg", alt: "Pool and spa with water features" },
      { src: "/images/gallery/hd/antisdel-2.jpg", alt: "Raised spa with spillover" },
      { src: "/images/gallery/hd/antisdel-3.jpg", alt: "Designer pool spa combo" },
      { src: "/images/gallery/hd/huckleberry-2.jpg", alt: "Custom raised spa with fire" },
      { src: "/images/gallery/hd/feature-pool-1.jpg", alt: "Pool with sheer-descent feature" },
    ],
  },
  {
    id: "resort-style",
    label: "Resort Style & Tanning Ledges",
    tagline: "Sun shelves, beach entries & umbrella sleeves",
    description:
      "Resort-inspired pools with shallow tanning ledges, walk-in beach entries, and integrated umbrella sleeves - built for relaxed afternoons in the Houston sun.",
    features: [
      "Tanning ledges with umbrella sleeves",
      "Walk-in beach entries",
      "Bubblers & deck jets",
      "Built-in bench seating",
    ],
    photos: [
      { src: "/images/gallery/hd/nc-resort.jpg", alt: "Resort-style pool" },
      { src: "/images/gallery/hd/huckleberry-1.jpg", alt: "Resort backyard with decking" },
      { src: "/images/gallery/hd/huckleberry-3.jpg", alt: "Resort pool retreat" },
      { src: "/images/gallery/hd/family-1.jpg", alt: "Family backyard with tanning ledge" },
      { src: "/images/gallery/hd/family-3.jpg", alt: "Resort-style family pool" },
      { src: "/images/gallery/hd/courtyard-pool.jpg", alt: "Courtyard resort pool" },
    ],
  },
  {
    id: "outdoor-environments",
    label: "Complete Outdoor Environments",
    tagline: "Pool, kitchen, fire & hardscape as one design",
    description:
      "Full backyard transformations where the pool is just one piece of a unified outdoor environment - outdoor kitchens, fireplaces, fire bowls, and custom hardscape designed together.",
    features: [
      "Outdoor kitchen integration",
      "Fire bowls & fireplaces",
      "Custom pergolas & shade",
      "Cohesive hardscape design",
    ],
    photos: [
      { src: "/images/gallery/hd/sunset-pool.jpg", alt: "Pool with fire features at sunset" },
      { src: "/images/gallery/hd/estate-luxe.jpg", alt: "Pool, spa and outdoor kitchen" },
      { src: "/images/gallery/hd/estate-premier.jpg", alt: "Resort-style outdoor living" },
      { src: "/images/gallery/hd/feature-pool-2.jpg", alt: "Custom outdoor environment" },
      { src: "/images/gallery/hd/family-2.jpg", alt: "Backyard environment with seating" },
      { src: "/images/gallery/hd/heritage-estate.jpg", alt: "Heritage estate outdoor environment" },
    ],
  },
  {
    id: "estate-vanishing-edge",
    label: "Estate & Vanishing Edge",
    tagline: "Negative-edge views, premier custom builds",
    description:
      "Estate-scale signature builds - vanishing edges that drop into the view, multi-level pools, and premium tile and stone finishes for the most demanding Houston homeowners.",
    features: [
      "Vanishing & negative-edge designs",
      "Multi-level pool & spa",
      "Premium glass-mosaic tile",
      "Smart automation & lighting",
    ],
    photos: [
      { src: "/images/gallery/hd/clark-estate.jpg", alt: "Vanishing-edge estate pool" },
      { src: "/images/gallery/hd/le-pool-1.jpg", alt: "Multi-level estate pool" },
      { src: "/images/gallery/hd/puranik-1.jpg", alt: "Reflecting estate pool" },
      { src: "/images/gallery/hd/puranik-2.jpg", alt: "Premier estate backyard" },
      { src: "/images/gallery/hd/estate-twilight.jpg", alt: "Estate pool at twilight" },
      { src: "/images/gallery/hd/stidham.jpg", alt: "Estate-scale signature pool" },
    ],
  },
];
