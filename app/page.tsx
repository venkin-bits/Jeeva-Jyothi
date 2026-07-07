import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";
import { Story } from "@/components/home/Story";
import { ShortAboutUs } from "@/components/home/ShortAboutUs";
import { CausesIntervention } from "@/components/home/CausesIntervention";
import { VolunteerPanel } from "@/components/home/VolunteerPanel";
import { ProgramPillars } from "@/components/home/ProgramPillars";
import { DocumentsPreview } from "@/components/home/DocumentsPreview";
import { CTABanner } from "@/components/home/CTABanner";

// Home page — complete per SOURCE_OF_TRUTH.md §6 locked flow:
// Hero → Proof strip → Story (+ map) → Short About Us →
// Causes & Intervention → Volunteer panel → Program Pillars →
// Documents preview → CTA banner → Footer
export default function HomePage() {
  return (
    <>
      <main>
        <Header variant="home" />
        <Hero />
        <ProofStrip />
        <Story />
        <ShortAboutUs />
        <CausesIntervention />
        <VolunteerPanel />
        <ProgramPillars />
        <DocumentsPreview />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
