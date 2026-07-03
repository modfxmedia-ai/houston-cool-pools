/**
 * Centralized pool-pricing tier catalog. All 5 tiers live in one array so the
 * pricing page can swap between them client-side without a route reload.
 * The 5 pricing-... route folders still exist (each with its own SEO
 * metadata + JSON-LD) but they all render the same client component and just
 * pass the slug of the tier that should be active on first render.
 */

export type PricingImage = {
  src: string;
  alt: string;
};

export type PoolPricingTier = {
  /** URL slug (matches the folder under app/) */
  slug: string;
  /** href for the tier route (kept in sync with the URL when switching) */
  href: string;
  /** Short pill label */
  label: string;
  /** Long-form range string used in captions */
  range: string;
  /** "Pool Pricing $75k – $85k" style heading */
  heading: string;
  /** Section heading above the gallery */
  sectionHeading: string;
  /** Section intro paragraph */
  body: string;
  /** Hero background image */
  heroImage: string;
  /** Gallery images (flat list - no categorization). */
  images: PricingImage[];
};

/** Ordered list — matches the visual left-to-right order of the tier switcher. */
export const POOL_PRICING_TIERS: PoolPricingTier[] = [
  {
    slug: "pricing-65k-75k",
    href: "/pricing-65k-75k",
    label: "$65k–$75k",
    range: "$65k – $75k",
    heading: "Pool Pricing $65k – $75k",
    sectionHeading: "Pools in the $65k – $75k Range",
    body: "A collection of custom Houston Cool Pools projects. Contact us for current pool pricing and available packages in this range.",
    heroImage: "/images/pricing-65k-75k/hero.jpg",
    images: [
      { src: "/images/pricing-65k-75k/01.jpg", alt: "Custom gunite pool with spacious patio" },
      { src: "/images/pricing-65k-75k/02.jpg", alt: "Backyard pool with travertine decking" },
      { src: "/images/pricing-65k-75k/03.jpg", alt: "Freeform pool with natural stone accents" },
      { src: "/images/pricing-65k-75k/04.jpg", alt: "Modern pool with clean waterline tile" },
      { src: "/images/pricing-65k-75k/05.jpg", alt: "Backyard oasis with lush landscaping" },
      { src: "/images/pricing-65k-75k/06.jpg", alt: "Sparkling blue pool ready for summer" },
      { src: "/images/pricing-65k-75k/07.jpg", alt: "Pool and spa combination with stone coping" },
      { src: "/images/pricing-65k-75k/08.jpg", alt: "Resort-style pool with tanning ledge" },
      { src: "/images/pricing-65k-75k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
      { src: "/images/pricing-65k-75k/10.jpg", alt: "Pool with decorative tile and water features" },
      { src: "/images/pricing-65k-75k/11.jpg", alt: "Evening pool view with landscape lighting" },
    ],
  },
  {
    slug: "pricing-75k-85k",
    href: "/pricing-75k-85k",
    label: "$75k–$85k",
    range: "$75k – $85k",
    heading: "Pool Pricing $75k – $85k",
    sectionHeading: "Pools in the $75k – $85k Range",
    body: "A collection of custom Houston Cool Pools projects built in the $75k-$85k range. Contact us for current pricing and available packages.",
    heroImage: "/images/pricing-75k-85k/hero.jpg",
    images: [
      { src: "/images/pricing-75k-85k/01.jpg", alt: "Custom gunite pool with spacious patio" },
      { src: "/images/pricing-75k-85k/02.jpg", alt: "Backyard pool with travertine decking" },
      { src: "/images/pricing-75k-85k/03.jpg", alt: "Freeform pool with natural stone accents" },
      { src: "/images/pricing-75k-85k/04.jpg", alt: "Modern pool with clean waterline tile" },
      { src: "/images/pricing-75k-85k/05.jpg", alt: "Backyard oasis with lush landscaping" },
      { src: "/images/pricing-75k-85k/06.jpg", alt: "Sparkling blue pool ready for summer" },
      { src: "/images/pricing-75k-85k/07.jpg", alt: "Pool and spa combination with stone coping" },
      { src: "/images/pricing-75k-85k/08.jpg", alt: "Resort-style pool with tanning ledge" },
      { src: "/images/pricing-75k-85k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
      { src: "/images/pricing-75k-85k/10.jpg", alt: "Pool with decorative tile and water features" },
      { src: "/images/pricing-75k-85k/11.jpg", alt: "Evening pool view with landscape lighting" },
    ],
  },
  {
    slug: "pricing-85k-95k",
    href: "/pricing-85k-95k",
    label: "$85k–$95k",
    range: "$85k – $95k",
    heading: "Pool Pricing $85k – $95k",
    sectionHeading: "Pools in the $85k – $95k Range",
    body: "A collection of custom Houston Cool Pools projects built in the $85k-$95k range. Contact us for current pricing and available packages.",
    heroImage: "/images/pricing-85k-95k/hero.jpg",
    images: [
      { src: "/images/pricing-85k-95k/01.jpg", alt: "Custom gunite pool with spacious patio" },
      { src: "/images/pricing-85k-95k/02.jpg", alt: "Backyard pool with travertine decking" },
      { src: "/images/pricing-85k-95k/03.jpg", alt: "Freeform pool with natural stone accents" },
      { src: "/images/pricing-85k-95k/04.jpg", alt: "Modern pool with clean waterline tile" },
      { src: "/images/pricing-85k-95k/05.jpg", alt: "Backyard oasis with lush landscaping" },
      { src: "/images/pricing-85k-95k/06.jpg", alt: "Sparkling blue pool ready for summer" },
      { src: "/images/pricing-85k-95k/07.jpg", alt: "Pool and spa combination with stone coping" },
      { src: "/images/pricing-85k-95k/08.jpg", alt: "Resort-style pool with tanning ledge" },
      { src: "/images/pricing-85k-95k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
      { src: "/images/pricing-85k-95k/10.jpg", alt: "Pool with decorative tile and water features" },
      { src: "/images/pricing-85k-95k/11.jpg", alt: "Evening pool view with landscape lighting" },
    ],
  },
  {
    slug: "pricing-95k-105k",
    href: "/pricing-95k-105k",
    label: "$95k–$105k",
    range: "$95k – $105k",
    heading: "Pool Pricing $95k – $105k",
    sectionHeading: "Pools in the $95k – $105k Range",
    body: "A collection of custom Houston Cool Pools projects built in the $95k-$105k range. Contact us for current pricing and available packages.",
    heroImage: "/images/pricing-95k-105k/hero.jpg",
    images: [
      { src: "/images/pricing-95k-105k/01.jpg", alt: "Custom gunite pool with spacious patio" },
      { src: "/images/pricing-95k-105k/02.jpg", alt: "Backyard pool with travertine decking" },
      { src: "/images/pricing-95k-105k/03.jpg", alt: "Freeform pool with natural stone accents" },
      { src: "/images/pricing-95k-105k/04.jpg", alt: "Modern pool with clean waterline tile" },
      { src: "/images/pricing-95k-105k/05.jpg", alt: "Backyard oasis with lush landscaping" },
      { src: "/images/pricing-95k-105k/06.jpg", alt: "Sparkling blue pool ready for summer" },
      { src: "/images/pricing-95k-105k/07.jpg", alt: "Pool and spa combination with stone coping" },
      { src: "/images/pricing-95k-105k/08.jpg", alt: "Resort-style pool with tanning ledge" },
      { src: "/images/pricing-95k-105k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
      { src: "/images/pricing-95k-105k/10.jpg", alt: "Pool with decorative tile and water features" },
      { src: "/images/pricing-95k-105k/11.jpg", alt: "Evening pool view with landscape lighting" },
    ],
  },
  {
    slug: "pricing-105k-125k",
    href: "/pricing-105k-125k",
    label: "$105k–$125k+",
    range: "$105k – $125k+",
    heading: "Pool Pricing $105k – $125k+",
    sectionHeading: "Pools in the $105k – $125k+ Range",
    body: "A collection of custom Houston Cool Pools projects built in the $105k-$125k+ range. Contact us for current pricing and available packages.",
    heroImage: "/images/pricing-105k-125k/hero.jpg",
    images: [
      { src: "/images/pricing-105k-125k/01.jpg", alt: "Custom gunite pool with spacious patio" },
      { src: "/images/pricing-105k-125k/02.jpg", alt: "Resort-style pool with travertine decking" },
      { src: "/images/pricing-105k-125k/03.jpg", alt: "Freeform pool with natural stone accents" },
      { src: "/images/pricing-105k-125k/04.jpg", alt: "Modern pool with clean waterline tile" },
      { src: "/images/pricing-105k-125k/05.jpg", alt: "Estate-style pool with lush landscaping" },
      { src: "/images/pricing-105k-125k/06.jpg", alt: "Sparkling blue pool ready for summer" },
      { src: "/images/pricing-105k-125k/07.jpg", alt: "Pool and spa combination with stone coping" },
      { src: "/images/pricing-105k-125k/08.jpg", alt: "Luxury pool with tanning ledge" },
      { src: "/images/pricing-105k-125k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
      { src: "/images/pricing-105k-125k/10.jpg", alt: "Pool with decorative tile and water features" },
      { src: "/images/pricing-105k-125k/11.jpg", alt: "Evening pool view with landscape lighting" },
    ],
  },
];

/** Look up a tier by its slug or href. Returns the first tier if not found. */
export function findTier(hrefOrSlug: string): PoolPricingTier {
  const clean = hrefOrSlug.replace(/^\//, "");
  return (
    POOL_PRICING_TIERS.find((t) => t.slug === clean || t.href === hrefOrSlug) ??
    POOL_PRICING_TIERS[0]
  );
}
