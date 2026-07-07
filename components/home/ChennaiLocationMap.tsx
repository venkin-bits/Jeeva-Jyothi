"use client";

import { useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * BUILD_BRIEF_03 Part A (revised) — Chennai interactive location matrix.
 * Replaces the earlier static dotted-map SVG plan. Hand-built, self-contained,
 * no external map API or new npm dependency.
 *
 * Locations and fields (name/type/zone) are exactly as given in the brief —
 * no invented descriptions. The detail card only shows what was provided.
 *
 * Pin positions (top/left %) are PLACEHOLDER: approximate/illustrative
 * placement on an abstract shape representing the service area — these are
 * NOT measured against an accurate Chennai map and must not be read as
 * geographically precise.
 *
 * Colors: only locked tokens. Unselected pins use ink at reduced opacity;
 * selected pin and detail-card accent use violet-700; card surfaces use
 * cream; texture dots use muted at reduced opacity via color-mix().
 *
 * Pulse animation on the selected pin (Tailwind's built-in `animate-pulse`)
 * is skipped entirely when prefers-reduced-motion is set.
 */

interface Location {
  id: string;
  name: string;
  type: string;
  zone: string;
  pin: { top: string; left: string };
}

const LOCATIONS: Location[] = [
  {
    id: "hq",
    name: "Headquarters & Registered Office",
    type: "Branch Office",
    zone: "Madhavaram",
    pin: { top: "40%", left: "45%" },
  },
  {
    id: "ananda-illam",
    name: "Ananda Illam Shelter Home",
    type: "Shelter Home",
    zone: "Budur (North Outer)",
    pin: { top: "16%", left: "58%" },
  },
  {
    id: "periyar-nagar",
    name: "Periyar Nagar Day Care Center",
    type: "Day Care Center",
    zone: "Madhavaram Region",
    pin: { top: "48%", left: "28%" },
  },
  {
    id: "kattunayakan-nagar",
    name: "Kattunayakan Nagar Center",
    type: "Day Care Center",
    zone: "Ambattur Border",
    pin: { top: "62%", left: "18%" },
  },
  {
    id: "thiruvanmiyur",
    name: "Thiruvanmiyur Boys Shelter",
    type: "Shelter Home",
    zone: "Adyar/Sholinganallur Track",
    pin: { top: "80%", left: "62%" },
  },
];

// Subtle dot-matrix texture nodding to the original dotted-map concept,
// built with CSS only — muted token at reduced opacity via color-mix().
const dotTextureStyle: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(color-mix(in srgb, var(--color-muted) 35%, transparent) 1.5px, transparent 1.5px)",
  backgroundSize: "14px 14px",
};

export function ChennaiLocationMap() {
  const [selectedId, setSelectedId] = useState<string>(LOCATIONS[0].id);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Static, always-populated dataset — no loading/empty state applies, but
  // this fallback exists per the "handle every state explicitly" rule.
  const selected = LOCATIONS.find((loc) => loc.id === selectedId) ?? LOCATIONS[0];

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Abstract map with clickable pins */}
      <div
        className="relative flex-1 aspect-square md:aspect-[4/5] rounded-3xl border border-violet-300/40 bg-lavender-50 overflow-hidden"
        style={dotTextureStyle}
        role="group"
        aria-label="Jeeva Jyothi service area map — click a pin to see location details"
      >
        {LOCATIONS.map((loc) => {
          const isSelected = loc.id === selectedId;
          return (
            <button
              key={loc.id}
              type="button"
              onClick={() => setSelectedId(loc.id)}
              aria-pressed={isSelected}
              aria-label={`${loc.name} — ${loc.type}, ${loc.zone}`}
              className={[
                "focus-ring absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors",
                isSelected
                  ? `w-4 h-4 bg-violet-700 ring-4 ring-violet-300/50 ${
                      !prefersReducedMotion ? "animate-pulse" : ""
                    }`
                  : "w-3 h-3 bg-ink/40 hover:bg-ink/60",
              ].join(" ")}
              style={{ top: loc.pin.top, left: loc.pin.left }}
            />
          );
        })}
      </div>

      {/* Detail card + quick-switch list */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="bg-cream border border-violet-700/30 rounded-xl p-6">
          <h3 className="font-display font-semibold text-lg text-ink">
            {selected.name}
          </h3>
          <p className="font-body text-sm text-muted mt-1">{selected.type}</p>
          <p className="font-body text-sm text-muted">{selected.zone}</p>
        </div>

        <div className="flex flex-col gap-2">
          {LOCATIONS.map((loc) => {
            const isSelected = loc.id === selectedId;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedId(loc.id)}
                aria-pressed={isSelected}
                className={[
                  "focus-ring text-left rounded-lg px-4 py-2 border transition-colors font-body text-sm",
                  isSelected
                    ? "border-violet-700 text-violet-700 bg-violet-300/10"
                    : "border-violet-300/40 text-ink hover:bg-violet-300/10",
                ].join(" ")}
              >
                {loc.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
