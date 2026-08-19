"use client";

import { InfoHero } from "./InfoHero";
import { ReviewsWidget } from "../ReviewsWidget";

export function TestimonialsClient() {
  return (
    <>
      <InfoHero
        eyebrow="Customer Stories"
        title="Reviews & Testimonials"
        subtitle="Every 5-star review below comes from a real Houston Cool Pools customer. We build our reputation one pool at a time."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Pool Information", href: "/pool-information" },
          { label: "Customer Reviews" },
        ]}
        backgroundImage="/images/gallery/hd/family-1.jpg"
        backgroundAlt="Houston family enjoying their Houston Cool Pools backyard"
      />

      <ReviewsWidget />
    </>
  );
}


