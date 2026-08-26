"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import FuzzyText from "../FuzzyText";
import "./HomeFooter.css";

type FooterLink = { label: string; href: string; external?: boolean };

const exploreLinks: FooterLink[] = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" }
];

const connectLinks: FooterLink[] = [
  { label: "Email", href: "mailto:contact@deepo3.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
  { label: "Instagram", href: "https://www.instagram.com", external: true }
];

export default function HomeFooter() {
  const backToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <footer className="dx-footer2" aria-label="Site footer">
      <div className="dx-container">
        {/* Top hairline */}
        <div className="ft2-rule" aria-hidden />

        {/* Top row: © · link columns · back to top */}
        <div className="ft2-top">
          <div className="ft2-top__left">
            <p className="dx-body ft2-copy">© 2026 DeepO3</p>
          </div>

          <div className="ft2-top__center">
            <nav className="ft2-col" aria-label="Explore">
              <p className="ft2-col__title">Explore</p>
              {exploreLinks.map((l) => (
                <Link key={l.href} href={l.href} className="dx-body ft2-link">
                  {l.label}
                </Link>
              ))}
            </nav>

            <nav className="ft2-col" aria-label="Connect">
              <p className="ft2-col__title">Connect</p>
              {connectLinks.map((l) =>
                l.external ? (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dx-body ft2-link"
                  >
                    {l.label}
                  </a>
                ) : (
                  <a key={l.href} href={l.href} className="dx-body ft2-link">
                    {l.label}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="ft2-top__right">
            <button type="button" className="ft2-totop" onClick={backToTop}>
              <span className="ft2-totop__label">Back to top</span>
              <span className="ft2-totop__chip" aria-hidden>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13V3M8 3L3.5 7.5M8 3l4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="ft2-sr">Back to top</span>
            </button>
          </div>
        </div>

        {/* Giant buzzing wordmark */}
        <div className="ft2-wordmark">
          <span className="ft2-mark">
            <FuzzyText
              fontSize="clamp(90px, 20vw, 320px)"
              fontWeight={700}
              color="#232221"
              baseIntensity={0.06}
              hoverIntensity={0.4}
              fuzzRange={20}
              direction="horizontal"
              transitionDuration={4}
            >
              DeepO3
            </FuzzyText>
          </span>
        </div>

        {/* Bottom hairline + row */}
        <div className="ft2-bottom">
          <p className="dx-body ft2-fine">
            AI-native software solutions&nbsp;·&nbsp;reliable systems
          </p>
          <p className="dx-body ft2-fine">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
