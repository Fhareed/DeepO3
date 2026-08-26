"use client";

import "./Values.css";
import Reveal from "../Reveal";

const blocks = [
  {
    title: "Product thinking, applied to AI.",
    body: "Whether you're launching a new AI product, modernizing an operation, or building a decision system, we shape technology around outcomes — not demos — so it earns its place in production."
  },
  {
    title: "Engineering that holds up.",
    body: "We turn complex ideas into reliable systems: grounded retrieval, transparent agent workflows, and vision pipelines built with the guardrails, evaluations, and telemetry that keep them dependable at scale."
  }
];

export default function Values() {
  return (
    <section className="dx-section vl-section" aria-label="What we do">
      <div className="dx-container">
        <Reveal>
          <p className="dx-eyebrow" style={{ marginBottom: "clamp(40px,5vw,72px)" }}>What we do</p>
        </Reveal>
        <div className="vl-grid">
          {blocks.map((b, i) => (
            <Reveal key={b.title} index={i} className="vl-block">
              <h2 className="dx-h3 vl-title">{b.title}</h2>
              <p className="dx-body vl-body">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
