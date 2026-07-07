import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

// DESIGN.md §2: Display = Outfit (or Sora), weights 500–600 only.
// Body = Inter, weights 400–500.
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeeva Jyothi",
  description:
    "Jeeva Jyothi NGO — supporting children, women, environment, disability, and unorganized labor communities since 1994.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
