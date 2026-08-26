"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" }
];

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="dx-nav" data-scrolled={scrolled}>
      <div className="dx-nav__inner dx-container dx-container--wide">
        <Link href="/" className="dx-nav__brand" aria-label="DeepO3 home" onClick={() => setOpen(false)}>
          <img src="/deepo3-mark.png" alt="" className="dx-nav__mark" width={34} height={34} />
          <span className="dx-nav__brandtext">
            Deep<span className="dx-nav__brandaccent">O3</span>
          </span>
        </Link>

        <nav className="dx-nav__links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="dx-nav__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="dx-nav__actions">
          <Link href="/contact" className="dx-btn dx-btn--primary dx-nav__cta">
            Book a Discovery Call
          </Link>
          <button
            type="button"
            className="dx-nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span data-open={open} />
            <span data-open={open} />
            <span data-open={open} />
          </button>
        </div>
      </div>

      <div className="dx-nav__mobile" data-open={open}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="dx-nav__mobilelink" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="dx-btn dx-btn--gradient dx-nav__mobilecta" onClick={() => setOpen(false)}>
          Book a Discovery Call
        </Link>
      </div>
    </header>
  );
}
