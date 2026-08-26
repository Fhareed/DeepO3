"use client";

import "./ClosingCTA.css";
import Reveal from "../Reveal";
import Btn from "../Btn";

export default function ClosingCTA() {
  return (
    <section className="dx-section cta-section" aria-label="Get in touch">
      <div className="dx-container dx-container--narrow cta-inner">
        <Reveal>
          <p className="dx-eyebrow" style={{ justifyContent: "center" }}>Contact</p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="dx-display cta-title">
            Let&apos;s build something<br />that lasts.
          </h2>
        </Reveal>
        <Reveal index={2}>
          <p className="dx-lead cta-lead">
            Ready to turn a high-stakes workflow into a reliable product? Share your challenge and we&apos;ll
            respond with a practical build path within two business days.
          </p>
        </Reveal>
        <Reveal index={3}>
          <div className="cta-actions">
            <Btn href="/contact">Book a discovery call</Btn>
            <Btn href="/products" variant="white">See our products</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
