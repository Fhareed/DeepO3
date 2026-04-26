"use client";

import React, { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const onMove = (ev: PointerEvent) => {
      x = ev.clientX;
      y = ev.clientY;
      el.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove);

    const loop = () => {
      tx += (x - tx) * 0.18;
      ty += (y - ty) * 0.18;
      if (el) el.style.transform = `translate3d(${tx - 64}px, ${ty - 64}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
