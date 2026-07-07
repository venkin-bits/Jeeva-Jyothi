import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

// Gallery page — uses Header(simple variant) as-is, not modified.
export default function GalleryPage() {
  return (
    <>
      <main>
        <Header variant="simple" />
        <section className="bg-lavender-50">
          <div className="max-w-content mx-auto px-4 py-16 md:py-24">
            <h1 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-2">
              Gallery
            </h1>
            <p className="font-body text-muted mb-10">
              Jeeva Jyothi activities at a glance.
            </p>
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
