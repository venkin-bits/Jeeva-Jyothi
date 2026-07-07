"use client";

import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

/**
 * BUILD_BRIEF_01 — Hero, home page only.
 * BUILD_BRIEF_02 Part A — amount input removed; Donate Now stands alone.
 * All copy is an explicit, visibly-labeled placeholder per SOURCE_OF_TRUTH.md
 * §5 — nothing here is real final copy.
 */
export function Hero() {
  return (
    <section className="bg-lavender-50">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text + donate controls */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-ink">
            {/* PLACEHOLDER: exact hero headline pending */}
            Jeeva Jyothi — Placeholder Headline
          </h1>

          <p className="font-body text-lg text-muted max-w-md mx-auto md:mx-0">
            {/* PLACEHOLDER: one-line human-centered mission statement pending */}
            [PLACEHOLDER: mission statement pending]
          </p>

          <div className="flex justify-center md:justify-start">
            {/* Now points to the real /donate page, per BUILD_BRIEF_DONATE_CARD.md */}
            <a
              href="/donate"
              className="focus-ring rounded-lg bg-violet-700 text-cream font-display font-medium px-6 py-3 hover:bg-violet-700/90 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="flex-1 w-full">
          <PlaceholderBox
            label="[PLACEHOLDER: hero image pending]"
            altText="Placeholder — hero image pending"
            className="w-full aspect-[4/3] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
