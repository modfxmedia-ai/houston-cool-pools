/**
 * Central data catalog for the pool information resources shown on
 * /pool-equipment-manuals, /product-brochures, /pool-school-1,
 * /severe-weather, and the combined hidden /pool-resources hub page.
 *
 * Keeping the data here means all five pages share the same source of truth.
 */

// ============================================================================
// Equipment Manuals
// ============================================================================

export const EQUIPMENT_MANUAL_PDF_BASE = "https://houstoncoolpools.com/pdf/";

export type EquipmentManual = { name: string; file: string };
export type EquipmentManualCategory = { title: string; manuals: EquipmentManual[] };

export const EQUIPMENT_MANUAL_CATEGORIES: EquipmentManualCategory[] = [
  {
    title: "Cleaning Systems",
    manuals: [
      { name: "Disposable Sand Silt Bag", file: "DisposableSandSiltBagIG.pdf" },
      { name: "Kreepy Krauly Platinum OM", file: "KreepyKraulyPlatinumOM.pdf" },
      { name: "Pentair Suction Side Cleaner", file: "Rebel_Warrior_Tucson_Eng_OM_20181025_062540.pdf" },
      { name: "Paramount Owners Manual", file: "ParamountOwnersManual.pdf" },
      { name: "Prowler 820-830 EOM", file: "Prowler820-830EOM.pdf" },
      { name: "Racer Eng OM", file: "RacerEngOM.pdf" },
      { name: "Pentair Prowler 920 Cleaner", file: "prowler920-warriorse-manual-english.pdf" },
    ],
  },
  {
    title: "Heater / Chiller",
    manuals: [
      { name: "MasterTemp Heater", file: "Mastertemp-Heater.pdf" },
      { name: "UltraTemp Heat Pump", file: "ultratemp-heat-pump-installation-and-users-guide-en-fr-sp.pdf" },
      { name: "Glacier Pool Chiller", file: "newer-glacier-pool-chiller-manual.pdf" },
    ],
  },
  {
    title: "Pool Control System",
    manuals: [
      { name: "Pentair IntelliConnect Control & Monitoring", file: "IntelliConnect_20180402_082936.pdf" },
      { name: "EasyTouch ICPUG", file: "EasyTouchICPUG.pdf" },
      { name: "EasyTouch QSG", file: "EasyTouchICPUG.pdf" },
      { name: "IntelliBrite Controller", file: "IntelliBrite-Controller.pdf" },
    ],
  },
  {
    title: "Pool Filters",
    manuals: [
      { name: "Clean & Clear Cartridge Filter OM", file: "DisposableSandSiltBagIG.pdf" },
      { name: "Triton II Sand Filter OM", file: "DisposableSandSiltBagIG.pdf" },
    ],
  },
  {
    title: "Pool Lighting",
    manuals: [
      { name: "Amerlite White Halogen OM", file: "Amerlite-White-Halogen-OM.pdf" },
      { name: "GloBrite Color LED Eng OM", file: "GloBriteColorLEDEngOM.pdf" },
      { name: "IntelliBrite Controller", file: "IntelliBrite-Controller.pdf" },
      { name: "IntelliBrite LED Pool Light OM", file: "IntelliBrite-LED-Pool-Light-OM.pdf" },
      { name: "IntelliBrite LED Spa Light OM", file: "IntelliBrite-LED-Spa-Light-OM.pdf" },
      { name: "IntelliBrite White LED Pool & Spa", file: "Intellibrite-White-LED-Pool-and-Spa.pdf" },
      { name: "Pentair MicroBrite Light", file: "AMP-30-1310.pdf" },
    ],
  },
  {
    title: "Pool Pumps",
    manuals: [
      { name: "BoostRite Booster Pump OM", file: "BoostRiteBoosterPumpOM.pdf" },
      { name: "IntelliFlo VS+SVRS", file: "IntelliFloSVRSOM.pdf" },
      { name: "IntelliFlo VS OM", file: "IntelliFloVSOM.pdf" },
      { name: "IntelliFlo XF / IntelliPro XF Variable Speed", file: "IntelliFloXFIntelliProXFVariableSpeedUG.pdf" },
      { name: "WhisperFlo XF OM", file: "Whisperflo-XF-OM.pdf" },
      { name: "WhisperFlo OM", file: "WhisperFloOM.pdf" },
    ],
  },
  {
    title: "Sanitation Systems",
    manuals: [
      { name: "Clear O3 Ozone Manual", file: "ClearO3OzoneManual.pdf" },
      { name: "IntelliChlor Quick Start Guide OM", file: "IntelliChlor-Quick-Start-GuideOM.pdf" },
      { name: "IntelliChlor Electronic Chlorine Generator", file: "IntelliChlor-Quick-Start-GuideOM.pdf" },
      { name: "Rainbow 320 Chlorine Feeder", file: "Rainbow320ChlorineFeeder.pdf" },
      { name: "Ultra UV Manual", file: "bioshield-uv-sanitizer-manual-english.pdf" },
      { name: "Pentair Bioshield UV System", file: "bioshield-uv-sanitizer-manual-english.pdf" },
    ],
  },
  {
    title: "Water Features",
    manuals: [
      { name: "Color Cascade Bubbler", file: "Color-Cascade-Bubbler.pdf" },
      { name: "Deck Jet II", file: "Deck-Jet-II.pdf" },
      { name: "Laminar Deck Jets", file: "Laminar-Deck-Jets.pdf" },
      { name: "Magic Falls Water Effects", file: "MagicFallsWaterEffects.pdf" },
    ],
  },
  {
    title: "Miscellaneous",
    manuals: [
      { name: "Paramount Twirly Byrd", file: "Paramount_Twirlybyrd.pdf" },
      { name: "Pentair IntelliValve Actuator", file: "IntelliValve%20OM_20151223_081419.pdf" },
      { name: "Valve OM", file: "ValveOM.pdf" },
    ],
  },
];

// ============================================================================
// Product Brochures
// ============================================================================

export type ProductLink = { name: string; href: string; brand: string };
export type ProductGroup = { title: string; products: ProductLink[] };

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    title: "Skimmers & Drains",
    products: [
      { name: "A&A Manufacturing Venturi Powered Skimmers", brand: "A&A Manufacturing", href: "https://aamfg.com/product/quikskim-venturi-powered/" },
      { name: "A&A Manufacturing AVSC Anti-Vortex Heavy Debris Safety Drains", brand: "A&A Manufacturing", href: "https://aamfg.com/product/avsc-heavy-debris-removal/" },
    ],
  },
  {
    title: "Pumps & Filters",
    products: [
      { name: "Pentair IntelliFlo Variable Speed Pump", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-pumps/intelliflo_variablespeedhighperfomancepump.html" },
      { name: "Pentair 420 sf Clean & Clear Cartridge Filter", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-filtration/clean_and_clear_pluscartridgefilters.html" },
      { name: "WaterCo Cyclonic Pre-Filter", brand: "WaterCo", href: "https://waterco.us/pool-spa/centrifugal-filters/multicyclone-16" },
    ],
  },
  {
    title: "Cleaners & Lighting",
    products: [
      { name: "Pentair Rebel Suction Cleaner", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-cleaners/pentair_rebel_suction-sideingroundpoolcleaner.html" },
      { name: "Pentair GloBrite LED Lights", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-lighting/globrite_pool_andspaledlights.html" },
    ],
  },
  {
    title: "Sanitation & Ozone",
    products: [
      { name: "Pentair 320 In-Line Chlorinator", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-water-treatment/rainbow_automaticchlorineandbrominefeeders.html" },
      { name: "A&A QuikPure 3 Ozone System", brand: "A&A Manufacturing", href: "https://aamfg.com/product/quikpure-3-ozone-oxidation-system/" },
      { name: "A&A QuikCirc Circulation / Cleaning System", brand: "A&A Manufacturing", href: "https://www.youtube.com/watch?v=Fh6o_k84TIY" },
    ],
  },
  {
    title: "Water Management",
    products: [
      { name: "Pentair Automated Water Fill", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-white-goods/automatic_water_fillers.html" },
      { name: "Pentair Overflow System", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-white-goods/gutter_drains.html" },
    ],
  },
  {
    title: "Heater & Automation",
    products: [
      { name: "Pentair MasterTemp 400k Heater", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-heaters/mastertemp_125_highperformanceheater.html" },
      { name: "Pentair EasyTouch Remote Automation System", brand: "Pentair", href: "https://www.pentair.com/en-us/products/residential/pool-spa-equipment/pool-automation/easytouch_controlsystems.html" },
    ],
  },
  {
    title: "Interior Finish",
    products: [
      { name: "WetEdge Quartz or Pebble Interior Finish", brand: "WetEdge Technologies", href: "https://wetedgetechnologies.com/products" },
    ],
  },
];

export const FEATURED_PRODUCT_PDF = {
  label: "Ten Steps to a Perfect Pool",
  href: "https://houstoncoolpools.com/pdf/10-Steps-to-the-Perfect-Pool-hcp.pdf",
};

// ============================================================================
// Pool School (video tutorials)
// ============================================================================

export type PoolSchoolLesson = { title: string; youtubeId: string; blurb: string };

export const POOL_SCHOOL_LESSONS: PoolSchoolLesson[] = [
  { title: "Water Test for Chemical Balance", youtubeId: "quEPTFAsHL0", blurb: "How to test your pool water and interpret the results." },
  { title: "Equipment Shut Off", youtubeId: "OgkiqHqy6JU", blurb: "The correct way to shut off pool equipment for maintenance or a storm." },
  { title: "3 Way Valve Operation", youtubeId: "IWvmB3f44I0", blurb: "How the three-way valve routes water between pool and spa." },
  { title: "Pool Filter System Overview", youtubeId: "fgQuEYJMVWA", blurb: "A tour of your pool's filtration system and how the pieces work together." },
  { title: "Pool Suction Cleaner", youtubeId: "_chE1HtOrw0", blurb: "How the suction-side cleaner keeps your pool floor spotless." },
  { title: "Pool Chlorinator", youtubeId: "F40bGRXjMtI", blurb: "Loading, adjusting and maintaining your chlorine tablet feeder." },
  { title: "Pump Basket Cleaning", youtubeId: "WDXjGitk2bg", blurb: "Weekly maintenance for your pump basket to keep flow strong." },
  { title: "Leaf Canister Cleaning", youtubeId: "SPyJIEQregU", blurb: "How to empty and clean your leaf canister for automatic cleaner systems." },
  { title: "Cyclone Cleaning", youtubeId: "Wgmb7MB6FMM", blurb: "Servicing your cyclone pre-filter to extend cartridge life." },
  { title: "Filter Cleaning", youtubeId: "C2RBBt1NwbE", blurb: "Deep-clean your cartridge filter properly, once or twice a season." },
  { title: "Clean In Floor Heads", youtubeId: "EsTMTFUN_Xw", blurb: "Servicing pop-up in-floor cleaning heads." },
  { title: "Ozone System", youtubeId: "NveIWrsPm-0", blurb: "How your Clear O3 ozone system works alongside chlorine." },
];

// ============================================================================
// Severe Weather Checklists
// ============================================================================

export type SevereWeatherStep = { title: string; body: string };

export const HURRICANE_STEPS: SevereWeatherStep[] = [
  {
    title: "Do NOT drain your pool",
    body: "An empty pool can float out of the ground from the pressure of groundwater rising around it. Even for hurricanes, keep your pool full.",
  },
  {
    title: "Lower the water 1\u20132 feet - only if flooding is expected",
    body: "If heavy flooding is forecast, lower the water level about a foot below the skimmer to give room for rainfall without overflowing across your deck and yard.",
  },
  {
    title: "Turn off electrical power to pool equipment",
    body: "At the breaker, shut off power to the pump, heater, salt system, and lights. If flood water reaches the equipment pad, powered equipment can be permanently damaged.",
  },
  {
    title: "Add extra chlorine before the storm",
    body: "Super-chlorinate (shock) the pool the day before the storm to help handle the extra organic material - leaves, debris, and runoff - that will land in the water.",
  },
  {
    title: "Remove and store loose items",
    body: "Bring in pool toys, floats, ladders, cleaners, umbrellas, patio furniture, and anything that could become a projectile in high winds.",
  },
  {
    title: "Do NOT cover the pool",
    body: "A cover will be shredded by the wind and debris - and worse, its anchors can tear out and damage your deck and coping.",
  },
  {
    title: "After the storm - clean before you restart",
    body: "Remove large debris with a leaf net first. Never run the pump with heavy debris in the skimmers or main drain. Vacuum, brush, and shock before returning to normal operation.",
  },
];

export const FREEZE_STEPS: SevereWeatherStep[] = [
  {
    title: "Run the pump continuously below 32 \u00b0F",
    body: "Moving water resists freezing. When temperatures drop below freezing, run your pool pump 24/7 for the entire cold event.",
  },
  {
    title: "Turn on all water features",
    body: "Run spa spillovers, waterfalls, deck jets, and bubblers so every line has moving water. Standing water in a plumbing line is what cracks pipes.",
  },
  {
    title: "Open all valves on the equipment pad",
    body: "Set every valve to a partially-open position so water can flow through all lines - suction and return, spa and pool.",
  },
  {
    title: "Balance chemistry 24 hours before the freeze",
    body: "Cold water is aggressive. Slightly raise calcium hardness, alkalinity and pH the day before to protect plaster and equipment.",
  },
  {
    title: "Protect the equipment pad",
    body: "Wrap exposed above-ground plumbing with foam pipe insulation or towels. Do not cover the heater exhaust or pump vents.",
  },
  {
    title: "If you lose power - drain the pump",
    body: "If the pump stops for more than a few hours below freezing, remove the pump drain plugs to release trapped water and prevent the housing from cracking.",
  },
];
