import type { Metadata } from "next";
import Link from "next/link";
import InfoCard from "../../components/InfoCard";
import GlareHover from "../../components/GlareHover";
import TiltedPanel from "../../components/TiltedPanel";
import SectionReveal from "../../components/SectionReveal";
import ContactForm from "../../components/ContactForm";

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

const intakeFlow = [
  {
    step: "Step 01",
    title: "Receive",
    body: "Your brief lands with the team that would lead the engagement — no inbox triage, no account managers in between."
  },
  {
    step: "Step 02",
    title: "Respond",
    body: "We reply within two business days with a practical build path, clarifying questions, and indicative scope."
  },
  {
    step: "Step 03",
    title: "Discovery",
    body: "If there is fit, we schedule a short discovery call to validate scope, timeline, and team composition before any commitment."
  }
];

const channels = [
  {
    label: "Email",
    title: "contact@deepo3.com",
    body: "Direct line to the partnership team. Expect a reply inside two business days.",
    href: "mailto:contact@deepo3.com",
    cta: "Send an email"
  },
  {
    label: "LinkedIn",
    title: "DeepO3 on LinkedIn",
    body: "Company updates, launches, and the people behind each engagement.",
    href: "https://linkedin.com",
    cta: "Open profile"
  },
  {
    label: "Discovery call",
    title: "Book a 30-minute intro",
    body: "A short, no-commitment session to understand your workflow and explore fit.",
    href: "/contact",
    cta: "Request a slot"
  }
];

export default function ContactPage() {
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
            <p className="eyebrow">Contact</p>
            <h1>Design your next intelligent system with us.</h1>
            <p className="lead">
              Tell us about the workflow you are trying to transform. We respond
              with a practical build path — not a sales deck.
            </p>
            <dl className="hero-proof">
              <div className="hero-proof-item">
                <dt>2 days</dt>
                <dd>Average response time</dd>
              </div>
              <div className="hero-proof-item">
                <dt>30 min</dt>
                <dd>Discovery session</dd>
              </div>
              <div className="hero-proof-item">
                <dt>Senior team</dt>
                <dd>No account-manager layer</dd>
              </div>
              <div className="hero-proof-item">
                <dt>Transparent</dt>
                <dd>Scope and pricing upfront</dd>
              </div>
            </dl>
          </section>
          </TiltedPanel>
        </GlareHover>
      </SectionReveal>

      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Intake path</p>
            <h2>What happens after you send a brief.</h2>
          </div>
          <p className="section-intro-body">
            A lightweight, transparent onboarding path. No long qualification
            calls, no forced NDAs before we can have a useful conversation.
          </p>
        </header>
      </SectionReveal>

      <section className="approach-grid">
        {intakeFlow.map((stage, idx) => (
          <SectionReveal key={stage.step} delay={idx * 0.08} amount={0.3}>
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
                  <span className="approach-step-num">{stage.step}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.body}</p>
                </article>
              </TiltedPanel>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>

      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Project brief</p>
            <h2>Share what you are trying to build.</h2>
          </div>
          <p className="section-intro-body">
            A few details is enough — what the system needs to do, who will use
            it, and any constraints you already know about.
          </p>
        </header>
      </SectionReveal>

      <SectionReveal>
        <GlareHover
          className="glare-hover--fluid"
          borderRadius="22px"
          glareColor="#69b5ff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={280}
          transitionDuration={900}
        >
          <InfoCard className="section-block compact" variation={1}>
            <ContactForm />
          </InfoCard>
        </GlareHover>
      </SectionReveal>

      <SectionReveal>
        <header className="section-intro">
          <div className="section-intro-lead">
            <p className="eyebrow">Other channels</p>
            <h2>Reach us directly.</h2>
          </div>
          <p className="section-intro-body">
            The form is the fastest path for a detailed brief, but you can also
            reach the team through any of these.
          </p>
        </header>
      </SectionReveal>

      <section className="case-grid">
        {channels.map((channel, idx) => (
          <SectionReveal key={channel.label} delay={idx * 0.08} amount={0.3}>
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
                <p className="chip">{channel.label}</p>
                <h2>{channel.title}</h2>
                <p>{channel.body}</p>
                <div className="card-actions">
                  <Link href={channel.href} className="btn btn-ghost">
                    {channel.cta}
                  </Link>
                </div>
              </InfoCard>
            </GlareHover>
          </SectionReveal>
        ))}
      </section>
    </div>
  );
}
