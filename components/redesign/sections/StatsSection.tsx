"use client";

import "./StatsSection.css";
import Reveal from "../Reveal";
import Btn from "../Btn";

const stats = [
  { value: "4", label: "Products live in the market" },
  { value: "4", label: "Delivery phases, from discovery to operations" },
  { value: "2", label: "Business days to a practical build path" },
  { value: "100%", label: "AI-native architecture baseline" }
];

export default function StatsSection() {
  return (
    <section className="dx-section dx-section--paper st-section">
      <div className="dx-container">
        <Reveal as="header">
          <div className="dx-section-head st-head">
            <p className="dx-eyebrow">By the numbers</p>
            <p className="dx-body st-intro">
              A young studio with production systems in the field — and a standard we hold to on
              every engagement.
            </p>
          </div>
        </Reveal>

        <div className="st-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i} className="st-cell">
              <span className="st-num">{s.value}</span>
              <p className="dx-body st-label">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="st-cta">
          <Btn href="/contact">Book a discovery call</Btn>
        </Reveal>
      </div>
    </section>
  );
}
