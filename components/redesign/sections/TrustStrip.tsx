"use client";

import Reveal from "../Reveal";

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "FastAPI",
  "LangGraph",
  "FAISS",
  "Llama 3",
  "Three.js"
];

export default function TrustStrip() {
  const items = [...stack, ...stack];
  return (
    <section className="dx-section dx-section--paper" aria-label="Technology stack">
      <div className="dx-container">
        <Reveal>
          <div className="dx-section-head dx-section-head--center" style={{ marginBottom: "clamp(36px,4vw,56px)" }}>
            <p className="dx-eyebrow">Under the hood</p>
            <p className="dx-lead" style={{ maxWidth: 640 }}>
              Production-grade systems, engineered on a modern, dependable stack — chosen for reliability,
              not novelty.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="dx-marquee" aria-hidden>
        <div className="dx-marquee__track">
          {items.map((item, i) => (
            <span className="dx-marquee__item" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
