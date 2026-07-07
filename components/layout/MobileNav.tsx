"use client";

import { useEffect, useRef } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onAskForHelp: () => void;
}

/**
 * BUILD_BRIEF_01 mobile pattern: hamburger button in the main nav row opens
 * a full-height slide-out panel from the right, containing the same nav
 * items + Ask For Help + Donate. Closes on Escape, on backdrop click, or on
 * item selection.
 */
export function MobileNav({ isOpen, onClose, navItems, onAskForHelp }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`md:hidden fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute top-0 right-0 h-full w-[80%] max-w-[320px] bg-cream shadow-lg
          transition-transform duration-200 ease-out flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close menu"
            className="focus-ring p-2 text-ink"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="focus-ring font-body text-ink text-lg py-3 border-b border-violet-300/40"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              onAskForHelp();
              onClose();
            }}
            className="focus-ring text-left font-body text-ink text-lg py-3 border-b border-violet-300/40"
          >
            Ask For Help
          </button>
        </nav>

        <div className="mt-auto p-6">
          {/* PLACEHOLDER: link to "#" — payment gateway not yet confirmed */}
          <a
            href="#"
            className="focus-ring block w-full text-center rounded-lg bg-violet-700 text-cream font-display font-medium py-3"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
}
