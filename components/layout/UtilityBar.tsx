"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface UtilityBarProps {
  isHidden: boolean;
  onFocusIn: () => void;
}

/**
 * BUILD_BRIEF_01 — Row 1 (utility bar), home variant only.
 * - transform/opacity only, never height/display, to avoid layout jank
 * - reappears on focus entering the bar (a11y: never leave focus stranded
 *   on a hidden element)
 * - respects prefers-reduced-motion by dropping the translate and using
 *   opacity alone
 */
export function UtilityBar({ isHidden, onFocusIn }: UtilityBarProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const transformClass = prefersReducedMotion
    ? ""
    : isHidden
      ? "-translate-y-full"
      : "translate-y-0";

  return (
    <div
      onFocus={onFocusIn}
      className={[
        "w-full bg-violet-700 text-cream text-sm font-body",
        "transition-[opacity,transform] duration-200 ease-out",
        transformClass,
        isHidden ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      aria-hidden={isHidden}
    >
      <div className="max-w-content mx-auto px-4 py-2 text-center">
        {/* PLACEHOLDER: Donate ticker text — exact copy pending confirmation */}
        <span>
          Every ₹500 funds a month of school supplies for one child →
        </span>
      </div>
    </div>
  );
}
