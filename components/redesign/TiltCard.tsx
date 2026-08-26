"use client";

import { useRef } from "react";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
};

/**
 * Subtle 3D tilt + moving shine on hover. Transform is written directly
 * from the pointer position (no lagging spring), so the card is perfectly
 * stationary whenever the cursor pauses — clicks land reliably. The glare
 * layer is pointer-events:none so links underneath stay clickable.
 */
export default function TiltCard({ children, className, max = 6 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--tc-rx", `${((0.5 - py) * max * 2).toFixed(2)}deg`);
    el.style.setProperty("--tc-ry", `${((px - 0.5) * max * 2).toFixed(2)}deg`);
    el.style.setProperty("--tc-gx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--tc-gy", `${(py * 100).toFixed(1)}%`);
    el.style.setProperty("--tc-on", "1");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tc-rx", "0deg");
    el.style.setProperty("--tc-ry", "0deg");
    el.style.setProperty("--tc-on", "0");
  };

  return (
    <div ref={ref} className={`dx-tilt ${className || ""}`.trim()} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="dx-tilt__inner">
        {children}
        <span className="dx-tilt__glare" aria-hidden />
      </div>
    </div>
  );
}
