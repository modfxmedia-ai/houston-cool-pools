/**
 * Consolidated pool-feature catalog rendered on /custom-pool-features-1.
 *
 * Everything lives on one page (anchor-linked, no route reloads). Each feature
 * includes a name, tagline, longer copy, an optional bullet list of variants,
 * a hero image + gallery pulled from the existing /images/features/* folders,
 * and its own short testimonial marquee.
 *
 * Testimonials below are lightweight, feature-specific placeholders - swap for
 * real Google / Angie's List quotes as they come in.
 */

export type FeatureTestimonial = {
  name: string;
  location?: string;
  quote: string;
};

export type PoolFeature = {
  /** Anchor id + nav slug. */
  slug: string;
  /** Display name (H2 + nav card). */
  name: string;
  /** One-line teaser shown on the top nav card. */
  tagline: string;
  /** Longer body paragraph shown in the feature section. */
  body: string;
  /** Optional variants / sub-effects rendered as a check-list. */
  variants?: { title: string; body: string }[];
  /** Hero image (also used on the nav card thumbnail). */
  heroImage: string;
  /** Additional gallery images. */
  gallery: { src: string; alt: string }[];
  /** Feature-specific short quotes. */
  testimonials: FeatureTestimonial[];
};

export const POOL_FEATURES: PoolFeature[] = [
  {
    slug: "sheer-descents",
    name: "Sheer Descents",
    tagline: "Falling-water effects that turn a pool into a retreat.",
    body: "Perhaps no other feature contributes more to the beauty and tranquility of your poolscape than the sight and sound of falling water. Sheer descents integrate mesmerizing water effects in either dramatic or subtle ways - instantly transforming any pool from great to spectacular. Widths range from 8\" to 8' and can be combined for additional effect.",
    variants: [
      { title: "Sheet effect", body: "An almost silent, glass-like sheet of water that projects away from the pool wall." },
      { title: "Arc sheet effect", body: "Propels a smooth arc of water that projects up and away from the wall." },
      { title: "Curtain effect", body: "Water falls straight down, creating a sheer wall of water." },
      { title: "Rainfall effect", body: "Projects falling water that looks and sounds like a gentle spring shower." },
      { title: "Arc rainfall effect", body: "An arc of falling water that cascades into your pool like a summer rain." },
    ],
    heroImage: "/images/features/custom-pool-features-1/01.jpg",
    gallery: [
      { src: "/images/features/custom-pool-features-1/02.jpg", alt: "Glass-like sheet of water falling from a raised pool wall" },
      { src: "/images/features/custom-pool-features-1/03.jpg", alt: "Sheer descent water feature on a modern pool" },
      { src: "/images/features/custom-pool-features-1/04.jpg", alt: "Arc sheet waterfall projecting into a pool" },
      { src: "/images/features/custom-pool-features-1/05.jpg", alt: "Curtain water effect along a pool wall" },
    ],
    testimonials: [
      { name: "Jennifer H.", location: "Cypress, TX", quote: "The sheer descent along our raised wall is honestly the reason we sit outside every evening. The sound is unreal." },
      { name: "Marcus W.", location: "Tomball, TX", quote: "HCP walked us through every falling-water style. We landed on a wide sheet effect and it's exactly what we pictured." },
      { name: "Priya S.", location: "The Heights, TX", quote: "Guests always comment on the waterfall wall first. It photographs beautifully in every light." },
    ],
  },
  {
    slug: "scuppers-spillways",
    name: "Scuppers & Spa Spillways",
    tagline: "Lively streams of water - an elegant, budget-smart accent.",
    body: "Most scupper and spillway styles create a natural, lively stream of water. Scuppers can be an attractive alternative to full waterfalls and sheer descents - often slots or spouts in a raised wall that re-enter the pool. Spa spillways connect the spa to the pool with a moving-water feature that stays working whether the spa is on or off.",
    heroImage: "/images/features/features-2/hero.jpg",
    gallery: [
      { src: "/images/features/features-2/01.jpg", alt: "Spa spillway flowing into a custom pool" },
      { src: "/images/features/features-2/03.jpg", alt: "Pool spillway feature with stone accents" },
      { src: "/images/features/features-2/09.jpg", alt: "Scupper spout re-entering a pool" },
      { src: "/images/features/features-2/11.jpg", alt: "Row of scuppers along a raised pool wall" },
    ],
    testimonials: [
      { name: "David & Lisa R.", location: "Katy, TX", quote: "The spa spillway keeps the whole pool moving and sounding great even when we're not using the spa." },
      { name: "Nathan P.", location: "Spring, TX", quote: "We wanted the falling-water look without the waterfall price. Scuppers were the perfect answer." },
      { name: "Alicia F.", location: "Cypress, TX", quote: "Three little scuppers on the raised wall - small feature, huge impact." },
    ],
  },
  {
    slug: "bubblers",
    name: "Bubblers (Gushers)",
    tagline: "Playful, gentle jets that bubble up from shallow ledges.",
    body: "Bubblers - sometimes called gushers - sit on your sun shelf or tanning ledge and produce a soft, upward eruption of water. They're a favorite for families with small kids, add movement and sound at the entry of the pool, and pair beautifully with LED lighting for evening use.",
    heroImage: "/images/features/features-3/hero.jpg",
    gallery: [
      { src: "/images/features/features-3/01.jpg", alt: "Pool bubbler on a sun shelf" },
      { src: "/images/features/features-3/02.jpg", alt: "Twin bubblers gushing on a tanning ledge" },
      { src: "/images/features/features-3/03.jpg", alt: "LED-lit bubbler at dusk" },
    ],
    testimonials: [
      { name: "The Hollis family", location: "Tomball, TX", quote: "The kids will sit on the sun shelf and play in the bubblers for hours. Best decision we made." },
      { name: "Kayla B.", location: "Houston, TX", quote: "At night the LEDs turn them into little glowing fountains - it's magical." },
      { name: "Ross D.", location: "The Woodlands, TX", quote: "Simple feature, gorgeous execution. HCP nailed the placement." },
    ],
  },
  {
    slug: "sun-shelf-beach-entry",
    name: "Sun Shelf & Beach Entry",
    tagline: "A shallow lounge zone at the edge of your pool.",
    body: "A sun shelf (or Baja shelf) is a broad, shallow platform - usually 6-12 inches deep - that runs along one edge of the pool. It's perfect for lounge chairs, kids, or a place to cool off with a drink in hand. A beach entry extends this idea into a gradual, zero-edge slope that walks into the water like a real beach.",
    heroImage: "/images/features/features-4/hero.jpg",
    gallery: [
      { src: "/images/features/features-4/01.jpg", alt: "Wide sun shelf with in-water lounge chairs" },
      { src: "/images/features/features-4/02.jpg", alt: "Beach-entry pool with gradual slope" },
      { src: "/images/features/features-4/03.jpg", alt: "Sun shelf with bubblers and umbrella sleeve" },
    ],
    testimonials: [
      { name: "Sarah M.", location: "Katy, TX", quote: "The sun shelf is where we live. Two loungers in ankle-deep water is our idea of heaven." },
      { name: "Ben T.", location: "Cypress, TX", quote: "The beach entry lets our toddler walk in on her own - safest feature we could've picked." },
      { name: "Jordan K.", location: "Spring, TX", quote: "It doubles the usable pool space without adding footprint. Design-wise, brilliant." },
    ],
  },
  {
    slug: "fast-lane",
    name: "Fast Lane Swim System",
    tagline: "Endless-pool swim jets - laps in any pool size.",
    body: "The Fast Lane by Endless Pools is a stationary current system that lets you swim laps in place - no matter the size of your pool. HCP is an official vendor and installer. It's perfect for narrow lots, training swimmers, or anyone who wants a real workout without a 25-yard pool.",
    heroImage: "/images/features/features-4/05.jpg",
    gallery: [
      { src: "/images/features/features-4/04.jpg", alt: "Fast Lane swim jet installed on a custom pool" },
      { src: "/images/features/features-4/06.jpg", alt: "Swimmer using an endless-pool current system" },
    ],
    testimonials: [
      { name: "Coach Ellis", location: "Katy, TX", quote: "I train year-round without ever leaving my backyard. The Fast Lane current is smooth and adjustable." },
      { name: "Dr. Amir K.", location: "Memorial, TX", quote: "Bought it for exercise, ended up loving it for family swim races too." },
    ],
  },
  {
    slug: "rock-waterfalls",
    name: "Rock Waterfalls",
    tagline: "Natural stone cascades built into the landscape.",
    body: "Rock waterfalls use natural boulders and stacked stone to make water feel like it's flowing from the surrounding landscape into your pool. They're perfect for lush, resort-style backyards and become the visual anchor of the whole outdoor space.",
    heroImage: "/images/features/features-5/hero.jpg",
    gallery: [
      { src: "/images/features/features-5/01.jpg", alt: "Rock waterfall cascading into a pool" },
      { src: "/images/features/features-5/02.jpg", alt: "Boulder-built waterfall feature" },
      { src: "/images/features/features-5/03.jpg", alt: "Natural stone waterfall at twilight" },
    ],
    testimonials: [
      { name: "The Bretts", location: "Tomball, TX", quote: "It's like a spring in our backyard. The stone selection and layout are exactly what we hoped for." },
      { name: "Miguel R.", location: "Cypress, TX", quote: "The waterfall makes the pool feel three times bigger. Every guest gravitates toward it." },
      { name: "Cass H.", location: "The Woodlands, TX", quote: "HCP paired the rock with the right landscaping - it disappears into the yard like it grew there." },
    ],
  },
  {
    slug: "grotto-waterfalls",
    name: "Grotto Waterfalls",
    tagline: "A hidden cave you can swim behind or under.",
    body: "A grotto waterfall combines a rock cascade with a covered stone cavern behind or beneath it - a private pocket you can swim into. It's dramatic, kid-approved, and adds a memorable focal point that pairs beautifully with color-changing LED lighting.",
    heroImage: "/images/features/features-5/04.jpg",
    gallery: [
      { src: "/images/features/features-5/05.jpg", alt: "Grotto cave behind a pool waterfall" },
      { src: "/images/features/features-5/03.jpg", alt: "Swim-in grotto with LED lighting" },
    ],
    testimonials: [
      { name: "The Anderson-Tarr family", location: "Cypress, TX", quote: "The grotto is the kids' clubhouse. They'd live in there if we let them." },
      { name: "Lena V.", location: "Spring, TX", quote: "Color-changing LEDs inside the grotto make our evening swims feel like a resort." },
    ],
  },
  {
    slug: "tables-barstools",
    name: "In-Water Tables & Barstools",
    tagline: "A swim-up bar in your own backyard.",
    body: "Built-in gunite tables and barstools let you eat, drink, and hang out without leaving the water. Placed on a sun shelf or against a raised wall with an outdoor kitchen, they transform the pool from a place you swim into a place you gather.",
    heroImage: "/images/features/features-6/hero.jpg",
    gallery: [
      { src: "/images/features/features-6/01.jpg", alt: "In-water table with submerged barstools" },
      { src: "/images/features/features-6/02.jpg", alt: "Swim-up bar with outdoor kitchen behind" },
      { src: "/images/features/features-6/03.jpg", alt: "Pool bar with tile accents" },
    ],
    testimonials: [
      { name: "The Corbeils", location: "Katy, TX", quote: "Sunday afternoons live at the pool bar. We built the outdoor kitchen right behind it - genius call." },
      { name: "Aiden J.", location: "Houston, TX", quote: "Guests never leave the water. Best entertaining feature we added." },
    ],
  },
  {
    slug: "stepping-stones",
    name: "Stepping Stones",
    tagline: "Sculptural pads that let you walk across the water.",
    body: "Stepping stones sit just above the water line and create a path across your pool - connecting decks, sun shelves, or landscape islands. They double as visual detail and functional bridges, and pair beautifully with tanning ledges and shallow lounge zones.",
    heroImage: "/images/features/features-7/hero.jpg",
    gallery: [
      { src: "/images/features/features-7/01.jpg", alt: "Stepping stones across a pool" },
      { src: "/images/features/features-7/02.jpg", alt: "Sculptural stone pads over water" },
    ],
    testimonials: [
      { name: "Marissa L.", location: "The Heights, TX", quote: "The stepping stones connect our sun shelf to a little planted island. It's an art piece as much as a feature." },
      { name: "Peter D.", location: "Cypress, TX", quote: "Kids run across them all day. The stones are perfectly placed and grippy." },
    ],
  },
  {
    slug: "slides",
    name: "Slides",
    tagline: "Rock-form, fiberglass, or custom stone slides for every yard.",
    body: "Whether it's a natural rock slide built into a waterfall, a sleek fiberglass slide with a modern silhouette, or a fully custom stone piece, HCP designs slides that match the rest of the pool's aesthetic. All are engineered for safety and repeat use.",
    heroImage: "/images/features/features-8/hero.jpg",
    gallery: [
      { src: "/images/features/features-8/01.jpg", alt: "Custom rock slide into a pool" },
      { src: "/images/features/features-8/02.jpg", alt: "Fiberglass pool slide" },
      { src: "/images/features/features-8/03.jpg", alt: "Slide integrated into a landscape rockery" },
    ],
    testimonials: [
      { name: "The Silverman family", location: "Katy, TX", quote: "Two kids, three friends, one pool slide - it's a summer institution now." },
      { name: "Regina P.", location: "Spring, TX", quote: "HCP built the slide right into our waterfall. Looks natural, works great." },
    ],
  },
  {
    slug: "fire-features",
    name: "Fire Features",
    tagline: "Fire bowls, pits, and torches that light up the poolscape.",
    body: "Fire and water pair beautifully. Fire bowls on raised walls, pits between lounge chairs, or Malibu-style torches along the deck edge - HCP integrates fire features into the pool design so they feel intentional rather than added-on. Gas or propane, wired to automation, and enjoyable all year.",
    heroImage: "/images/features/features-9/hero.jpg",
    gallery: [
      { src: "/images/features/features-9/01.jpg", alt: "Fire bowl on a raised pool wall" },
      { src: "/images/features/features-9/02.jpg", alt: "Fire pit beside a pool lounge" },
      { src: "/images/features/features-10/01.jpg", alt: "Twin fire bowls flanking a spa" },
    ],
    testimonials: [
      { name: "Elena T.", location: "The Heights, TX", quote: "Two fire bowls above the spa - it's the reason we sit outside on cool Houston evenings." },
      { name: "James H.", location: "Memorial, TX", quote: "The fire pit is on automation. One tap on our phone and the yard turns into a lounge." },
      { name: "Whitney G.", location: "Cypress, TX", quote: "The fire bowls tie the whole space together at night. Cinematic." },
    ],
  },
  {
    slug: "decking",
    name: "Pool Decking",
    tagline: "The right deck material sets the entire tone of your yard.",
    body: "Travertine, natural stone, stamped or broomed concrete, cool decking, and premium pavers - each has a look, a temperature, a maintenance profile, and a price point. HCP walks you through them side-by-side and coordinates the deck with your landscape drainage, coping profile, and outdoor living plan.",
    heroImage: "/images/features/features-pool-decking/hero.jpg",
    gallery: [
      { src: "/images/features/features-pool-decking/01.jpg", alt: "Travertine pool deck" },
      { src: "/images/features/features-pool-decking/02.jpg", alt: "Stamped concrete pool decking" },
      { src: "/images/features/features-pool-decking/03.jpg", alt: "Cool-deck poolside patio" },
      { src: "/images/features/features-pool-decking/04.jpg", alt: "Natural stone pool coping and deck" },
    ],
    testimonials: [
      { name: "Rachel K.", location: "Cypress, TX", quote: "Travertine was the right call - cool underfoot in August and looks like a resort." },
      { name: "Miguel & Ana C.", location: "Katy, TX", quote: "HCP helped us match the deck to our home's stone. It feels like the yard was always this way." },
    ],
  },
  {
    slug: "custom-features",
    name: "Fully Custom Features",
    tagline: "Anything the design calls for, built to order.",
    body: "Beyond the standard menu - mosaic tile logos, wet-edge sculptures, integrated planters, swim-up TVs, negative-edge tricks, and one-off pieces designed around your yard. If you can describe it, HCP has probably built it or can figure out how.",
    heroImage: "/images/features/features-11/hero.jpg",
    gallery: [
      { src: "/images/features/features-11/01.jpg", alt: "Custom mosaic tile pool floor" },
      { src: "/images/features/features-12/01.jpg", alt: "Custom sculpted water feature" },
      { src: "/images/features/features-13/01.jpg", alt: "Integrated planter and pool combo" },
      { src: "/images/features/features-14/01.jpg", alt: "One-of-a-kind pool detail" },
    ],
    testimonials: [
      { name: "The Drexel family", location: "Memorial, TX", quote: "We asked for a mosaic of our family crest on the floor. HCP made it happen and it turned out incredible." },
      { name: "Owen B.", location: "The Heights, TX", quote: "Every backyard is different - HCP's custom side is where they really shine." },
    ],
  },
];
