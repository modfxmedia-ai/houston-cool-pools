export const LP_COLORS = {
  bg: "#0a1628",
  bgAlt: "#0f2035",
  card: "#112240",
  accent: "#00b4d8",
  white: "#ffffff",
  muted: "#94a3b8",
} as const;

export const LP_CONTACT = {
  phoneDisplay: "(281) 645-6631",
  phoneHref: "tel:+12816456631",
  smsHref: "sms:+12816456631",
  email: "info@houstoncoolpools.com",
  emailHref: "mailto:info@houstoncoolpools.com",
  address: "21902 Highway 249, Houston, TX 77070",
  hours: "Mon-Fri 8AM-6PM · Sat 9AM-4PM · Sun by Appointment",
  facebook: "https://www.facebook.com/HoustonCoolPools/",
  privacyHref: "/privacynotice",
} as const;

export const LP_OFFER_CHECKLIST = [
  "Free in-home consultation",
  "Custom pool design concepts",
  "Transparent pricing, no surprises",
  "100% on-budget guarantee",
  "Flexible financing options",
  "No obligation, no pressure",
] as const;

export const LP_TRUST_BADGES = [
  "★ BBB A+ Rated",
  "Genesis 3 Member",
  "APSP Member",
  "Houstonia Award Winner",
] as const;

export const LP_HERO_STATS = [
  { value: "1996", label: "Established", suffix: "" },
  { value: "1,200+", label: "Pools Built", suffix: "" },
  { value: "100%", label: "On-Budget", suffix: "" },
  { value: "A+", label: "BBB Rating", suffix: "" },
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  category: "Geometric" | "Free Form" | "Pool & Spa" | "Resort Style" | "Estate";
  badge: string;
};

export const LP_GALLERY: GalleryItem[] = [
  {
    src: "/images/gallery/featured-modern-geometric.jpg",
    alt: "Modern geometric Houston backyard pool",
    category: "Geometric",
    badge: "Modern Geometric",
  },
  {
    src: "/images/gallery/featured-grand-pool-spa.jpg",
    alt: "Grand pool & spa combination build",
    category: "Pool & Spa",
    badge: "Pool & Spa",
  },
  {
    src: "/images/gallery/featured-resort-style.jpg",
    alt: "Resort style backyard pool with tanning ledge",
    category: "Resort Style",
    badge: "Resort Style",
  },
  {
    src: "/images/gallery/featured-natural-stone.jpg",
    alt: "Free form pool with natural stone",
    category: "Free Form",
    badge: "Free Form",
  },
  {
    src: "/images/gallery/featured-luxury-spa.jpg",
    alt: "Luxury raised spa with spillover",
    category: "Pool & Spa",
    badge: "Spa Spillover",
  },
  {
    src: "/images/gallery/featured-grand-vista.jpg",
    alt: "Estate-scale vanishing edge pool",
    category: "Estate",
    badge: "Estate · Vanishing Edge",
  },
  {
    src: "/images/gallery/featured-tropical-yard.jpg",
    alt: "Tropical resort-style backyard",
    category: "Resort Style",
    badge: "Tropical Resort",
  },
  {
    src: "/images/gallery/featured-classic-build.jpg",
    alt: "Classic geometric backyard build",
    category: "Geometric",
    badge: "Classic Build",
  },
];

export const LP_POOL_TYPES = [
  {
    title: "Modern Geometric",
    image: "/images/gallery/featured-modern-geometric.jpg",
    copy:
      "Rectangular and contemporary pools that complement modern Houston homes: straight edges, glass tile, minimalist sun shelves.",
    bullets: [
      "Rectangular & geometric shapes",
      "Glass-tile waterlines",
      "Tanning ledges",
      "Travertine or porcelain decking",
    ],
  },
  {
    title: "Free Form & Naturalistic",
    image: "/images/gallery/featured-natural-stone.jpg",
    copy:
      "Curved, naturalistic pools that feel like part of the backyard. Rock features, lush plantings, and waterfalls bring the resort vibe home.",
    bullets: [
      "Custom curved shapes",
      "Natural rock features",
      "Waterfalls & grottos",
      "Pebble & quartz finishes",
    ],
  },
  {
    title: "Pool & Spa Combos",
    image: "/images/gallery/featured-luxury-spa.jpg",
    copy:
      "Raised spas as the architectural focal point, overflowing into the pool with sheer-descent spillways and matched tile detailing.",
    bullets: [
      "Raised spa with spillover",
      "Custom tile detailing",
      "Sheer-descent water features",
      "Color-matched coping",
    ],
  },
  {
    title: "Resort Style & Tanning Ledges",
    image: "/images/gallery/featured-resort-style.jpg",
    copy:
      "Resort-inspired pools with shallow tanning ledges, beach entries, and umbrella sleeves, built for Houston summers.",
    bullets: [
      "Tanning ledges with umbrella sleeves",
      "Walk-in beach entries",
      "Bubblers & deck jets",
      "Built-in bench seating",
    ],
  },
  {
    title: "Complete Outdoor Environments",
    image: "/images/gallery/featured-tropical-yard.jpg",
    copy:
      "Full backyard transformations: pool, outdoor kitchen, fireplace, fire bowls, and custom hardscape designed as one.",
    bullets: [
      "Outdoor kitchen integration",
      "Fire bowls & fireplaces",
      "Custom pergolas",
      "Cohesive hardscape design",
    ],
  },
  {
    title: "Estate & Vanishing Edge",
    image: "/images/gallery/featured-grand-vista.jpg",
    copy:
      "Estate-scale signature builds: vanishing edges, multi-level pools, premium tile and stone for demanding Houston homeowners.",
    bullets: [
      "Vanishing & negative-edge designs",
      "Multi-level pool & spa",
      "Premium glass-mosaic tile",
      "Smart automation",
    ],
  },
] as const;

export const LP_TESTIMONIALS = [
  {
    quote:
      "HIGHLY RECOMMEND! We had a fantastic experience with Houston Cool Pools. Very transparent company.",
    name: "Craig B.",
  },
  {
    quote:
      "Mike and his team were incredible from start to finish. Our pool came in exactly on budget and on time.",
    name: "Henry N.",
  },
  {
    quote:
      "We've had our pool for 3 years now and it's absolutely perfect. The whole process was smooth and stress-free.",
    name: "Pamela C.",
  },
  {
    quote:
      "Best decision we ever made. Houston Cool Pools built us a stunning pool and outdoor living space.",
    name: "Sarah M.",
  },
  {
    quote:
      "Professional, responsive, and delivered exactly what they promised. A+ all the way.",
    name: "James T.",
  },
  {
    quote:
      "Our neighbors have stopped by just to compliment the pool. We couldn't be happier with how it turned out.",
    name: "Linda R.",
  },
] as const;

export const LP_TIMELINE = [
  {
    title: "We review your request",
    body: "Within 1 business day, our team reviews the details you submitted.",
  },
  {
    title: "We call you to schedule",
    body: "A Houston Cool Pools team member will call to set up your free in-home consultation.",
  },
  {
    title: "Mike's team comes to you",
    body: "We visit your backyard, listen to your vision, and bring design ideas.",
  },
  {
    title: "You get a full quote",
    body: "Transparent pricing. No surprises. Our 100% on-budget guarantee starts here.",
  },
] as const;

export const LP_TYP_GALLERY = [
  "/images/gallery/featured-grand-vista.jpg",
  "/images/gallery/featured-resort-style.jpg",
  "/images/gallery/featured-luxury-spa.jpg",
  "/images/gallery/featured-modern-geometric.jpg",
] as const;

export const LP_FAQS = [
  {
    q: "How much does a custom pool cost in Houston?",
    a: "Most custom gunite pools we build in the Houston area land between $55,000 and $105,000+ depending on size, finishes, and outdoor features. Your free in-home consultation includes a transparent, line-itemed quote so you know exactly what you're investing in.",
  },
  {
    q: "How long does it take to build a pool?",
    a: "From contract to swim, most projects take 10 to 14 weeks. Permitting, weather, and any add-ons like outdoor kitchens or fire features can shift the timeline. We give you a realistic schedule up front and keep you updated every step.",
  },
  {
    q: "What's included in the free in-home consultation?",
    a: "A Houston Cool Pools designer comes to your backyard, listens to how you'll actually use the space, and walks you through pool styles, finishes, and add-ons. You leave with a custom design concept, transparent pricing, and zero pressure to decide on the spot.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We work with several pool-financing partners offering competitive rates and flexible terms. We can connect you with a lender during your consultation so you have real monthly numbers alongside your design.",
  },
  {
    q: "What is the 100% on-budget guarantee?",
    a: "Once your quote is signed, your price is locked. No surprise change orders, no inflated allowances. The number on your contract is the number you pay, in writing.",
  },
  {
    q: "What areas of Houston do you serve?",
    a: "All of Greater Houston, including Spring, Cypress, Tomball, The Woodlands, Katy, Sugar Land, Pearland, Kingwood, and Memorial. Our showroom is in Northwest Houston on Highway 249.",
  },
  {
    q: "Can you build during fall and winter?",
    a: "Absolutely. Houston's mild winters are one of the best times to build, you'll be swimming the moment summer hits. We build year-round with the same craftsmanship and timeline.",
  },
] as const;
