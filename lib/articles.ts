/**
 * Editorial data for the /blogs hub and individual posts.
 * Each article is service-focused (custom features, pool remodel, pool
 * service) and links back to the relevant service page.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | {
      type: "callout";
      title: string;
      body: string;
      href?: string;
      cta?: string;
    }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Custom Features" | "Pool Remodel" | "Pool Service";
  tag: string;
  readTime: string;
  date: string;
  publishedAt: string; // ISO
  author: {
    name: string;
    role: string;
  };
  hero: { src: string; alt: string };
  card: { src: string; alt: string };
  keywords: string[];
  /** Internal links surfaced beneath the article. */
  related: { label: string; href: string }[];
  body: ArticleBlock[];
};

const AUTHOR = {
  name: "Mike Lopez",
  role: "Owner, Houston Cool Pools",
} as const;

export const ARTICLES: Article[] = [
  {
    slug: "why-pool-fire-bowls-elevate-houston-backyards",
    title: "Are Pool Fire Bowls Worth Adding to a Houston Backyard?",
    excerpt:
      "Discover how pool fire bowls in Houston add warmth, ambiance, and visual impact to custom pools while enhancing outdoor entertaining year-round.",
    category: "Custom Features",
    tag: "Custom Features",
    readTime: "5 min",
    date: "Aug 04, 2026",
    publishedAt: "2026-08-04",
    author: AUTHOR,
    hero: {
      src: "/images/blogs/why-pool-fire-bowls-elevate-houston-backyards/hero.jpg",
      alt: "Glowing fire bowls framing a Houston backyard pool at night",
    },
    card: {
      src: "/images/blogs/why-pool-fire-bowls-elevate-houston-backyards/card.jpg",
      alt: "Glowing fire bowls framing a Houston backyard pool at night",
    },
    keywords: [
      "pool fire bowls Houston",
      "fire bowls for pools",
      "backyard fire features",
      "gas fire bowls pool",
      "outdoor fire pits Houston",
    ],
    related: [
      { label: "Pool Fire Features & Fire Pits", href: "/features-9" },
      { label: "Custom Pool Features", href: "/custom-pool-features-1" },
      { label: "Fireplaces & Fire Pits Gallery", href: "/fireplace-firepits-gallery-1" },
      { label: "Pool Remodel", href: "/pool-remodel" },
    ],
    body: [
      {
        type: "p",
        text: "Pool fire bowls can turn a Houston backyard into a place people want to enjoy long after the hottest part of the day has passed. In late summer, the pool may be the main event, but firelight adds a different kind of draw for evening swims, dinners, and relaxed conversations. The soft glow on the water can make a custom gunite pool feel polished, dramatic, and more like a private resort.",
      },
      {
        type: "p",
        text: "Still, a beautiful feature should also fit the way you live. Fire bowls are not a must for every pool project, but they can bring lasting value when they match your yard, your entertaining plans, and your overall outdoor style.",
      },
      { type: "h2", text: "More Than a Pretty Flame" },
      {
        type: "p",
        text: "Pool fire bowls in Houston do more than create a striking view. They can act as architectural focal points, helping guide the eye toward the parts of the backyard you want to show off most. A pair of bowls may frame a raised spa wall, while a single bowl can draw attention to a tanning ledge or seating area.",
      },
      {
        type: "p",
        text: "They also help a large outdoor space feel more connected. Instead of having a pool, patio, and outdoor furniture that seem separate, fire features can visually tie those areas together.",
      },
      {
        type: "p",
        text: "Fire bowls work well with many design styles, including:",
      },
      {
        type: "list",
        items: [
          "Clean, modern pools with simple lines",
          "Tropical spaces with lush planting and water features",
          "Traditional yards with stone and classic details",
          "Mediterranean-inspired patios with warm tile finishes",
        ],
      },
      {
        type: "p",
        text: "The bowl size, finish, flame height, and location all shape the final look. The goal is not to fill every corner with features. It is to create a balanced setting where the fire feels like it belongs.",
      },
      { type: "h2", text: "Houston Weather and Smart Placement" },
      {
        type: "p",
        text: "Houston heat and humidity make fire bowls mainly a visual feature during the heart of summer. Even so, their warm glow can make nighttime gatherings feel more inviting. As the calendar moves toward fall entertaining, holiday parties, and early spring patio time, fire bowls often become an even bigger part of the backyard experience.",
      },
      {
        type: "p",
        text: "Houston weather also calls for thoughtful material choices and professional installation. Heavy rain, moisture, strong sun, and stormy conditions can be hard on outdoor finishes and equipment. Quality components, drainage planning, weather-ready finishes, and properly installed gas lines all matter for dependable performance.",
      },
      {
        type: "p",
        text: "Placement matters just as much as the bowl itself. A fire feature should frame the pool, not block the way around it. It should also be located away from busy walkways, pool entry points, diving areas, and low landscaping.",
      },
      { type: "h2", text: "Safety, Materials, and Controls Matter" },
      {
        type: "p",
        text: "A well-designed fire bowl should look effortless, but there is plenty of planning behind it. Professional pool designers consider clear walking paths, the height of the feature, flame levels, and how guests will move through the space. This is especially important for homes with children, pets, or frequent pool parties.",
      },
      {
        type: "p",
        text: "Gas fire bowls need correctly installed fuel lines, shutoff valves, suitable clearances, and controls that are easy to manage. Secure mounting is also important, particularly when bowls sit on raised walls or near a spa. Professional installation helps the feature operate as intended while keeping the pool area comfortable for everyone.",
      },
      {
        type: "p",
        text: "Material choices can shape both the style and upkeep of a fire bowl. Common options include:",
      },
      {
        type: "list",
        items: [
          "Concrete for a clean, sculpted look",
          "Natural stone for texture and character",
          "Tile that connects the bowl to the pool finish",
          "Metal accents for a sleek, modern touch",
        ],
      },
      {
        type: "p",
        text: "Natural gas and propane are common fuel choices. Some homeowners prefer manual ignition, while others want electronic ignition or integration with pool automation. Automation can make it simple to coordinate flames with pool lights, spa settings, water features, and evening gatherings.",
      },
      {
        type: "p",
        text: "Like any outdoor feature, fire bowls need routine attention. Burners and ignition systems should be inspected, debris should be cleared away, and fire media such as lava rock or fire glass may need refreshing over time.",
      },
      { type: "h2", text: "When Fire Bowls Are Worth the Investment" },
      {
        type: "p",
        text: "Fire bowls are often most worthwhile for homeowners who enjoy evening entertaining and want their backyard to feel complete beyond daytime swim hours. They add emotional appeal, create a memorable backdrop for guests, and can make a pool area feel more intentional.",
      },
      {
        type: "p",
        text: "The investment includes more than the bowl. Gas and electrical work, structural support, finishes, controls, and integration with a pool, spa, or raised wall can all shape the project scope. That is why a custom design plan is helpful before making a final decision.",
      },
      {
        type: "quote",
        text: "For the right backyard, pool fire bowls in Houston can be a lasting design upgrade. They are not about need. They are about creating a space that feels special every time the sun goes down.",
        cite: "Mike Lopez, Owner",
      },
      {
        type: "callout",
        title: "Bring warmth and style to your backyard",
        body: "At Houston Cool Pools, we design custom fire, water, and lighting features that make your pool area feel inviting long after sunset.",
        href: "/features-9",
        cta: "Explore pool fire features",
      },
    ],
  },
  {
    slug: "enhance-pool-safety-with-professional-lighting",
    title: "Should You Add Pool Lighting for Safer Houston Nights?",
    excerpt:
      "Discover how pool lighting in Houston can improve nighttime visibility, highlight water features, and create a safer, inviting backyard for family and guests.",
    category: "Custom Features",
    tag: "Custom Features",
    readTime: "6 min",
    date: "Jul 28, 2026",
    publishedAt: "2026-07-28",
    author: AUTHOR,
    hero: {
      src: "/images/blogs/enhance-pool-safety-with-professional-lighting/hero.jpg",
      alt: "Illuminated Houston backyard pool and deck at night",
    },
    card: {
      src: "/images/blogs/enhance-pool-safety-with-professional-lighting/card.jpg",
      alt: "Illuminated Houston backyard pool and deck at night",
    },
    keywords: [
      "pool lighting Houston",
      "LED pool lights",
      "pool safety lighting",
      "outdoor deck lighting",
      "nighttime pool visibility",
    ],
    related: [
      { label: "Custom Pool Features", href: "/custom-pool-features-1" },
      { label: "Pool Remodel", href: "/pool-remodel" },
      { label: "Electric FAQs", href: "/faqs7" },
      { label: "Pool Specifications", href: "/pool-specifications" },
    ],
    body: [
      {
        type: "p",
        text: "Pool lighting makes Houston nights safer by helping people see the water, the deck, and the spaces between them. During long August evenings, a pool often becomes the favorite place to cool off, visit with friends, or relax after the sun goes down.",
      },
      {
        type: "p",
        text: "But darkness can hide steps, tanning ledges, raised spa edges, and wet deck surfaces. A well-planned lighting design keeps the backyard welcoming while giving swimmers and guests a clearer view of where they are going.",
      },
      { type: "h2", text: "Make August Swims Safer After Sunset" },
      {
        type: "p",
        text: "A beautiful pool should not become hard to use once daylight fades. Evening swims are common during Houston's hottest months, especially when families want to enjoy their backyard without the full heat of the afternoon sun.",
      },
      {
        type: "p",
        text: "Pool lighting in Houston can make those hours more comfortable and easier to manage. It helps define the pool's shape and brings attention to important changes in depth or elevation. It also gives outdoor gatherings a relaxed, polished feel without turning the yard into a bright, harsh space.",
      },
      {
        type: "p",
        text: "Thoughtful lighting can help people spot:",
      },
      {
        type: "list",
        items: [
          "Pool steps, benches, and swim-out areas",
          "Tanning ledges and shallow-water transitions",
          "Raised spa edges and water features",
          "Wet walkways between the pool, patio, and home",
        ],
      },
      {
        type: "p",
        text: "Lighting is not only about looks. It supports a backyard that feels easier to move through when kids are playing, guests are arriving, or everyone is carrying towels, drinks, and pool toys after sunset.",
      },
      { type: "h2", text: "How Better Lighting Supports Safer Pool Use" },
      {
        type: "p",
        text: "The main job of pool lighting is visibility. Interior lights make it easier for swimmers and supervising adults to see the water, including steps, ledges, benches, and changes in depth. That can be especially helpful when children, older adults, or guests are using a pool they do not know well.",
      },
      {
        type: "p",
        text: "The deck needs attention, too. People should be able to walk from the house to the patio, spa, outdoor kitchen, seating area, or pool equipment without depending on phone flashlights. Wet surfaces can be slippery, so clear paths matter.",
      },
      {
        type: "p",
        text: "A good plan may include pathway lights, step lights, low wall lights, and gentle lighting near seating areas. These fixtures can define where people should walk while keeping the mood calm.",
      },
      {
        type: "p",
        text: "Lighting also helps adults keep a better eye on swimmers in the evening. It can make it easier to notice someone who needs help or an object that has entered the water. Still, lights do not replace adult supervision, pool barriers, or clear family rules around the pool.",
      },
      { type: "h2", text: "Use Layers Instead of One Bright Light" },
      {
        type: "p",
        text: "One powerful fixture rarely creates the best nighttime setting. It can cause glare, leave dark corners, and make the water hard to look at. Layered lighting gives each part of the backyard its own purpose.",
      },
      {
        type: "p",
        text: "Pool interior lights should give the water an even glow and make features easy to see. LED pool lights are a popular choice because they provide bright illumination and can offer color options for parties, holidays, or quiet evenings by the spa.",
      },
      {
        type: "p",
        text: "The spaces around the water need their own layers as well:",
      },
      {
        type: "list",
        items: [
          "Path lights can guide guests along walkways",
          "Step lights can mark changes in elevation",
          "Wall and planter lights can soften patio edges",
          "Accent lights can draw attention to waterfalls, pergolas, and outdoor kitchens",
        ],
      },
      {
        type: "p",
        text: "Glare control matters just as much as brightness. Fixtures should not shine into swimmers' eyes, bounce sharply off the water, or spill into a neighbor's yard. The best designs create smooth, comfortable lighting with fewer dark gaps between activity areas.",
      },
      { type: "h2", text: "Choose Fixtures Ready for Houston Conditions" },
      {
        type: "p",
        text: "Outdoor lighting has to handle heat, humidity, rain, and frequent use. Quality LED fixtures, sealed pool lights, weather-rated outdoor components, and dependable controls can support steady performance through changing Houston conditions.",
      },
      {
        type: "p",
        text: "Professional electrical work is especially important around water. Pool and spa lights, wiring, transformers, bonding, and ground-fault protection should be planned and installed according to applicable local requirements. This is not a simple DIY project. Water and electrical systems need experienced professionals who understand how every part works together.",
      },
      {
        type: "p",
        text: "Modern controls also make lighting easier to enjoy. Timers, smart switches, mobile controls, and preset scenes can turn on safety lighting around sunset. A separate setting can bring on decorative colors, water feature lights, and patio accents when it is time to entertain.",
      },
      { type: "h2", text: "Refresh Aging Lights Before Fall Gatherings" },
      {
        type: "p",
        text: "Late summer is a smart time to look closely at older pool lights. If the pool seems dim, bulbs flicker, fixtures look damaged, controls fail to respond, or wiring raises concerns, it may be time for a professional review before fall gatherings fill the calendar.",
      },
      {
        type: "p",
        text: "A remodel can improve much more than the pool's appearance. Lighting can be added to steps, tanning ledges, spas, waterfalls, fire features, patios, and nearby outdoor living areas. New LED options may also provide simpler maintenance and more control over brightness and color.",
      },
      {
        type: "quote",
        text: "The right plan depends on how a family uses its backyard. Evening swimmers may want brighter pool interiors, while frequent hosts may place more focus on pathways, patios, and cooking spaces.",
        cite: "Mike Lopez, Owner",
      },
      {
        type: "callout",
        title: "Enhance your evenings with beautiful pool illumination",
        body: "Houston Cool Pools brings nearly three decades of custom pool experience to new gunite pools, renovations, spas, and outdoor living projects, with a professional lighting design that keeps your backyard safer and full of atmosphere long after sunset.",
        href: "/custom-pool-features-1",
        cta: "Explore custom pool features",
      },
    ],
  },
  {
    slug: "green-pool-summer-algae-rescue-guide-houston",
    title: "Green Pool? A Houston Homeowner's Summer Algae Rescue Guide",
    excerpt:
      "Triple-digit heat, afternoon storms and heavy swimmer load turn peak summer into algae season - here's how to bring a green Houston pool back fast.",
    category: "Pool Service",
    tag: "Pool Service",
    readTime: "6 min",
    date: "Jul 21, 2026",
    publishedAt: "2026-07-21",
    author: AUTHOR,
    hero: {
      src: "/images/blogs/green-pool-summer-algae-rescue-guide-houston/hero.jpg",
      alt: "Houston backyard pool being cleaned during algae season",
    },
    card: {
      src: "/images/blogs/green-pool-summer-algae-rescue-guide-houston/card.jpg",
      alt: "Houston backyard pool being cleaned during algae season",
    },
    keywords: [
      "green pool Houston",
      "algae removal pool",
      "pool turns green in summer",
      "Houston summer pool service",
      "shock a green pool",
    ],
    related: [
      { label: "Pool Service", href: "/pool-service" },
      { label: "Severe Weather Guide", href: "/severe-weather" },
      { label: "Weekly Maintenance Playbook", href: "/blogs/the-houston-pool-owners-weekly-maintenance-playbook" },
      { label: "Pool Construction FAQs", href: "/faqs1" },
    ],
    body: [
      {
        type: "p",
        text: "Every summer, our phone starts ringing with the same panicked question: 'I left for a long weekend and came back to a swamp - what happened?' In Houston, it's almost always the same combination: 95°+ heat, heavy pool use, and one of our fast-moving afternoon thunderstorms diluting chlorine and stabilizer all at once.",
      },
      {
        type: "p",
        text: "The good news - a green pool almost always comes back. Here's the exact rescue sequence our service techs run, plus how to keep it from happening again for the rest of the summer.",
      },
      { type: "h2", text: "Step 1 - Figure out why it turned" },
      {
        type: "list",
        items: [
          "Rain dilution - a couple inches of rain can cut chlorine and stabilizer levels in half overnight.",
          "Heat - chlorine burns off far faster once water temps push past 88–90°F.",
          "Filter neglect - a dirty cartridge or a filter that hasn't been backwashed in weeks can't keep up with summer bather load.",
          "Low run time - the pump needs 8–10+ hours a day in peak summer to turn the water over enough times.",
        ],
      },
      {
        type: "p",
        text: "Green water is really just algae that won the race against your sanitizer. Once you know the cause, fixing it is mostly patience plus the right order of operations.",
      },
      { type: "h2", text: "Step 2 - Rebalance before you shock" },
      {
        type: "list",
        items: [
          "Test and adjust pH to 7.2–7.4 first - shock works far better in this range.",
          "Brush every surface (walls, steps, ladder, behind lights) to break up algae clinging to the plaster.",
          "Run the pump continuously - don't turn it off until the pool clears.",
        ],
      },
      {
        type: "callout",
        title: "Not sure your chemistry is right?",
        body: "Our weekly maintenance playbook covers the exact target ranges for Houston water - chlorine, pH, alkalinity, stabilizer and calcium.",
        href: "/blogs/the-houston-pool-owners-weekly-maintenance-playbook",
        cta: "Read the maintenance playbook",
      },
      { type: "h2", text: "Step 3 - Shock aggressively (then wait)" },
      {
        type: "p",
        text: "A green pool needs a much bigger dose than a weekly maintenance shock - often 2–4× the normal amount, dosed at night so the sun doesn't burn it off instantly. Keep the pump running and don't be tempted to shock again after just a few hours; give it a full 12–24 hours to work before retesting.",
      },
      { type: "h2", text: "Step 4 - Filter it out" },
      {
        type: "p",
        text: "Dead algae doesn't disappear - it has to be filtered out. Expect to clean or backwash your filter multiple times over 24–48 hours as it clogs with the debris. This step is where most DIY green-pool fixes stall out because homeowners stop cleaning the filter and flow (and clarity) grinds to a halt.",
      },
      {
        type: "quote",
        text: "The pool doesn't clear because you added more chemical - it clears because you kept the water moving and the filter clean long enough for the chemical to finish the job.",
        cite: "Mike Lopez, Owner",
      },
      { type: "h2", text: "When to call a pro instead of DIY-ing it" },
      {
        type: "list",
        items: [
          "The pool has been green for more than 3–4 days with no improvement.",
          "You've shocked twice and it's still cloudy or green-tinted.",
          "Metal staining (green-blue, not algae) appears on plaster or tile.",
          "You're heading out of town and need it swim-ready by a specific date.",
        ],
      },
      {
        type: "callout",
        title: "Skip the guesswork",
        body: "Our service crews carry commercial-grade test kits and pool-specific algaecides - most green-to-clean turnarounds take 24–72 hours with a scheduled visit.",
        href: "/pool-service",
        cta: "See pool service plans",
      },
      { type: "h2", text: "Preventing the next one" },
      {
        type: "p",
        text: "Keep stabilizer in the 30–50 ppm range through peak summer, run the pump a full cycle daily, and re-test chemistry after any rain event over an inch. If you're leaving town for more than a few days during the hottest stretch of summer, ask your service company for a pre-vacation check rather than hoping the auto-chlorinator keeps up alone.",
      },
    ],
  },
  {
    slug: "beat-the-houston-heat-cooling-features-for-your-pool",
    title: "Beat the Houston Heat: 7 Ways to Keep Your Pool Deck Cool This Summer",
    excerpt:
      "Houston decking can hit 140°F in peak summer sun. Here are the materials, shade structures and water features that keep bare feet - and swimmers - comfortable all season.",
    category: "Custom Features",
    tag: "Custom Features",
    readTime: "6 min",
    date: "Jul 09, 2026",
    publishedAt: "2026-07-09",
    author: AUTHOR,
    hero: {
      src: "/images/blogs/beat-the-houston-heat-cooling-features-for-your-pool/hero.jpg",
      alt: "Houston backyard pool and cool deck patio at dusk",
    },
    card: {
      src: "/images/blogs/beat-the-houston-heat-cooling-features-for-your-pool/card.jpg",
      alt: "Houston backyard pool and cool deck patio at dusk",
    },
    keywords: [
      "cool pool decking Houston",
      "pool deck too hot",
      "shade structures for pools",
      "cool deck coating",
      "outdoor pool cooling features",
    ],
    related: [
      { label: "Pool Decking", href: "/features-pool-decking" },
      { label: "Custom Pool Features", href: "/custom-pool-features-1" },
      { label: "Outdoor Structures", href: "/outdoor-structures-gallery-1" },
      { label: "Pool Specifications", href: "/pool-specifications" },
    ],
    body: [
      {
        type: "p",
        text: "By mid-summer, a dark, standard-broom-finish concrete deck in Houston can climb well past 140°F in direct sun - hot enough to blister bare feet in seconds. It's one of the most common complaints we hear from homeowners with pools built before cool-deck technology became standard, and one of the easiest things to fix in a remodel or new build.",
      },
      {
        type: "p",
        text: "Here are the seven deck and design choices we lean on most to keep a Houston pool comfortable from June through September.",
      },
      { type: "h2", text: "1. Light-colored, textured cool-deck coatings" },
      {
        type: "image",
        src: "/images/features/features-pool-decking/01.jpg",
        alt: "Cool-deck textured coating around a pool",
        caption: "Textured acrylic cool-deck coatings can run 20–30°F cooler than plain dark concrete.",
      },
      {
        type: "p",
        text: "Light, reflective colors combined with a textured (not smooth-troweled) finish are the single biggest lever for deck temperature. Dark pavers and dark stained concrete look great in photos but absorb far more heat - always ask to see a physical sample tested in full sun before committing to a color.",
      },
      { type: "h2", text: "2. Travertine and other natural stone" },
      {
        type: "p",
        text: "Travertine is naturally porous and stays noticeably cooler underfoot than concrete or porcelain pavers, which is why it remains our most-requested decking material for Houston builds despite the higher upfront cost.",
      },
      { type: "h2", text: "3. Shade structures over key traffic areas" },
      {
        type: "list",
        items: [
          "Pergolas or cabanas over lounge areas and dining spaces.",
          "Shade sails positioned over the shallow end or sun shelf where kids play longest.",
          "Retractable awnings for flexibility across the season.",
        ],
      },
      {
        type: "p",
        text: "Even partial shade over the highest-traffic zones - the steps, the sun shelf, the spot where the cooler and towels live - makes a bigger comfort difference than shading the whole deck evenly.",
      },
      {
        type: "callout",
        title: "See outdoor structure options",
        body: "Pergolas, cabanas and covered patios we've built alongside Houston pools - browse the gallery for ideas.",
        href: "/outdoor-structures-gallery-1",
        cta: "Browse outdoor structures",
      },
      { type: "h2", text: "4. Water features that double as cooling" },
      {
        type: "p",
        text: "Deck jets, sheer descents and bubblers don't just look good - the fine mist and splash zone around them measurably cools the surrounding decking and air, which is part of why we place them near seating areas whenever the layout allows.",
      },
      { type: "h2", text: "5. Turf or paver 'cool zones' near seating" },
      {
        type: "p",
        text: "Swapping a strip of solid decking near lounge chairs for artificial turf or wide-joint pavers with groundcover breaks up the heat-radiating surface and gives bare feet a genuinely cooler landing spot on the way to the pool.",
      },
      { type: "h2", text: "6. Overhangs and covered loggias" },
      {
        type: "p",
        text: "For homes being built or remodeled alongside the pool, extending the home's roofline into a covered loggia or outdoor living space gives permanent shade with zero maintenance - our favorite long-term solution when the budget allows for it.",
      },
      { type: "h2", text: "7. Smart material transitions" },
      {
        type: "p",
        text: "Not every square foot of decking needs to be the premium cool material. We often use a lighter, cooler surface at the pool's edge and high-traffic paths, then transition to a more budget-friendly finish farther from the water where feet spend less time.",
      },
      {
        type: "quote",
        text: "Deck temperature is one of those things homeowners don't think about at the design table in January - then it's the first thing they mention the following summer.",
        cite: "Mike Lopez, Owner",
      },
      { type: "h2", text: "Retrofitting an existing hot deck" },
      {
        type: "p",
        text: "If your deck is already down and just runs too hot, a cool-deck resurfacing coating can usually be applied over existing concrete without a full tear-out - one of the highest-ROI, lowest-disruption upgrades we install during a pool remodel.",
      },
    ],
  },
  {
    slug: "custom-water-features-that-transform-a-backyard-pool",
    title: "Custom Water Features That Transform a Backyard Pool",
    excerpt:
      "Sheer descents, bubblers, deck jets, waterfalls - a builder's guide to the water features that turn a nice pool into a showstopper.",
    category: "Custom Features",
    tag: "Custom Features",
    readTime: "7 min",
    date: "May 12, 2026",
    publishedAt: "2026-05-12",
    author: AUTHOR,
    hero: {
      src: "/images/blogs/custom-water-features-that-transform-a-backyard-pool/hero.jpg",
      alt: "Custom backyard pool with water feature and travertine decking",
    },
    card: {
      src: "/images/blogs/custom-water-features-that-transform-a-backyard-pool/card.jpg",
      alt: "Custom backyard pool with water feature and travertine decking",
    },
    keywords: [
      "custom pool water features",
      "sheer descents",
      "deck jets",
      "pool waterfalls",
      "Houston custom pool",
    ],
    related: [
      { label: "Sheer Descents", href: "/custom-pool-features-1" },
      { label: "Scuppers & Spillways", href: "/features-2" },
      { label: "Bubblers", href: "/features-3" },
      { label: "Waterfalls & Grottos", href: "/features-5" },
      { label: "Fire Features", href: "/features-9" },
    ],
    body: [
      {
        type: "p",
        text: "There's a moment - usually the second the pump turns on for the very first time - when a pool goes from being a rectangle of blue water to being an experience. Almost every time, that shift is powered by the water features you chose during design.",
      },
      {
        type: "p",
        text: "After nearly three decades of building custom pools across Cypress, Spring, Tomball, The Heights and Katy, these are the five water features our clients love most - and how we use them to elevate a backyard.",
      },
      { type: "h2", text: "1. Sheer descents" },
      {
        type: "image",
        src: "/images/features/custom-pool-features-1/hero.jpg",
        alt: "Sheer descent waterfall on a stacked-stone wall",
        caption: "A clean glass-like curtain of water - one of our most requested features.",
      },
      {
        type: "p",
        text: "A sheer descent creates a smooth, glass-like sheet of water that falls into the pool from a raised wall. Because the water is arched away from the wall, it catches light beautifully during the day and glows under color-changing LEDs at night.",
      },
      {
        type: "callout",
        title: "See sheer descents in action",
        body: "Browse the full sheer descent gallery, including examples on both traditional and modern builds.",
        href: "/custom-pool-features-1",
        cta: "Explore sheer descents",
      },
      { type: "h2", text: "2. Deck jets & bubblers" },
      {
        type: "p",
        text: "Deck jets arc a thin stream of water from the decking into the pool - a subtle but stunning way to add movement without dominating the design. Bubblers sit at the pool floor (usually on a sun shelf) and gently boil water upward, so kids can play in them while adults enjoy the visual.",
      },
      {
        type: "list",
        items: [
          "Deck jets pair beautifully with LED lighting for a nighttime centerpiece.",
          "Bubblers are the best water feature for families with young children.",
          "Both are low-flow, so they add movement without spiking your utility bill.",
        ],
      },
      { type: "h2", text: "3. Scuppers & spillways" },
      {
        type: "p",
        text: "Scuppers are decorative water-releasing features built into a raised wall or spa. Spillways are the wider, quieter cousin - most often used to move water from a raised spa down into the pool, creating a continuous ambient sound.",
      },
      { type: "h2", text: "4. Waterfalls & grottos" },
      {
        type: "p",
        text: "A natural rock waterfall is the ultimate resort-style feature. We build them with authentic stone (not stamped concrete), engineered so every sheet of water hits at the angle you want. A hidden grotto behind the falls is a favorite for kids and cocktails alike.",
      },
      { type: "h2", text: "5. Fire + water combos" },
      {
        type: "p",
        text: "Fire bowls on raised columns, fire pits framed by scuppers, gas torches lining an outdoor kitchen - combining fire and water is the fastest way to make a backyard feel like an intentional destination instead of just a pool.",
      },
      {
        type: "quote",
        text: "The features are what make a pool yours. We start every design conversation with 'how do you want to use this space?' - the water features fall out of that answer.",
        cite: "Mike Lopez, Owner",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "If you're designing a new build, choose one hero feature (like a waterfall or a large sheer descent) and one supporting feature (bubblers, deck jets, or a spa spillway). Layering more than that usually competes with itself.",
      },
      {
        type: "p",
        text: "Remodeling an existing pool? Sheer descents and scuppers can often be added to an existing raised wall, and bubblers or deck jets can be retrofit into a sun shelf without a full re-plumb.",
      },
    ],
  },
  {
    slug: "signs-its-time-to-remodel-your-houston-pool",
    title: "5 Signs It's Time to Remodel Your Houston Pool",
    excerpt:
      "From surface cracks to outdated tile, here's how to tell when a Houston pool needs a full remodel versus a simple refresh.",
    category: "Pool Remodel",
    tag: "Pool Remodel",
    readTime: "6 min",
    date: "Apr 08, 2026",
    publishedAt: "2026-04-08",
    author: AUTHOR,
    hero: {
      src: "/images/gallery/featured-classic-build.jpg",
      alt: "Classic Houston pool ready for a remodel",
    },
    card: {
      src: "/images/gallery/featured-luxury-spa.jpg",
      alt: "Luxury spa and pool combo",
    },
    keywords: [
      "pool remodel Houston",
      "pool renovation",
      "pool resurfacing",
      "outdated pool",
      "pool remodel cost Houston",
    ],
    related: [
      { label: "Pool Remodel Services", href: "/pool-remodel" },
      { label: "Custom Pool Features", href: "/custom-pool-features-1" },
      { label: "Pool Gallery", href: "/gallery" },
      { label: "Pool Specifications", href: "/pool-specifications" },
    ],
    body: [
      {
        type: "p",
        text: "Houston pools work hard. Between the heat, the sun, our seasonal storms and the mineral content of our local water, even a beautifully-built pool starts showing its age around the 12–15-year mark. The question is whether you need a light touch-up - or a full remodel.",
      },
      {
        type: "p",
        text: "These are the five signals we watch for when a homeowner asks 'should I remodel?'",
      },
      { type: "h2", text: "1. Interior plaster is cracking, staining or feels rough" },
      {
        type: "p",
        text: "The interior finish is the first thing to go. Rough patches, dark staining that won't scrub out, or hairline cracks all point to plaster that has reached the end of its life. Once that happens, chemistry gets harder to hold and the pool starts losing water in small, hard-to-diagnose amounts.",
      },
      {
        type: "callout",
        title: "See remodel builds from start to finish",
        body: "Our Newcastle remodel project shows what a full interior + tile + coping renovation looks like in real life.",
        href: "/pool-remodel",
        cta: "Explore pool remodels",
      },
      { type: "h2", text: "2. Tile & coping look 'dated'" },
      {
        type: "p",
        text: "Small square glass tile in bright turquoise, dark grouted coping, mid-90s waterline patterns - these date a pool faster than anything else. The good news: replacing tile and coping is one of the highest-ROI remodel moves and can usually be done without touching the pool shell.",
      },
      { type: "h2", text: "3. Equipment is past 10 years old" },
      {
        type: "list",
        items: [
          "Single-speed pumps that cost 3–4× more to run than modern variable-speed units.",
          "Cartridge filters or DE filters running past their service life.",
          "Salt cells losing efficiency.",
          "Heaters that short-cycle or won't hold temperature.",
        ],
      },
      {
        type: "p",
        text: "A remodel is the right time to bundle equipment upgrades - the labor is already on-site, and modern equipment usually pays for itself in a few Houston summers.",
      },
      { type: "h2", text: "4. You've outgrown the design" },
      {
        type: "p",
        text: "Maybe the kids are older and the shallow-end play area is wasted, or you're finally ready for the spa you didn't build the first time around. Design-driven remodels are our favorite - adding a sun shelf, a raised spa with spillway, sheer descents, or even converting a simple rectangle into a curved lagoon-style pool.",
      },
      { type: "h2", text: "5. The backyard around the pool has changed" },
      {
        type: "p",
        text: "New outdoor kitchen. New fencing. A pergola or covered patio going in. Anytime the yard changes significantly, the pool starts looking out of place. Coping, decking and coping-height tile changes can bring the whole backyard back into visual harmony.",
      },
      {
        type: "quote",
        text: "Nine out of ten remodels we do end up being a bigger transformation than the homeowner expected - because once you upgrade one part, everything around it looks tired by comparison.",
        cite: "Mike Lopez, Owner",
      },
      { type: "h2", text: "What does a Houston pool remodel actually include?" },
      {
        type: "p",
        text: "A full remodel typically covers new interior finish (plaster, pebble, or quartz), new waterline tile, new coping, plumbing repairs, and equipment upgrades. Optional add-ons include tanning shelves, spas, sheer descents, LED lighting, and new decking.",
      },
      {
        type: "p",
        text: "For a quote on your specific pool, we're happy to come out for a no-cost walkthrough - we'll photograph the pool, talk through options and pricing tiers, and send you a written estimate the same week.",
      },
    ],
  },
  {
    slug: "the-houston-pool-owners-weekly-maintenance-playbook",
    title: "The Houston Pool Owner's Weekly Maintenance Playbook",
    excerpt:
      "A no-fluff weekly checklist that actually works in Houston's heat, humidity and storm season - plus when to call a pro.",
    category: "Pool Service",
    tag: "Pool Service",
    readTime: "5 min",
    date: "Mar 22, 2026",
    publishedAt: "2026-03-22",
    author: AUTHOR,
    hero: {
      src: "/images/gallery/featured-resort-style.jpg",
      alt: "Sparkling clean resort-style backyard pool",
    },
    card: {
      src: "/images/gallery/featured-tropical-yard.jpg",
      alt: "Well-maintained tropical Houston pool",
    },
    keywords: [
      "Houston pool maintenance",
      "weekly pool care",
      "pool chemistry",
      "pool service Houston",
      "pool storm prep",
    ],
    related: [
      { label: "Pool Service", href: "/pool-service" },
      { label: "Severe Weather Guide", href: "/severe-weather" },
      { label: "Pool Construction FAQs", href: "/faqs1" },
      { label: "Pool Specifications", href: "/pool-specifications" },
    ],
    body: [
      {
        type: "p",
        text: "A Houston pool is a very different animal from a pool in Denver or Phoenix. Our combination of heat, humidity, pollen, tropical storms and hard water means chemistry moves fast, and skipping even a week can turn a sparkling pool cloudy overnight.",
      },
      {
        type: "p",
        text: "Here's the exact weekly routine we recommend to Houston Cool Pools clients - it takes about 45 minutes and keeps a pool truly ready to swim.",
      },
      { type: "h2", text: "Day 1 - Test the water" },
      {
        type: "list",
        items: [
          "Free chlorine: 2–4 ppm",
          "pH: 7.4–7.6",
          "Total alkalinity: 80–120 ppm",
          "Cyanuric acid (stabilizer): 30–50 ppm",
          "Calcium hardness: 200–400 ppm",
        ],
      },
      {
        type: "p",
        text: "Use a good test kit (Taylor K-2006 is our gold standard) or drop a sample at your local pool store. Adjust chemistry before you clean - the products work better once levels are in range.",
      },
      { type: "h2", text: "Day 2 - Skim, brush and vacuum" },
      {
        type: "p",
        text: "Skim leaves and pollen off the surface, brush the walls and steps (especially in shaded corners where algae likes to start), then vacuum the floor or run your robot. Empty the skimmer and pump baskets while you're at it.",
      },
      {
        type: "callout",
        title: "Prefer to hand it off?",
        body: "Our weekly pool service crews handle chemistry, cleaning, equipment checks and reporting - no more juggling test kits and skimmer poles.",
        href: "/pool-service",
        cta: "See pool service plans",
      },
      { type: "h2", text: "Day 3 - Check equipment & flow" },
      {
        type: "p",
        text: "Look at the pressure gauge on your filter. If it's more than 8–10 PSI above the 'clean' baseline, it's time to backwash (DE/sand) or hose off the cartridges. Peek at the pump for leaks, drips or odd noises.",
      },
      { type: "h2", text: "During storm season (June–November)" },
      {
        type: "list",
        items: [
          "Do NOT drain the pool before a storm - water pressure holds the shell in place against saturated ground.",
          "Turn off equipment at the breaker and cover the pump before heavy rain.",
          "After the storm, remove debris, shock the pool, and run the filter for 24 hours straight.",
          "Test chemistry again - heavy rain will drop chlorine and dilute stabilizer.",
        ],
      },
      {
        type: "callout",
        title: "Complete storm playbook",
        body: "We built a dedicated guide covering hurricane prep, freeze prep, and post-storm recovery for Houston pool owners.",
        href: "/severe-weather",
        cta: "Read the severe weather guide",
      },
      { type: "h2", text: "When to call a pro" },
      {
        type: "list",
        items: [
          "Water stays cloudy for more than 48 hours after shocking.",
          "You can hear the pump but no water is moving in the returns.",
          "Anything electrical (breakers tripping, GFCIs firing, salt cell errors).",
          "Cracks or stains that weren't there last week.",
          "Any drop in water level greater than a normal week of evaporation.",
        ],
      },
      {
        type: "quote",
        text: "Ninety percent of the 'emergency' calls we get in July would've been a five-minute fix in June. Weekly attention beats every reactive service call.",
        cite: "Mike Lopez, Owner",
      },
      { type: "h2", text: "The 'trust me' rules" },
      {
        type: "list",
        items: [
          "Shock at night, not in the sun.",
          "Add chemicals to water, not water to chemicals.",
          "Run the pump long enough to turn the pool over once a day (usually 8–10 hours in summer).",
          "Keep the water level in the middle of the skimmer opening - no higher, no lower.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug) ?? null;
}

export function getRelatedArticles(slug: string, limit = 2) {
  return ARTICLES.filter((a) => a.slug !== slug).slice(0, limit);
}
