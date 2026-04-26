"use client";

import { motion } from "framer-motion";
import React from "react";
import TiltedPanel from "./TiltedPanel";

const slides = [
  {
    title: "Discovery",
    text: "We map your business bottlenecks and define measurable outcomes before writing code."
  },
  {
    title: "System Design",
    text: "We architect practical AI stacks: retrieval, orchestration, guardrails, and production-grade interfaces."
  },
  {
    title: "Build & Deploy",
    text: "From prototype to launch, we deliver robust software with observability, testing, and handover."
  },
  {
    title: "Scale",
    text: "We optimize quality, speed, and cost while adding new features around real user behavior."
  }
];

export function StoryRail() {
  return (
    <section className="story-rail-section">
      <div className="story-rail-sticky">
        <div className="story-rail-head">
          <p className="eyebrow">How we work</p>
          <h2>A story-driven product process.</h2>
        </div>
        <div className="story-progress">
          <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.7 }} style={{ display: "block", transformOrigin: "left" }} />
        </div>

        <div className="story-track-grid">
          {slides.map((slide, idx) => (
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
            >
              <TiltedPanel>
                <div className="story-card">
                  <h3>{slide.title}</h3>
                  <p>{slide.text}</p>
                </div>
              </TiltedPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
