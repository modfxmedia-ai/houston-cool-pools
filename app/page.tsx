import type { Metadata } from "next";
import { buildPageMetadata } from "../lib/business";
import { Hero } from "./components/home/Hero";
import { About } from "./components/home/About";
import { OwnerIntro } from "./components/home/OwnerIntro";
import { Services } from "./components/home/Services";
import { Financing } from "./components/home/Financing";
import { VideoShowcase } from "./components/home/VideoShowcase";
import { BlogPreview } from "./components/home/BlogPreview";
import { BookingForm } from "./components/home/BookingForm";
import { MapLocation } from "./components/home/MapLocation";

export const metadata: Metadata = buildPageMetadata("/");

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Financing />
      <OwnerIntro />
      <VideoShowcase />
      <BlogPreview />
      <BookingForm />
      <MapLocation />
    </>
  );
}
