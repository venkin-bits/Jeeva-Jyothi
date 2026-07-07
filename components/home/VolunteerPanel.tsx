/**
 * BUILD_BRIEF_04 Part C — Volunteer/Collaborate/Donate panel.
 * Exactly 3 cards, content per the brief. "Collaborate" includes the
 * short descriptor given in the brief itself; the other two have no
 * descriptor provided, so none is invented for them.
 *
 * Icons are hand-drawn inline SVGs (matching the pattern already used in
 * Header.tsx for the hamburger/close icons) — no new icon library
 * dependency introduced.
 */

interface PanelCard {
  title: string;
  description?: string;
  icon: React.ReactNode;
}

const ICON_PROPS = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true as const,
};

const CARDS: PanelCard[] = [
  {
    title: "Collaborate",
    description: "Resource / skill / fund contribution",
    icon: (
      <svg {...ICON_PROPS}>
        <path
          d="M8 12l3 3 5-6M4 7l4-3 4 3v10l-4 3-4-3V7zM12 7l4-3 4 3v10l-4 3-4-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Become a Volunteer",
    icon: (
      <svg {...ICON_PROPS}>
        <path
          d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 3.5 1.2 4 2 0.5-0.8 2-2 4-2 4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Give Donation",
    icon: (
      <svg {...ICON_PROPS}>
        <path
          d="M12 2v4M8 6h8l1.5 4.5H6.5L8 6zM6.5 10.5h11L16 20H8l-1.5-9.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function VolunteerPanel() {
  return (
    <section className="bg-lavender-50">
      <div className="max-w-content mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col sm:flex-row gap-6">
          {CARDS.map((card) => (
            // PLACEHOLDER: form/link pending — confirm with org whether
            // Volunteer/Collaborate forms exist today and where submissions
            // should go
            <a
              key={card.title}
              href="#"
              className="focus-ring flex-1 bg-cream border border-violet-300/40 rounded-xl shadow-sm p-6 md:p-8 flex flex-col items-center text-center gap-3 hover:border-violet-500/60 transition-colors"
            >
              <span className="text-violet-700">{card.icon}</span>
              <h3 className="font-display font-semibold text-base text-ink">
                {card.title}
              </h3>
              {card.description && (
                <p className="font-body text-sm text-muted">
                  {card.description}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
