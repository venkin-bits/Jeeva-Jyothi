"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * BUILD_BRIEF_GALLERY.
 *
 * No real photos exist in `public/images/gallery/` — checked, that
 * directory doesn't exist in this project yet. Using labeled placeholder
 * boxes in a representative grid instead of stock photos, per the brief.
 *
 * Per the brief: "no captions or category filtering exists in the current
 * source content... do not invent category labels." So these are plain,
 * uncategorized, generically-numbered placeholders — not fabricated
 * specific captions. Once real photos land, each placeholder becomes a
 * one-line swap to a real <img>, and `loading="lazy"` should be added to
 * every image below the fold at that point (can't apply a lazy-loading
 * attribute meaningfully to a div placeholder, so this is noted here
 * rather than faked).
 */

const PLACEHOLDER_COUNT = 32;
const PHOTOS = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
  id: i,
  label: `Placeholder — event photo ${i + 1} pending`,
}));

function Lightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    // Swipe threshold — avoid triggering on tiny accidental drags
    if (deltaX > 50) onPrev();
    else if (deltaX < -50) onNext();
    touchStartX.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={PHOTOS[index].label}
      className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close lightbox"
        className="focus-ring absolute top-4 right-4 text-cream p-2"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={onPrev}
        aria-label="Previous photo"
        className="focus-ring hidden sm:block absolute left-4 text-cream p-2"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="w-full max-w-2xl aspect-square mx-auto flex items-center justify-center bg-violet-300/20 border border-violet-300/40 rounded-lg mx-4">
        <span className="font-body text-sm text-cream text-center px-6">
          {PHOTOS[index].label}
        </span>
      </div>

      <button
        onClick={onNext}
        aria-label="Next photo"
        className="focus-ring hidden sm:block absolute right-4 text-cream p-2"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Mobile: tap left/right half of image area to advance, in addition to swipe */}
      <div className="sm:hidden absolute inset-0 flex" aria-hidden="true">
        <button
          onClick={onPrev}
          aria-label="Previous photo"
          className="flex-1 focus-ring"
        />
        <button
          onClick={onNext}
          aria-label="Next photo"
          className="flex-1 focus-ring"
        />
      </div>
    </div>
  );
}

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goPrev = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length)),
    []
  );
  const goNext = useCallback(
    () => setSelectedIndex((i) => (i === null ? null : (i + 1) % PHOTOS.length)),
    []
  );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {PHOTOS.map((photo) => (
          <button
            key={photo.id}
            onClick={() => setSelectedIndex(photo.id)}
            aria-label={`Open ${photo.label} in lightbox`}
            className="focus-ring aspect-square bg-violet-300/20 border border-violet-300/40 rounded-lg flex items-center justify-center p-3 hover:bg-violet-300/30 transition-colors"
          >
            <span className="font-body text-xs text-muted text-center">
              {photo.label}
            </span>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
