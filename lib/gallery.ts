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
    id: "75k-85k",
    label: "$75K – $85K",
    tagline: "Signature starter pools",
    description:
      "Beautifully crafted gunite pools designed to elevate any backyard — clean lines, premium plaster finishes, and the build quality Houston Cool Pools is known for.",
    highlights: [
      "Gunite construction",
      "Premium plaster finish",
      "Standard equipment package",
      "LED lighting & auto-fill",
    ],
    featured: {
      src: "/images/gallery/hd/family-1.jpg",
      title: "Family Backyard",
      caption: "Travertine coping with built-in seating",
      aspect: "wide",
    },
    pools: [
      { src: "/images/gallery/hd/family-3.jpg", title: "Backyard Retreat", caption: "Built-in bench seating" },
      { src: "/images/gallery/hd/family-4.jpg", title: "Modern Geometric", caption: "Tanning ledge & bubblers" },
      { src: "/images/gallery/hd/family-5.jpg", title: "Classic Rectangle", caption: "Premium plaster finish" },
      { src: "/images/gallery/hd/courtyard-pool.jpg", title: "Courtyard Pool", caption: "Compact luxury build" },
      { src: "/images/gallery/hd/family-2.jpg", title: "Suburban Oasis", caption: "Clean rectangular design" },
      { src: "/images/gallery/hd/breth-1.jpg", title: "Breth Residence", caption: "Family-friendly layout" },
      { src: "/images/gallery/hd/breth-2.jpg", title: "Breth Pool", caption: "Generous deck space" },
      { src: "/images/gallery/hd/anderson-tarr-1.jpg", title: "Anderson-Tarr", caption: "Sunny backyard build" },
      { src: "/images/gallery/hd/anderson-tarr-2.jpg", title: "Anderson-Tarr Pool", caption: "Modern minimalist look" },
      { src: "/images/gallery/hd/poolside-1.jpg", title: "Poolside Retreat", caption: "Built for entertaining" },
    ],
  },
  {
    id: "85k-120k",
    label: "$85K – $120K",
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
      src: "/images/gallery/hd/merlin-1.jpg",
      title: "Merlin Custom Build",
      caption: "Resort-style with custom rock features",
      aspect: "wide",
    },
    pools: [
      { src: "/images/gallery/hd/antisdel-1.jpg", title: "Antisdel Residence", caption: "Pool & spa with water features" },
      { src: "/images/gallery/hd/antisdel-2.jpg", title: "Designer Spa Combo", caption: "Raised spa with spillover" },
      { src: "/images/gallery/hd/antisdel-3.jpg", title: "Antisdel Detail", caption: "Custom tile work" },
      { src: "/images/gallery/hd/antisdel-4.jpg", title: "Antisdel Twilight", caption: "LED color scenes" },
      { src: "/images/gallery/hd/antisdel-5.jpg", title: "Antisdel Sunset", caption: "Outdoor living integration" },
      { src: "/images/gallery/hd/antisdel-6.jpg", title: "Antisdel Pool", caption: "Full design view" },
      { src: "/images/gallery/hd/antisdel-7.jpg", title: "Antisdel Backyard", caption: "Resort-feel deck" },
      { src: "/images/gallery/hd/antisdel-8.jpg", title: "Antisdel Evening", caption: "Mood lighting package" },
      { src: "/images/gallery/hd/merlin-2.jpg", title: "Merlin Backyard", caption: "Naturalistic stonework" },
      { src: "/images/gallery/hd/merlin-3.jpg", title: "Merlin Custom Pool", caption: "Stone & water harmony" },
      { src: "/images/gallery/hd/nc-resort.jpg", title: "Resort Style", caption: "Custom shape & decking" },
      { src: "/images/gallery/hd/kros.jpg", title: "Kros Project", caption: "Waterfall & spa combo" },
      { src: "/images/gallery/hd/feature-pool-1.jpg", title: "Designer Water Feature", caption: "Sheer-descent wall" },
      { src: "/images/gallery/hd/feature-pool-3.jpg", title: "Custom Feature Pool", caption: "Statement water feature" },
      { src: "/images/gallery/hd/portrait-1.jpg", title: "Vertical Detail", caption: "Detail study", aspect: "portrait" },
    ],
  },
  {
    id: "120k-200k",
    label: "$120K – $200K",
    tagline: "Premier outdoor environments",
    description:
      "Full backyard transformations — pool, spa, outdoor kitchen, fire features, and custom hardscape designed as one cohesive luxury environment.",
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
    ],
  },
  {
    id: "200k-plus",
    label: "$200K+",
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
