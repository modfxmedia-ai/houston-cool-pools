// FAQ content for the 13 paginated pool-construction FAQ pages.
// Copied verbatim from the live houstoncoolpools.com/faqs1..13.html pages so the
// migrated Next.js routes mirror the original content and pagination order.

export const SITE_URL = "https://houstoncoolpools.com";

export type Faq = {
  /** Clean route slug, e.g. "faqs1". */
  slug: string;
  /** Section heading shown above the question (live <h4>). */
  section: string;
  /** In-page anchor used by the live site's question index. */
  anchor: string;
  /** The question. */
  question: string;
  /** The answer body. */
  answer: string;
};

export const FAQS: Faq[] = [
  {
    slug: "faqs1",
    section: "Length of Construction",
    anchor: "construction",
    question: "How long will my pool take to build?",
    answer:
      "Houston Cool Pools averages just over 6-8 weeks of actual construction time for every pool we build. Considering the complexity of many of our pools this is truly a standard for others to shoot at. A good rule of thumb to use when planning a project is one week construction time for every $10,000 - $12,000 of cost. For example, a $60,000 pool should be complete in 6 weeks; a $80,000 will take about 8 weeks. There are many variables that effect construction time when building a pool; one of the biggest is weather. Weather not only effects ground conditions but the ability of the crews to complete their respective tasks in the proper sequence. Thorough planning and design can reduce unexpected delays.",
  },
  {
    slug: "faqs2",
    section: "Layout",
    anchor: "layout",
    question: "What should I know about the pool layout?",
    answer:
      "The pool layout and position of the pool will be staked out on your ground prior to any work being done. It is used as a guide for excavation. We ask that you approve the location and shape of the pool prior to the scheduling dig. The layout will appear smaller than the finished pool due to it being a flat representation of your pool. Interestingly we get calls about the pool being too small at this stage. Conversely, many times we get calls on the pool seeming too large as soon as it is dug. It is necessary to layout the pool 12\" larger in every direction. In other words, a pool which will finish 30\u2019 long must be laid out and dug 34\u2019. This allows for 12\u201d thick concrete on the pool walls so the finish will be exact and correct.",
  },
  {
    slug: "faqs3",
    section: "Excavation",
    anchor: "excavation",
    question:
      "I\u2019ve heard about dust, noise, and destruction that can happen during the dig, is this true?",
    answer:
      "There is no gentle way to remove 15 to 30 dump truck loads of dirt out of a backyard. This will be one of the nosiest and is certainly the dustiest stage of construction. It is also one of the most exciting. Protecting plants and existing landscape is a must since anything between the street and the pool, which is not cared for, will be ground into soil by this heavy machinery. Fences need to be removed, pets cared for.",
  },
  {
    slug: "faqs4",
    section: "Plumbing and Equipment",
    anchor: "plumbing",
    question:
      "How do I know that my plumbing is done correctly and will not leak?",
    answer:
      "In addition to using schedule 40 PVC (very thick pipe) we keep all plumbing under pressure throughout the construction process. We routinely check these pressure readings to insure that the plumbing is secure. Our plumbers follow a detailed plan for the location of every feature, pool return, and drain. You will notice that pipes are protruding out from the pool dig. These will be cut off near the end of construction and will finish flush to the final pool wall.",
  },
  {
    slug: "faqs5",
    section: "Plumbing and Equipment",
    anchor: "plumbing2",
    question: "When is my equipment plumbed in place?",
    answer:
      "If you live in the house we will install the equipment the day we plumb the pool. If your home is not occupied or is under construction, we will install the equipment set you move into the house. Why? Unfortunately there are people out there who will walk off with your pool equipment if it is easily accessible. If you own the home and the equipment is stolen, your insurance will cover the loss. Remember, once the equipment is attached and installed, you own it.",
  },
  {
    slug: "faqs6",
    section: "Steel",
    anchor: "steel",
    question: "What does the steel reinforcing do for my pool?",
    answer:
      "The steel rebar is installed in a grid pattern (see construction sequence for pictures). Depending on the loads and soil condition, it can be 12\u201d apart, 6\u201d apart, or in rare cases 3\u201d apart. Our civil engineers work out the exact pattern to be used for you pool permit and for our structural specifications. The steel is blocked 2-3\u201d off of the excavated floor and walls of the pool. It greatly strengthens concrete by providing tensile strength. Be careful! We cover or bend the ends of the bars to protect people, but the wires used to tie the steel together are very sharp. Please insure the safety of children and pets. A scratch from the steel rebar or tie wires can easily become infected and may require tetanus vaccination.",
  },
  {
    slug: "faqs7",
    section: "Electric",
    anchor: "electric",
    question: "What protects my pool from electrical problems?",
    answer:
      "In most cases, a trench will be dug from your electric panel to the equipment location. This conduit by code must be metal, wrapped with insulation, and buried 18\u201d underground. It is important to mark any sprinkler lines or other obstructions that must be protected. The conduit must remain uncovered until the city inspects it. GFI circuits protect all light and electrical plugs. These are also used near sinks and bathrooms inside your house. GFI protected circuits instantly trip and shut down when contact is made with water. In addition; all steel, motors, and metal within 5\u2019 of the pool is grounded. You may notice small copper wire attached to metal windows, fences, handrails, and diving boards.",
  },
  {
    slug: "faqs8",
    section: "Gunite Application",
    anchor: "gunite2",
    question: "When will my pool start looking like a pool?",
    answer:
      "The pool really begins to take shape when the gunite is placed. Steps and benches are formed, spas take shape, and the project begins to look like your pool. Gunite (premixed concrete) is sprayed into your pool through a hose under pressure. It\u2019s very noisy, messy (in a fun way), artistic, and very interesting and fun to watch. A curtain is put up around the pool to block the over spray from getting on your house. Gunite dries and gets hard very quickly. As a matter of fact, it can dry too quickly. It is necessary for you to water cure your Gunite to slow the drying time down. In the summer, wet the pool down at least 5 times a day, more if you can get to it. In cooler months (temperatures below 80 degrees F), 2 to 3 times a day is fine. Spray water on the sides until it starts to \u201csheet\u201d off. Then move on to another part of the pool. It takes about 10 to 15 minutes to complete a pool watering. Don\u2019t worry; you can\u2019t over water a pool. A puddle will accumulate in the bottom of the pool\u2026that\u2019s ok; we\u2019ll pump it out later. You will also notice cracks forming in the pool, particularly in the floor. This is normal. These are shrinkage cracks and do not affect the structural integrity of the pool. The Gunite shell needs to cure for 3-4 days before we can proceed with construction.",
  },
  {
    slug: "faqs9",
    section: "Deck Installation",
    anchor: "deckinstall",
    question: "What has to happen before my deck is installed?",
    answer:
      "We must have all rockwork, boulders and waterfalls done completed prior to deck. This is also a good time to install any masonry such as barbecues, some aspects of your outdoor kitchen, fire pits benches, and equipment walls. Any gas lines, landscape sprinkler and drip lines, landscape lighting lines etc. that are to be under the deck, should be in before we form your deck. This is also a good time to review and make sure that your deck that you have planned is on the plan the way you want it. Extra costs may result if you have us form the deck one way and then decide to change it after forming.",
  },
  {
    slug: "faqs10",
    section: "Decking",
    anchor: "decking",
    question: "What are my responsibilities concerning the deck?",
    answer:
      "We always find that once the deck gets started people start planning their first pool party! You are getting close but you must be patient. Be assured that the process is almost complete. The deck crew will come out and put up forms (thin strips of wood) outlining the deck. You will see where any steps and drains go. You must approve these forms prior to the pouring of deck. Once the deck is poured, it cannot be changed. It is a good idea to double check the color and texture you have chosen to make sure it is still your favorite. The concrete for the deck will be poured into the forms and troweled to a smooth finish. If you have cool decking, it will be applied now. If you have Kool Deck, it will be applied when the concrete is dry enough to let it stick. Other types of toppings and deck, such as flagstone, tiles, or cultured stone have their own requirements. Regardless of what kind of deck topping you have; stop water curing your pool, do not walk on or get water on the deck, and do not cover the deck with anything for at least 48 hours. Concrete does not dry evenly so it will appear to be darker in some places and lighter in others. Don\u2019t worry, it will reach a consistent hue after it gets through a full summer\u2019s heat.",
  },
  {
    slug: "faqs11",
    section: "Cleanup",
    anchor: "cleanup",
    question: "When do I get rid of this construction mess?",
    answer:
      "The unavoidable construction mess begins at Gunite as the concrete truck gets cleaned out. This continues and builds through the deck process. All of this gets cleaned up just prior to the pool being finished. Trenches are all filled, light grading is done, and the yard is raked. Basically we make everything neat and presentable. Landscaping is not provided unless it was part of your pool contract.",
  },
  {
    slug: "faqs12",
    section: "Interior Finish",
    anchor: "interiorfinish",
    question:
      "How do they get the plaster or other interior finish into my pool?",
    answer:
      "Plaster will be applied and the plasterers will start your hose going to fill the pool as soon as they are done. DO NOT TURN OFF THE WATER UNTIL YOUR POOL IS FULL! Let the pool fill all of the way up until it reaches about an inch below the deck. This is slightly overfilled, but you will be backwashing and it helps to have a little extra water in the pool until the plaster dust is filtered out. Follow the plaster care instructions given to you by Houston Cool Pools. The plaster may appear a little mottled because the plaster does not dry evenly (yes, it really does dry under water). Some parts stay wet longer and so they appear darker, like a wet spot on a shirt. Brushing the pool and chemical balancing are extremely important on a plaster pool.",
  },
  {
    slug: "faqs13",
    section: "Start Up",
    anchor: "startup",
    question: "When do I learn how to use the pool?",
    answer:
      "At start up we turn the pool on, check out the system to make sure everything is working properly and then tell you everything you wanted to know about a pool and probably some stuff you were not sure you wanted to know. Plus we show you how to work the pump, filter, light and the rest of the equipment. It\u2019s a lot of stuff to know. Video cameras are permitted and encouraged.",
  },
];

/** Look up a FAQ + its position in the paginated chain by slug. */
export function getFaq(slug: string) {
  const index = FAQS.findIndex((f) => f.slug === slug);
  const faq = FAQS[index];
  const prev = index > 0 ? FAQS[index - 1] : null;
  const next = index < FAQS.length - 1 ? FAQS[index + 1] : null;
  return { faq, index, total: FAQS.length, prev, next };
}

/**
 * Per-page metadata for FAQ routes so each of the 13 pages gets a unique
 * <title> and <meta description>, keyed off the section + question.
 */
export function faqMetadata(faq: Faq, index: number, total: number) {
  const title = `${faq.section}: ${faq.question} | Houston Pool FAQ ${index + 1} of ${total}`;
  const answer = faq.answer.replace(/\s+/g, " ").trim();
  const description =
    answer.length <= 155
      ? answer
      : `${answer.slice(0, 152).replace(/[,;:]?\s*\S*$/, "")}...`;
  return { title, description };
}

/**
 * Shared FAQPage JSON-LD. Includes the page's single Q&A as mainEntity so the
 * structured data is a valid FAQPage while matching the requested template.
 */
export function faqJsonLd(faq: Faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Pool Construction FAQs",
    url: `${SITE_URL}/${faq.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Houston Cool Pools",
      url: SITE_URL,
    },
    mainEntity: [
      {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      },
    ],
  };
}
