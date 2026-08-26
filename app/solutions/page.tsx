import type { Metadata } from "next";
import Reveal from "../../components/redesign/Reveal";
import Btn from "../../components/redesign/Btn";
import RevealImage from "../../components/redesign/RevealImage";
import TiltCard from "../../components/redesign/TiltCard";
import "./solutions.css";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "End-to-end AI solutions from DeepO3 — conversational systems, autonomous multi-agent workflows, and computer vision intelligence engineered around real operational workflows.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | DeepO3",
    description:
      "Conversational systems, multi-agent workflows, and computer vision intelligence — engineered around real workflows.",
    url: "/solutions",
    type: "website"
  }
};

type Capability = {
  tag: string;
  title: string;
  text: string;
  img: string;
  alt: string;
};

const capabilities: Capability[] = [
  {
    tag: "RAG · LLMs · Eval",
    title: "Conversational Systems",
    text: "Task-oriented assistants with RAG pipelines, multilingual support, and retrieval from trusted institutional sources.",
    img: "https://images.unsplash.com/photo-1774799560672-151b971fd336?auto=format&fit=crop&w=1600&q=85",
    alt: "Conversational AI systems"
  },
  {
    tag: "Planning · Tools · Memory",
    title: "Autonomous Multi-Agent Workflows",
    text: "Domain-specific agent systems for analysis, execution, control, and final decision support with transparent state tracking.",
    img: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1600&q=85",
    alt: "Autonomous multi-agent workflows"
  },
  {
    tag: "Detection · OCR · Embeddings",
    title: "Computer Vision Intelligence",
    text: "Video and image understanding systems that classify, detect, compare, and trace digital media at scale.",
    img: "https://images.unsplash.com/photo-1742774101928-f7e92a471c1b?auto=format&fit=crop&w=1600&q=85",
    alt: "Computer vision intelligence"
  }
];

type EngagementModel = {
  step: string;
  title: string;
  body: string;
  featured?: boolean;
};

const engagementModels: EngagementModel[] = [
  {
    step: "Model 01",
    title: "Discovery sprint",
    body: "Fixed-scope two-to-three week engagement producing an architecture brief, risk register, model-selection matrix, and build plan."
  },
  {
    step: "Model 02",
    title: "Build partnership",
    body: "Milestone-based delivery with a dedicated senior team working alongside your product and engineering groups through launch.",
    featured: true
  },
  {
    step: "Model 03",
    title: "Managed operations",
    body: "Post-launch monitoring, evaluation, and iteration so the system keeps meeting its operational targets as usage grows."
  }
];

/* Small teal check for the PaperPilot highlights. Inline SVG, stroke = accent. */
const Check = () => (
  <svg
    className="sol-check"
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

export default function SolutionsPage() {
  return (
    <div className="dx-page">
      {/* 1 — Page header (clears the fixed floating nav) */}
      <section className="dx-section dx-pagehead">
        <div className="dx-container">
          <Reveal>
            <p className="dx-eyebrow">Solutions</p>
          </Reveal>
          <Reveal index={1}>
            <h1 className="dx-display sol-hero-title">
              Software engineered around real workflows.
            </h1>
          </Reveal>
          <Reveal index={2}>
            <p className="dx-lead sol-hero-lead">
              End-to-end systems with clear outcomes: faster operations, better
              decisions, and dependable user experiences in production.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="sol-head-actions">
              <Btn href="/contact">Scope an Engagement</Btn>
              <Btn href="/case-studies" variant="white">
                See Live Case Studies
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — Core capabilities */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head">
            <p className="dx-eyebrow">Core capabilities</p>
            <h2 className="dx-h2">Three intersecting disciplines.</h2>
            <p className="dx-body">
              Every engagement combines these into a single reliable system
              tailored to your operating context — not a generic AI prototype.
            </p>
          </Reveal>

          <div className="sol-cap-grid">
            {capabilities.map((item, i) => (
              <Reveal key={item.title} className="sol-cap-item" index={i}>
                <TiltCard className="sol-cap-tilt" max={5}>
                  <article className="sol-card">
                    <RevealImage
                      src={item.img}
                      alt={item.alt}
                      aspectRatio="16 / 10"
                      className="sol-card-media"
                    />
                    <div className="sol-card-body">
                      <span className="dx-chip sol-card-chip">{item.tag}</span>
                      <h3 className="dx-h3 sol-card-title">{item.title}</h3>
                      <p className="dx-body sol-card-text">{item.text}</p>
                    </div>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2b — Live in production: PaperPilot */}
      <section
        className="dx-section sol-live"
        aria-label="PaperPilot — a solution live in production"
      >
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head">
            <p className="dx-eyebrow">In production</p>
            <h2 className="dx-h2">A solution live in the wild.</h2>
            <p className="dx-body">
              The same disciplines, shipped. PaperPilot is a DeepO3 product
              already helping international students through their first months in
              Germany — proof the approach holds up well outside the lab.
            </p>
          </Reveal>

          <div className="sol-live-row">
            <Reveal className="sol-live-media">
              <RevealImage
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=85"
                alt="PaperPilot — guiding newcomers through German bureaucracy"
                aspectRatio="4 / 3"
              />
            </Reveal>

            <div className="sol-live-text">
              <Reveal className="sol-live-top">
                <span className="sol-live-name">PaperPilot</span>
                <span className="dx-chip">Live</span>
              </Reveal>

              <Reveal index={1}>
                <p className="dx-lead sol-live-lead">
                  Anmeldung → Tax ID → bank → residence permit. One missed step
                  blocks the next — so PaperPilot turns Germany&apos;s post-arrival
                  bureaucracy into a personalized, bilingual roadmap, ordered so
                  each step unlocks the one after it.
                </p>
              </Reveal>

              <Reveal as="ul" index={2} className="sol-live-list">
                <li className="sol-live-feat">
                  <Check />
                  <span className="dx-body">
                    Personalized 11-step plan from six short questions
                  </span>
                </li>
                <li className="sol-live-feat">
                  <Check />
                  <span className="dx-body">
                    Bilingual guidance with checklists, offices, and deadlines
                  </span>
                </li>
                <li className="sol-live-feat">
                  <Check />
                  <span className="dx-body">
                    Anonymous, account-free, and free of commissions
                  </span>
                </li>
              </Reveal>

              <Reveal index={3} className="sol-live-actions">
                <Btn href="https://paper-pilot.de/" external>
                  Open PaperPilot
                </Btn>
                <Btn href="/products/paperpilot" variant="white">
                  Read the case study
                </Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Engagement models */}
      <section className="dx-section">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head dx-section-head--center">
            <p className="dx-eyebrow">Engagement models</p>
            <h2 className="dx-h2">How partnerships are structured.</h2>
            <p className="dx-body">
              Three entry points — pick what fits the stage of your initiative.
              Scope and pricing are transparent before work begins.
            </p>
          </Reveal>

          <div className="sol-en-grid">
            {engagementModels.map((model, i) => (
              <Reveal key={model.step} className="sol-en-item" index={i}>
                <TiltCard className="sol-en-tilt" max={5}>
                  <article
                    className={
                      "sol-en-card" +
                      (model.featured ? " sol-en-card--featured" : "")
                    }
                  >
                    <span className="sol-en-name">{model.step}</span>
                    <h3 className="dx-h3 sol-en-title">{model.title}</h3>
                    <p className="dx-body dx-muted sol-en-body">{model.body}</p>
                  </article>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Closing CTA */}
      <section className="dx-section dx-section--paper" aria-label="Start a scope">
        <div className="dx-container dx-container--narrow sol-cta-inner">
          <Reveal>
            <p className="dx-eyebrow sol-cta-eyebrow">Start a scope</p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="dx-display sol-cta-title">
              Need a custom architecture for your workflow?
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="dx-lead sol-cta-lead">
              We will scope your use case and produce a technical blueprint in a
              short discovery sprint — before any build work begins.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="sol-cta-actions">
              <Btn href="/contact">Start Discovery</Btn>
              <Btn href="/case-studies" variant="white">
                See What We Have Shipped
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
