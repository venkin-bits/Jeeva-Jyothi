import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

/**
 * BUILD_BRIEF_04 Part B — Causes & Intervention.
 * Causes: exactly 2, exact percentages, not invented or rounded.
 * Progress bars pair the fill with a visible numeric label — never
 * color-only, per the accessibility requirement.
 * Intervention: photo placeholder + 2 program-category cards, content
 * copied exactly from the brief, no added copy.
 */

interface Cause {
  title: string;
  percent: number;
}

const CAUSES: Cause[] = [
  { title: "Safe Drinking Water", percent: 70 },
  { title: "Education For Economically Weaker Children", percent: 70 },
];

interface ProgramCategory {
  title: string;
  items: string[];
}

const PROGRAM_CATEGORIES: ProgramCategory[] = [
  {
    title: "Child Care And Protection",
    items: [
      "Safe Drinking Water",
      "Medical Camps",
      "Child Education Support",
      "Creche Services",
    ],
  },
  {
    title: "Child Development & Protection Programs",
    items: [
      "Sexual Reproductive Health Rights for Adolescents",
      "Vocational/Life Improvement Training (Computer Training for Young People)",
    ],
  },
];

function CauseCard({ cause }: { cause: Cause }) {
  return (
    <div className="flex-1 bg-cream border border-violet-300/40 rounded-xl shadow-sm p-6 md:p-8 flex flex-col gap-4">
      <h3 className="font-display font-semibold text-lg text-ink">
        {cause.title}
      </h3>

      <div className="flex flex-col gap-1">
        <div
          role="progressbar"
          aria-valuenow={cause.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${cause.title} progress`}
          className="w-full h-2 rounded-full bg-violet-300/30"
        >
          <div
            className="h-full rounded-full bg-violet-700"
            style={{ width: `${cause.percent}%` }}
          />
        </div>
        {/* Numeric label shown alongside the bar — never color-only */}
        <span className="font-body text-sm text-muted">{cause.percent}%</span>
      </div>

      {/* Now points to the real /donate page, per BUILD_BRIEF_DONATE_CARD.md */}
      <a
        href="/donate"
        className="focus-ring self-start rounded-lg bg-violet-700 text-cream font-display font-medium text-sm px-5 py-2.5 hover:bg-violet-700/90 transition-colors"
      >
        Donate
      </a>
    </div>
  );
}

export function CausesIntervention() {
  return (
    <section className="bg-lavender-100">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24 flex flex-col gap-16">
        {/* Causes */}
        <div className="flex flex-col md:flex-row gap-6">
          {CAUSES.map((cause) => (
            <CauseCard key={cause.title} cause={cause} />
          ))}
        </div>

        {/* Intervention */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 w-full">
            <PlaceholderBox
              label="[PLACEHOLDER: intervention photo pending]"
              altText="Placeholder — intervention photo pending"
              className="w-full aspect-[4/3] rounded-xl"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            {PROGRAM_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="bg-cream border border-violet-300/40 rounded-xl p-6"
              >
                <h3 className="font-display font-semibold text-base text-ink mb-2">
                  {category.title}
                </h3>
                <ul className="font-body text-sm text-muted list-disc list-inside flex flex-col gap-1">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
