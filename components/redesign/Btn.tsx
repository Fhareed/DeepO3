"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "paper2" | "white" | "onDark";
  external?: boolean;
  className?: string;
};

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M2.5 8h10M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Clarify's signature compound button: light pill + accent arrow-chip,
 * with a left-to-right accent wipe and a dual-arrow swap on hover.
 */
export default function Btn({ href, children, variant = "default", external, className }: BtnProps) {
  const cls = ["dx-btn", variant !== "default" ? `dx-btn--${variant}` : "", className].filter(Boolean).join(" ");
  const inner = (
    <>
      <span className="dx-btn__fill" aria-hidden />
      <span className="dx-btn__label">{children}</span>
      <span className="dx-btn__chip" aria-hidden>
        <span className="dx-btn__arrow dx-btn__arrow--out"><Arrow /></span>
        <span className="dx-btn__arrow dx-btn__arrow--in"><Arrow /></span>
      </span>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
