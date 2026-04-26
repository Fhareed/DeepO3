"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { StoryRail } from "../components/StoryRail";
import { AnimatedBlob } from "../components/AnimatedBlob";
import InfoCard from "../components/InfoCard";
import GlareHover from "../components/GlareHover";
import TiltedPanel from "../components/TiltedPanel";
import SectionReveal from "../components/SectionReveal";
import TextType from "../components/TextType";
import { products } from "../lib/products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const capabilities = [
  {
    title: "Conversational systems",
    body: "Production-grade AI assistants with grounded retrieval, multilingual support, and clear guardrails for regulated workflows.",
    tag: "RAG · LLMs · Eval"
  },
  {
    title: "Autonomous multi-agent workflows",
    body: "Domain-specific agent architectures that analyze, decide, and execute with transparent state tracking and auditability.",
    tag: "Planning · Tools · Memory"
  },
  {
    title: "Computer vision intelligence",
    body: "End-to-end pipelines that classify, detect, compare, and trace digital media at scale with human-in-the-loop review.",
    tag: "Detection · OCR · Embeddings"
  }
];

const approach = [
  {
    step: "01",
    title: "Discover",
    body: "Stakeholder mapping, workflow audits, and opportunity sizing in a focused discovery sprint."
  },
  {
    step: "02",
    title: "Design",
    body: "Architecture, UX, and model-selection blueprints aligned with production constraints."
  },
  {
    step: "03",
    title: "Build",
    body: "Iterative delivery with measurable milestones, CI/CD, and operational telemetry baked in."
  },
  {
    step: "04",
    title: "Operate",
    body: "Monitoring, evaluations, and guardrails so systems stay reliable after launch."
  }
];

const metrics = [
  { value: "AI-native", label: "Architecture baseline" },
  { value: "3", label: "Products in market" },
  { value: "End-to-end", label: "Discovery → Operations" },
  { value: "Enterprise", label: "Engineering standard" }
];

export default function Home() {
  return (
    <div className="page-shell">
      {/* HERO */}
      <SectionReveal>
        <GlareHover
          className="glare-hover--fluid"
          borderRadius="22px"
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={260}
          transitionDuration={900}
        >
          <TiltedPanel>
          <section className="hero glass">
            <AnimatedBlob className="hero-blob" />
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={itemVariants} className="eyebrow">
                AI-native software partner
              </motion.p>
              <motion.h1 variants={itemVariants}>
                <TextType
                  as="span"
                  text={[
                    "DeepO3 builds intelligent software for firms and organizations.",
                    "DeepO3 ships AI-native systems for high-stakes workflows.",
                    "DeepO3 engineers production-grade AI products that endure.",
                    "DeepO3 turns complex operations into reliable digital products."
                  ]}
                  typingSpeed={55}
                  deletingSpeed={22}
                  pauseDuration={2600}
                  initialDelay={400}
                  loop
                  showCursor
                  cursorCharacter="|"
                  cursorClassName="hero-cursor"
                />
              </motion.h1>
              <motion.p variants={itemVariants} className="lead">
                We combine product thinking, AI systems, and robust engineering to
                turn high-stakes workflows into reliable digital products.
              </motion.p>
              <motion.div variants={itemVariants} className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Book a Discovery Call
                </Link>
                <Link href="/case-studies" className="btn btn-ghost">
                  View Case Studies
                </Link>
              </motion.div>
              <motion.dl variants={itemVariants} className="hero-proof">
                {metrics.map((metric) => (
                  <div key={metric.label} className="hero-proof-item">
                    <dt>{metric.value}</dt>
                    <dd>{metric.label}</dd>
                  </div>
                ))}
              </motion.dl>
            </motion.div>
          </section>
          </TiltedPanel>
        </GlareHover>
      </SectionReveal>

      {/* CAPABILITIES */}
      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Capabilities</p>
            <h2>Where we make AI deliver.</h2>
          </div>
          <p className="section-intro-body">
            Three intersecting disciplines — combined into a single reliable
            system tailored to your operating context.
          </p>
        </header>
      </SectionReveal>

      <section className="case-grid">
        {capabilities.map((cap, idx) => (
          <SectionReveal key={cap.title} delay={idx * 0.08} amount={0.3}>
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
                <p className="chip">{cap.tag}</p>
                <h2>{cap.title}</h2>
                <p>{cap.body}</p>
              </InfoCard>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>

      {/* PRODUCT SUITE */}
      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Product Suite</p>
            <h2>Recent products in market.</h2>
          </div>
          <p className="section-intro-body">
            A sample of systems DeepO3 has launched or is actively developing
            across regulated, operational, and financial domains.
          </p>
        </header>
      </SectionReveal>

      <section className="case-grid">
        {products.map((product, idx) => (
          <SectionReveal key={product.slug} delay={idx * 0.1} amount={0.3}>
            <GlareHover
              className="glare-hover--fluid"
              borderRadius="22px"
              glareColor="#69b5ff"
              glareOpacity={0.4}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
            >
              <InfoCard className="card" accent={product.accent} variation={idx}>
                <p className="chip">{product.category}</p>
                <h2>{product.title}</h2>
                <p>{product.summary}</p>
                <div className="card-actions">
                  <Link href={`/products/${product.slug}`} className="btn btn-ghost">
                    Explore Product
                  </Link>
                </div>
              </InfoCard>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>

      {/* APPROACH */}
      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Approach</p>
            <h2>How we deliver.</h2>
          </div>
          <p className="section-intro-body">
            A small, senior team partnering with yours — from initial scoping
            through post-launch operations.
          </p>
        </header>
      </SectionReveal>

      <section className="approach-grid">
        {approach.map((item, idx) => (
          <SectionReveal key={item.step} delay={idx * 0.08} amount={0.3}>
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
                  <span className="approach-step-num">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </TiltedPanel>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>

      <SectionReveal>
        <StoryRail />
      </SectionReveal>

      {/* CLOSING CTA */}
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
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Design your next intelligent system with a team that ships.</h2>
            <p>
              Share your challenge — we respond with a practical build path
              within two business days.
            </p>
            <div className="card-actions">
              <Link href="/contact" className="btn btn-primary">
                Book a Discovery Call
              </Link>
              <Link href="/products" className="btn btn-ghost">
                See Our Products
              </Link>
            </div>
          </InfoCard>
        </GlareHover>
      </SectionReveal>
    </div>
  );
}
