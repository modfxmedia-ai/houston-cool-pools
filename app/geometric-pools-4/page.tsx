import type { Metadata } from "next";
import { GalleryCategoryPage } from "../components/gallery/GalleryCategoryPage";
import { getGalleryImages, galleryJsonLd } from "../../lib/gallery-pages";

const SLUG = "geometric-pools-4";
const TITLE = "Geometric Pool Gallery — Page 4 | Houston Cool Pools";
const DESCRIPTION =
  "More geometric pool designs and photos from Houston Cool Pools. Custom gunite pool builder serving Houston, Tomball, Cypress and Spring TX.";
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
  const images = getGalleryImages(SLUG, "Geometric pool");
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(galleryJsonLd("Geometric Pool Gallery — Page 4", SLUG)),
        }}
      />
      <GalleryCategoryPage
        category="Geometric Pools"
        heading="Geometric Pools — Page 4"
        intro="Clean lines and modern symmetry — sharp, architectural pool designs built for Houston homes."
        images={images}
        prevHref="/geometric-pools-3"
        prevLabel="Geometric Pools — Page 3"
        nextHref="/geometric-pools-5"
        nextLabel="Geometric Pools — Page 5"
      />
    </>
  );
}
