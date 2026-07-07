import { PlaceholderBox } from "@/components/ui/PlaceholderBox";

/**
 * BUILD_BRIEF_ABOUT_01 — Section 5, Trustees.
 * Exactly these 5 people/roles, per brief. Photos are all pending — every
 * card gets its own labeled PlaceholderBox rather than one generic notice,
 * so it's obvious per-person which photo is still missing during review.
 */

interface Trustee {
  name: string;
  role: string;
}

const TRUSTEES: Trustee[] = [
  { name: "Susai Raj", role: "Founder & Director" },
  { name: "Andrew Sesuraj", role: "Trustee" },
  { name: "Vijay Kumar", role: "Trustee" },
  { name: "Suja", role: "Trustee" },
  { name: "Rosi", role: "Trustee" },
];

export function Trustees() {
  return (
    <section className="bg-lavender-50">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24">
        <span className="font-body text-xs font-medium uppercase tracking-wide text-muted relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-violet-500">
          Trustees
        </span>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {TRUSTEES.map((trustee) => (
            <div
              key={trustee.name}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(20%-1.2rem)]
                bg-cream border border-violet-300/40 rounded-xl shadow-sm
                p-6 flex flex-col items-center text-center gap-3"
            >
              <PlaceholderBox
                label="[PLACEHOLDER: photo]"
                altText={`Placeholder — photo of ${trustee.name} pending`}
                className="w-28 h-28 rounded-full text-xs"
              />
              <h3 className="font-display font-semibold text-base text-ink">
                {trustee.name}
              </h3>
              <p className="font-body text-sm text-muted">{trustee.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
