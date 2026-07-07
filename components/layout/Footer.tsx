/**
 * BUILD_BRIEF_05 Part C — Footer.
 * Content is CONFIRMED (not placeholder) — tagline, links, address, phone,
 * and email are used verbatim, exactly as given in the brief.
 *
 * Policy links (Financial Policy, HR Policy, Procurement Policy) and
 * "Terms And Conditions" / "Privacy Policy" / "Cancellation & Refund
 * Policy" have no destination page built yet — per the brief, these are
 * quiet `#` placeholders, NOT "Coming soon" text (an unfinished shipped
 * state reads worse than a quiet placeholder).
 *
 * "Contact Us" has the same problem for a different reason: it's listed
 * in the confirmed footer content, but the locked 5-page site structure
 * (SOURCE_OF_TRUTH.md §4 — Home/About/Programs/Documents/Gallery) has no
 * Contact page defined at all. Rather than invent a /contact route that
 * isn't in the locked sitemap, it gets the same quiet `#` treatment,
 * flagged here rather than silently assumed.
 *
 * Social icons are hand-drawn inline SVGs, consistent with the rest of the
 * project — no new icon library dependency.
 */

const LINKS_COLUMN = [
  { label: "Financial Policy", href: "#" },
  { label: "Human Resources Policy", href: "#" },
  { label: "Procurement Policy", href: "#" },
  // PLACEHOLDER: no /contact page exists in the locked 5-page site
  // structure — see comment above
  { label: "Contact Us", href: "#" },
];

const IMPORTANT_LINKS_COLUMN = [
  { label: "Terms And Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cancellation & Refund Policy", href: "#" },
];

function SocialIcon({ name }: { name: "facebook" | "instagram" | "whatsapp" }) {
  const paths: Record<typeof name, React.ReactNode> = {
    facebook: (
      <path
        d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V9z"
        fill="currentColor"
      />
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" />
      </>
    ),
    whatsapp: (
      <path
        d="M12 3a9 9 0 00-7.8 13.4L3 21l4.7-1.2A9 9 0 1012 3zm0 2a7 7 0 015.9 10.7l-.2.4.6 2-2-.6-.4.2A7 7 0 1112 5zm-2.4 3.3c-.2 0-.5 0-.6.4-.2.4-.8 1-.8 2.3s.8 2.6 1 2.8c.1.2 1.7 2.6 4.1 3.5 2 .8 2.4.6 2.8.6.4 0 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3-.3-.2-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.4-.5c.1-.1.1-.3.1-.4 0-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4h-.4z"
        fill="currentColor"
      />
    ),
  };

  const labels: Record<typeof name, string> = {
    facebook: "Facebook",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
  };

  return (
    // PLACEHOLDER: actual social media URLs pending
    <a
      href="#"
      aria-label={labels[name]}
      className="focus-ring text-cream hover:text-violet-300 transition-colors"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        {paths[name]}
      </svg>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-content mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-3">
          <span className="font-display font-semibold text-lg text-cream">
            Jeeva Jyothi
          </span>
          <p className="font-body text-sm text-lavender-100/70">
            Jeeva Jyothi was founded in 1994 by four enthusiastic social
            activists who came together to bring ethical changes in the
            lives of the children in difficult circumstances especially
            children in the streets and working children.
          </p>
        </div>

        {/* Links column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display font-medium text-sm text-cream uppercase tracking-wide">
            Links
          </h4>
          {LINKS_COLUMN.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring font-body text-sm text-lavender-100/70 hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Important Links column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display font-medium text-sm text-cream uppercase tracking-wide">
            Important Links
          </h4>
          {IMPORTANT_LINKS_COLUMN.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring font-body text-sm text-lavender-100/70 hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Find Us column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-display font-medium text-sm text-cream uppercase tracking-wide">
            Find Us
          </h4>
          <p className="font-body text-sm text-lavender-100/70">
            No.17A, IInd Cross Street, K.K.R. Nagar, Madhavaram, Chennai-600
            060, Tamil Nadu, India
          </p>
          <a
            href="tel:04447677664"
            className="focus-ring font-body text-sm text-lavender-100/70 hover:text-cream transition-colors"
          >
            044-47677664
          </a>
          <a
            href="mailto:jeevajyothichennai@gmail.com"
            className="focus-ring font-body text-sm text-lavender-100/70 hover:text-cream transition-colors"
          >
            jeevajyothichennai@gmail.com
          </a>

          <div className="flex gap-4 mt-2">
            <SocialIcon name="facebook" />
            <SocialIcon name="instagram" />
            <SocialIcon name="whatsapp" />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-content mx-auto px-4 py-6">
          <p className="font-body text-xs text-lavender-100/50 text-center">
            {/* Dynamic year — never hardcoded */}
            © {new Date().getFullYear()} Jeeva Jyothi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
