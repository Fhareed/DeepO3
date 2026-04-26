import type { Metadata } from "next";
import Link from "next/link";
import InfoCard from "../../components/InfoCard";
import GlareHover from "../../components/GlareHover";
import TiltedPanel from "../../components/TiltedPanel";
import SectionReveal from "../../components/SectionReveal";
import { products } from "../../lib/products";

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

const solutions = [
  {
    title: "Conversational Systems",
    text: "Task-oriented assistants with RAG pipelines, multilingual support, and retrieval from trusted institutional sources.",
    tag: "RAG · LLMs · Eval"
  },
  {
    title: "Autonomous Multi-Agent Workflows",
    text: "Domain-specific agent systems for analysis, execution, control, and final decision support with transparent state tracking.",
    tag: "Planning · Tools · Memory"
  },
  {
    title: "Computer Vision Intelligence",
    text: "Video and image understanding systems that classify, detect, compare, and trace digital media at scale.",
    tag: "Detection · OCR · Embeddings"
  }
];

const engagementModels = [
  {
    step: "Model 01",
    title: "Discovery sprint",
    body: "Fixed-scope two-to-three week engagement producing an architecture brief, risk register, model-selection matrix, and build plan."
  },
  {
    step: "Model 02",
    title: "Build partnership",
    body: "Milestone-based delivery with a dedicated senior team working alongside your product and engineering groups through launch."
  },
  {
    step: "Model 03",
    title: "Managed operations",
    body: "Post-launch monitoring, evaluation, and iteration so the system keeps meeting its operational targets as usage grows."
  }
];

export default function SolutionsPage() {
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
            <p className="eyebrow">Solutions</p>
            <h1>Software engineered around real workflows.</h1>
            <p className="lead">
              End-to-end systems with clear outcomes: faster operations, better
              decisions, and dependable user experiences in production.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">
                Scope an Engagement
              </Link>
              <Link href="/case-studies" className="btn btn-ghost">
                See Live Case Studies
              </Link>
            </div>
          </section>
          </TiltedPanel>
        </GlareHover>
      </SectionReveal>

      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Core capabilities</p>
            <h2>Three intersecting disciplines.</h2>
          </div>
          <p className="section-intro-body">
            Every engagement combines these into a single reliable system
            tailored to your operating context — not a generic AI prototype.
          </p>
        </header>
      </SectionReveal>

      <section className="case-grid">
        {solutions.map((item, index) => (
          <SectionReveal key={item.title} delay={index * 0.08} amount={0.3}>
            <GlareHover
              className="glare-hover--fluid"
              borderRadius="22px"
              glareColor="#69b5ff"
              glareOpacity={0.4}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
            >
              <InfoCard className="card" variation={index}>
                <p className="chip">{item.tag}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </InfoCard>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>

      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Applied</p>
            <h2>Live in our product suite.</h2>
          </div>
          <p className="section-intro-body">
            The same capabilities currently power three DeepO3 products across
            finance, municipal services, and knowledge management.
          </p>
        </header>
      </SectionReveal>

      <section className="case-grid">
        {products.map((product, index) => (
          <SectionReveal key={product.slug} delay={index * 0.08} amount={0.3}>
            <GlareHover
              className="glare-hover--fluid"
              borderRadius="22px"
              glareColor="#69b5ff"
              glareOpacity={0.4}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
            >
              <InfoCard className="card" variation={index} accent={product.accent}>
                <p className="chip">{product.title}</p>
                <p>{product.positioning}</p>
                <div className="card-actions">
                  <Link href={`/products/${product.slug}`} className="btn btn-ghost">
                    Read Product Profile
                  </Link>
                </div>
              </InfoCard>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>

      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Engagement models</p>
            <h2>How partnerships are structured.</h2>
          </div>
          <p className="section-intro-body">
            Three entry points — pick what fits the stage of your initiative.
            Scope and pricing are transparent before work begins.
          </p>
        </header>
      </SectionReveal>

      <section className="approach-grid">
        {engagementModels.map((model, idx) => (
          <SectionReveal key={model.step} delay={idx * 0.08} amount={0.3}>
            <GlareHover
              className="glare-hover--fluid"
              borderRadius="18px"
              glareColor="#ffffff"
              glareOpacity={0.25}
              glareAngle={-30}
              glareSize={260}
              transitionDuration={800}
            >
              <TiltedPanel>
                <article className="glass approach-step">
                  <span className="approach-step-num">{model.step}</span>
                  <h3>{model.title}</h3>
                  <p>{model.body}</p>
                </article>
              </TiltedPanel>
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
            <p className="eyebrow">Start a scope</p>
            <h2>Need a custom architecture for your workflow?</h2>
            <p>
              We will scope your use case and produce a technical blueprint in a
              short discovery sprint — before any build work begins.
            </p>
            <div className="card-actions">
              <Link href="/contact" className="btn btn-primary">
                Start Discovery
              </Link>
              <Link href="/case-studies" className="btn btn-ghost">
                See What We Have Shipped
              </Link>
            </div>
          </InfoCard>
        </GlareHover>
      </SectionReveal>
    </div>
  );
}
