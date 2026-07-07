"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Drives the home-header utility bar per BUILD_BRIEF_01:
 * - hides on scroll DOWN past ~40px
 * - reappears immediately on ANY scroll up
 * - ignores deltas under ~8px so it doesn't flicker on tiny movements
 * - rAF-throttled
 *
 * `forceShow()` is exposed separately so the component can reveal the bar
 * when focus lands inside it (accessibility requirement — never let focus
 * land on a hidden element).
 */

const SCROLL_THRESHOLD = 40;
const DELTA_IGNORE = 8;

export function useUtilityBarScroll() {
  const [isHidden, setIsHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;
      const pastThreshold = currentY > SCROLL_THRESHOLD;

      if (Math.abs(delta) >= DELTA_IGNORE) {
        if (delta > 0 && pastThreshold) {
          setIsHidden(true);
        } else if (delta < 0) {
          setIsHidden(false);
        }
        lastY.current = currentY;
      }

      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const forceShow = () => setIsHidden(false);

  return { isHidden, forceShow };
}
