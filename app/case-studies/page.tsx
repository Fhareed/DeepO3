import type { Metadata } from "next";
import Link from "next/link";
import InfoCard from "../../components/InfoCard";
import GlareHover from "../../components/GlareHover";
import TiltedPanel from "../../components/TiltedPanel";
import SectionReveal from "../../components/SectionReveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "A selection of DeepO3 engagements across finance, municipal services, and knowledge management — systems shaped by regulated, operational, and high-stakes workflows.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | DeepO3",
    description:
      "DeepO3 engagements across finance, municipal services, and knowledge management.",
    url: "/case-studies",
    type: "website"
  }
};
import { products } from "../../lib/products";

const domains = [
  "Finance",
  "Municipal services",
  "Knowledge management",
  "Multi-agent systems"
];

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

export default function CaseStudiesPage() {
  return (
    <div className="page-shell">
      <SectionReveal>
        <GlareHover
          className="glare-hover--fluid"
          borderRadius="22px"
          glareColor="#ffffff"
          glareOpacity={0.35}
          glareAngle={-30}
          glareSize={260}
          transitionDuration={900}
        >
          <TiltedPanel>
          <section className="hero glass">
            <p className="eyebrow">Case Studies</p>
            <h1>Built for real-world complexity.</h1>
            <p className="lead">
              A selection of systems DeepO3 has launched or is actively developing
              — each shaped by regulated, operational, or high-stakes workflows.
            </p>
            <ul className="domain-strip" aria-label="Domains we deliver in">
              {domains.map((domain) => (
                <li key={domain} className="domain-chip">
                  {domain}
                </li>
              ))}
            </ul>
          </section>
          </TiltedPanel>
        </GlareHover>
      </SectionReveal>

      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Engagements</p>
            <h2>Featured case studies.</h2>
          </div>
          <p className="section-intro-body">
            Each study captures the architecture, user-experience decisions, and
            operational safeguards that define a DeepO3 build. Open any card for
            the full breakdown.
          </p>
        </header>
      </SectionReveal>

      <section className="case-list">
        {products.map((product, index) => (
          <SectionReveal key={product.slug} delay={index * 0.1} amount={0.25}>
            <GlareHover
              className="glare-hover--fluid"
              borderRadius="22px"
              glareColor="#69b5ff"
              glareOpacity={0.4}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
            >
              <InfoCard className="case-item" variation={index} accent={product.accent}>
                <div className="case-item-split">
                  <div className="case-item-main">
                    <p className="chip">{product.status}</p>
                    <h2>{product.title}</h2>
                    <p>{product.summary}</p>
                    <div className="card-actions">
                      <Link href={`/products/${product.slug}`} className="btn btn-ghost">
                        Open Case Details
                      </Link>
                    </div>
                  </div>
                  <div className="case-item-side">
                    <p className="case-item-side-label">Highlights</p>
                    <ul className="case-item-highlights">
                      {product.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </InfoCard>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>

      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Delivery principles</p>
            <h2>What every engagement proves.</h2>
          </div>
          <p className="section-intro-body">
            Three standards that carry across every DeepO3 build, whatever the
            domain or scale.
          </p>
        </header>
      </SectionReveal>

      <section className="case-grid">
        {principles.map((principle, idx) => (
          <SectionReveal key={principle.title} delay={idx * 0.08} amount={0.3}>
            <GlareHover
              className="glare-hover--fluid"
              borderRadius="22px"
              glareColor="#69b5ff"
              glareOpacity={0.38}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
            >
              <InfoCard className="card" variation={idx}>
                <h2>{principle.title}</h2>
                <p>{principle.body}</p>
              </InfoCard>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>

      <SectionReveal>
        <GlareHover
          className="glare-hover--fluid"
          borderRadius="22px"
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={280}
          transitionDuration={900}
        >
          <InfoCard className="section-block compact closing-cta" variation={2}>
            <p className="eyebrow">Your engagement</p>
            <h2>Have a system with similar depth in mind?</h2>
            <p>
              Walk us through the problem. We will map it to a pragmatic delivery
              plan within two business days.
            </p>
            <div className="card-actions">
              <Link href="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link href="/products" className="btn btn-ghost">
                Browse the Product Suite
              </Link>
            </div>
          </InfoCard>
        </GlareHover>
      </SectionReveal>
    </div>
  );
}
