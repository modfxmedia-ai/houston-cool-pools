export type NavLink = { label: string; href: string };

export type NavGroup = {
  label: string;
  href: string;
  /** When set, renders as a mega dropdown. Items are scraped from the live pool-information.html page. */
  columns?: { heading?: string; links: NavLink[] }[];
  /** Optional prominent CTA rendered at the bottom of the dropdown menu (desktop & mobile). */
  cta?: NavLink;
};

const BOOK_APPOINTMENT: NavLink = {
  label: "Book Appointment",
  href: "/#book-appointment",
};

export const PRIMARY_NAV: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    columns: [
      {
        heading: "Get To Know Us",
        links: [
          { label: "Meet The Team", href: "/about/team" },
        ],
      },
    ],
    cta: BOOK_APPOINTMENT,
  },
  { label: "Why Choose HCP", href: "/whychoosehcp" },
  { label: "Pool Gallery", href: "/gallery" },
  {
    label: "Pool Information",
    href: "/pool-information",
    columns: [
      {
        heading: "Plan Your Pool",
        links: [
          { label: "Pool Pricing & Packages", href: "/pricing-45k-55k" },
          { label: "Financing Options", href: "/poolfinancing" },
          { label: "Choose The Right Builder", href: "/how-to-choose-a-pool-builder" },
          { label: "Pool Specifications", href: "/pool-specifications" },
          { label: "Custom Home Builder", href: "/custom-home-toc" },
        ],
      },
      {
        heading: "Design & Build",
        links: [
          { label: "Pool Types & Styles", href: "/pool-types" },
          { label: "Custom Pool Features", href: "/custom-pool-features-1" },
          { label: "Pool Construction Sequence", href: "/construction-sequence-1" },
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
        heading: "Pool Owners",
        links: [
          { label: "Severe Weather Guide", href: "/severe-weather" },
          { label: "Reviews & Testimonials", href: "/customer-reviews-testimonials" },
        ],
      },
    ],
    cta: BOOK_APPOINTMENT,
  },
  { label: "Get a Free Quote", href: "/contact" },
];

export const PHONE_DISPLAY = "(281) 645-6631";
export const PHONE_HREF = "tel:+12816456631";
export const EMAIL_DISPLAY = "info@houstoncoolpools.com";
export const EMAIL_HREF = "mailto:info@houstoncoolpools.com";
export const SMS_HREF = "sms:+12816456631";
export const QUOTE_HREF = "/contact";
