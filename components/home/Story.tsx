import { ChennaiLocationMap } from "./ChennaiLocationMap";

/**
 * BUILD_BRIEF_03 Part A — Our Story section.
 * Sits after ProofStrip in the locked homepage flow.
 *
 * Layout choice: text + CTA on the left, map on the right (desktop);
 * stacks text-then-map on mobile, following standard reading order.
 */
export function Story() {
  return (
    <section className="bg-lavender-50">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Text + CTA */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <span className="font-body text-xs font-medium uppercase tracking-wide text-muted relative inline-block pb-2 mx-auto md:mx-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-violet-500 after:mx-auto md:after:mx-0">
            Our Story
          </span>

          <p className="font-body text-base md:text-lg text-ink max-w-md mx-auto md:mx-0">
            {/* PLACEHOLDER: founding story copy pending final write-up —
                1994, four social activists, Kosappur village, North Chennai
                rag-picking community */}
            [PLACEHOLDER: founding story pending — 1994, four social
            activists, Kosappur village, North Chennai]
          </p>

          <div>
            {/* PLACEHOLDER: link pending */}
            <a
              href="#"
              className="focus-ring inline-block rounded-lg border border-violet-500 text-violet-700 font-display font-medium px-6 py-3 hover:bg-violet-300/10 transition-colors"
            >
              Join our society
            </a>
          </div>
        </div>

        {/* Chennai interactive location map */}
        <div className="flex-1 w-full">
          <ChennaiLocationMap />
        </div>
      </div>
    </section>
  );
}
