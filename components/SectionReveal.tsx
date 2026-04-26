"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * Starting scale (matches ScrollStack baseScale feel). Lower = more dramatic pop.
   */
  baseScale?: number;
  /**
   * Pixels of upward travel as the section enters.
   */
  translateY?: number;
  /**
   * Seconds of ease for the reveal.
   */
  duration?: number;
  /**
   * Stagger delay for sequential reveals, in seconds.
   */
  delay?: number;
  /**
   * Fraction of the block that must be visible before animating (0-1).
   */
  amount?: number;
  /**
   * If true, the reveal replays every time the section re-enters view.
   * Defaults to true so sections pop every time they're scrolled back into view.
   */
  replay?: boolean;
};

export default function SectionReveal({
  children,
  className = "",
  baseScale = 0.88,
  translateY = 72,
  duration = 0.9,
  delay = 0,
  amount = 0.15,
  replay = true
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    amount,
    margin: "0px 0px -80px 0px",
    once: !replay
  });

  // Delay the first evaluation until after the startup loader has cleared,
  // so above-fold items don't animate silently behind it.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1500);
    return () => window.clearTimeout(t);
  }, []);

  const shouldShow = ready && inView;

  return (
    <motion.div
      ref={ref}
      className={`section-reveal ${className}`.trim()}
      initial={{ opacity: 0, y: translateY, scale: baseScale }}
      animate={
        shouldShow
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: translateY, scale: baseScale }
      }
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ transformOrigin: "center top", willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}
