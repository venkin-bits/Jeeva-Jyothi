import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

/**
 * BUILD_BRIEF_ABOUT_01 — Section 7, Our Donors Around The World.
 * Exactly this list of 16 names, per brief — do not add or invent donors.
 *
 * FLAGGED, NOT RESOLVED: "SOS Children's Villages" and "Terre des hommes"
 * appeared in earlier source material but are unverified against confirmed
 * materials. Per the brief, they are deliberately left OUT of DONORS below
 * until the org confirms them — do not add them here without that
 * confirmation.
 */

const DONORS: string[] = [
  "GlobalGiving",
  "Andheri Hilfe",
  "Child Line 1098",
  "Cordaid",
  "EU",
  "UNICEF",
  "American Jewish World Service",
  "Caritas India",
  "Caritas Germany",
  "MIUSA",
  "NCLP",
  "Smile Foundation",
  "Save the Children",
  "Arpan for Education",
  "Theirworld",
  "Cesvi",
];

export function Donors() {
  return (
    <section className="bg-lavender-50">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24">
        <span className="font-body text-xs font-medium uppercase tracking-wide text-muted relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-violet-500">
          Our Donors Around The World
        </span>

        <div className="flex flex-wrap gap-6 mt-10">
          {DONORS.map((donor) => (
            <PlaceholderBox
              key={donor}
              label={donor}
              altText={`Placeholder — ${donor} logo pending`}
              className="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(25%-1.125rem)] aspect-[3/2] rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
