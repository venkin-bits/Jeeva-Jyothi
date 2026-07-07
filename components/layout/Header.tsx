"use client";

import { useState } from "react";
import Link from "next/link";
import { UtilityBar } from "./UtilityBar";
import { MobileNav } from "./MobileNav";
import { useUtilityBarScroll } from "@/hooks/useUtilityBarScroll";

export interface HeaderProps {
  /** "home" = two-row scroll-aware header (utility bar + main nav).
   *  "simple" = single sticky row, no utility bar. Only "home" is wired
   *  up in this chunk — "simple" is stubbed so it can be finished later
   *  without restructuring this component. */
  variant: "home" | "simple";
}

const NAV_ITEMS = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Documents", href: "/documents" },
  { label: "Gallery", href: "/gallery" },
];

export function Header({ variant }: HeaderProps) {
  const { isHidden, forceShow } = useUtilityBarScroll();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isAskForHelpOpen, setIsAskForHelpOpen] = useState(false);

  if (variant === "simple") {
    // Simple variant for About/Programs/Documents/Gallery pages:
    // single always-sticky row, no utility bar
    return (
      <header className="sticky top-0 z-40 bg-cream border-b border-violet-300/40">
        <div className="max-w-content mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo — clicking navigates home */}
          <Link
            href="/"
            className="focus-ring font-display font-semibold text-lg text-ink"
          >
            {/* PLACEHOLDER: logo file — using styled wordmark until provided */}
            Jeeva Jyothi
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring font-body text-sm text-ink hover:text-violet-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                // PLACEHOLDER: Ask For Help panel content — build in later chunk
                setIsAskForHelpOpen((open) => !open);
              }}
              aria-expanded={isAskForHelpOpen}
              className="focus-ring font-body text-sm text-ink hover:text-violet-700 transition-colors"
            >
              Ask For Help
            </button>
            {/* PLACEHOLDER: link to "#" — payment gateway not yet confirmed */}
            <a
              href="#"
              className="focus-ring rounded-lg bg-violet-700 text-cream font-display font-medium text-sm px-5 py-2.5 hover:bg-violet-700/90 transition-colors"
            >
              Donate
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileNavOpen}
            className="focus-ring md:hidden p-2 text-ink"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Ask For Help panel shell — stub only */}
        {isAskForHelpOpen && (
          <div
            role="dialog"
            aria-label="Ask for help"
            className="hidden md:block absolute right-4 top-full mt-2 w-80 bg-cream border border-violet-300/40 rounded-lg shadow-lg p-6"
          >
            {/* PLACEHOLDER: Ask For Help panel content — build in later chunk.
                Do not invent contact details here. */}
            <p className="font-body text-sm text-muted">
              Ask For Help content coming soon.
            </p>
          </div>
        )}

        <MobileNav
          isOpen={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
          navItems={NAV_ITEMS}
          onAskForHelp={() => setIsAskForHelpOpen(true)}
        />
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40">
      <UtilityBar isHidden={isHidden} onFocusIn={forceShow} />

      <div className="w-full bg-cream border-b border-violet-300/40">
        <div className="max-w-content mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo — clicking navigates home. No separate "Home" nav link. */}
          <Link
            href="/"
            className="focus-ring font-display font-semibold text-lg text-ink"
          >
            {/* PLACEHOLDER: logo file — using styled wordmark until provided */}
            Jeeva Jyothi
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring font-body text-sm text-ink hover:text-violet-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                // PLACEHOLDER: Ask For Help panel content — build in later chunk
                setIsAskForHelpOpen((open) => !open);
              }}
              aria-expanded={isAskForHelpOpen}
              className="focus-ring font-body text-sm text-ink hover:text-violet-700 transition-colors"
            >
              Ask For Help
            </button>
            {/* PLACEHOLDER: link to "#" — payment gateway not yet confirmed */}
            <a
              href="#"
              className="focus-ring rounded-lg bg-violet-700 text-cream font-display font-medium text-sm px-5 py-2.5 hover:bg-violet-700/90 transition-colors"
            >
              Donate
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMobileNavOpen}
            className="focus-ring md:hidden p-2 text-ink"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Ask For Help panel shell — stub only, per BUILD_BRIEF_01 scope */}
      {isAskForHelpOpen && (
        <div
          role="dialog"
          aria-label="Ask for help"
          className="hidden md:block absolute right-4 top-full mt-2 w-80 bg-cream border border-violet-300/40 rounded-lg shadow-lg p-6"
        >
          {/* PLACEHOLDER: Ask For Help panel content — build in later chunk.
              Do not invent contact details here. */}
          <p className="font-body text-sm text-muted">
            Ask For Help content coming soon.
          </p>
        </div>
      )}

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        navItems={NAV_ITEMS}
        onAskForHelp={() => setIsAskForHelpOpen(true)}
      />
    </header>
  );
}
