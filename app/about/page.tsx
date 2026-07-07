import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutPageHero } from "@/components/about/AboutPageHero";
import { AboutStory } from "@/components/about/AboutStory";
import { OurApproach } from "@/components/about/OurApproach";
import { OurMission } from "@/components/about/OurMission";
import { Trustees } from "@/components/about/Trustees";
import { OurHistory } from "@/components/about/OurHistory";
import { Donors } from "@/components/about/Donors";

// About page — BUILD_BRIEF_ABOUT_01, all 7 sections in the required order.
//
// Header's "simple" variant and Footer are both shared, finished components
// now (no longer stubs) — used as-is here, matching the pattern already
// established on app/programs/page.tsx, and neither was modified for this
// page.
export default function AboutPage() {
  return (
    <>
      <main>
        <Header variant="simple" />
        <AboutPageHero />
        <AboutStory />
        <OurApproach />
        <OurMission />
        <Trustees />
        <OurHistory />
        <Donors />
      </main>
      <Footer />
    </>
  );
}
