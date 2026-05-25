import type { Metadata } from "next";
import { buildPageMetadata } from "../lib/business";
import { Hero } from "./components/home/Hero";
import { About } from "./components/home/About";
import { Services } from "./components/home/Services";
import { CommunityInvolvement } from "./components/home/CommunityInvolvement";
import { VideoShowcase } from "./components/home/VideoShowcase";
import { Testimonials } from "./components/home/Testimonials";
import { BlogPreview } from "./components/home/BlogPreview";
import { FinalCta } from "./components/home/FinalCta";

export const metadata: Metadata = buildPageMetadata("/");

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CommunityInvolvement />
      <VideoShowcase />
      <Testimonials />
      <BlogPreview />
      <FinalCta />
    </>
  );
}
