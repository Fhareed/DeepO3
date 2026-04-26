"use client";

import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import InfoCard from "./InfoCard";

const stackItems = [
  {
    title: "Clarity First",
    text: "We translate high-level business goals into clear software milestones with measurable outcomes."
  },
  {
    title: "AI Systems Engineering",
    text: "From RAG to multi-agent orchestration, we build practical AI stacks that hold up in production."
  },
  {
    title: "Reliable Delivery",
    text: "Clean code, stable architecture, and collaborative rollout support from concept through handover."
  }
];

export default function GlobalScrollStack() {
  return (
    <section className="global-stack-section">
      <div className="page-shell">
        <p className="eyebrow">DeepO3 Approach</p>
        <h2 className="global-stack-title">Built to stay robust as you scale.</h2>
        <ScrollStack
          className="global-scroll-stack"
          useWindowScroll
          itemDistance={34}
          itemScale={0.006}
          itemStackDistance={10}
          stackPosition="42%"
          scaleEndPosition="30%"
          baseScale={0.985}
          scaleDuration={0.45}
        >
          {stackItems.map((item, index) => (
            <ScrollStackItem key={item.title} itemClassName="global-stack-item">
              <InfoCard variation={index} className="global-stack-card">
                <p className="stack-step">Step {String(index + 1).padStart(2, "0")}</p>
                <h3 className="stack-card-title">{item.title}</h3>
                <p className="stack-card-copy">{item.text}</p>
              </InfoCard>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
