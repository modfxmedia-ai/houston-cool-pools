export type NavLink = { label: string; href: string };

export type NavGroup = {
  label: string;
  href: string;
  /** When set, renders as a mega dropdown. Items are scraped from the live pool-information.html page. */
  columns?: { heading?: string; links: NavLink[] }[];
};

export const PRIMARY_NAV: NavGroup[] = [
  { label: "Home", href: "/" },
  { label: "Why Choose HCP", href: "/whychoosehcp" },
  { label: "Galleries", href: "/gallery" },
  {
    label: "Pool Information",
    href: "/pool-information",
    columns: [
      {
        heading: "Getting Started",
        links: [
          { label: "Choose The Right Builder", href: "/how-to-choose-a-pool-builder" },
          { label: "Pool Specifications", href: "/pool-specifications" },
          { label: "Pool Pricing", href: "/pricing-45k-55k" },
          { label: "Financing Available", href: "/poolfinancing" },
          { label: "Custom Home Builder", href: "/custom-home-toc" },
        ],
      },
      {
        heading: "Design & Build",
        links: [
          { label: "Pool Features", href: "/custom-pool-features-1" },
          { label: "Pool Sequence", href: "/construction-sequence-1" },
          { label: "Pool Remodel", href: "/pool-remodel" },
          { label: "Pool Articles", href: "/swimming-pool-articles" },
        ],
      },
      {
        heading: "Learn",
        links: [
          { label: "Pool School", href: "/pool-school-1" },
          { label: "FAQs", href: "/faqs1" },
          { label: "Pool Terms", href: "/pooldefinitions" },
          { label: "Pool Glossary", href: "/glossary1" },
          { label: "Equipment Manuals", href: "/pool-equipment-manuals" },
          { label: "Product Brochures", href: "/product-brochures" },
        ],
      },
      {
        heading: "Owners",
        links: [
          { label: "Your Pool and Severe Weather", href: "/severe-weather" },
          { label: "Testimonials & Reviews", href: "/customer-reviews-testimonials" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const PHONE_DISPLAY = "(281) 645-6631";
export const PHONE_HREF = "tel:+12816456631";
export const EMAIL_DISPLAY = "info@houstoncoolpools.com";
export const EMAIL_HREF = "mailto:info@houstoncoolpools.com";
export const SMS_HREF = "sms:+12816456631";
export const QUOTE_HREF = "/contact";
