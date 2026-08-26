"use client";

import Reveal from "../Reveal";
import RevealImage from "../RevealImage";
import "./Approach.css";

type Step = {
  num: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Discover",
    body:
      "Stakeholder mapping, workflow audits, and opportunity sizing in a focused discovery sprint."
  },
  {
    num: "02",
    title: "Design",
    body:
      "Architecture, UX, and model-selection blueprints aligned with production constraints."
  },
  {
    num: "03",
    title: "Build",
    body:
      "Iterative delivery with measurable milestones, CI/CD, and operational telemetry baked in."
  },
  {
    num: "04",
    title: "Operate",
    body:
      "Monitoring, evaluations, and guardrails so systems stay reliable long after launch."
  }
];

export default function Approach() {
  return (
    <section className="dx-section dx-section--paper ap-section">
      <div className="dx-container">
        {/* -------- Part 1: two-column intro -------- */}
        <div className="ap-intro">
          <Reveal className="ap-intro__text">
            <p className="dx-eyebrow">Our approach</p>
            <span className="ap-kicker">Discover. Design. Build. Operate.</span>
            <h2 className="dx-h2">
              A senior team, from first scoping to steady-state operations.
            </h2>
            <p className="dx-body ap-lead">
              We focus on clarity, momentum, and collaboration so every engagement
              stays aligned with your goals — and dependable long after launch.
            </p>
          </Reveal>

          <Reveal className="ap-intro__media" delay={0.1}>
            <RevealImage
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1600&q=85"
              alt="Engineers collaborating at screens in a modern workspace"
              aspectRatio="5 / 6"
            />
          </Reveal>
        </div>

        {/* -------- Part 2: four-step process -------- */}
        <ol className="ap-steps">
          {STEPS.map((step, i) => (
            <Reveal as="li" index={i} key={step.num} className="ap-step">
              <span className="ap-step__num">{step.num}</span>
              <h3 className="dx-h3 ap-step__title">{step.title}</h3>
              <p className="dx-body ap-step__body">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
