/**
 * BUILD_BRIEF_05 Part B — CTA banner.
 * Background photo not provided — uses the same labeled-placeholder pattern
 * as the Hero and Intervention photo slots, per SOURCE_OF_TRUTH.md §5.
 */
export function CTABanner() {
  return (
    <section
      role="img"
      aria-label="Placeholder — group photo pending"
      className="relative bg-violet-700"
    >
      {/* PLACEHOLDER: group photo pending — flat violet-700 fill stands in
          for the background image, no gradient/overlay per palette rule */}
      <div className="max-w-content mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center gap-6">
        <h2 className="font-display font-semibold text-2xl md:text-3xl text-cream">
          Make A Difference Today! Become A Volunteer
        </h2>

        {/* PLACEHOLDER: link to "#" — payment gateway not yet confirmed,
            same placeholder as other Donate buttons */}
        <a
          href="#"
          className="focus-ring rounded-lg bg-cream text-violet-700 font-display font-medium px-8 py-3 hover:bg-cream/90 transition-colors"
        >
          Donate
        </a>
      </div>
    </section>
  );
}
