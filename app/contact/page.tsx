import type { Metadata } from "next";
import { buildPageMetadata } from "../../lib/business";
import { ContactHero } from "../components/contact/ContactHero";
import { ContactFormSection } from "../components/contact/ContactFormSection";
import { WhyChooseHighlights } from "../components/contact/WhyChooseHighlights";

export const metadata: Metadata = buildPageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <WhyChooseHighlights />
    </>
  );
}
