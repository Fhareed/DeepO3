"use client";

import Link from "next/link";
import Reveal from "../Reveal";
import Btn from "../Btn";
import TiltCard from "../TiltCard";
import "./Engagement.css";

type Model = {
  name: string;
  qualifier: string;
  descriptor: string;
  ctaLabel: string;
  ctaVariant: "default" | "white";
  features: string[];
  featured?: boolean;
  chip?: string;
};

/* Small teal check for the feature list. Inline SVG only, stroke = accent. */
const Check = () => (
  <svg
    className="en-check"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8.25 6.4 11.6 13 4.6" />
  </svg>
);

const models: Model[] = [
  {
    name: "Discovery sprint",
    qualifier: "Fixed scope · 2–3 weeks",
    descriptor: "De-risk your initiative before you commit to a build.",
    ctaLabel: "Start a discovery sprint",
    ctaVariant: "white",
    features: [
      "Architecture brief & system design",
      "Risk register",
      "Model-selection matrix",
      "Actionable build plan"
    ]
  },
  {
    name: "Build partnership",
    qualifier: "Milestone-based delivery",
    descriptor:
      "A dedicated senior team delivering alongside your product and engineering groups through launch.",
    ctaLabel: "Scope a build",
    ctaVariant: "default",
    featured: true,
    chip: "Most engaged",
    features: [
      "Dedicated senior team",
      "Milestone-based delivery",
      "CI/CD & telemetry",
      "Hands-on launch support"
    ]
  },
  {
    name: "Managed operations",
    qualifier: "Ongoing partnership",
    descriptor:
      "Post-launch monitoring, evaluation, and iteration so the system keeps meeting its targets.",
    ctaLabel: "Talk to us",
    ctaVariant: "white",
    features: [
      "Monitoring & evaluations",
      "Guardrails upkeep",
      "Iterative improvements",
      "Reliability targets"
    ]
  }
];

export default function Engagement() {
  return (
    <section className="dx-section en-section">
      <div className="dx-container">
        <Reveal as="header" className="dx-section-head dx-section-head--center">
          <p className="dx-eyebrow">Engagement models</p>
          <h2 className="dx-h2">Ways to work with us.</h2>
          <p className="dx-body">
            Three entry points — pick what fits the stage of your initiative.
            Scope is transparent before any build begins.
          </p>
        </Reveal>

        <div className="en-grid">
          {models.map((model, i) => (
            <Reveal key={model.name} className="en-item" index={i}>
              <TiltCard className="en-tilt" max={5}>
                <article
                  className={
                    "en-card" + (model.featured ? " en-card--featured" : "")
                  }
                >
                  <Link
                    href="/contact"
                    className="dx-stretch"
                    aria-label={`${model.name} — get in touch`}
                    tabIndex={-1}
                  />
                  {model.chip ? (
                    <span className="en-chip">{model.chip}</span>
                  ) : null}

                  <span className="en-name">{model.name}</span>
                  <p className="en-qualifier">{model.qualifier}</p>
                  <p className="dx-body dx-muted en-desc">{model.descriptor}</p>

                  <div className="en-cta-row dx-above">
                    <Btn href="/contact" variant={model.ctaVariant}>
                      {model.ctaLabel}
                    </Btn>
                  </div>

                  <hr className="dx-rule en-rule" />

                  <span className="en-inclabel">What&apos;s included</span>
                  <ul className="en-features">
                    {model.features.map((feature) => (
                      <li key={feature} className="en-feature">
                        <Check />
                        <span className="dx-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
