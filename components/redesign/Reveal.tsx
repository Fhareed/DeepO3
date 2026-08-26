"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "li" | "header" | "span" | "ul";
  once?: boolean;
  amount?: number;
};

/**
 * Scroll-triggered fade + slide-up reveal.
 *
 * Design goal: content is NEVER able to get stuck invisible.
 * - Server render and first client paint render fully visible (opacity 1).
 * - After mount, only elements that are BELOW the fold are hidden and then
 *   revealed when they scroll into view (so above-the-fold content never
 *   flashes and below-the-fold content animates in).
 * - Reduced motion, no IntersectionObserver, or any failure => stays visible.
 * - A safety timeout reveals everything after 1.4s no matter what.
 */
export default function Reveal({
  children,
  className,
  index = 0,
  delay = 0,
  y = 32,
  as = "div",
  once = true,
  amount = 0.12
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false); // will we animate this element?
  const [shown, setShown] = useState(true); // visible by default

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
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (inView) {
      // already visible on load — keep it visible, no flash
      setShown(true);
      return;
    }

    // below the fold: start hidden, then reveal on scroll-in
    setArmed(true);
    setShown(false);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: amount, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // absolute safety net
    const t = window.setTimeout(() => setShown(true), 1400);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [once, amount]);

  const hidden = armed && !shown;
  const style: CSSProperties = {
    opacity: hidden ? 0 : 1,
    transform: hidden ? `translateY(${y}px)` : "translateY(0)",
    transition: `opacity 0.8s cubic-bezier(0.12,0.05,0.205,0.995) ${delay + index * 0.1}s, transform 0.8s cubic-bezier(0.12,0.05,0.205,0.995) ${delay + index * 0.1}s`,
    willChange: hidden ? "opacity, transform" : undefined
  };

  const Tag = as as any;
  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
