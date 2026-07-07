/**
 * BUILD_BRIEF_ABOUT_01 — Section 2, About Us (long-form).
 * Full founding narrative is not yet final copy — content below is a
 * visibly-labeled placeholder that names the real facts it must eventually
 * cover, so review can check completeness later without guessing, matching
 * the pattern used in Story.tsx on the home page.
 */
export function AboutStory() {
  return (
    <section className="bg-lavender-100">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24">
        <span className="font-body text-xs font-medium uppercase tracking-wide text-muted relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-violet-500">
          About Us
        </span>

        <p className="font-body text-base md:text-lg text-ink max-w-2xl mt-4">
          {/* PLACEHOLDER: full founding narrative pending final copy —
              founded 1994, four social activists, Kosappur village, North
              Chennai rag-picking community, supplementary education,
              medical camps, creative camps, street theatre, vocational
              training, job placement, folk arts, sports, child assistance
              booth at Perambur Railway Station */}
          [PLACEHOLDER: full founding narrative pending final copy — founded
          1994, four social activists, Kosappur village, North Chennai
          rag-picking community, supplementary education, medical camps,
          creative camps, street theatre, vocational training, job
          placement, folk arts, sports, child assistance booth at Perambur
          Railway Station]
        </p>
      </div>
    </section>
  );
}
