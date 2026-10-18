import type { Metadata } from "next";
import { products } from "../../lib/products";
import Reveal from "../../components/redesign/Reveal";
import Btn from "../../components/redesign/Btn";
import RevealImage from "../../components/redesign/RevealImage";
import "./casestudies.css";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "A selection of DeepO3 engagements across finance, municipal services, newcomer onboarding, and knowledge management — systems shaped by regulated, operational, and high-stakes workflows.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | DeepO3",
    description:
      "DeepO3 engagements across finance, municipal services, and knowledge management.",
    url: "/case-studies",
    type: "website"
  }
};

/* Domains the practice delivers in — preserved from the original page. */
const domains = [
  "Finance",
  "Municipal services",
  "Newcomer onboarding",
  "Knowledge management",
  "Multi-agent systems"
];

/* Delivery principles — preserved verbatim from the original page. */
const principles = [
  {
    title: "Domain fit",
    body: "Systems calibrated to how your teams actually operate, validated with real users from week one instead of being retrofitted at launch."
  },
  {
    title: "Production-grade",
    body: "Reliability, telemetry, and evaluations are built in before a system ships — guardrails scale with usage instead of being bolted on afterwards."
  },
  {
    title: "Continuous delivery",
    body: "Iterative releases with measurable milestones, documented decisions, and safe rollback paths at every stage of the engagement."
  }
];

/* Glowing 4K imagery — one per case study, thematically matched. */
const CASE_IMAGES: Record<string, string> = {
  docup:
    "https://images.unsplash.com/photo-1742774101928-f7e92a471c1b?auto=format&fit=crop&w=1600&q=85",
  buergerbot:
    "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1600&q=85",
  paperpilot:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=85",
  tradingagents:
    "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1600&q=85",
  lumidesk: "/products/lumidesk-cover.jpg"
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1606814540563-5c02d62fd409?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1768330187404-59e46cf222c9?auto=format&fit=crop&w=1600&q=85"
];

/* Small teal check for the highlights list. Inline SVG only, stroke = accent. */
const Check = () => (
  <svg
    className="cs-check"
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

export default function CaseStudiesPage() {
  return (
    <div className="dx-page">
      {/* (1) Pagehead — clears the floating nav. */}
      <section className="dx-section dx-pagehead">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head">
            <p className="dx-eyebrow">Case Studies</p>
            <h1 className="dx-display">Built for real-world complexity.</h1>
            <p className="dx-lead">
              A selection of systems DeepO3 has launched or is actively
              developing — each shaped by regulated, operational, or high-stakes
              workflows.
            </p>
            <ul className="cs-domains" aria-label="Domains we deliver in">
              {domains.map((domain) => (
                <li key={domain} className="dx-chip">
                  {domain}
                </li>
              ))}
            </ul>
            <div className="cs-head-actions">
              <Btn href="/contact">Start a conversation</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* (2) Featured case studies — alternating photo/text rows. */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head">
            <p className="dx-eyebrow">Engagements</p>
            <h2 className="dx-h2">Featured case studies.</h2>
            <p className="dx-body">
              Each study captures the architecture, user-experience decisions,
              and operational safeguards that define a DeepO3 build. Open any
              card for the full breakdown.
            </p>
          </Reveal>

          <div className="cs-rows">
            {products.map((product, i) => {
              const image =
                CASE_IMAGES[product.slug] ??
                FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];
              // Only some case studies expose a public, clickable demo.
              const demoHref = product.demos.find((d) => d.href)?.href;
              const imageRight = i % 2 === 1;

              return (
                <div
                  key={product.slug}
                  className={`cs-row${imageRight ? " cs-row--right" : ""}`}
                >
                  <Reveal className="cs-media">
                    <RevealImage
                      src={image}
                      alt={`${product.title} — ${product.category}`}
                      aspectRatio="4 / 5"
                    />
                  </Reveal>

                  <div className="cs-text">
                    <Reveal className="cs-top">
                      <span className="cs-category">{product.category}</span>
                      <span className="dx-chip">{product.status}</span>
                    </Reveal>

                    <Reveal index={1}>
                      <h3 className="dx-h3">{product.title}</h3>
                    </Reveal>

                    <Reveal index={2}>
                      <p className="dx-body cs-summary">{product.summary}</p>
                    </Reveal>

                    <Reveal index={3}>
                      <span className="cs-highlights-label">Highlights</span>
                    </Reveal>

                    <Reveal as="ul" index={3} className="cs-highlights">
                      {product.features.map((feature) => (
                        <li key={feature} className="cs-feature">
                          <Check />
                          <span className="dx-body">{feature}</span>
                        </li>
                      ))}
                    </Reveal>

                    <Reveal index={4} className="cs-actions">
                      <Btn href={`/products/${product.slug}`}>
                        Open Case Details
                      </Btn>
                      {demoHref && (
                        <Btn href={demoHref} external variant="white">
                          Try live demo
                        </Btn>
                      )}
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* (3) Delivery principles. */}
      <section className="dx-section">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head">
            <p className="dx-eyebrow">Delivery principles</p>
            <h2 className="dx-h2">What every engagement proves.</h2>
            <p className="dx-body">
              Three standards that carry across every DeepO3 build, whatever the
              domain or scale.
            </p>
          </Reveal>

          <div className="cs-principles-grid">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} className="cs-principle" index={i}>
                <span className="cs-principle-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="dx-h3">{principle.title}</h3>
                <p className="dx-body cs-principle-body">{principle.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* (4) Closing CTA. */}
      <section
        className="dx-section dx-section--paper"
        aria-label="Start an engagement"
      >
        <div className="dx-container dx-container--narrow cs-cta-inner">
          <Reveal>
            <p className="dx-eyebrow" style={{ justifyContent: "center" }}>
              Your engagement
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="dx-display">
              Have a system with similar depth in mind?
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="dx-lead cs-cta-lead">
              Walk us through the problem. We will map it to a pragmatic delivery
              plan within two business days.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="cs-cta-actions">
              <Btn href="/contact">Start a Conversation</Btn>
              <Btn href="/products" variant="white">
                Browse the Product Suite
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
