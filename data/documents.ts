/**
 * BUILD_BRIEF_DOCUMENTS — document/certificate list.
 * Deliberately a separate data file, not hardcoded in the component, so
 * non-technical staff can update it later without touching layout code
 * (per PRD.md's original recommendation).
 *
 * Exact 12 entries per the brief — do not add or omit.
 * "View" links are all PLACEHOLDER: actual PDF files not yet uploaded.
 */

export interface DocumentEntry {
  name: string;
  href: string;
}

export const DOCUMENTS: DocumentEntry[] = [
  { name: "Trust Deed", href: "#" },
  { name: "12A", href: "#" },
  { name: "NGO Darpan", href: "#" },
  { name: "80G PDF", href: "#" },
  { name: "CSR Certificate", href: "#" },
  { name: "FIRE Certificate", href: "#" },
  { name: "JJ PAN", href: "#" },
  { name: "JJ Licence 2023 to 2026", href: "#" },
  { name: "Annual Reports", href: "#" },
  { name: "Chennai Corporation", href: "#" },
  { name: "Budur Shelter Home Sanitary Certificate", href: "#" },
  { name: "JJ Act Registration Certificate", href: "#" },
];
