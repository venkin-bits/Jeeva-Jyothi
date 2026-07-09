"use client";

import { useEffect, useState } from "react";

const HERO_IMAGES: string[] = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

const SLIDE_INTERVAL_MS = 5000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[720px] overflow-hidden bg-lavender-50">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55" />

      <div className="relative z-10 flex h-full min-h-[600px] md:min-h-[720px] flex-col items-center justify-center gap-6 px-4 py-24 md:py-32 text-center max-w-content mx-auto">
        <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight text-cream">
          Jeeva Jyothi — Placeholder Headline
        </h1>

        <p className="font-body text-lg text-cream/90 max-w-md">
          [PLACEHOLDER: mission statement pending]
        </p>

        <a
          href="/donate"
          className="focus-ring rounded-lg bg-violet-700 text-cream font-display font-medium px-6 py-3 hover:bg-violet-700/90 transition-colors"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}