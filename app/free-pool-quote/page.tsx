import { Hero } from "./_components/Hero";
import { SocialProof } from "./_components/SocialProof";
import { Offer } from "./_components/Offer";
import { Gallery } from "./_components/Gallery";
import { PricingPreview } from "./_components/PricingPreview";
import { PoolTypes } from "./_components/PoolTypes";
import { BeforeAfter } from "./_components/BeforeAfter";
import { WhyChoose } from "./_components/WhyChoose";
import { ProcessSteps } from "./_components/ProcessSteps";
import { Testimonials } from "./_components/Testimonials";
import { MeetOwner } from "./_components/MeetOwner";
import { AreasWeServe } from "./_components/AreasWeServe";
import { Faq } from "./_components/Faq";
import { QuoteForm } from "./_components/QuoteForm";
import { LpFooter } from "./_components/LpFooter";

export default function FreePoolQuotePage() {
  return (
    <>
      <main>
        <Hero />
        <SocialProof />
        <Offer />
        <Gallery />
        <PricingPreview />
        <PoolTypes />
        <BeforeAfter />
        <WhyChoose />
        <ProcessSteps />
        <Testimonials />
        <MeetOwner />
        <AreasWeServe />
        <Faq />
        <QuoteForm />
      </main>
      <LpFooter />
    </>
  );
}
