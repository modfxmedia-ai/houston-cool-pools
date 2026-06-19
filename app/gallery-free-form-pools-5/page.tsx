import type { Metadata } from "next";
import { GalleryCategoryPage } from "../components/gallery/GalleryCategoryPage";
import { getGalleryImages, galleryJsonLd } from "../../lib/gallery-pages";

const SLUG = "gallery-free-form-pools-5";
const TITLE = "Free Form Pool Gallery — Page 5 | Houston Cool Pools";
const DESCRIPTION =
  "More free form pool designs and photos from Houston Cool Pools. Custom gunite pool builder serving Houston, Tomball, Cypress and Spring TX.";
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
  const images = getGalleryImages(SLUG, "Free form pool");
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryJsonLd("Free Form Pool Gallery — Page 5", SLUG)),
        }}
      />
      <GalleryCategoryPage
        category="Free Form Pools"
        heading="Free Form Pools — Page 5"
        intro="Organic, lagoon-style pools with curved lines that flow naturally into your Houston backyard."
        images={images}
        prevHref="/gallery-free-form-pools-4"
        prevLabel="Free Form Pools — Page 4"
        nextHref="/geometric-pools-1"
        nextLabel="Geometric Pools"
      />
    </>
  );
}
