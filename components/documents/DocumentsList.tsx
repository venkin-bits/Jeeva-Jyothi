import { DOCUMENTS } from "@/data/documents";

/**
 * BUILD_BRIEF_DOCUMENTS — hairline-divided list, no card backgrounds.
 * Phase 1 rule (SOURCE_OF_TRUTH.md §1 rule 0): plain/functional, simple
 * utility list rather than a decorative component.
 *
 * Each "View" link is a PLACEHOLDER — real PDF files aren't uploaded yet.
 */
export function DocumentsList() {
  return (
    <div className="flex flex-col">
      {DOCUMENTS.map((doc, i) => (
        <div
          key={doc.name}
          className={`flex items-center justify-between gap-4 py-4 ${
            i !== 0 ? "border-t border-violet-300/40" : ""
          }`}
        >
          <span className="font-body text-sm md:text-base text-ink">
            {doc.name}
          </span>
          {/* PLACEHOLDER: real PDF not yet uploaded — links to # for now */}
          <a
            href={doc.href}
            className="focus-ring shrink-0 font-body text-sm font-medium text-violet-700 hover:text-violet-700/80 px-3 py-2 -mr-3"
          >
            View
          </a>
        </div>
      ))}
    </div>
  );
}
