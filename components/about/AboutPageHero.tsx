import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

/**
 * BUILD_BRIEF_ABOUT_01 — Section 1, Page hero.
 * Title + banner image placeholder. Kept as its own stacked block (title
 * above banner) rather than text-over-image, since PlaceholderBox already
 * renders its own visible label — overlaying a second heading on top of it
 * would fight for the same space. Once a real banner image lands, this can
 * become a text-over-image treatment in a one-line swap.
 */
export function AboutPageHero() {
  return (
    <section className="bg-lavender-50">
      <div className="max-w-content mx-auto px-4 pt-12 pb-10 md:pt-16 md:pb-14 flex flex-col items-center gap-8">
        <h1 className="font-display font-semibold text-4xl md:text-5xl text-ink text-center">
          About Us
        </h1>

        <PlaceholderBox
          label="[PLACEHOLDER: volunteer-themed banner image pending]"
          altText="Placeholder — volunteer-themed banner image pending"
          className="w-full aspect-[21/9] rounded-xl"
        />
      </div>
    </section>
  );
}
