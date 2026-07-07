/**
 * BUILD_BRIEF_02 Part B — Proof/Activity strip.
 * Sits directly under Hero in the locked homepage flow:
 * Hero → Proof strip → Story → Program pillars → Documents → CTA.
 *
 * Static content, no CMS — figures are locked exactly per the brief, not
 * rounded or supplemented. No loading/empty state needed (not data-driven),
 * but this is worth restating explicitly rather than skipping silently,
 * per SOURCE_OF_TRUTH.md §1 rule 4.
 *
 * Layout: row of 5 on desktop (md+). On mobile/tablet, wraps 2-per-row
 * (2 + 2 + 1) rather than stacking fully vertically — keeps the strip
 * feeling like one connected data block instead of a long scroll.
 *
 * Background: --color-lavender-100, to visually separate this strip from
 * the Hero above it (which stays on --color-lavender-50).
 * Numbers: --color-violet-700 — checked against lavender-100, contrast
 * ratio ≈ 6.9:1, passes WCAG AA (4.5:1) for normal text. --color-ink would
 * also pass (≈12.3:1) but violet-700 was chosen to keep the brand accent
 * visible here rather than an all-neutral block.
 */

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "1994", label: "Founded" },
  { value: "5", label: "Focus areas" },
  { value: "450+", label: "Self-Help Groups supported" },
  { value: "1,500+", label: "Unorganized workers registered" },
  { value: "950", label: "Mangrove saplings planted" },
];

export function ProofStrip() {
  return (
    <section className="bg-lavender-100">
      <div className="max-w-content mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1 last:col-span-2 md:last:col-span-1"
            >
              <span className="font-body font-medium text-3xl md:text-4xl tabular-nums text-violet-700">
                {stat.value}
              </span>
              <span className="font-body text-sm text-muted max-w-[10rem]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
