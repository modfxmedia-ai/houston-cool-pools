import type { Metadata } from "next";
import { GalleryCategoryPage } from "../components/gallery/GalleryCategoryPage";
import { getGalleryImages, galleryJsonLd } from "../../lib/gallery-pages";

const SLUG = "pool-deck-4";
const TITLE = "Pool Deck Gallery — Page 4 | Houston Cool Pools";
const DESCRIPTION =
  "More pool deck and coping designs from Houston Cool Pools in Houston TX. Custom gunite pool builder serving Houston, Tomball, Cypress and Spring TX.";
const CANONICAL = `https://houstoncoolpools.com/${SLUG}.html`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "Houston Cool Pools",
    type: "website",
  },
};

export default function Page() {
  const images = getGalleryImages(SLUG, "Pool deck");
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryJsonLd("Pool Deck Gallery — Page 4", SLUG)),
        }}
      />
      <GalleryCategoryPage
        category="Pool Deck Designs"
        heading="Pool Deck Designs — Page 4"
        intro="Travertine, flagstone and custom decking that frames every Houston Cool Pool."
        images={images}
        prevHref="/pool-deck-3"
        prevLabel="Pool Deck Designs — Page 3"
        nextHref="/outdoor-structures-gallery-1"
        nextLabel="Outdoor Structures"
      />
    </>
  );
}
