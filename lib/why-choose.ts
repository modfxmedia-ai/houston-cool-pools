/**
 * Content cloned from the live houstoncoolpools.com/whychoosehcp.html page.
 * Headings, copy, list items, images and videos are preserved verbatim so the
 * redesigned page mirrors the original information architecture.
 */

export type Pillar = {
  title: string;
  blurb: string;
  items: string[];
  /** Optional headline stat used for the animated counter graphs. */
  stat?: { value: number; suffix?: string; prefix?: string; label: string };
};

export const WHY_CHOOSE_HERO = {
  eyebrow: "Why Choose HCP",
  title: "Why Choose Houston Cool Pools",
  intro:
    "Houston Cool Pools is the greater Houston area's premier pool builder - proudly serving Houston, Cypress, Spring, Tomball, The Heights, and Katy with cutting-edge technology, 30+ years of experience, and excellent customer service.",
} as const;

export const STORY = {
  heading: "Mike Lopez shares the story of Houston Cool Pools",
  youTubeId: "_R6HQT6DHGA",
} as const;

export const PROCESS_VIDEO = {
  youTubeId: "5mntkenhJSE",
} as const;

export const PROCESS_BANNER =
  "Peace of Mind in our Process: Cutting Edge Technology - 30+ Years experience - Excellent Customer Service.";

/** Animated headline counters ("motion graphs"). */
export const HEADLINE_STATS: { value: number; suffix?: string; prefix?: string; label: string }[] = [
  { value: 30, suffix: "+", label: "Years in Business" },
  { value: 2, prefix: "$", suffix: "M", label: "GL Insurance" },
  { value: 100, suffix: "%", label: "On-Budget Guarantee" },
];

export const SHOWCASE_IMAGES = [
  {
    src: "/images/whychoosehcp/tensteps.png",
    alt: "Ten Steps to a Perfect Pool",
    href: "https://houstoncoolpools.com/pdf/10-Steps-to-the-Perfect-Pool-hcp.pdf",
    external: true,
  },
  {
    src: "/images/whychoosehcp/poolreno.jpg",
    alt: "Houston Cool Pools renovation project",
    href: "/pool-remodel",
    external: false,
  },
] as const;

export const PILLARS: Pillar[] = [
  {
    title: "Stability",
    blurb: "A proven, award-winning builder you can count on for the long haul.",
    stat: { value: 30, suffix: "+", label: "Years in Business" },
    items: [
      "Over 30+ Years in Business",
      "A+ Rated with the BBB - Gold Star Certificate",
      "Angie’s List Super Service Award Winner",
      "$2 Million in GL Insurance",
    ],
  },
  {
    title: "Cutting Edge Technology",
    blurb: "Every pool is built with the latest equipment and smart-home control.",
    stat: { value: 7, label: "Smart Systems Standard" },
    items: [
      "Variable Speed Pumps are Standard with all Pool and Spa Combos",
      "LED Pool and Spa Light(s) are Standard",
      "Newest Sanitation Systems - optional UV / Ozone / Salt",
      "Official Vendor & Installer of A & A In-Floor Cleaning Systems",
      "Remote Control Systems - controlled with Smart Phone",
      "Official Vendor and Installer of Endless Pools - Fast Lane Swim System",
      "All pools have a Cyclone Pre-Filtration System",
    ],
  },
  {
    title: "Peace of Mind",
    blurb: "Industry-leading guarantees and warranties protect your investment.",
    stat: { value: 100, suffix: "%", label: "On-Budget Guarantee" },
    items: [
      "100% On Budget Guarantee",
      "Highest Electrical Standards, Per City/NEC Code, 360 Bonding / Full Grounding, GFCI Breakers",
      "3 Yr. Full Warranty on all Pentair Equipment",
      "2 Year warranty on A & A Pool Equipment",
      "1 Year warranty on all workmanship and material",
      "Quartz Pebble Plaster - Standard 10–15 yr warranty / 20 yr lifespan",
      "All Pools come with a Freeze Protection System",
      "All Pools come with an Auto Fill and an Overflow Drain",
      "All Pools come with Vacation Mode Plumbing System",
      "Full Comprehensive Drain System",
      "Springs / Latches on Standard Gates",
      "One Month of Free Pool Service and 3 months of Pool Chemicals",
    ],
  },
  {
    title: "Ease of Doing Business",
    blurb: "We handle the details so building your pool stays simple and stress-free.",
    items: [
      "We Prepare your HOA Application",
      "We Will Coordinate Utility Reroutes",
      "We have a Full Show Room",
      "One Stop Shopping: Outdoor Kitchens, Patios / Pergolas, Fire Pits / Fire Places, Landscaping Packages",
      "Phase Construction Planning For Future Projects",
    ],
  },
  {
    title: "Always in the Know",
    blurb: "Clear communication keeps you informed at every step of the build.",
    items: [
      "Customer Project Guide",
      "Pool Maintenance Guide",
      "Scheduled - Daily Updates",
      "Full Equipment Labeling",
      "Professional Pool School",
    ],
  },
];
