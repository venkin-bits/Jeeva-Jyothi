import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { ProofStrip } from "@/components/home/ProofStrip";

// Home page — Chunk 1 (Header + Hero) + Chunk 2 (Proof strip) built so far.
// Remaining sections per PRD.md §4 (Story, Program pillars, Documents
// preview, CTA banner, Footer) are out of scope until their own build
// briefs land.
export default function HomePage() {
  return (
    <main>
      <Header variant="home" />
      <Hero />
      <ProofStrip />
    </main>
  );
}
