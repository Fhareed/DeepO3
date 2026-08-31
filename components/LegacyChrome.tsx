"use client";

import { useEffect } from "react";
import StaggeredMenu from "./StaggeredMenu";
import FuzzyText from "./FuzzyText";
import HomeFooter from "./redesign/HomeFooter";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Products", ariaLabel: "View the product suite", link: "/products" },
  { label: "Solutions", ariaLabel: "View solutions", link: "/solutions" },
  { label: "Case Studies", ariaLabel: "Read case studies", link: "/case-studies" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" }
];

const socialItems = [
  { label: "Email", link: "mailto:contact@deepo3.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "GitHub", link: "https://github.com" }
];

/**
 * Site chrome for the redesigned (light) site — the original StaggeredMenu
 * side-nav and the buzzing FuzzyText logo, tuned for the light theme, plus
 * the Clarify-style HomeFooter. Applied on EVERY route now that the whole
 * site uses the new design. Sets the light `dx-home` theme on <body>.
 */
export default function LegacyChrome({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add("dx-home");

    // Give the floating nav a frosted background once the page is scrolled,
    // so body text never clashes with the logo / Menu button. Stays clean at
    // the very top of the page.
    const onScroll = () => {
      document.body.classList.toggle("dx-nav-solid", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.body.classList.remove("dx-home");
      document.body.classList.remove("dx-nav-solid");
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#232221"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={["#0f2f45", "#0c4a52", "#12919b"]}
        accentColor="#12919b"
        isFixed={true}
        closeOnClickAway={true}
        logoUrl={
          <span className="dx-navlogo" aria-label="DeepO3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/deepo3-mark-black-80.png" alt="" className="dx-navlogo__mark" />
            <FuzzyText
              fontSize="1.7rem"
              fontWeight={700}
              color="#232221"
              baseIntensity={0.05}
              hoverIntensity={0.28}
              fuzzRange={6}
              direction="horizontal"
              transitionDuration={3}
            >
              DeepO3
            </FuzzyText>
          </span>
        }
        className="site-staggered-menu site-staggered-menu--light"
      />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <HomeFooter />
    </>
  );
}
