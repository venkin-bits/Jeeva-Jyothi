/**
 * BUILD_BRIEF_04 Part A — Short About Us.
 * Facts only (1994 founding, Kosappur village, rag-picking community
 * children, Perambur Railway Station booth) — not rewritten or embellished.
 *
 * FLAG, not resolved: source material has two conflicting "children
 * reached" figures (15,000+ and 30,000+). Per the brief, this stays as an
 * explicit visible placeholder until the org confirms which is correct —
 * do not pick one arbitrarily.
 */
export function ShortAboutUs() {
  return (
    <section className="bg-lavender-50">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24 flex flex-col gap-4 max-w-2xl">
        <span className="font-body text-xs font-medium uppercase tracking-wide text-muted relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-violet-500">
          About Us
        </span>

        <p className="font-body text-base md:text-lg text-ink">
          Jeeva Jyothi began in 1994, when four social activists came
          together in Kosappur village, North Chennai, to work with
          children from the rag-picking community.
        </p>

        <p className="font-body text-base md:text-lg text-ink">
          That early work grew into a children&apos;s assistance booth at
          Perambur Railway Station, and from there into the programs Jeeva
          Jyothi runs today.{" "}
          <span className="text-muted">
            {/* PLACEHOLDER: children-reached figure pending org
                confirmation — two conflicting numbers exist in source
                material, 15,000+ and 30,000+ */}
            [PLACEHOLDER: children-reached figure pending org
            confirmation — two conflicting numbers exist in source
            material, 15,000+ and 30,000+]
          </span>
        </p>
      </div>
    </section>
  );
}
