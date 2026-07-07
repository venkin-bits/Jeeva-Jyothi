/**
 * BUILD_BRIEF_03 Part B — Program Pillars section.
 * Content is figure-led only, using exactly the data given in the brief —
 * no invented descriptions, and deliberately not repeating the Story
 * section's founding narrative.
 *
 * Layout: flex-wrap with justify-center, 3-per-row on desktop (lg+),
 * 2-per-row on tablet (sm-md), stacked full-width on mobile. Chosen over a
 * strict CSS grid so the last row (2 cards) centers naturally instead of
 * left-aligning with a gap — gives the "3+2" pattern the brief asked for.
 */

interface Pillar {
  name: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    name: "Children",
    description:
      "5 Supplementary Education centers, ~55 children currently in Day Care Centres, 550+ children touched by shelter homes to date.",
  },
  {
    name: "Women",
    description: "450+ Self-Help Groups supported.",
  },
  {
    name: "Environment",
    description: "950 mangrove saplings planted in Pulicat.",
  },
  {
    name: "Disability",
    description: "Community-Based Rehabilitation (CBR) assistance.",
  },
  {
    name: "Unorganized Labor",
    description: "1,500+ workers registered.",
  },
];

export function ProgramPillars() {
  return (
    <section className="bg-lavender-100">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-wrap justify-center gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.name}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]
                bg-cream border border-violet-300/40 rounded-xl shadow-sm
                p-6 md:p-8 flex flex-col gap-2"
            >
              <h3 className="font-display font-semibold text-lg text-ink">
                {pillar.name}
              </h3>
              <p className="font-body text-sm text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
