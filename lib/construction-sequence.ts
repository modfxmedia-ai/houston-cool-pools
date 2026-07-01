/**
 * Data for the paginated Pool Construction Sequence chain (6 pages).
 * Content is verbatim from the live site's construction-sequence-N.html pages
 * where available; pages without scraped content keep a stepper label so the
 * pagination graph still renders correctly.
 */

export type SequenceStep = {
  title: string;
  body: string[];
  image?: { src: string; alt: string };
};

export type SequencePage = {
  slug: string;
  /** 1-based position in the 6-page sequence. */
  index: number;
  /** Short label shown in the stepper. */
  label: string;
  /** Ordered content sections rendered on the page. */
  steps: SequenceStep[];
};

export const SEQUENCE_PAGES: SequencePage[] = [
  {
    slug: "construction-sequence-1",
    index: 1,
    label: "Permits & Stake-Out",
    steps: [
      {
        title: "Permits",
        body: [
          "Applicable building codes are accessed for your area and permits obtained accordingly. Our experienced staff has worked closely with each municipality in the Houston Metro area and will obtain any and all applicable permits.",
          "During this time you can help with the preparation by removal of plants to another location, move lawn furniture away, cap off your irrigation system, and move any obstacles that would prevent access to the area. If there isn't a gate or open access to your yard, the fence must be removed. If we have contracted to remove your fence, we will remove only the portion necessary to gain access and complete the construction process.",
        ],
      },
      {
        title: "Stake-Out",
        body: [
          "Stakes (wooden stakes) are driven in the ground to mark the boundaries of the pool. The stakes will show the shape and dimensions of your exact pool location in your yard, (per the contract drawings).",
          "Look to see if you have any changes or alterations in terms of the pool or spa placement in relation to your yard area. And, be sure this is what you want. This is your LAST chance to move the pool!",
        ],
        image: {
          src: "/images/construction-sequence/stake-out.gif",
          alt: "Wooden stakes driven into the ground to outline the pool footprint",
        },
      },
    ],
  },
  {
    slug: "construction-sequence-2",
    index: 2,
    label: "Excavation & Re-Bar",
    steps: [
      {
        title: "Excavation",
        body: [
          "Within the staked-out area, excavation begins by use of a bobcat tractor, cutting a precise shape and curvature. The actual hole will be 6″ to 9″ larger than the finished dimensions of the pool in all directions to allow forming material to be placed around the outer edge of the pool and/or spa.",
          "Keep in mind, the bond beam is a 12″ x 12″ dimension around the top circumference of your pool. Excess dirt and soil are removed on the same day of excavation. If you want any dirt left on site, arrange with us in advance where it should be dumped and how much BEFORE excavation.",
        ],
        image: {
          src: "/images/construction-sequence/excavations.gif",
          alt: "Bobcat tractor excavating the pool cavity to the staked-out shape",
        },
      },
      {
        title: "Re-Bar",
        body: [
          "Reinforcement bar (Re-Bar — 3/8″ diameter steel) is tied to form a mesh framework on the floor and walls of your pool on 8″ centers throughout. Re-Bar runs the bottom of the pool, up the sides around the skimmer, and into the bond beam (also called the box beam). For added strength, the bond beam uses larger 1/2″ diameter Re-Bar.",
          "Spacers ensure the Re-Bar is suspended above the ground and off the dirt walls. This allows gunite to flow evenly under, around, and above the bars. Although weak in appearance on its own, Re-Bar becomes the structural strength of your pool once combined with gunite. Small tie wire merely holds the bars in place until the gunite is applied.",
        ],
        image: {
          src: "/images/construction-sequence/re-bar.gif",
          alt: "Grid of steel reinforcement bar tied on 8-inch centers throughout the pool shell",
        },
      },
    ],
  },
  {
    slug: "construction-sequence-3",
    index: 3,
    label: "Stub-Out & Gunite",
    steps: [
      {
        title: "Stub-Out",
        body: [
          "Plumbing and electrical stub-out is performed. 'Stub-out' means the major components of the plumbing and electrical parts are installed inside the wall and through the Re-Bar (they will be finished at a later date). Non-corrosive schedule 40 PVC plumbing pipes with schedule 40 fittings are used throughout your pool.",
          "Our plumber places the pipes and sets the latest state-of-the-art equipment per your plan. Electric wiring runs from your electric panel to the equipment, then out to all lighting fixtures. Your protection is our number one quality measure — all wiring, conduit, and grounding devices meet or exceed National Electric Code standards, and the latest ground fault interrupter devices are installed for protection against electrical fault.",
        ],
        image: {
          src: "/images/construction-sequence/stub-out.gif",
          alt: "Schedule 40 PVC plumbing and electrical stub-outs run through the pool rebar cage",
        },
      },
      {
        title: "Gunite",
        body: [
          "Gunite is pneumatically applied — a spraying process that creates the pool shell (the base flooring, wall areas, and bond beam). By strict specification, gunite is applied to both sides of the Re-Bar to suspend the bars within the walls and floor and form a solid, monolithic structure.",
          "Water curing is critical. The entire pool shell must be hosed or sprayed with water three times daily for seven to ten days. This slows the curing process and is a preventative measure that minimizes shrinkage cracks caused by premature curing.",
        ],
        image: {
          src: "/images/construction-sequence/gunite.gif",
          alt: "Crew pneumatically spraying gunite to form the pool shell over the rebar",
        },
      },
    ],
  },
  {
    slug: "construction-sequence-4",
    index: 4,
    label: "Coping",
    steps: [
      {
        title: "Coping",
        body: [
          "Several types of coping can be used, all 12″ in width. You can choose from our standard Bull Nosed or Safety Grip brick, or upgrade to Flagstone, Marble, or Slate.",
          "Any changes to the style or selection of coping materials may carry additional costs and must be finalized before installation — no changes to the coping can be made after installation is complete.",
        ],
        image: {
          src: "/images/construction-sequence/coping.gif",
          alt: "Bullnose brick coping installed along the top edge of the pool bond beam",
        },
      },
    ],
  },
  {
    slug: "construction-sequence-5",
    index: 5,
    label: "Rock Work & Deck",
    steps: [
      {
        title: "Rock Work",
        body: [
          "Rock work for waterfalls, retaining walls, and accent or natural boulders around your pool is installed at this stage. The water features are tested for operation and proper plumbing installation.",
        ],
        image: {
          src: "/images/construction-sequence/rock-work.gif",
          alt: "Boulders and rock waterfall installed around the pool perimeter",
        },
      },
      {
        title: "Deck",
        body: [
          "The finishing materials of your choice are applied to the deck area. Decking surrounding your pool can be concrete, pea gravel, brick, stone, cool deck, tile, or many other materials. Concrete decking is a 4″ minimum thickness with wire mesh reinforcement throughout.",
          "Any deck shape changes, additions, or deletions should be made prior to forming. Some changes may have additional costs, and no changes to the deck will be made after the deck has been poured or installed.",
        ],
        image: {
          src: "/images/construction-sequence/deck.jpg",
          alt: "Finished concrete pool deck with wire-mesh reinforcement being poured around the coping",
        },
      },
      {
        title: "Clean Up",
        body: [
          "Construction debris will be cleaned away from both the interior and the exterior of the swimming pool at this time. If the exterior fence was taken down, it will be put back up — municipalities require pool safety barriers to deter children from entering the pool.",
        ],
      },
    ],
  },
  {
    slug: "construction-sequence-6",
    index: 6,
    label: "Plaster & Start-Up",
    steps: [
      {
        title: "Plaster Surface",
        body: [
          "The pool surface is applied at this stage. Plaster is mixed on site and applied in two coats, then hand-troweled to a non-slip, waterproof surface. Immediately after plaster is complete we begin filling the pool and/or spa.",
          "You can help by having your garden hose available for the fill. Run water until the level reaches the center of the waterline tile (the perimeter tile at the top edge of the pool) or to the center of the skimmer, then shut off. Do not turn the water off during the fill — stopping mid-fill causes a bathtub-like ring that will stain your plaster.",
        ],
        image: {
          src: "/images/construction-sequence/plaster.gif",
          alt: "Fresh plaster interior being hand-troweled to a smooth, non-slip finish",
        },
      },
      {
        title: "Start-Up",
        body: [
          "Your pool is now complete and ready for start-up. One of our professional representatives will perform the first start-up of your pool equipment. Equipment needs to remain operational for a full week to clear the water of plaster dust and sediments.",
          "You'll then schedule Pool School with our representatives, who will walk you through how to maintain your new Custom Cool Pool. You'll get hands-on instruction, explanations, and demonstrations covering how to clean the filter, empty the skimmer baskets, and check your chemicals. Only a minimal amount of maintenance will keep your pool running efficiently and clean for many years to come.",
        ],
        image: {
          src: "/images/construction-sequence/deck.jpg",
          alt: "Completed swimming pool with equipment running for its initial start-up week",
        },
      },
      {
        title: "Clean Up",
        body: [
          "Construction debris is cleaned away from both the interior and the exterior of the swimming pool. If the exterior fence was taken down, it will be put back up — municipalities require pool safety barriers to deter children from entering the pool.",
        ],
        image: {
          src: "/images/construction-sequence/clean-up.jpg",
          alt: "Final clean-up around the finished pool with the property fence restored",
        },
      },
    ],
  },
];

export function getSequencePage(slug: string) {
  const page = SEQUENCE_PAGES.find((p) => p.slug === slug);
  if (!page) return null;
  const i = page.index - 1;
  return {
    page,
    total: SEQUENCE_PAGES.length,
    prev: i > 0 ? SEQUENCE_PAGES[i - 1] : null,
    next: i < SEQUENCE_PAGES.length - 1 ? SEQUENCE_PAGES[i + 1] : null,
  };
}
