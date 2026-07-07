/**
 * BUILD_BRIEF_ABOUT_01 — Section 4, Our Mission.
 * Exactly these 6 items, per brief — no invented additions.
 *
 * IMPORTANT: the old site's separate "Objectives" section near-duplicated
 * this list. Per the brief's explicit PRD recommendation, that content is
 * merged into this single Mission section rather than rebuilt as its own
 * block — do not add an "Objectives" section elsewhere on this page.
 */

const MISSION_ITEMS: string[] = [
  "Eliminate child labour",
  "Support marginalized communities",
  "Protect/promote rights",
  "Support differently-abled",
  "Gather unorganized workers",
  "Build alliances",
];

export function OurMission() {
  return (
    <section className="bg-lavender-100">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24">
        <span className="font-body text-xs font-medium uppercase tracking-wide text-muted relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-violet-500">
          Our Mission
        </span>

        <ul className="mt-8 max-w-2xl flex flex-col gap-4">
          {MISSION_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-2 h-2 w-2 rounded-full bg-violet-500 shrink-0"
              />
              <span className="font-body text-base md:text-lg text-ink">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
