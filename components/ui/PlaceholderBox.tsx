interface PlaceholderBoxProps {
  /** Shown as visible on-page text, not just alt text — makes the
   * placeholder state impossible to miss during review. */
  label: string;
  altText: string;
  className?: string;
}

/**
 * DESIGN.md §5 media strategy: no real photo files exist yet. Every image
 * slot uses a labeled placeholder mapped to a real activity caption, and is
 * swap-ready — once a real file lands, this becomes a one-line component
 * swap with no layout changes needed.
 *
 * Flat warm-gray/violet-tinted fill only — no gradients, per palette rule.
 */
export function PlaceholderBox({ label, altText, className = "" }: PlaceholderBoxProps) {
  return (
    <div
      role="img"
      aria-label={altText}
      className={`flex items-center justify-center bg-violet-300/20 border border-violet-300/40 text-center p-6 ${className}`}
    >
      <span className="font-body text-sm text-muted">{label}</span>
    </div>
  );
}
