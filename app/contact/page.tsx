import type { Metadata } from "next";
import Reveal from "../../components/redesign/Reveal";
import Btn from "../../components/redesign/Btn";
import ContactFormNew from "./ContactFormNew";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DeepO3. Share your workflow, and we respond with a practical build path — not a sales deck. Average response time: 2 business days.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DeepO3",
    description:
      "Share your workflow with DeepO3 — we respond with a practical build path within two business days.",
    url: "/contact",
    type: "website"
  }
};

export default function ContactPage() {
  return (
    <div className="dx-page">
      {/* 1 — Page header (clears the fixed floating nav) */}
      <section className="dx-section dx-pagehead">
        <div className="dx-container">
          <Reveal>
            <p className="dx-eyebrow">Contact</p>
          </Reveal>
          <Reveal index={1}>
            <h1 className="dx-display ct-hero-title">
              Design your next intelligent system with us.
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="dx-lead ct-hero-lead">
              Tell us about the workflow you are trying to transform. We respond
              with a practical build path — not a sales deck.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2 — Contact details + form */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <div className="ct-grid">
            {/* Left — details */}
            <Reveal className="ct-details">
              <p className="dx-eyebrow">Reach the team</p>
              <p className="dx-body ct-details-lead">
                Your brief lands with the team that would lead the engagement —
                no inbox triage, no account managers in between.
              </p>

              <div className="ct-channels">
                <div className="ct-channel">
                  <span className="ct-channel-label">Email</span>
                  <a
                    href="mailto:contact@deepo3.com"
                    className="dx-textlink ct-channel-value"
                  >
                    contact@deepo3.com
                  </a>
                </div>

                <div className="ct-channel">
                  <span className="ct-channel-label">Response time</span>
                  <span className="ct-channel-value">2 business days</span>
                  <p className="dx-body dx-muted ct-channel-note">
                    Average time to a practical build path, clarifying
                    questions, and indicative scope.
                  </p>
                </div>

                <div className="ct-channel">
                  <span className="ct-channel-label">LinkedIn</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dx-textlink ct-channel-value"
                  >
                    DeepO3 on LinkedIn
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal index={1}>
              <ContactFormNew />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 — Closing CTA */}
      <section className="dx-section" aria-label="Prefer email">
        <div className="dx-container dx-container--narrow ct-cta-inner">
          <Reveal>
            <p className="dx-eyebrow ct-cta-eyebrow">Prefer email</p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="dx-display ct-cta-title">
              Reach us directly anytime.
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="dx-lead ct-cta-lead">
              The form is the fastest path for a detailed brief, but a plain
              email works just as well — expect a reply inside two business
              days.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="ct-cta-actions">
              <Btn href="mailto:contact@deepo3.com" external>
                Email the Team
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
