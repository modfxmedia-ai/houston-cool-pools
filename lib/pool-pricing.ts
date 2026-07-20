/**
 * Centralized pool-pricing tier catalog. All tiers live in one array so the
 * pricing page can swap between them client-side without a route reload.
 * The pricing-... route folders still exist (each with its own SEO
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
  /** "Pool Pricing $65k – $90k" style heading */
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

/** Ordered list - matches the visual left-to-right order of the tier switcher. */
export const POOL_PRICING_TIERS: PoolPricingTier[] = [
  {
    slug: "pricing-65k-90k",
    href: "/pricing-65k-90k",
    label: "$65k–$90k",
    range: "$65k – $90k",
    heading: "Pool Pricing $65k – $90k",
    sectionHeading: "Pools in the $65k – $90k Range",
    body: "A collection of custom Houston Cool Pools projects built in the $65k-$90k range. Contact us for current pricing and available packages.",
    heroImage: "/images/pricing-65k-90k/hero.jpg",
    images: [
      { src: "/images/pricing-65k-90k/01.jpg", alt: "Compact gunite pool with dual stone waterfall spillways" },
      { src: "/images/pricing-65k-90k/02.jpg", alt: "Freeform pool with raised paver patio and stone accents" },
      { src: "/images/pricing-65k-90k/03.jpg", alt: "Rectangular pool with flagstone decking and privacy fence" },
      { src: "/images/pricing-65k-90k/04.jpg", alt: "Freeform pool with natural stone waterfall feature" },
      { src: "/images/pricing-65k-90k/05.jpg", alt: "Rectangular pool with dual bubbler fountains and travertine coping" },
      { src: "/images/pricing-65k-90k/06.jpg", alt: "Freeform pool with raised spa and tropical landscaping" },
      { src: "/images/pricing-65k-90k/07.jpg", alt: "Classic freeform pool with wooded backyard setting" },
      { src: "/images/pricing-65k-90k/08.jpg", alt: "Rectangular pool with twin waterfall spillways and raised spa" },
      { src: "/images/pricing-65k-90k/09.jpg", alt: "Rectangular pool framed by fresh sod and potted flowers" },
      { src: "/images/pricing-65k-90k/10.jpg", alt: "Elevated view of dark-finish pool with tanning ledge steps" },
      { src: "/images/pricing-65k-90k/11.jpg", alt: "Rectangular pool with stone waterfall and raised sun shelf" },
      { src: "/images/pricing-65k-90k/12.jpg", alt: "Freeform pool with wooded privacy backdrop" },
      { src: "/images/pricing-65k-90k/13.jpg", alt: "Rectangular pool with raised stone waterfall wall" },
      { src: "/images/pricing-65k-90k/14.jpg", alt: "L-shaped pool with attached raised spa and stone coping" },
      { src: "/images/pricing-65k-90k/15.jpg", alt: "Freeform pool with natural rock waterfall feature" },
      { src: "/images/pricing-65k-90k/16.jpg", alt: "Rectangular pool with wooded backdrop and potted florals" },
      { src: "/images/pricing-65k-90k/17.jpg", alt: "Geometric pool with brick coping and privacy fence" },
      { src: "/images/pricing-65k-90k/18.jpg", alt: "Rectangular pool with blue glass-tile waterline and paver patio" },
      { src: "/images/pricing-65k-90k/19.jpg", alt: "Dark-finish pool with natural stone waterfall feature" },
    ],
  },
  {
    slug: "pricing-90k-115k",
    href: "/pricing-90k-115k",
    label: "$90k–$115k",
    range: "$90k – $115k",
    heading: "Pool Pricing $90k – $115k",
    sectionHeading: "Pools in the $90k – $115k Range",
    body: "A collection of custom Houston Cool Pools projects built in the $90k-$115k range. Contact us for current pricing and available packages.",
    heroImage: "/images/pricing-90k-115k/hero.jpg",
    images: [
      { src: "/images/pricing-90k-115k/01.jpg", alt: "Custom gunite pool with spacious patio" },
      { src: "/images/pricing-90k-115k/02.jpg", alt: "Backyard pool with travertine decking" },
      { src: "/images/pricing-90k-115k/03.jpg", alt: "Freeform pool with natural stone accents" },
      { src: "/images/pricing-90k-115k/04.jpg", alt: "Modern pool with clean waterline tile" },
      { src: "/images/pricing-90k-115k/05.jpg", alt: "Backyard oasis with lush landscaping" },
      { src: "/images/pricing-90k-115k/06.jpg", alt: "Sparkling blue pool ready for summer" },
      { src: "/images/pricing-90k-115k/07.jpg", alt: "Pool and spa combination with stone coping" },
      { src: "/images/pricing-90k-115k/08.jpg", alt: "Resort-style pool with tanning ledge" },
      { src: "/images/pricing-90k-115k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
      { src: "/images/pricing-90k-115k/10.jpg", alt: "Pool with decorative tile and water features" },
      { src: "/images/pricing-90k-115k/11.jpg", alt: "Evening pool view with landscape lighting" },
    ],
  },
  {
    slug: "pricing-115k-150k",
    href: "/pricing-115k-150k",
    label: "$115k–$150k",
    range: "$115k – $150k",
    heading: "Pool Pricing $115k – $150k",
    sectionHeading: "Pools in the $115k – $150k Range",
    body: "A collection of custom Houston Cool Pools projects built in the $115k-$150k range. Contact us for current pricing and available packages.",
    heroImage: "/images/pricing-115k-150k/hero.jpg",
    images: [
      { src: "/images/pricing-115k-150k/01.jpg", alt: "Custom gunite pool with spacious patio" },
      { src: "/images/pricing-115k-150k/02.jpg", alt: "Backyard pool with travertine decking" },
      { src: "/images/pricing-115k-150k/03.jpg", alt: "Freeform pool with natural stone accents" },
      { src: "/images/pricing-115k-150k/04.jpg", alt: "Modern pool with clean waterline tile" },
      { src: "/images/pricing-115k-150k/05.jpg", alt: "Backyard oasis with lush landscaping" },
      { src: "/images/pricing-115k-150k/06.jpg", alt: "Sparkling blue pool ready for summer" },
      { src: "/images/pricing-115k-150k/07.jpg", alt: "Pool and spa combination with stone coping" },
      { src: "/images/pricing-115k-150k/08.jpg", alt: "Resort-style pool with tanning ledge" },
      { src: "/images/pricing-115k-150k/09.jpg", alt: "Custom pool with elevated spa and spillway" },
      { src: "/images/pricing-115k-150k/10.jpg", alt: "Pool with decorative tile and water features" },
      { src: "/images/pricing-115k-150k/11.jpg", alt: "Evening pool view with landscape lighting" },
    ],
  },
  {
    slug: "pricing-150k-plus",
    href: "/pricing-150k-plus",
    label: "$150k+",
    range: "$150k+",
    heading: "Pool Pricing $150k+",
    sectionHeading: "Pools in the $150k+ Range",
    body: "A collection of custom Houston Cool Pools projects built in the $150k+ range. Contact us for current pricing and available packages.",
    heroImage: "/images/pricing-150k-plus/hero.jpg",
    images: [
      { src: "/images/pricing-150k-plus/01.jpg", alt: "Custom gunite pool with spacious patio" },
      { src: "/images/pricing-150k-plus/02.jpg", alt: "Resort-style pool with travertine decking" },
      { src: "/images/pricing-150k-plus/03.jpg", alt: "Freeform pool with natural stone accents" },
      { src: "/images/pricing-150k-plus/04.jpg", alt: "Modern pool with clean waterline tile" },
      { src: "/images/pricing-150k-plus/05.jpg", alt: "Estate-style pool with lush landscaping" },
      { src: "/images/pricing-150k-plus/06.jpg", alt: "Sparkling blue pool ready for summer" },
      { src: "/images/pricing-150k-plus/07.jpg", alt: "Pool and spa combination with stone coping" },
      { src: "/images/pricing-150k-plus/08.jpg", alt: "Luxury pool with tanning ledge" },
      { src: "/images/pricing-150k-plus/09.jpg", alt: "Custom pool with elevated spa and spillway" },
      { src: "/images/pricing-150k-plus/10.jpg", alt: "Pool with decorative tile and water features" },
      { src: "/images/pricing-150k-plus/11.jpg", alt: "Evening pool view with landscape lighting" },
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
