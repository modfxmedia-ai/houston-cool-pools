import { Hero } from "./_components/Hero";
import { SocialProof } from "./_components/SocialProof";
import { Offer } from "./_components/Offer";
import { Gallery } from "./_components/Gallery";
import { PoolTypes } from "./_components/PoolTypes";
import { WhyChoose } from "./_components/WhyChoose";
import { Testimonials } from "./_components/Testimonials";
import { MeetOwner } from "./_components/MeetOwner";
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
        <PoolTypes />
        <WhyChoose />
        <Testimonials />
        <MeetOwner />
        <Faq />
        <QuoteForm />
      </main>
      <LpFooter />
    </>
  );
}
