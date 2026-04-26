"use client";

import React from "react";

const ITEMS = new Array(8).fill(0).map((_, i) => ({
  title: `Spark ${i + 1}`,
  subtitle: "Experiment",
  hue: 210 + i * 12
}));

export function InteractiveGrid() {
  return (
    <section className="interactive-grid" aria-label="Ideas gallery">
      {ITEMS.map((it, idx) => (
        <article
          key={idx}
          className="interactive-tile"
          onMouseMove={(e) => {
            const el = e.currentTarget as HTMLElement;
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `perspective(800px) rotateX(${ -y * 6 }deg) rotateY(${ x * 6 }deg) translateZ(0)`;
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.transform = "";
          }}
        >
          <div
            className="tile-bg"
            style={{ background: `linear-gradient(135deg, hsl(${it.hue} 90% 60%), rgba(8,12,18,0))` }}
          />
          <div className="tile-copy">
            <h4>{it.title}</h4>
            <p>{it.subtitle}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
