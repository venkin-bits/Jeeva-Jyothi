/**
 * BUILD_BRIEF_05 Part A — Documents preview.
 * Homepage teaser only — the actual /documents page is out of scope for
 * this chunk (per PRD.md §5, explicitly out of scope this phase).
 */
export function DocumentsPreview() {
  return (
    <section className="bg-cream">
      <div className="max-w-content mx-auto px-4 py-16 md:py-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <h2 className="font-display font-semibold text-2xl text-ink">
          Our Documents &amp; Certificates
        </h2>
        <a
          href="/documents"
          className="focus-ring inline-block rounded-lg border border-violet-500 text-violet-700 font-display font-medium px-6 py-3 hover:bg-violet-300/10 transition-colors"
        >
          View All
        </a>
      </div>
    </section>
  );
}
