import type { ReactNode } from "react";

export type GalleryPool = {
  /** Public path to the photo. */
  src: string;
  /** Short descriptive title shown on the card. */
  title: string;
  /** Optional caption / location / feature highlight. */
  caption?: string;
  /** Aspect ratio hint used by the bento grid. Defaults to landscape. */
  aspect?: "landscape" | "portrait" | "square" | "wide";
};

export type GalleryTier = {
  /** URL-friendly slug used as anchor id. */
  id: string;
  /** Display label shown on the rail and in nav chips. */
  label: string;
  /** Subline shown beneath the price label. */
  tagline: string;
  /** Marketing copy for the tier intro. */
  description: string;
  /** Bullet feature list rendered next to the rail header. */
  highlights: string[];
  /** Featured "showcase" photo used as the cinematic header for the tier. */
  featured: GalleryPool;
  /** Supporting photos rendered in a bento masonry grid. */
  pools: GalleryPool[];
};

/**
 * Price tier → curated HD project photos.
 *
 * Photos are sourced from `public/images/gallery/hd/` (curated from
 * `hcp-pool-images/`). Tier assignments are best-effort visual estimates;
 * the team should rearrange `pools` arrays once real budgets are confirmed.
 */
export const GALLERY_TIERS: GalleryTier[] = [
  {
    id: "65k-90k",
    label: "$65K – $90K",
    tagline: "Signature starter pools",
    description:
      "Beautifully crafted gunite pools designed to elevate any backyard - clean lines, premium plaster finishes, and the build quality Houston Cool Pools is known for.",
    highlights: [
      "Gunite construction",
      "Premium plaster finish",
      "Standard equipment package",
      "LED lighting & auto-fill",
    ],
    featured: {
      src: "/images/pricing-65k-90k/hero.jpg",
      title: "Pool & Elevated Spa at Dusk",
      caption: "Golden-hour spillway lighting",
      aspect: "wide",
    },
    pools: [
      { src: "/images/pricing-65k-90k/01.jpg", title: "Dual Waterfall Spillways", caption: "Compact pool with bamboo privacy fence" },
      { src: "/images/pricing-65k-90k/02.jpg", title: "Freeform Pool", caption: "Raised paver patio with brick house backdrop" },
      { src: "/images/pricing-65k-90k/03.jpg", title: "Rectangular Pool", caption: "Flagstone patio with privacy fence" },
      { src: "/images/pricing-65k-90k/04.jpg", title: "Freeform Pool & Waterfall", caption: "Natural stone waterfall feature" },
      { src: "/images/pricing-65k-90k/05.jpg", title: "Pool with Dual Bubblers", caption: "Travertine coping and lounge seating" },
      { src: "/images/pricing-65k-90k/06.jpg", title: "Freeform Pool", caption: "Raised spa and tropical landscaping" },
      { src: "/images/pricing-65k-90k/07.jpg", title: "Classic Freeform Pool", caption: "Wooded backyard setting" },
      { src: "/images/pricing-65k-90k/08.jpg", title: "Pool with Twin Spillways", caption: "Raised spa with dual waterfalls" },
      { src: "/images/pricing-65k-90k/09.jpg", title: "Rectangular Pool", caption: "Fresh sod and potted flowers" },
      { src: "/images/pricing-65k-90k/10.jpg", title: "Dark-Finish Pool", caption: "Elevated view with tanning ledge steps" },
      { src: "/images/pricing-65k-90k/11.jpg", title: "Rectangular Pool & Waterfall", caption: "Raised sun shelf with stone coping" },
      { src: "/images/pricing-65k-90k/12.jpg", title: "Freeform Pool", caption: "Wooded privacy backdrop" },
      { src: "/images/pricing-65k-90k/13.jpg", title: "Rectangular Pool", caption: "Raised stone waterfall wall" },
      { src: "/images/pricing-65k-90k/14.jpg", title: "L-Shaped Pool & Spa", caption: "Attached raised spa with stone coping" },
      { src: "/images/pricing-65k-90k/15.jpg", title: "Freeform Pool & Rock Waterfall", caption: "Natural rock waterfall feature" },
      { src: "/images/pricing-65k-90k/16.jpg", title: "Rectangular Pool", caption: "Wooded backdrop with potted florals" },
      { src: "/images/pricing-65k-90k/17.jpg", title: "Geometric Pool", caption: "Brick coping with privacy fence" },
      { src: "/images/pricing-65k-90k/18.jpg", title: "Rectangular Pool", caption: "Blue glass-tile waterline and paver patio" },
      { src: "/images/pricing-65k-90k/19.jpg", title: "Dark-Finish Pool & Waterfall", caption: "Natural stone waterfall feature" },
    ],
  },
  {
    id: "90k-115k",
    label: "$90K – $115K",
    tagline: "Designer custom pools",
    description:
      "Custom shapes, integrated spas, and extensive water features. The sweet spot for homeowners who want a backyard centerpiece that turns heads.",
    highlights: [
      "Integrated spa",
      "Sheer-descent water features",
      "Travertine decking",
      "Variable-speed pump",
    ],
    featured: {
      src: "/images/gallery/hd/merlin-2.jpg",
      title: "Merlin Backyard",
      caption: "Naturalistic stonework",
      aspect: "wide",
    },
    pools: [
      { src: "/images/gallery/hd/antisdel-8.jpg", title: "Antisdel Evening", caption: "Mood lighting package" },
      { src: "/images/gallery/hd/merlin-3.jpg", title: "Merlin Custom Pool", caption: "Stone & water harmony" },
      { src: "/images/gallery/hd/family-3.jpg", title: "Backyard Retreat", caption: "Built-in bench seating" },
      { src: "/images/gallery/hd/breth-1.jpg", title: "Breth Residence", caption: "Family-friendly layout" },
      { src: "/images/gallery/hd/breth-2.jpg", title: "Breth Pool", caption: "Generous deck space" },
      { src: "/images/gallery/hd/anderson-tarr-1.jpg", title: "Anderson-Tarr", caption: "Sunny backyard build" },
      { src: "/images/gallery/hd/anderson-tarr-2.jpg", title: "Anderson-Tarr Pool", caption: "Modern minimalist look" },
    ],
  },
  {
    id: "115k-150k",
    label: "$115K – $150K",
    tagline: "Premier outdoor environments",
    description:
      "Full backyard transformations - pool, spa, outdoor kitchen, fire features, and custom hardscape designed as one cohesive luxury environment.",
    highlights: [
      "Negative-edge & infinity options",
      "Outdoor kitchen integration",
      "Fire bowls & fireplace",
      "Pebble & glass-tile finishes",
    ],
    featured: {
      src: "/images/gallery/hd/silverman-1.jpg",
      title: "Silverman Modern Luxe",
      caption: "Modern luxe with glass-tile interior",
      aspect: "wide",
    },
    pools: [
      { src: "/images/gallery/hd/huckleberry-2.jpg", title: "Huckleberry Estate", caption: "Pool, spa & outdoor kitchen" },
      { src: "/images/gallery/hd/huckleberry-3.jpg", title: "Huckleberry Pool", caption: "Custom raised spa with fire" },
      { src: "/images/gallery/hd/huckleberry-1.jpg", title: "Huckleberry Backyard", caption: "Resort-style decking" },
      { src: "/images/gallery/hd/huckleberry-4.jpg", title: "Huckleberry Detail", caption: "Custom finishes throughout" },
      { src: "/images/gallery/hd/huckleberry-5.jpg", title: "Huckleberry Spa", caption: "Spillover detail" },
      { src: "/images/gallery/hd/huckleberry-6.jpg", title: "Huckleberry Garden", caption: "Lush integration" },
      { src: "/images/gallery/hd/huckleberry-7.jpg", title: "Huckleberry Sunset", caption: "Evening lighting design" },
      { src: "/images/gallery/hd/silverman-2.jpg", title: "Silverman Resort Pool", caption: "Geometric design with sun shelf" },
      { src: "/images/gallery/hd/modern-geometric.jpg", title: "Modern Geometric", caption: "Architectural lines & tile" },
      { src: "/images/gallery/hd/sunset-pool.jpg", title: "Sunset Retreat", caption: "Fire features & lighting" },
      { src: "/images/gallery/hd/feature-pool-2.jpg", title: "Premier Custom", caption: "Custom water features" },
      { src: "/images/gallery/hd/newcastle-1.jpg", title: "Newcastle Remodel", caption: "Full backyard transformation" },
      { src: "/images/gallery/hd/newcastle-2.jpg", title: "Newcastle Pool", caption: "Modern remodel detail" },
      { src: "/images/gallery/hd/newcastle-3.jpg", title: "Newcastle Backyard", caption: "Cohesive outdoor design" },
      { src: "/images/gallery/hd/lifestyle-1.jpg", title: "Lifestyle View", caption: "Built for everyday living" },
      { src: "/images/gallery/hd/family-4.jpg", title: "Modern Geometric", caption: "Tanning ledge & bubblers" },
      { src: "/images/gallery/hd/family-5.jpg", title: "Classic Rectangle", caption: "Premium plaster finish" },
      { src: "/images/gallery/hd/merlin-1.jpg", title: "Merlin Custom Build", caption: "Resort-style with custom rock features" },
      { src: "/images/gallery/hd/antisdel-4.jpg", title: "Antisdel Twilight", caption: "LED color scenes" },
      { src: "/images/gallery/hd/antisdel-6.jpg", title: "Antisdel Pool", caption: "Full design view" },
      { src: "/images/gallery/hd/nc-resort.jpg", title: "Resort Style", caption: "Custom shape & decking" },
    ],
  },
  {
    id: "150k-plus",
    label: "$150K+",
    tagline: "Signature estate pools",
    description:
      "One-of-a-kind backyard estates. Custom shapes, premium finishes, and complete outdoor environments for the most discerning Houston homeowners.",
    highlights: [
      "Custom architectural design",
      "Premium tile & finishes",
      "Smart automation",
      "Full hardscape & landscape",
    ],
    featured: {
      src: "/images/gallery/hd/clark-estate.jpg",
      title: "Clark Estate",
      caption: "Negative-edge with view",
      aspect: "wide",
    },
    pools: [
      { src: "/images/gallery/hd/le-pool-1.jpg", title: "Le Residence", caption: "Multi-level pool & spa" },
      { src: "/images/gallery/hd/le-pool-2.jpg", title: "Le Estate Pool", caption: "Custom shape with rock features" },
      { src: "/images/gallery/hd/puranik-1.jpg", title: "Puranik Estate", caption: "Reflecting pool with custom tile" },
      { src: "/images/gallery/hd/puranik-2.jpg", title: "Puranik Backyard", caption: "Full outdoor environment" },
      { src: "/images/gallery/hd/estate-twilight.jpg", title: "Twilight Estate", caption: "Color-changing LED package" },
      { src: "/images/gallery/hd/estate-luxe.jpg", title: "Luxe Backyard", caption: "Pool, spa & fire features" },
      { src: "/images/gallery/hd/estate-premier.jpg", title: "Premier Estate", caption: "Resort-style outdoor living" },
      { src: "/images/gallery/hd/stidham.jpg", title: "Stidham Project", caption: "Estate-scale custom build" },
      { src: "/images/gallery/hd/heritage-estate.jpg", title: "Heritage Estate", caption: "Custom architectural design" },
      { src: "/images/gallery/hd/portrait-2.jpg", title: "Estate Detail", caption: "Architectural focal point", aspect: "portrait" },
      { src: "/images/gallery/hd/corbeil-1.jpg", title: "Corbeil Estate", caption: "Premier custom design" },
      { src: "/images/gallery/hd/corbeil-2.jpg", title: "Corbeil Pool", caption: "Resort-quality finishes" },
      { src: "/images/gallery/hd/courtyard-pool.jpg", title: "Courtyard Pool", caption: "Compact luxury build" },
      { src: "/images/gallery/hd/family-2.jpg", title: "Waterfall & Spillover Spa", caption: "Stacked-stone waterfall wall with elevated spa" },
      { src: "/images/gallery/hd/poolside-1.jpg", title: "Poolside Retreat", caption: "Built for entertaining" },
      { src: "/images/gallery/hd/kros.jpg", title: "Kros Project", caption: "Waterfall & spa combo" },
      { src: "/images/gallery/hd/feature-pool-1.jpg", title: "Designer Water Feature", caption: "Sheer-descent wall" },
    ],
  },
];

export function findTier(id: string): GalleryTier | undefined {
  return GALLERY_TIERS.find((t) => t.id === id);
}

export function getGalleryStats() {
  const tiers = GALLERY_TIERS.length;
  const pools = GALLERY_TIERS.reduce(
    (acc, t) => acc + 1 + t.pools.length,
    0,
  );
  return { tiers, pools };
}

export type IconRenderer = () => ReactNode;
