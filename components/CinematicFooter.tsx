"use client";

import { useCallback } from "react";
import FuzzyText from "./FuzzyText";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    ariaLabel: "DeepO3 LinkedIn"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    ariaLabel: "DeepO3 Instagram"
  }
];

export default function CinematicFooter() {
  const handleBackToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <footer className="cinematic-footer" aria-label="Site footer">
      <div className="cinematic-footer-inner">
        <div className="cinematic-footer-kicker" aria-label="Solutions powered by creativity">
          <FuzzyText
            fontSize="clamp(1rem, 2vw, 2rem)"
            fontWeight={500}
            color="#f2f6ff"
            baseIntensity={0.06}
            hoverIntensity={0.35}
            fuzzRange={12}
            direction="horizontal"
            letterSpacing={2}
          >
            SOLUTIONS POWERED BY CREATIVITY
          </FuzzyText>
        </div>

        <nav className="cinematic-footer-social" aria-label="Social links">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="cinematic-footer-social-link"
            >
              <span>{item.label}</span>
              <span aria-hidden className="cinematic-footer-social-arrow">↗</span>
            </a>
          ))}
        </nav>

        <div className="cinematic-footer-wordmark" aria-label="DeepO3">
          <FuzzyText
            fontSize="clamp(1.75rem, 7vw, 6rem)"
            fontWeight={700}
            color="#fcfcff"
            baseIntensity={0.14}
            hoverIntensity={0.55}
            fuzzRange={26}
            direction="horizontal"
            transitionDuration={6}
          >
            DEEPO3
          </FuzzyText>
        </div>

        <div className="cinematic-footer-meta">
          <p>© 2026 DeepO3</p>
          <button type="button" className="cinematic-footer-top" onClick={handleBackToTop}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
