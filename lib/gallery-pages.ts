// Gallery sub-page image data, captured from the live houstoncoolpools.com
// project galleries. Images are served live via next/image (unoptimized) from
// the original site, so no local assets are required.

const HOST = "https://houstoncoolpools.com";

export type GalleryImage = { src: string; alt: string };

type GalleryEntry = {
  /** Folder segment on the live site, e.g. "free-form-pool-2019a". */
  folder: string;
  /** Image file names within `<folder>_files/vlb_images1/`. */
  names: string[];
  /** Optional locally-hosted images prepended before the live-site set. */
  extras?: GalleryImage[];
};

const DATA: Record<string, GalleryEntry> = {
  // ===== Free Form Pools =====
  "gallery-free-form-pools-1": {
    folder: "free-form-pool-2019a",
    names: [
      "8th_street_heights.jpg", "baddour_1.jpg", "brown_5.jpg", "brown_7.jpg",
      "butler,_t_6.jpg", "caraway_1.jpg", "crown_plaza_3.jpg", "grimm_4.jpg",
      "hagan_5.jpg", "hcp_pics_014__copy.jpg", "hcp_pics_028_5.jpg",
      "hcp_pics_032__copy_2.jpg",
    ],
  },
  "gallery-free-form-pools-2": {
    folder: "free-form-pool-2019b",
    names: [
      "img_0598.jpg", "img_0955.jpg", "img_1030.jpg", "img_1036.jpg",
      "img_1277_1.jpg", "img_1278.jpg", "img_1283.jpg", "img_1293.jpg",
      "img_1294.jpg", "img_1523.jpg", "img_1525.jpg", "img_1527.jpg",
    ],
  },
  "gallery-free-form-pools-3": {
    folder: "freeformgallery",
    names: [
      "20120710171609.jpg", "freeformpoolbyhoustoncoolpools001.jpg",
      "freeformpoolbyhoustoncoolpools002.jpg", "freeformpoolbyhoustoncoolpools003.jpg",
      "freeformpoolbyhoustoncoolpools004.jpg", "freeformpoolbyhoustoncoolpools005.jpg",
      "freeformpoolbyhoustoncoolpools006.jpg", "freeformpoolbyhoustoncoolpools007.jpg",
      "freeformpoolbyhoustoncoolpools009.jpg", "freeformpoolbyhoustoncoolpools010.jpg",
      "freeformpoolbyhoustoncoolpools011.jpg", "freeformpoolbyhoustoncoolpools012.jpg",
      "freeformpoolbyhoustoncoolpools013.jpg",
    ],
  },
  "gallery-free-form-pools-4": {
    folder: "freeformgallery2",
    names: [
      "freeformpoolbyhoustoncoolpools014.jpg", "freeformpoolbyhoustoncoolpools015.jpg",
      "freeformpoolbyhoustoncoolpools016.jpg", "freeformpoolbyhoustoncoolpools017.jpg",
      "freeformpoolbyhoustoncoolpools018.jpg", "freeformpoolbyhoustoncoolpools020.jpg",
      "freeformpoolbyhoustoncoolpools021.jpg", "freeformpoolbyhoustoncoolpools022.jpg",
      "freeformpoolbyhoustoncoolpools024.jpg", "freeformpoolbyhoustoncoolpools025.jpg",
      "freeformpoolbyhoustoncoolpools026.jpg", "freeformpoolbyhoustoncoolpools027.jpg",
      "freeformpoolbyhoustoncoolpools028.jpg",
    ],
  },
  "gallery-free-form-pools-5": {
    folder: "freeformgallery3",
    names: [
      "freeformpoolbyhoustoncoolpools029.jpg", "freeformpoolbyhoustoncoolpools030.jpg",
      "freeformpoolbyhoustoncoolpools031.jpg", "freeformpoolbyhoustoncoolpools032.jpg",
      "freeformpoolbyhoustoncoolpools034.jpg", "freeformpoolbyhoustoncoolpools037.jpg",
      "freeformpoolbyhoustoncoolpools039.jpg", "freeformpoolbyhoustoncoolpools041.jpg",
      "hcppics0033.jpg", "hcppics0177.jpg", "hcppics0225.jpg", "hcppics062.jpg",
      "image.jpg",
    ],
  },

  // ===== Geometric Pools =====
  "geometric-pools-1": {
    folder: "geometric-pool-a",
    names: [
      "andersontarr_1.jpg", "andersontarr_2.jpg", "andersontarr_3.jpg",
      "andersontarr_4.jpg", "beller_1.jpg", "bernshausen_1.jpg",
      "cardenasgoodchild_10.jpg", "dacus_11.jpg", "emmons_22.jpg",
      "hcp_pics_007.jpg", "image_2.jpg", "image_2_0.jpg",
    ],
  },
  "geometric-pools-2": {
    folder: "geometric-pool-b",
    names: [
      "img_0336.jpg", "img_0568.jpg", "img_1010.jpg", "img_1012.jpg",
      "img_1039.jpg", "img_1415.jpg", "img_1426.jpg", "img_1430.jpg",
      "img_1435.jpg", "img_1515.jpg", "img_1532.jpg", "img_1533.jpg",
    ],
  },
  "geometric-pools-3": {
    folder: "geometric-pool-c",
    names: [
      "img_1538.jpg", "img_1541.jpg", "img_1544.jpg", "img_1549.jpg",
      "img_1552.jpg", "img_1553.jpg", "img_1561.jpg", "img_1565.jpg",
      "img_1578.jpg", "img_1592.jpg", "img_1633.jpg",
    ],
  },
  "geometric-pools-4": {
    folder: "geometricgallery1",
    names: [
      "20120709173510.jpg", "20120726143318.jpg",
      "geometricpoolbyhoustoncoolpools001.jpg", "geometricpoolbyhoustoncoolpools002.jpg",
      "geometricpoolbyhoustoncoolpools003.jpg", "geometricpoolbyhoustoncoolpools004.jpg",
      "geometricpoolbyhoustoncoolpools006.jpg", "geometricpoolbyhoustoncoolpools008.jpg",
      "geometricpoolbyhoustoncoolpools009.jpg", "geometricpoolbyhoustoncoolpools010.jpg",
      "geometricpoolbyhoustoncoolpools011.jpg", "geometricpoolbyhoustoncoolpools012.jpg",
      "geometricpoolbyhoustoncoolpools013.jpg",
    ],
  },
  "geometric-pools-5": {
    folder: "geometricgallery2",
    names: [
      "geometricpoolbyhoustoncoolpools014.jpg", "geometricpoolbyhoustoncoolpools015.jpg",
      "geometricpoolbyhoustoncoolpools016.jpg", "geometricpoolbyhoustoncoolpools017.jpg",
      "geometricpoolbyhoustoncoolpools018.jpg", "geometricpoolbyhoustoncoolpools019.jpg",
      "geometricpoolbyhoustoncoolpools021.jpg", "geometricpoolbyhoustoncoolpools023.jpg",
      "geometricpoolbyhoustoncoolpools024.jpg", "geometricpoolbyhoustoncoolpools025.jpg",
      "geometricpoolbyhoustoncoolpools026.jpg", "geometricpoolbyhoustoncoolpools027.jpg",
    ],
  },
  "geometric-pools-6": {
    folder: "geometricgallery3",
    names: [
      "geometricpoolbyhoustoncoolpools028.jpg", "geometricpoolbyhoustoncoolpools030.jpg",
      "geometricpoolbyhoustoncoolpools031.jpg", "geometricpoolbyhoustoncoolpools032.jpg",
      "hcppics0092.jpg", "hcppics018copycopy.jpg", "hcppics0229.jpg", "hcppics029.jpg",
      "hcppics0322.jpg", "img_6915.jpg", "photo6.jpg", "poolfinished007.jpg",
      "poolfinished023.jpg",
    ],
  },

  // ===== Fireplace & Fire Pits =====
  "fireplace-firepits-gallery-1": {
    folder: "fireplace-firepits-2019-a",
    names: [
      "8th_street_heights_9.jpg", "20120710_17.10.07.jpg", "20120710_17.10.31.jpg",
      "brown_1.jpg", "brown_4.jpg", "brown_14.jpg", "cardenasgoodchild_13.jpg",
      "crown_plaza_2.jpg", "dacus_4.jpg",
    ],
  },
  "fireplace-firepits-gallery-2": {
    folder: "fireplace-firepits-2019-b",
    names: [
      "crown_plaza_2.jpg", "dacus_4.jpg", "hcp_pics_008_6.jpg", "hcp_pics_011_2.jpg",
      "hcp_pics_017_4.jpg", "hcp_pics_031_4.jpg", "hcp_pics_050.jpg", "hcp_pics_052.jpg",
      "hcp_pics_056.jpg", "hcp_pics_069.jpg",
    ],
  },
  "fireplace-firepits-gallery-3": {
    folder: "fireplacegallery",
    names: [
      "20120710171007.jpg", "fireplaceandfirepitbyhoustoncoolpools001.jpg",
      "fireplaceandfirepitbyhoustoncoolpools002.jpg", "fireplaceandfirepitbyhoustoncoolpools003.jpg",
      "fireplaceandfirepitbyhoustoncoolpools004.jpg", "fireplaceandfirepitbyhoustoncoolpools007.jpg",
    ],
  },

  // ===== Pool Decks =====
  "pool-deck-1": {
    folder: "PoolDecksGallery1",
    names: [
      "deckbyhoustoncoolpools001.jpg", "deckbyhoustoncoolpools003.jpg",
      "deckbyhoustoncoolpools005.jpg", "deckbyhoustoncoolpools008.jpg",
      "deckbyhoustoncoolpools010.jpg", "deckbyhoustoncoolpools011.jpg",
      "deckbyhoustoncoolpools012.jpg", "deckbyhoustoncoolpools013.jpg",
    ],
  },
  "pool-deck-2": {
    folder: "PoolDecksGallery2",
    names: [
      "deckbyhoustoncoolpools014.jpg", "deckbyhoustoncoolpools015.jpg",
      "deckbyhoustoncoolpools016.jpg", "deckbyhoustoncoolpools017.jpg",
      "deckbyhoustoncoolpools018.jpg", "deckbyhoustoncoolpools025.jpg",
      "deckbyhoustoncoolpools026.jpg",
    ],
  },
  "pool-deck-3": {
    folder: "PoolDecksGallery3",
    names: [
      "deckbyhoustoncoolpools027.jpg", "deckbyhoustoncoolpools030.jpg",
      "deckbyhoustoncoolpools031.jpg", "deckbyhoustoncoolpools032.jpg",
      "deckbyhoustoncoolpools033.jpg", "deckbyhoustoncoolpools034.jpg",
      "deckbyhoustoncoolpools035.jpg", "deckbyhoustoncoolpools041.jpg",
      "deckbyhoustoncoolpools042.jpg", "deckbyhoustoncoolpools043.jpg",
      "deckbyhoustoncoolpools044.jpg",
    ],
  },
  "pool-deck-4": {
    folder: "PoolDecksGallery4",
    names: [
      "deckbyhoustoncoolpools047.jpg", "deckbyhoustoncoolpools048.jpg",
      "deckbyhoustoncoolpools051.jpg", "deckbyhoustoncoolpools052.jpg",
      "deckbyhoustoncoolpools053.jpg", "deckbyhoustoncoolpools055.jpg",
      "hcppics0254.jpg", "hcppics02613.jpg", "hcppics0272.jpg", "hcppics0288.jpg",
      "img_6469.jpg",
    ],
  },

  // ===== Outdoor Structures =====
  "outdoor-structures-gallery-1": {
    folder: "outdoorstructuresgallery1",
    extras: [
      { src: "/images/gallery/hd/antisdel-1.jpg", alt: "Outdoor structure by Houston Cool Pools - covered patio with outdoor kitchen" },
      { src: "/images/gallery/hd/antisdel-2.jpg", alt: "Outdoor structure by Houston Cool Pools - covered patio with wood ceiling and lounge seating" },
      { src: "/images/gallery/hd/antisdel-3.jpg", alt: "Outdoor structure by Houston Cool Pools - covered patio with columns overlooking pool" },
    ],
    names: [
      "outdoorstructuresbyhoustoncoolpools002.jpg", "outdoorstructuresbyhoustoncoolpools004.jpg",
      "outdoorstructuresbyhoustoncoolpools006.jpg", "outdoorstructuresbyhoustoncoolpools007.jpg",
      "outdoorstructuresbyhoustoncoolpools009.jpg", "outdoorstructuresbyhoustoncoolpools013.jpg",
      "outdoorstructuresbyhoustoncoolpools019.jpg", "outdoorstructuresbyhoustoncoolpools021.jpg",
      "outdoorstructuresbyhoustoncoolpools023.jpg",
    ],
  },
  "outdoor-structures-gallery-2": {
    folder: "outdoorstructuresgallery2",
    names: [
      "outdoorstructuresbyhoustoncoolpools035.jpg", "outdoorstructuresbyhoustoncoolpools036.jpg",
      "outdoorstructuresbyhoustoncoolpools037.jpg", "outdoorstructuresbyhoustoncoolpools048.jpg",
      "outdoorstructuresbyhoustoncoolpools053.jpg", "outdoorstructuresbyhoustoncoolpools080.jpg",
      "outdoorstructuresbyhoustoncoolpools086.jpg", "outdoorstructuresbyhoustoncoolpools094.jpg",
      "outdoorstructuresbyhoustoncoolpools099.jpg", "outdoorstructuresbyhoustoncoolpools100.jpg",
    ],
  },
};

/** Build the live image list for a gallery slug. */
export function getGalleryImages(slug: string, altPrefix: string): GalleryImage[] {
  const entry = DATA[slug];
  if (!entry) return [];
  const live = entry.names.map((name, i) => ({
    src: `${HOST}/${entry.folder}_files/vlb_images1/${encodeURIComponent(name)}`,
    alt: `${altPrefix} by Houston Cool Pools - photo ${i + 1}`,
  }));
  return entry.extras ? [...entry.extras, ...live] : live;
}

/** ImageGallery JSON-LD for a gallery sub-page. */
export function galleryJsonLd(name: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    url: `${HOST}/${slug}.html`,
    author: { "@type": "LocalBusiness", name: "Houston Cool Pools" },
  };
}
