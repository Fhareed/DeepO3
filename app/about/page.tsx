import type { Metadata } from "next";
import Reveal from "../../components/redesign/Reveal";
import RevealImage from "../../components/redesign/RevealImage";
import Btn from "../../components/redesign/Btn";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Farid Oladega — Senior Full Stack & AI Engineer and founder of DeepO3. Selected client work, education, and background building intelligent systems with SMEs and research institutions.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Farid Oladega | DeepO3",
    description:
      "Senior Full Stack & AI Engineer and founder of DeepO3. Selected client work with Finnish SMEs, Nigerian businesses, and research institutions.",
    url: "/about",
    type: "profile"
  }
};

/* Short capability chips rendered under the hero. Reads as a one-line
   positioning statement — what Farid actually ships. */
const capabilities = [
  "Full-stack engineering",
  "LLM & multi-agent systems",
  "RAG + retrieval pipelines",
  "Cloud-native architecture",
  "MLOps & observability"
];

/* Selected client engagements. Keep this list honest and expandable —
   each new engagement slots in as another entry below AVEO AI. */
const featuredEngagement = {
  company: "AVEO AI",
  location: "Vaasa, Finland",
  context:
    "A Finnish SME building AI learning solutions for primary industries.",
  partners: ["University of Vaasa", "Pohjanmaan Yrityskummit"],
  summary:
    "Designed and prototyped a gamified learning platform — a Duolingo-style app that teaches farmers how to use AI tools in their day-to-day agricultural work. The brief was to take complex, structured AI training material and present it in a format that non-technical users could actually finish and enjoy.",
  role: "Student engineer, Flipped Mentorship pilot",
  team: ["Ataur", "Surekha", "Farid", "Trang", "Ashma", "Binita"],
  outcome:
    "The pilot was well-received by AVEO AI's leadership. On the back of the prototype, AVEO AI proposed taking the platform forward with the Finnish government as a benefit for farmers after they pay their union dues — expanding the reach from a single company to a national cohort.",
  image: "/about/aveo-ai-vaasa.jpg",
  imageAlt:
    "Group of students at the University of Vaasa game hall during the Flipped Mentorship programme with AVEO AI.",
  articleHref:
    "https://www.uwasa.fi/en/newshub/news/students-developing-gamified-learning-solution-flipped-mentorship-programme-engaged"
};

/* Professional experience strip. Pulled from the live CV, condensed to
   the signal companies actually read. */
const experience = [
  {
    period: "Mar 2026 – Present",
    company: "Kay-Solak Nig. Ventures",
    role: "Software / AI Engineer — Remote, Nigeria",
    tag: "AI + Platform"
  },
  {
    period: "Apr 2022 – Dec 2025",
    company: "STX Next",
    role: "Software Engineer — Remote",
    tag: "AI Automation"
  },
  {
    period: "Jan 2019 – Apr 2022",
    company: "Kay-Solak Nig. Ventures",
    role: "Full Stack Engineer — Remote, Nigeria",
    tag: "Cloud Migration"
  },
  {
    period: "Jan 2014 – Oct 2018",
    company: "Aveolabs",
    role: "Full Stack Engineer — Remote, Nigeria",
    tag: "Analytics"
  }
];

/* Education. Masters stacked across three European universities. */
const education = [
  {
    period: "Completing Mar 2026",
    school: "University of Konstanz",
    degree: "M.Sc. Computer Science"
  },
  {
    period: "Sept 2024 – Aug 2026",
    school: "University of Vaasa",
    degree: "M.Sc. Sustainable and Autonomous Systems"
  },
  {
    period: "Sept 2024 – Aug 2026",
    school: "University of Oulu",
    degree: "M.Sc. Sustainable and Autonomous Systems"
  }
];

export default function AboutPage() {
  return (
    <div className="dx-page">
      {/* (1) Hero — name, role, positioning. */}
      <section className="dx-section dx-pagehead">
        <div className="dx-container">
          <Reveal>
            <p className="dx-eyebrow">About</p>
          </Reveal>

          <div className="ab-hero">
            <div className="ab-hero__text">
              <Reveal index={1}>
                <h1 className="dx-display ab-hero__name">Farid Oladega</h1>
              </Reveal>

              <Reveal index={2}>
                <p className="ab-hero__role">
                  Senior Full Stack &amp; AI Engineer · Founder, DeepO3
                </p>
              </Reveal>

              <Reveal index={3}>
                <p className="dx-lead">
                  I build AI-native software for firms and organisations that
                  need the tools to actually hold up in production — intelligent
                  automation, LLM and multi-agent systems, and the cloud-native
                  plumbing that makes them reliable. DeepO3 is where that work
                  lives today; the engagements below are the ones that got me
                  here.
                </p>
              </Reveal>

              <Reveal index={4}>
                <ul className="ab-hero__meta" aria-label="Current base and focus">
                  <li>Based in Konstanz, Germany</li>
                  <li>Working across the EU &amp; West Africa</li>
                </ul>
              </Reveal>

              <Reveal index={5} className="ab-hero__actions">
                <Btn href="/contact">Start a conversation</Btn>
                <Btn href="/case-studies" variant="white">
                  See DeepO3 case studies
                </Btn>
              </Reveal>
            </div>

            <Reveal index={2} className="ab-hero__aside">
              <span className="ab-hero__asideLabel">What I ship</span>
              <ul className="ab-caps" aria-label="Capabilities">
                {capabilities.map((cap) => (
                  <li key={cap} className="dx-chip">
                    {cap}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* (2) Featured engagement — AVEO AI × University of Vaasa. */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head ab-sec-head">
            <p className="dx-eyebrow">Selected client work</p>
            <h2 className="dx-h2">
              Where theory meets real companies with real users.
            </h2>
            <p className="dx-body">
              Each engagement below is a system I helped design and ship for
              someone operating outside the lab. These are the briefs that
              shaped how DeepO3 approaches work today.
            </p>
          </Reveal>

          <div className="ab-feature">
            <Reveal>
              <RevealImage
                src={featuredEngagement.image}
                alt={featuredEngagement.imageAlt}
                aspectRatio="16 / 10"
              />
            </Reveal>

            <div className="ab-feature__text">
              <Reveal>
                <div className="ab-feature__top">
                  <span className="dx-chip">{featuredEngagement.company}</span>
                  <span className="dx-chip">{featuredEngagement.location}</span>
                  <span className="dx-chip">Shipped</span>
                </div>
              </Reveal>

              <Reveal index={1}>
                <h3 className="dx-h3">
                  Gamified AI-literacy app for Finnish farmers.
                </h3>
              </Reveal>

              <Reveal index={2}>
                <p className="ab-feature__role">
                  {featuredEngagement.role} · In collaboration with{" "}
                  {featuredEngagement.partners.join(" and ")}
                </p>
              </Reveal>

              <Reveal index={3}>
                <p className="dx-body">{featuredEngagement.summary}</p>
              </Reveal>

              <Reveal index={4}>
                <p className="dx-body">
                  <span className="dx-muted">About the client — </span>
                  {featuredEngagement.context}
                </p>
              </Reveal>

              <Reveal index={5} className="ab-feature__outcome">
                <span className="ab-feature__outcomeLabel">Outcome</span>
                <p className="dx-body">{featuredEngagement.outcome}</p>
              </Reveal>

              <Reveal index={6} className="ab-feature__actions">
                <Btn href={featuredEngagement.articleHref} external>
                  Read the University of Vaasa write-up
                </Btn>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* (3) Professional background. */}
      <section className="dx-section">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head ab-sec-head">
            <p className="dx-eyebrow">Background</p>
            <h2 className="dx-h2">A decade of shipping production systems.</h2>
            <p className="dx-body">
              Before DeepO3, I spent ten years building and operating the kind
              of infrastructure that AI products eventually run on — intake
              pipelines, event-driven backends, API gateways, and MLOps for
              teams that could not afford downtime.
            </p>
          </Reveal>

          <ol className="ab-exp" aria-label="Professional experience">
            {experience.map((entry, i) => (
              <Reveal
                as="li"
                key={`${entry.company}-${entry.period}`}
                className="ab-exp__row"
                index={i}
              >
                <span className="ab-exp__period">{entry.period}</span>
                <span className="ab-exp__title">
                  <span className="ab-exp__company">{entry.company}</span>
                  <span className="ab-exp__role">{entry.role}</span>
                </span>
                <span className="ab-exp__tag">{entry.tag}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* (4) Education. */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head ab-sec-head">
            <p className="dx-eyebrow">Education</p>
            <h2 className="dx-h2">Studied where sustainability meets systems.</h2>
            <p className="dx-body">
              Three Masters programmes across Germany and Finland, each
              anchored in autonomous systems and computer science — the
              foundation DeepO3 is built on.
            </p>
          </Reveal>

          <div className="ab-edu-grid">
            {education.map((entry, i) => (
              <Reveal key={entry.school} className="ab-edu" index={i}>
                <span className="ab-edu__period">{entry.period}</span>
                <h3 className="ab-edu__school">{entry.school}</h3>
                <p className="ab-edu__degree">{entry.degree}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* (5) Closing CTA. */}
      <section
        className="dx-section"
        aria-label="Start an engagement"
      >
        <div className="dx-container dx-container--narrow ab-cta-inner">
          <Reveal>
            <p className="dx-eyebrow" style={{ justifyContent: "center" }}>
              Work with me
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="dx-display">
              Got a workflow that needs intelligence built into it?
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="dx-lead ab-cta-lead">
              Tell me what you&apos;re trying to build. I&apos;ll come back
              with a practical delivery path within two business days — no
              sales deck, no account manager layer.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="ab-cta-actions">
              <Btn href="/contact">Start a Conversation</Btn>
              <Btn href="/case-studies" variant="white">
                Browse Case Studies
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
