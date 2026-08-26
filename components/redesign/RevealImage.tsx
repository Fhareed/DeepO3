"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string; // e.g. "16 / 10"
};

/**
 * Rounded image frame with Clarify's masked "curtain" reveal + 1.4→1
 * Ken-Burns settle on scroll-in. Robust: visible by default, only
 * hides+animates for below-the-fold images; reduced motion / no-JS
 * shows the image immediately.
 */
export default function RevealImage({ src, alt, className, aspectRatio }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(true);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || reduce || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (inView) {
      setShown(true);
      return;
    }
    setArmed(true);
    setShown(false);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    const t = window.setTimeout(() => setShown(true), 1600);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`dx-imgframe ${className || ""}`.trim()}
      data-shown={armed ? shown : true}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="dx-imgframe__img" src={src} alt={alt} loading="lazy" />
      <span className="dx-imgframe__curtain" aria-hidden />
    </div>
  );
}
