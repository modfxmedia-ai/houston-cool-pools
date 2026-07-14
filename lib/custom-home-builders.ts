/**
 * Custom Home Builder partner data - sourced from the legacy pages on
 * houstoncoolpools.com/{slug}.html. Each entry powers both the card on
 * /custom-home-toc and its own dedicated builder detail route.
 */

export type CustomHomeBuilder = {
  /** URL slug used both for the route (`/${slug}`) and the React key. */
  slug: string;
  /** Full legal / display name of the builder. */
  name: string;
  /** Short partner name used in card headings. */
  shortName: string;
  /** Two-letter initials for the badge on the toc card. */
  initials: string;
  /** City & state used on the card and detail page. */
  location: string;
  /** One-sentence blurb shown on the toc card. */
  cardBlurb: string;
  /** Full page body - array of paragraphs. */
  paragraphs: string[];
  /** Formatted street address. */
  address: string;
  /** Display phone number. */
  phone?: string;
  /** Optional email address. */
  email?: string;
  /** Builder's official public website URL. */
  website: string;
  /** Local banner photo path (served from /public). */
  image: string;
  /** Local card thumbnail path shown on /custom-home-toc grid. */
  cardImage: string;
};

export const CUSTOM_HOME_BUILDERS: CustomHomeBuilder[] = [
  {
    slug: "ridgewater-homes",
    name: "Ridgewater Homes LLC",
    shortName: "Ridgewater Homes",
    initials: "RH",
    location: "Houston, TX",
    cardBlurb:
      "Award-winning custom home builder crafting luxury estates across greater Houston with signature attention to outdoor living.",
    paragraphs: [
      "At Ridgewater Homes, your dream is our passion. We provide the finest in materials and craftsmanship, and we offer straight talk, a commitment to our clients, and the experience of hundreds of completed projects. For our clients, this means that we never settle for second best, and we believe our job is not complete until our client is satisfied.",
      "The creation of your perfect residence is more than simply materials and labor - it is the culmination of a joint effort to turn that vision into the home of your dreams. We are committed to the creation of high-end custom homes for those who want only the best. And we work tirelessly to achieve that result. At every stage of the construction process, you will see for yourself how we utilize quality craftsmanship and superior materials to create the residence that reflects your concept and that suits your family's lifestyle.",
    ],
    address: "603 W. 11th Street, Suite 100, Houston, TX 77008",
    phone: "(713) 868-7985",
    email: "info@ridgewaterhomesllc.com",
    website: "https://www.ridgewaterhomesllc.com/",
    image: "/images/builders/ridgewater-homes.jpg",
    cardImage: "/images/builders/ridgewater-homes-card.jpg",
  },
  {
    slug: "mazzarino-construction",
    name: "Mazzarino Construction & Development Ltd",
    shortName: "Mazzarino Construction",
    initials: "MC",
    location: "Houston, TX",
    cardBlurb:
      "Boutique builder known for modern, architecturally distinctive homes in the Heights, West University, and Bellaire.",
    paragraphs: [
      "We are home builders through and through. This isn't a hobby or side business for us; we take an immense amount of pride in what we do. We've all seen so many \u201Cbuilders\u201D in Houston that are little more than individuals trying to play home builder with zero to little experience thinking they can make a quick buck in a very difficult industry. They have no offices, no employees, and no accountability.",
      "The two principals of Mazzarino Construction have BUILT, not just been a part of, over 100 close-in homes right here in Houston. We have been featured on CNBC's Power Lunch, the Houston Business Journal (both articles about the company and as expert contributors), Houston Voyage Magazine and were named one of the fastest growing companies in America in 2018 by Inc. Magazine. We were building, selling and warranting our homes in 2008 & 2009 when many builders simply gave up and handed in their cards. Not us though - we pride ourselves on not only building top-quality homes in town, but also standing behind the product that we build and the owners that buy them.",
    ],
    address: "7155 Old Katy Road, Suite N260, Houston, TX 77024",
    phone: "(713) 861-1601",
    email: "Info@mazzarinocon-dev.com",
    website: "https://www.mazzarinocon-dev.com/",
    image: "/images/builders/mazzarino-construction.jpg",
    cardImage: "/images/builders/mazzarino-construction-card.jpg",
  },
  {
    slug: "robert-sanders",
    name: "Robert Sanders Homes",
    shortName: "Robert Sanders Custom Homes",
    initials: "RS",
    location: "Houston, TX",
    cardBlurb:
      "Multi-generational Houston builder specializing in one-of-a-kind estate homes with fully integrated backyard resorts.",
    paragraphs: [
      "Robert Sanders Homes upholds a benchmark for quality and craftsmanship that is seldom seen in today's mass-produced houses. Devotion to details sets the houses that we build apart from the competition and gives each home a one-of-a-kind appeal that is as unique as the family that lives in it.",
      "A Robert Sanders custom home is a testament to the care and respect that is put into every house we build. Each one rests on a solid foundation of impeccable craftsmanship, quality materials and a dedication to seeing the project through from beginning to end - to a finished home that is truly worthy of sheltering you and your family.",
    ],
    address: "1122 Heights Blvd., Houston, TX 77008",
    phone: "(713) 869-0120",
    website: "http://www.robertsandershomes.com/",
    image: "/images/builders/robert-sanders.jpg",
    cardImage: "/images/builders/robert-sanders-card.jpg",
  },
  {
    slug: "timeline-construction",
    name: "Timeline Construction Group LLC",
    shortName: "Timeline Construction",
    initials: "TC",
    location: "Houston, TX",
    cardBlurb:
      "Design-forward custom home construction with an emphasis on collaboration, craftsmanship, and on-time delivery.",
    paragraphs: [
      "Timeline Construction Group is your one-stop shop for all construction projects regardless of scope and vision. We specialize in high-end residential and commercial build-outs, remodeling, and renovations. For large-scale projects, we provide superior construction management and general contracting to bring your vision to life.",
      "We strive to match themes elegantly - vintage, contemporary, historical - and provide custom furnishings and cabinetry through our own workshop. And being a company that endorses sustainability, we strive to improve our environmental performance and maximize opportunities to work as a team with our partners, clients and public to create a better environment for all.",
    ],
    address: "5633 Southwest Freeway, Houston, TX 77057",
    phone: "(281) 713-5656",
    email: "Info@timelinecg.com",
    website: "http://www.timelinecg.com/",
    image: "/images/builders/timeline-construction.jpg",
    cardImage: "/images/builders/timeline-construction-card.jpg",
  },
  {
    slug: "nautilus-real-estate",
    name: "Nautilus Real Estate",
    shortName: "Nautilus Real Estate",
    initials: "NR",
    location: "Houston, TX",
    cardBlurb:
      "Custom homes and development where great architecture, great neighborhoods, and great backyards come together.",
    paragraphs: [
      "Whether you are looking to buy an existing property, build a new home of your own design, renovate and expand your current home, or restore a historic property in central Houston, you will benefit from Nautilus' integrated approach. Nautilus can handle it all to get the home you desire. With years of experience in real estate brokerage and residential construction, we offer the customer a unique combination of market and construction knowledge coupled with business experience to give the customer a powerful resource when it comes to residential real estate in central Houston's urban neighborhoods.",
      "Nautilus' niche is \u201CHeights-centric\u201D because everyone on the Nautilus Team is devoted to preserving older homes and transforming existing homes into modern, livable homes for the current generation, as well as building quality new construction to fit all budgets and tastes. Nautilus focuses on delivering cost-conscious construction, quality design and careful project execution.",
    ],
    address: "715 East 20th Street, Houston, TX 77008",
    phone: "(832) 726-0658",
    website: "http://nautilusre.com/",
    image: "/images/builders/nautilus-real-estate.jpg",
    cardImage: "/images/builders/nautilus-real-estate-card.jpg",
  },
];

export function getCustomHomeBuilder(slug: string): CustomHomeBuilder | undefined {
  return CUSTOM_HOME_BUILDERS.find((b) => b.slug === slug);
}
