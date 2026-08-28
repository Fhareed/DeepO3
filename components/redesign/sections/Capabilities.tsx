"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import Btn from "../Btn";
import "./Capabilities.css";

type Capability = {
  src: string;
  alt: string;
  title: string;
  sublabel: string;
  descriptor: string;
  paragraph: string;
};

const capabilities: Capability[] = [
  {
    src: "https://images.unsplash.com/photo-1774799560672-151b971fd336?auto=format&fit=crop&w=1200&q=85",
    alt: "Conversational AI",
    title: "Conversational AI",
    sublabel: "Grounded & Multilingual",
    descriptor: "Production-grade assistants anchored to your trusted sources",
    paragraph:
      "Grounded retrieval, multilingual support, intent classification, and clear guardrails — conversational AI built to stay reliable in regulated, high-stakes workflows.",
  },
  {
    src: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1200&q=85",
    alt: "Multi-agent systems",
    title: "Multi-agent systems",
    sublabel: "Plan · Decide · Execute",
    descriptor: "Domain-specific agents that analyze, decide, and act with auditability",
    paragraph:
      "Agent architectures with transparent state tracking — systems that coordinate specialist roles to reason through complex tasks and act with confidence.",
  },
  {
    src: "https://images.unsplash.com/photo-1742774101928-f7e92a471c1b?auto=format&fit=crop&w=1200&q=85",
    alt: "Computer vision",
    title: "Computer vision",
    sublabel: "Detect · Trace · Understand",
    descriptor: "Pipelines that classify, detect, compare, and trace media at scale",
    paragraph:
      "End-to-end vision systems with human-in-the-loop review — classification, detection, OCR, and embedding search across large volumes of digital media.",
  },
];

/* Clarify's exact accordion plus — a thin filled plus (bars nearly edge to
   edge), no circle. Rotates 45° into an "×" when the row is open. */
const PlusIcon = () => (
  <svg viewBox="0 0 44 44" fill="currentColor" aria-hidden="true">
    <path d="M0.472656 24.4322L0.472656 20.4802H20.1287V0.824219L24.0807 0.824219V20.4802L43.6327 20.4802V24.4322L24.0807 24.4322L24.0807 43.9842H20.1287L20.1287 24.4322H0.472656Z" />
  </svg>
);

export default function Capabilities() {
  // -1 = all rows collapsed on load/reload (nothing is forced open).
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <section className="dx-section cap-section">
      <div className="dx-container">
        <Reveal as="header" className="dx-section-head">
          <p className="dx-eyebrow">Our capabilities</p>
          <p className="dx-body cap-intro">
            Three intersecting disciplines — combined into a single reliable
            system, engineered around your workflow.
          </p>
        </Reveal>

        <ul className="cap-list">
          {capabilities.map((item, i) => {
            const open = openIndex === i;
            const panelId = `cap-panel-${i}`;
            const btnId = `cap-btn-${i}`;
            return (
              <Reveal as="li" key={item.title} index={i} className="cap-row">
                <button
                  type="button"
                  id={btnId}
                  className="cap-header"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <img
                    className="cap-thumb"
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="cap-title">{item.title}</span>
                  <span className="cap-toggle" data-open={open} aria-hidden="true">
                    <PlusIcon />
                  </span>
                </button>

                <div
                  className="cap-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  data-open={open}
                >
                  <div className="cap-panel-inner">
                    <div className="cap-panel-grid">
                      <p className="cap-sublabel">{item.sublabel}</p>
                      <div className="cap-detail">
                        <p className="dx-h3 cap-descriptor">{item.descriptor}</p>
                        <p className="dx-body cap-paragraph">{item.paragraph}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="cap-cta">
          <Btn href="/contact">Book a discovery call</Btn>
        </Reveal>
      </div>
    </section>
  );
}
