import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

/**
 * BUILD_BRIEF_ABOUT_01 — Section 3, Our Approach.
 * Exactly 5 named approaches, per brief — no additions. Descriptions are
 * explicitly NOT filled with generic filler copy (brief instruction):
 * each is a visibly-marked placeholder awaiting real 1-line copy from the
 * org. Card shell/spacing reuses the ProgramPillars.tsx pattern from the
 * home page (bg-cream border violet-300/40 rounded-xl shadow-sm) and the
 * same 3-per-row / 2-per-row responsive widths, for visual consistency
 * across pages.
 */

interface Approach {
  name: string;
}

const APPROACHES: Approach[] = [
  { name: "Rights Based" },
  { name: "Integrated Community Development" },
  { name: "Social Mobilization" },
  { name: "Child Centered" },
  { name: "Participatory" },
];

export function OurApproach() {
  return (
    <section className="bg-lavender-50">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24">
        <span className="font-body text-xs font-medium uppercase tracking-wide text-muted relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-violet-500">
          Our Approach
        </span>

        <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink mt-4 mb-10">
          How we work
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {APPROACHES.map((approach) => (
            <div
              key={approach.name}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]
                bg-cream border border-violet-300/40 rounded-xl shadow-sm
                p-6 md:p-8 flex flex-col gap-3"
            >
              <PlaceholderBox
                label="[PLACEHOLDER: icon]"
                altText={`Placeholder — icon for ${approach.name} pending`}
                className="w-12 h-12 rounded-full text-xs"
              />
              <h3 className="font-display font-semibold text-lg text-ink">
                {approach.name}
              </h3>
              <p className="font-body text-sm text-muted">
                {/* PLACEHOLDER: 1-line description pending real copy from
                    org — deliberately not filled with generic filler text
                    per BUILD_BRIEF_ABOUT_01 */}
                [PLACEHOLDER: description pending]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
