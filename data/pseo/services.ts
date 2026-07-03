/**
 * Programmatic SEO service catalog.
 *
 * These slugs combine with location slugs (see ./locations.ts) to form the
 * URL pattern `{serviceSlug}-{locationSlug}-tx`, e.g. `pool-builder-katy-tx`.
 *
 * Content in `intro`, `angle`, `bullets`, and `deepDive` is intentionally distinct
 * per service so that {service} × {location} combinations don't read as templated.
 * Each service must be able to stand on its own without repeating the others.
 */

export type PseoService = {
  /** URL-safe slug - combines with location slug */
  slug: string;
  /** Long name for H1 (with city appended in the template) */
  name: string;
  /** Short name for breadcrumbs, nav, meta title */
  shortName: string;
  /** Verb phrase used mid-sentence in intros ("...pool remodeling in Katy...") */
  intentPhrase: string;
  /** Distinct 2-3 sentence angle. Never re-used across services. */
  intro: string;
  /** Feature bullets - 4 differentiators for the "Why HCP" block */
  bullets: string[];
  /** Deep-dive content unique to this service (150-250 words) */
  deepDive: string;
  /** Meta description template - {city} gets replaced. Under 155 chars after replacement. */
  metaTemplate: string;
  /** Search-intent variants used in FAQs / body text */
  keywordVariants: string[];
  /** Icon identifier for template rendering */
  icon: "builder" | "design" | "remodel" | "service";
};

export const SERVICES: PseoService[] = [
  {
    slug: "custom-pool-builder",
    name: "Custom Pool Builder",
    shortName: "Custom Pool Builder",
    intentPhrase: "custom pool building",
    intro:
      "Houston Cool Pools has been designing and constructing gunite swimming pools across the greater Houston area since 1996. Every project starts with a blank sheet - not a catalog - so the pool that ends up in your backyard fits your lot, your budget, and the way you actually plan to use it.",
    bullets: [
      "Custom gunite construction - not pre-fab shells or one-size-fits-all packages",
      "In-house design team walks your yard before any drawings are drafted",
      "Financing options available for qualified homeowners",
      "Serving the Greater Houston area since 1996",
    ],
    deepDive:
      "A custom gunite pool build is a real construction project, not a drop-in installation. Ours typically starts with a free in-home design consultation where we look at drainage, sun exposure, sightlines from the house, and any easements or setbacks that affect what's possible. From there we render a 2D plan and, where useful, a 3D concept so you can see the pool before we break ground. Excavation, steel, plumbing, gunite shell, tile and coping, decking, and interior finish each run as scheduled phases with dedicated crews. Because gunite is site-built, the shape and depth aren't limited by a mold - you can tailor beach entries, sun shelves, spa spillovers, raised bond beams, custom step layouts, and integrated water features. Every build is permitted through the appropriate jurisdiction and inspected at the milestones your municipality requires.",
    metaTemplate:
      "Custom gunite pool builder serving {city}, TX. Houston Cool Pools designs and constructs backyard pools - built since 1996. Free consultation.",
    keywordVariants: [
      "custom pool builder",
      "pool builder",
      "gunite pool builder",
      "swimming pool builder",
      "pool contractor",
      "pool company",
    ],
    icon: "builder",
  },
  {
    slug: "pool-design-construction",
    name: "Pool Design & Construction",
    shortName: "Pool Design & Construction",
    intentPhrase: "pool design and construction",
    intro:
      "New pool projects live or die on the design phase. Our team spends more time on drawings, elevations, and material selections than most builders do - because the choices you lock in before excavation are the ones you live with for decades. From there we self-perform the construction schedule so nothing sits in limbo between trades.",
    bullets: [
      "2D site plans and 3D renderings before excavation",
      "Coordinated construction schedule with in-house crews",
      "Permit handling and municipal inspections managed for you",
      "Warranty-backed structural work with documented milestones",
    ],
    deepDive:
      "A well-run pool build follows a repeatable sequence: layout and excavation, steel and plumbing rough-in, gunite shell placement, tile and coping installation, decking, interior finish (plaster or aggregate), equipment set, start-up, and final walk-through. Skipping or rushing any of those phases is where quality problems start - a shell that isn't cured properly telegraphs cracks into the finish years later, and undersized plumbing shows up as sluggish jets and heater short-cycling. We publish our construction sequence openly so homeowners know what's happening in their backyard on any given week, and we coordinate directly with the county or municipality for the required inspections. Design decisions that matter most on the front end: shape and depth profile, where you place the equipment pad relative to prevailing wind, whether to include a raised bond beam or spa spillover, deck material and slip-resistance, and how the pool relates to the house architecturally.",
    metaTemplate:
      "Pool design and construction in {city}, TX. Site plans, 3D renderings, and coordinated gunite builds by Houston Cool Pools. Established 1996.",
    keywordVariants: [
      "pool design",
      "pool construction",
      "swimming pool construction",
      "pool builder",
      "custom pool design",
      "pool contractor",
    ],
    icon: "design",
  },
  {
    slug: "pool-remodeling",
    name: "Pool Remodeling & Renovation",
    shortName: "Pool Remodeling",
    intentPhrase: "pool remodeling",
    intro:
      "Aging pools show their age in predictable ways - dull or stained plaster, cracked coping, dated tile, undersized equipment, and skimmers that never quite pull the surface clean. A remodel is your chance to fix all of that at once and, usually, to update the shape of the deck or add features the original build didn't include.",
    bullets: [
      "Interior resurfacing - plaster, quartz aggregate, and pebble finishes",
      "New tile, coping, and deck options to match a modern backyard",
      "Add water features, tanning ledges, or an attached spa to an existing pool",
      "Equipment upgrades to variable-speed pumps, LED lighting, and salt systems",
    ],
    deepDive:
      "A pool remodel is not one project - it's a stack of smaller projects you can mix and match. The most common starting point is interior resurfacing: draining the pool, chipping out the old plaster, prepping the shell, and applying a new finish. Modern options like quartz-aggregate and pebble blends outlast standard white plaster and hide chemistry stains far better. From there most homeowners add tile and coping updates, since the waterline and edge dominate what you see. Structural additions - a spa spillover, a raised bond beam, a sun shelf, a beach entry - mean partial demolition and new gunite tied into the original shell, so those are handled as construction work with the same permitting rigor as a new build. Equipment upgrades typically run in parallel: a variable-speed pump alone can cut a pool's electricity draw substantially, and switching to LED lighting and adding a salt chlorine generator reduces ongoing maintenance meaningfully.",
    metaTemplate:
      "Pool remodeling and renovation in {city}, TX. Resurfacing, tile, decking, and equipment upgrades by Houston Cool Pools since 1996.",
    keywordVariants: [
      "pool remodeling",
      "pool renovation",
      "pool resurfacing",
      "swimming pool remodel",
      "pool renovation services",
      "pool remodel",
    ],
    icon: "remodel",
  },
  {
    slug: "pool-service-maintenance",
    name: "Pool Service & Maintenance",
    shortName: "Pool Service",
    intentPhrase: "pool service and maintenance",
    intro:
      "A pool is a mechanical system with a body of water attached to it. Houston's summer heat, humidity, and pollen load push chemistry and equipment harder than most parts of the country, and the difference between a pool that stays swim-ready and one that fights you all summer usually comes down to service cadence and a few equipment habits.",
    bullets: [
      "Chemical balancing tailored to Houston's climate and rainfall pattern",
      "Equipment inspection - pump, filter, heater, and automation",
      "Algae prevention and treatment for the humid Gulf Coast season",
      "Guidance on cover use, run-time schedules, and off-season shutdown",
    ],
    deepDive:
      "Ongoing pool care is really three things layered together: water chemistry, filtration, and equipment health. Chemistry means keeping free chlorine, pH, total alkalinity, calcium hardness, and cyanuric acid in range week to week - and adjusting for the sudden dilution and organic load that comes with a Houston thunderstorm. Filtration means matching pump run-time to bather load and outdoor temperature, cleaning or backwashing the filter on schedule, and skimming or brushing surfaces the vacuum can't reach. Equipment health means listening for the pump behaving differently, watching pressure gauges creep up as a filter loads, and catching a heater ignition issue before it turns into a service call in the middle of a cold snap. We help owners set up an appropriate cadence for their pool - the right run-time schedule, the right cover strategy, and how to handle the algae pressure that shows up in July and August along the Gulf Coast.",
    metaTemplate:
      "Pool service and maintenance in {city}, TX. Chemistry, equipment, and algae prevention support from Houston Cool Pools - since 1996.",
    keywordVariants: [
      "pool service",
      "pool maintenance",
      "pool cleaning",
      "swimming pool maintenance",
      "pool care",
      "weekly pool service",
    ],
    icon: "service",
  },
  {
    slug: "gunite-pool-builder",
    name: "Gunite Pool Builder",
    shortName: "Gunite Pool Builder",
    intentPhrase: "gunite pool construction",
    intro:
      "Gunite is the construction method behind essentially every custom-shaped inground pool built in Texas - a steel-reinforced shell sprayed on-site rather than dropped in as a pre-formed unit. It's the reason your pool can be shaped, sized, and detailed however the design calls for, and the reason a well-built one lasts for decades.",
    bullets: [
      "Steel-reinforced, site-sprayed shell - not fiberglass or vinyl",
      "Any shape, depth, or contour - no mold constraints",
      "Cured to structural strength before tile, coping, and finish go on",
      "Warranty-backed structural work with documented milestones",
    ],
    deepDive:
      "A gunite shell starts with layout and excavation, followed by a grid of rebar tied to engineered spacing. The gunite mix - a dry blend of cement and sand hydrated at the nozzle - is sprayed at high velocity so it packs into every corner of the steel cage. That's the phase that dictates long-term structural performance: proper coverage over the rebar, correct thickness at the floor and cove, and a clean transition to the bond beam. From there the shell cures for a period before we tie in plumbing pass-throughs, install waterline tile and coping, form the deck, and apply the interior finish. Because everything is site-built, gunite gives you options that pre-formed pools simply can't: raised bond beams, sun shelves, beach entries, custom step layouts, integrated spas, negative-edge details, and geometric or freeform profiles limited only by the drawing.",
    metaTemplate:
      "Gunite pool builder in {city}, TX. Site-sprayed, steel-reinforced shells with any shape or feature - Houston Cool Pools since 1996.",
    keywordVariants: [
      "gunite pool builder",
      "gunite pool contractor",
      "gunite pool construction",
      "concrete pool builder",
      "gunite swimming pool",
    ],
    icon: "builder",
  },
  {
    slug: "luxury-pool-builder",
    name: "Luxury Pool Builder",
    shortName: "Luxury Pool Builder",
    intentPhrase: "luxury pool design and construction",
    intro:
      "Higher-end pool projects aren't about a bigger footprint - they're about detail, integration, and the material choices that hold up under scrutiny from three feet away. A luxury pool ties into the architecture of the house, the landscape plan, and the way the yard is actually lived in.",
    bullets: [
      "Custom shapes, negative edges, and integrated spa systems",
      "Premium tile, coping, and interior finish specifications",
      "Coordinated with landscape, lighting, and hardscape trades",
      "Automation and smart-control systems for pump, heater, and lighting",
    ],
    deepDive:
      "Higher-tier pool builds spend a disproportionate amount of time in design. Elevations get drawn, materials get specified down to the coping profile and tile grout color, and the pool gets sited so the sightlines from the primary rooms of the house work with the pool rather than around it. Structural options that show up more often at this tier: infinity or negative-edge details, raised bond beams with sheer descent water walls, perimeter overflow slots, attached gunite spas with automated spillovers, glass tile surfaces, and integrated fire features. Equipment is usually pump-automated so the homeowner runs the pool from a phone rather than a wall panel. Deck coordination matters most here - travertine, natural stone, or premium concrete finishes need to line up with the landscape plan and drainage design so the finished yard looks composed, not assembled.",
    metaTemplate:
      "Luxury pool builder in {city}, TX. High-end custom gunite pools with premium finishes and integrated features - Houston Cool Pools.",
    keywordVariants: [
      "luxury pool builder",
      "high end pool builder",
      "resort style pool",
      "custom luxury pool",
      "premium pool builder",
    ],
    icon: "design",
  },
  {
    slug: "small-yard-pool-builder",
    name: "Small Yard Pool Builder",
    shortName: "Small Yard Pool Builder",
    intentPhrase: "small-yard pool design",
    intro:
      "A small yard doesn't rule out a pool - it just changes what the pool should be. Cocktail pools, plunge pools, and compact designs make sense on narrow lots or inner-loop backyards where every square foot has to earn its keep.",
    bullets: [
      "Compact gunite designs - cocktail, plunge, and courtyard pools",
      "Integrated hardscape so the pool doesn't dominate the yard",
      "Sun-shelf and bench seating instead of full swim depth",
      "Access and stage-and-store planning for tight construction sites",
    ],
    deepDive:
      "Compact pools follow different design rules than resort-style backyards. Depth usually caps at 4-5 feet, since the utility of a small pool is cooling off and gathering rather than diving. That constraint frees up budget for finish quality - better tile, larger coping profiles, and premium plaster or pebble interior. Sun shelves and integrated benches replace what would be lap-lane depth in a larger pool. Site access is a major planning input: on inner-loop lots we often stage material through the side yard or from the street, and a proper trash chute or gunite pumper reach saves days on the schedule. Equipment placement gets creative - mechanical rooms tucked against the house, screening walls that match the fence, or a below-grade vault when nothing else works.",
    metaTemplate:
      "Small yard pool builder in {city}, TX. Compact cocktail, plunge, and courtyard pools designed for narrow lots. Houston Cool Pools since 1996.",
    keywordVariants: [
      "small pool builder",
      "cocktail pool",
      "small backyard pool",
      "compact pool builder",
      "narrow lot pool",
    ],
    icon: "builder",
  },
  {
    slug: "infinity-pool-builder",
    name: "Infinity Edge Pool Builder",
    shortName: "Infinity Pool Builder",
    intentPhrase: "infinity edge pool construction",
    intro:
      "An infinity edge - vanishing edge, negative edge, however you name it - is a construction detail as much as a design one. The pool water spills over a precisely leveled weir into a catch basin below and gets pumped back up, which means every millimeter of the weir edge has to be laid correctly or the effect breaks.",
    bullets: [
      "Precisely leveled weir walls with tiled infinity edge details",
      "Sized catch basins with dedicated recirculation plumbing",
      "Automation to manage spillover pumps with the main system",
      "Design coordination so the vanishing edge frames a real view",
    ],
    deepDive:
      "An infinity pool is engineered before it's designed. The weir wall has to be structurally rigid - small deflections show up as uneven sheeting - and the elevation shot from wall to wall has to hold within a fraction of an inch. The catch basin below sizes to hold the displaced water when the recirculation pumps are off, plus turnover from bathers. Recirc pumps are matched to weir length so the flow rate produces a consistent sheet without cavitation or aeration noise. Automation ties the spillover pumps into the main system so the effect turns on with a schedule or homeowner command. On the design side, an infinity edge only works if it's aimed at something - a green belt, a golf course, a downhill slope with a real view. Otherwise you're paying for the engineering without the payoff.",
    metaTemplate:
      "Infinity edge pool builder in {city}, TX. Vanishing edge pool construction with precise weir engineering - Houston Cool Pools since 1996.",
    keywordVariants: [
      "infinity pool",
      "infinity edge pool",
      "negative edge pool",
      "vanishing edge pool",
      "infinity pool builder",
    ],
    icon: "design",
  },
  {
    slug: "lap-pool-builder",
    name: "Lap Pool Builder",
    shortName: "Lap Pool Builder",
    intentPhrase: "lap pool design and construction",
    intro:
      "Lap pools trade width for length - usually 40 to 75 feet long and just wide enough for one or two swim lanes. They fit long, narrow yards well and give homeowners a real training pool without giving up the whole backyard.",
    bullets: [
      "Length-focused designs - 40 to 75 feet typical",
      "Uniform depth for consistent stroke, or shallow-to-deep for versatility",
      "Optional current systems for smaller lap-pool footprints",
      "Coping and finish detailing tuned to the linear form",
    ],
    deepDive:
      "A lap pool is designed around a swim length rather than a footprint, so the priorities look different than a typical family pool. Depth is usually uniform - 4 to 5 feet across the whole length - so the stroke rhythm doesn't change mid-lap. Wall detailing matters more than in a leisure pool because lap swimmers actually push off and see the tile at close range. Some lap pools use a swim jet or current system to compress the length: instead of 60 feet, a jet-equipped pool can be 25 feet and still give a real workout. On the lot itself, lap pools usually sit parallel to the longest yard dimension, sometimes right along the property line where a wider pool wouldn't fit. Equipment and heating sizing follows normal pool math - surface area drives evaporation and heat loss, and a long narrow shape needs a matched heater.",
    metaTemplate:
      "Lap pool builder in {city}, TX. Long-format swim pools engineered for training - Houston Cool Pools since 1996.",
    keywordVariants: [
      "lap pool builder",
      "swim pool",
      "training pool",
      "long narrow pool",
      "exercise pool",
    ],
    icon: "builder",
  },
  {
    slug: "plunge-pool-builder",
    name: "Plunge Pool Builder",
    shortName: "Plunge Pool Builder",
    intentPhrase: "plunge pool design",
    intro:
      "A plunge pool is a small, deeper pool built for cooling off, hydrotherapy, or a compact entertaining space - not for laps or full-family swim. They fit courtyards, tight side yards, and rooftop-style installations where a full pool doesn't make sense.",
    bullets: [
      "Compact 8x14 to 10x20 footprints as a starting point",
      "Deeper profile than a cocktail pool - 4.5 to 6 feet typical",
      "Bench seating and integrated jets available",
      "Cold-plunge or heated configurations both supported",
    ],
    deepDive:
      "Plunge pools trade breadth for depth. A typical footprint is a small rectangle or a modest freeform shape with a uniform depth around 4.5 to 6 feet - enough to fully submerge, cool off, and support light hydrotherapy without giving up bench space around the edge. Because the volume is smaller, chemistry and turnover move faster, and the equipment set is usually simpler than a full-size pool. Homeowners often specify plunge pools with heater/chiller combinations so the pool can run cold in summer and warm in winter, doubling the use season in a Houston climate that's mild most of the year. Placement is flexible: courtyards, side yards, rooftop-style installations on grade, and tight urban lots all work. The build follows normal gunite sequence - excavate, steel, shell, tile, plaster, deck - just at a smaller scale and with a faster overall schedule.",
    metaTemplate:
      "Plunge pool builder in {city}, TX. Compact deep pools for cooling off and hydrotherapy - Houston Cool Pools since 1996.",
    keywordVariants: [
      "plunge pool",
      "plunge pool builder",
      "cold plunge pool",
      "small deep pool",
      "cocktail plunge pool",
    ],
    icon: "builder",
  },
  {
    slug: "geometric-pool-builder",
    name: "Geometric Pool Builder",
    shortName: "Geometric Pool Builder",
    intentPhrase: "geometric pool design",
    intro:
      "Geometric pools - rectangles, squared-off L-shapes, and clean-line variants - read as architectural rather than natural. They pair well with modern and traditional home styles alike, and they tend to sit right against the deck rather than melting into landscaping.",
    bullets: [
      "Rectangular, L-shape, and squared-off freeform variants",
      "Sharp coping lines with premium tile and finish options",
      "Attached spas typically squared to match the pool geometry",
      "Deck integration reads as architecture rather than landscape",
    ],
    deepDive:
      "Geometric pools rely on precision. The layout has to be dead-square, the coping has to hold a straight line at the eye level of anyone walking past, and the tile has to align cleanly at inside and outside corners. Rectangular is the most common geometric shape but not the only one - squared-off L's, T's, and stepped rectangles all read as geometric when the corners are crisp. Attached spas at this style are almost always squared to match the pool, either raised above the deck as a bond-beam-forward feature or set flush with the pool coping. Deck materials tend toward larger-format pavers or poured concrete with clean control joints. Water features fit in as sheer descents from a raised wall, spillover scuppers, or a shallow reflecting-pool section rather than the boulder waterfalls that suit freeform designs. The gunite construction sequence is the same as any custom pool - precision on the front end just carries through to the finish.",
    metaTemplate:
      "Geometric pool builder in {city}, TX. Rectangular and clean-line gunite pool designs - Houston Cool Pools since 1996.",
    keywordVariants: [
      "geometric pool",
      "rectangular pool builder",
      "modern pool design",
      "clean line pool",
      "architectural pool",
    ],
    icon: "design",
  },
  {
    slug: "freeform-pool-builder",
    name: "Freeform Pool Builder",
    shortName: "Freeform Pool Builder",
    intentPhrase: "freeform pool design",
    intro:
      "Freeform pools use curves, coves, and organic outlines to blend the water into a garden or tropical-style backyard. They pair well with irregular lot shapes, mature trees, and landscape-heavy backyards where a hard rectangle would fight the setting.",
    bullets: [
      "Organic shapes with coves, curves, and integrated shallow zones",
      "Boulder waterfalls, grottos, and beach entries as common features",
      "Coping in flagstone or natural stone to match the organic look",
      "Landscape integration built into the design phase",
    ],
    deepDive:
      "Freeform design starts with the lot rather than a shape catalog. Mature trees, existing hardscape, drainage patterns, and where the yard opens up all suggest where the pool wants to be and how its outline should flow. Once the outline is set, we usually layer in coves and shallow zones - a beach entry that walks in at deck level, a sun shelf with umbrella sleeves, a rocked-in cove that reads as a natural swim hole. Water features go beyond a spillway spa: boulder waterfalls, sheeting rock walls, negative-edge details tucked into the landscape, and integrated slides at the taller freeform builds. Coping and decking usually shift toward natural materials - flagstone, natural travertine, or textured concrete - to match the organic form. The construction sequence is standard gunite, but the layout is more forgiving to shot-in adjustments during excavation than a squared geometric build.",
    metaTemplate:
      "Freeform pool builder in {city}, TX. Organic, landscape-integrated pool designs - Houston Cool Pools since 1996.",
    keywordVariants: [
      "freeform pool",
      "freeform pool builder",
      "natural pool design",
      "tropical pool builder",
      "organic pool shape",
    ],
    icon: "design",
  },
  {
    slug: "pool-and-spa-builder",
    name: "Pool and Spa Builder",
    shortName: "Pool & Spa Builder",
    intentPhrase: "pool and attached spa construction",
    intro:
      "Attached gunite spas share plumbing, equipment, and structure with the pool they sit next to - which is a completely different animal than a portable hot tub. Done right, they spill into the pool as a feature, hold temperature independently, and pair with the pool schedule through automation.",
    bullets: [
      "Gunite spa constructed as part of the pool shell, not a drop-in",
      "Dedicated jets, blower, and heater sized to the spa volume",
      "Automated spillover from spa to pool as a water feature",
      "Temperature isolation so the spa runs hot while the pool stays cool",
    ],
    deepDive:
      "A properly built attached spa is a small gunite shell tied structurally into the pool but plumbed as its own body of water. That's what allows the spa to hold 102°F while the pool sits at 82°F, and what lets automation route the spa's spillway back into the pool as a moving-water feature. Jet count, blower sizing, and heater capacity all follow the spa volume - under-sizing any of them turns a spa into a lukewarm bath. Placement is a design decision: raised spas above the pool coping give a dramatic spillover; flush spas with a raised bond beam read cleaner from the house; free-standing spas set apart from the pool work when the geometry calls for it. Because the spa shell is built with the pool, it inherits the same warranty and permitting rigor - none of the leak-prone gasket seams that plague DIY combos.",
    metaTemplate:
      "Pool and spa builder in {city}, TX. Attached gunite spas engineered as part of the pool - Houston Cool Pools since 1996.",
    keywordVariants: [
      "pool and spa builder",
      "pool with spa",
      "gunite spa",
      "attached spa pool",
      "pool spa combo",
    ],
    icon: "builder",
  },
  {
    slug: "pool-resurfacing",
    name: "Pool Resurfacing",
    shortName: "Pool Resurfacing",
    intentPhrase: "pool interior resurfacing",
    intro:
      "Pool plaster is a wear surface - it hides chemistry stains, protects the shell, and looks great when it's fresh. Ten to fifteen years in, it usually shows its age: dull color, mineral staining, rough spots, and hairline crazing. Resurfacing chips out the old finish and replaces it with a modern plaster, quartz-aggregate, or pebble blend.",
    bullets: [
      "White plaster, quartz-aggregate, and pebble finish options",
      "Full drain, chip-out, prep, and application sequence",
      "Waterline tile refresh often bundled with resurfacing",
      "Refill and rebalance handled - pool returns to swim condition",
    ],
    deepDive:
      "Interior resurfacing is one of the higher-impact pool projects for the money - nothing else changes how the water looks and feels like a new finish does. The sequence starts with draining the pool and chipping out the old plaster back to the gunite shell (or at minimum roughing it up mechanically). Any structural repairs, plumbing pass-through resealing, and skimmer or main-drain work gets done at this stage - the pool is only empty once. From there we apply a bond coat, install the chosen finish, and cure it under water while the pool refills. Modern quartz-aggregate and pebble finishes carry longer-lasting warranties than standard white plaster, hide chemistry variation better, and give the pool a distinct color feel that plaster alone can't hit. Waterline tile is often replaced at the same visit since it's already exposed by the drain.",
    metaTemplate:
      "Pool resurfacing in {city}, TX. Plaster, quartz, and pebble interior finish replacement - Houston Cool Pools since 1996.",
    keywordVariants: [
      "pool resurfacing",
      "pool replaster",
      "pool interior finish",
      "pebble pool finish",
      "quartz pool finish",
    ],
    icon: "remodel",
  },
  {
    slug: "pool-tile-replacement",
    name: "Pool Tile Replacement",
    shortName: "Pool Tile Replacement",
    intentPhrase: "pool waterline tile replacement",
    intro:
      "Waterline tile is the band that reads first when anyone looks at the pool - and it's also the part that takes the most abuse from chemistry, splash, and freeze cycles. Replacing dated or cracked tile brings the pool visually current and lets you tune the whole aesthetic without a full remodel.",
    bullets: [
      "Waterline, spillway, and step-marker tile options",
      "Glass mosaic, natural stone, and porcelain choices",
      "Removal of old tile and prep of the bond beam",
      "Coordinated with resurfacing or standalone",
    ],
    deepDive:
      "Waterline tile work drops the pool level below the tile band, chips out the existing tile back to the bond beam, preps the substrate, and installs new tile with thinset and grout rated for submersion. Modern options cover a wide range: 6x6 glass mosaics for a clean, saturated color; hand-glazed ceramic that reads more like art tile; large-format porcelain that mimics natural stone; and actual natural stone (travertine, quartzite) for high-end builds. Glass tile in particular has become the default for higher-tier builds because it holds color longer and hides chemistry deposits better than ceramic. Grout choice matters more than most owners expect - a stain-resistant epoxy grout adds cost but extends how long the tile line looks new. If the pool is due for resurfacing in the next couple years, most homeowners bundle the two so the pool only drains once.",
    metaTemplate:
      "Pool tile replacement in {city}, TX. Waterline tile refresh - glass, mosaic, and porcelain options. Houston Cool Pools since 1996.",
    keywordVariants: [
      "pool tile replacement",
      "waterline tile",
      "pool tile installation",
      "pool tile repair",
      "glass tile pool",
    ],
    icon: "remodel",
  },
  {
    slug: "pool-deck-installation",
    name: "Pool Deck Installation",
    shortName: "Pool Deck Installation",
    intentPhrase: "pool deck installation and replacement",
    intro:
      "The deck is what you actually stand on for most of the time you spend at the pool - hotter than the coping, closer to your eye than the waterline tile, and by far the largest visual surface in the backyard. A well-chosen deck ties the pool into the landscape and holds up to Houston weather.",
    bullets: [
      "Travertine, natural stone, pavers, and stamped concrete",
      "Slip-resistance and heat-reflectivity considered in material choice",
      "Drainage design integrated with the deck slope",
      "Coping-to-deck transition detailed to avoid stress cracks",
    ],
    deepDive:
      "Pool decks are more engineering than décor. The slope has to move water away from the pool without pooling on any square foot of walking surface. The joints have to accommodate the seasonal movement of Gulf-coast soils. The material has to stay cool enough underfoot in July and not crack from a first frost in January. Travertine remains a top choice because it stays notably cooler than concrete or dark pavers and holds up to salt-system water; natural stone in flagstone or quartzite reads more organic and pairs with freeform pools; large-format pavers give a modern architectural look; and stamped or textured concrete remains a solid budget option when detailed correctly. Coping-to-deck transition is where most decks fail - a rigid connection cracks under thermal and soil movement, so a proper expansion detail (typically a caulked joint) is what separates a deck that stays intact from one that telegraphs a crack line the first summer.",
    metaTemplate:
      "Pool deck installation in {city}, TX. Travertine, stone, pavers, and concrete decks by Houston Cool Pools - since 1996.",
    keywordVariants: [
      "pool deck",
      "pool deck installation",
      "pool decking contractor",
      "travertine pool deck",
      "concrete pool deck",
    ],
    icon: "remodel",
  },
  {
    slug: "pool-equipment-installation",
    name: "Pool Equipment Installation",
    shortName: "Pool Equipment",
    intentPhrase: "pool equipment installation and upgrades",
    intro:
      "The pump, filter, heater, chlorinator, and automation panel are the parts of a pool that don't show up on Pinterest boards but decide how the pool actually runs. Upgrading equipment usually cuts electricity draw, quiets the mechanical room, and moves the pool from a chore to a background utility.",
    bullets: [
      "Variable-speed pumps - significantly lower power draw",
      "Filter and heater sizing matched to pool volume",
      "Salt chlorine generators and cell replacement",
      "Automation panels - phone control for pump, heater, and lighting",
    ],
    deepDive:
      "Equipment upgrades usually start with the pump. Older single-speed pumps run at full RPM whenever they're on and drive most of a pool's electricity bill; a variable-speed pump costs more up front but pays back within a few seasons on operating cost alone. Filters are next: cartridge, DE, or sand, sized to the pool volume so turnover time falls in a reasonable range. Heaters are sized to the pool's surface area and the temperature rise you want - under-sized heaters short-cycle and never quite catch up on cold nights. Salt systems replace the ongoing purchase of liquid chlorine or trichlor tablets with a cell that generates chlorine from dissolved salt; the water feels softer and chemistry management gets easier. Automation panels - Pentair IntelliCenter, Jandy iAquaLink, Hayward OmniLogic - bring pump, heater, cleaner, lights, and salt system under a single phone app.",
    metaTemplate:
      "Pool equipment installation in {city}, TX. Variable-speed pumps, filters, heaters, and automation - Houston Cool Pools since 1996.",
    keywordVariants: [
      "pool equipment",
      "pool pump installation",
      "pool heater installation",
      "pool automation",
      "variable speed pump",
    ],
    icon: "service",
  },
  {
    slug: "saltwater-pool-conversion",
    name: "Saltwater Pool Conversion",
    shortName: "Saltwater Conversion",
    intentPhrase: "saltwater pool conversion",
    intro:
      "A saltwater pool isn't chlorine-free - it just generates its own chlorine from dissolved salt via an electrolytic cell. The result is softer-feeling water, less chemistry work each week, and no more hauling liquid chlorine or tablet buckets home from the pool store.",
    bullets: [
      "Salt cell sizing matched to pool volume and bather load",
      "Compatible plumbing and equipment check before install",
      "Adjustment of stabilizer and pH after conversion",
      "Cell replacement planning - typical 3-7 year life span",
    ],
    deepDive:
      "Converting a chlorine pool to salt is straightforward: the existing pool volume is dosed with pool-grade salt to reach a target concentration (typically around 3,200 ppm), an inline chlorinator cell is installed on the return plumbing, and the cell's control board is wired to the pump timer or automation panel. From that point, the cell generates hypochlorous acid from the dissolved salt as water passes through - the same chlorine chemistry as a traditional pool, just produced continuously in low doses. Stabilizer (cyanuric acid) is dosed up front because salt cells don't add it, and pH drifts upward with cell operation so weekly muriatic acid additions replace the mixed acid/chlorine routine. Cells wear out - typically three to seven years depending on run-time and water chemistry - and get replaced as a maintenance item. Not every plumbing setup is a candidate: certain aluminum trim, some heater core materials, and older automation panels need to be checked before the conversion so nothing corrodes prematurely.",
    metaTemplate:
      "Saltwater pool conversion in {city}, TX. Salt cell installation and setup for existing pools - Houston Cool Pools since 1996.",
    keywordVariants: [
      "salt pool conversion",
      "saltwater pool",
      "salt chlorine generator",
      "convert pool to salt",
      "saltwater pool installation",
    ],
    icon: "service",
  },
  {
    slug: "outdoor-kitchen-builder",
    name: "Outdoor Kitchen Builder",
    shortName: "Outdoor Kitchens",
    intentPhrase: "outdoor kitchen design and construction",
    intro:
      "An outdoor kitchen turns the pool deck into a real gathering space instead of a place people leave when someone gets hungry. Done as part of the pool project - or as a follow-up - it ties the backyard together and gives the layout a second anchor beyond the water.",
    bullets: [
      "Built-in grills, side burners, and vent-hood options",
      "Weather-rated cabinetry, countertops, and appliances",
      "Gas, plumbing, and electrical stubbed in with the pool build",
      "Coordinated with pergola, pavilion, and shade structure planning",
    ],
    deepDive:
      "An outdoor kitchen is a construction project layered on top of a hardscape project. The layout has to work as a workflow - grill, prep, storage, sink, and either a refrigerator or a beverage cooler - while relating to the pool and seating area so people naturally flow between them. Cabinetry has to be genuinely weather-rated: stainless, HDPE, or masonry construction, since standard indoor cabinetry falls apart in a Houston summer. Countertops trend toward granite, quartzite, or dense concrete because thinner engineered surfaces struggle with UV and thermal cycling. Gas, water, and electrical rough-ins are cheapest to run when the pool is being trenched - that's the single strongest argument for planning the kitchen at the same time as the pool build even if construction happens in phases. Pergolas or a pavilion above the kitchen adds all-day usability, and the roof structure changes the electrical plan since fans, lighting, and heaters typically ride overhead.",
    metaTemplate:
      "Outdoor kitchen builder in {city}, TX. Weather-rated built-in kitchens, grills, and pavilions - Houston Cool Pools since 1996.",
    keywordVariants: [
      "outdoor kitchen builder",
      "outdoor kitchen",
      "built-in grill",
      "outdoor kitchen installation",
      "backyard kitchen contractor",
    ],
    icon: "design",
  },
  {
    slug: "fire-feature-installation",
    name: "Fire Feature Installation",
    shortName: "Fire Features",
    intentPhrase: "fire pit and fire feature installation",
    intro:
      "Fire features extend the backyard into the cooler months - Houston's mild winters make a fire pit or gas fireplace usable most evenings from October through March. Designed as part of the pool project, they anchor a second seating zone and give the pool a visual counterpoint after dark.",
    bullets: [
      "Gas fire pits, wood-burning pits, and fire bowls at pool corners",
      "Full outdoor fireplaces with masonry hearths and pavilions",
      "Bowl-and-scupper combos that pair fire and water features",
      "Permitting and gas-line coordination with pool trades",
    ],
    deepDive:
      "Fire features run from small stand-alone pits to full masonry fireplaces built into a pavilion wall. Gas is the more common fuel - cleaner start-up, less smoke, and a lower fire code footprint than wood - but wood-burning pits still have a place when a homeowner wants the smell and crackle. Placement matters: fire pits should sit at seating distance from the pool but not so close that overspray from swimmers hits the burner. Prevailing wind direction affects both smoke drift and comfort at the seating ring. Fire-and-water bowls - the ones with a bowl of fire sitting above a water scupper - get installed as part of the pool shell and share the gas run and electrical the pool build already needs. Any gas plumbing runs through the same permitting and inspection track as the pool's other utilities, which is another argument for handling the fire feature during the pool build rather than as a retrofit.",
    metaTemplate:
      "Fire pit and fire feature installation in {city}, TX. Gas and masonry fire features for pool decks - Houston Cool Pools since 1996.",
    keywordVariants: [
      "fire pit installation",
      "outdoor fire feature",
      "fire pit contractor",
      "gas fire pit",
      "outdoor fireplace",
    ],
    icon: "design",
  },
];

export function getServiceBySlug(slug: string): PseoService | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
