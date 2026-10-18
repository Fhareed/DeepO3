import type { Metadata } from "next";
import Reveal from "../../components/redesign/Reveal";
import RevealImage from "../../components/redesign/RevealImage";
import Btn from "../../components/redesign/Btn";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About DeepO3, an AI-native software studio founded by Farid Oladega. Selected client and research-institution collaborations across Finland and Germany.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About DeepO3",
    description:
      "An AI-native software studio founded by Farid Oladega. Selected collaborations with SMEs and research institutions across the EU.",
    url: "/about",
    type: "website"
  }
};

/* Short capability chips rendered under the hero. One-line positioning
   for what the studio actually ships. */
const capabilities = [
  "Full-stack engineering",
  "LLM & multi-agent systems",
  "RAG + retrieval pipelines",
  "Cloud-native architecture",
  "MLOps & observability"
];

/* DeepO3's active collaborations. New engagements slot in below. */
type Engagement = {
  company: string;
  location: string;
  status: string;
  headline: string;
  role: string;
  partners?: string[];
  context: string;
  summary: string;
  outcome: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  reverse: boolean;
};

const deepO3Collaborations: Engagement[] = [
  {
    company: "PaperPilot",
    location: "Konstanz, Germany",
    status: "Live and growing",
    headline:
      "Guided onboarding for international students arriving in Germany.",
    role: "DeepO3 product, developed with academic partners",
    partners: [
      "University of Konstanz (International Welcome Center)",
      "HTWG Konstanz"
    ],
    context:
      "A dependency-ordered roadmap through Germany's post-arrival bureaucracy: Anmeldung, Tax ID, bank account, residence permit, each step unlocked in the exact order it is reachable in real life.",
    summary:
      "DeepO3 built PaperPilot alongside the University of Konstanz International Welcome Center and HTWG Konstanz. From six short questions the system generates a personalised, bilingual eleven-step roadmap with document checklists, office locations and deadline tracking, no account required, no ads, no commissions. The content is validated by an eleven-student survey carried out at Konstanz in May 2026 and reviewed by the Welcome Center every semester.",
    outcome:
      "PaperPilot is live at paper-pilot.de and in active use by international students arriving in Konstanz. New features and content ship continuously as users report edge cases and new workflows appear, with Phase 2 reminders already in development. The ongoing partnership with University of Konstanz and HTWG keeps the roadmap aligned with how the institutions and the city actually operate.",
    image: "/about/paperpilot-konstanz.jpg",
    imageAlt:
      "PaperPilot onboarding assistant guiding international students through German bureaucracy.",
    ctaLabel: "Open PaperPilot",
    ctaHref: "https://paper-pilot.de/",
    reverse: false
  },
  {
    company: "Restaurant ordering platforms",
    location: "Germany",
    status: "Live with multiple clients",
    headline:
      "Branded online ordering and payments for independent restaurants.",
    role: "DeepO3 commercial engineering practice · Clients kept private by request",
    context:
      "Independent restaurants that want their own branded ordering flow instead of paying 20–30% per order to delivery aggregators.",
    summary:
      "DeepO3 designs and ships bilingual online ordering platforms for restaurants, with cart, checkout, payments and order routing to the kitchen baked in. Each build is tailored to the client's menu, workflow and brand, and includes product differentiators like a Glücksrad lucky-wheel at checkout that drives repeat orders. Where the client needs it, DeepO3 also ships a companion mobile app so customers order from their phone instead of mobile web.",
    outcome:
      "Live with multiple independent German restaurants, with new client-specific features and payment flows shipping continuously. A representative build is open for anyone to click through end to end at bestellsystem-beta.vercel.app.",
    image: "/about/bestellsystem-ordering.jpg",
    imageAlt:
      "Mobile preview of a DeepO3-built restaurant ordering platform with bilingual UI and a lucky-wheel checkout feature.",
    ctaLabel: "View a representative demo",
    ctaHref: "https://bestellsystem-beta.vercel.app/",
    reverse: true
  }
];

/* Founder's work before DeepO3. Credential signal, framed clearly as
   prior collaborations rather than studio engagements. */
const priorWork: Engagement[] = [
  {
    company: "AVEO AI",
    location: "Vaasa, Finland",
    status: "Prototype shipped",
    headline: "Gamified AI-literacy app for Finnish farmers.",
    role: "Flipped Mentorship pilot, University of Vaasa (2025)",
    partners: [
      "University of Vaasa",
      "Pohjanmaan Yrityskummit (Suomen Yrityskummit)"
    ],
    context:
      "A Finnish SME building AI learning solutions for primary industries.",
    summary:
      "Before DeepO3, Farid was part of the student team that worked with AVEO AI through the University of Vaasa Flipped Mentorship pilot, a programme pairing international students with Ostrobothnian SMEs on real development briefs. The group designed and prototyped a gamified learning platform, a Duolingo-style app that teaches farmers how to use AI tools in their day-to-day agricultural work, taking complex structured training material and reshaping it into a format non-technical users could actually finish and enjoy.",
    outcome:
      "The pilot was well-received by AVEO AI's leadership. On the back of the prototype, AVEO AI proposed taking the platform forward with the Finnish government as a benefit for farmers after they pay their union dues, expanding the reach from a single company to a national cohort.",
    image: "/about/aveo-ai-vaasa.jpg",
    imageAlt:
      "Group of students at the University of Vaasa game hall during the Flipped Mentorship programme with AVEO AI.",
    ctaLabel: "Read the University of Vaasa write-up",
    ctaHref:
      "https://www.uwasa.fi/en/newshub/news/students-developing-gamified-learning-solution-flipped-mentorship-programme-engaged",
    reverse: false
  }
];

/* Professional background behind the studio. Pulled from the live CV,
   condensed to the companies that recruiters actually read. */
const experience = [
  {
    period: "Mar 2026 – Present",
    company: "Kay-Solak Nig. Ventures",
    role: "Software / AI Engineer, Remote, Nigeria",
    tag: "AI + Platform"
  },
  {
    period: "Apr 2022 – Dec 2025",
    company: "STX Next",
    role: "Software Engineer, Remote",
    tag: "AI Automation"
  },
  {
    period: "Jan 2019 – Apr 2022",
    company: "Kay-Solak Nig. Ventures",
    role: "Full Stack Engineer, Remote, Nigeria",
    tag: "Cloud Migration"
  },
  {
    period: "Jan 2014 – Oct 2018",
    company: "Aveolabs",
    role: "Full Stack Engineer, Remote, Nigeria",
    tag: "Analytics"
  }
];

/* Education. Three Masters programmes across Germany and Finland, all
   completed. */
const education = [
  {
    period: "Completed Mar 2026",
    school: "University of Konstanz",
    degree: "M.Sc. Computer Science"
  },
  {
    period: "Completed Aug 2026",
    school: "University of Vaasa",
    degree: "M.Sc. Sustainable and Autonomous Systems"
  },
  {
    period: "Completed Aug 2026",
    school: "University of Oulu",
    degree: "M.Sc. Sustainable and Autonomous Systems"
  }
];

export default function AboutPage() {
  return (
    <div className="dx-page">
      {/* (1) Hero — who we are, what we do. */}
      <section className="dx-section dx-pagehead">
        <div className="dx-container">
          <Reveal>
            <p className="dx-eyebrow">About</p>
          </Reveal>

          <div className="ab-hero">
            <div className="ab-hero__text">
              <Reveal index={1}>
                <h1 className="dx-display ab-hero__name">
                  An AI-native software studio, built on real collaborations.
                </h1>
              </Reveal>

              <Reveal index={2}>
                <p className="ab-hero__role">
                  DeepO3 · Founded by Farid Oladega
                </p>
              </Reveal>

              <Reveal index={3}>
                <p className="dx-lead">
                  DeepO3 builds AI-native software for firms, research
                  institutions and public-sector teams, intelligent automation,
                  LLM and multi-agent systems, and the cloud-native plumbing
                  that keeps them reliable in production. The partnerships
                  below are where our work shows up today.
                </p>
              </Reveal>

              <Reveal index={4}>
                <ul className="ab-hero__meta" aria-label="Where DeepO3 works">
                  <li>Based in Konstanz, Germany</li>
                  <li>Collaborations across the EU &amp; West Africa</li>
                </ul>
              </Reveal>

              <Reveal index={5} className="ab-hero__actions">
                <Btn href="/contact">Start a conversation</Btn>
                <Btn href="/case-studies" variant="white">
                  See product case studies
                </Btn>
              </Reveal>
            </div>

            <Reveal index={2} className="ab-hero__aside">
              <span className="ab-hero__asideLabel">What we ship</span>
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

      {/* (2) DeepO3 collaborations — PaperPilot (and future entries). */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head ab-sec-head">
            <p className="dx-eyebrow">DeepO3 collaborations</p>
            <h2 className="dx-h2">
              Live products built with partners who use them every day.
            </h2>
            <p className="dx-body">
              Each engagement below pairs DeepO3 with an operating partner,
              sometimes a research institution, sometimes an independent
              business. The common thread is real users, payments where
              needed, and continuous delivery, not pilots that sit on a shelf.
            </p>
          </Reveal>

          <div className="ab-engagements">
            {deepO3Collaborations.map((eng) => (
              <article
                key={eng.company}
                className={`ab-feature${eng.reverse ? " ab-feature--reverse" : ""}`}
                aria-labelledby={`eng-${eng.company.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Reveal className="ab-feature__media">
                  <RevealImage
                    src={eng.image}
                    alt={eng.imageAlt}
                    aspectRatio="16 / 10"
                  />
                </Reveal>

                <div className="ab-feature__text">
                  <Reveal>
                    <div className="ab-feature__top">
                      <span className="dx-chip">{eng.company}</span>
                      <span className="dx-chip">{eng.location}</span>
                      <span className="dx-chip">{eng.status}</span>
                    </div>
                  </Reveal>

                  <Reveal index={1}>
                    <h3
                      className="dx-h3"
                      id={`eng-${eng.company.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {eng.headline}
                    </h3>
                  </Reveal>

                  <Reveal index={2}>
                    <p className="ab-feature__role">
                      {eng.role}
                      {eng.partners && eng.partners.length > 0
                        ? ` · With ${eng.partners.join(" and ")}`
                        : ""}
                    </p>
                  </Reveal>

                  <Reveal index={3}>
                    <p className="dx-body">{eng.summary}</p>
                  </Reveal>

                  <Reveal index={4}>
                    <p className="dx-body">
                      <span className="dx-muted">
                        {eng.partners && eng.partners.length > 0
                          ? "About the partner, "
                          : "About the clients, "}
                      </span>
                      {eng.context}
                    </p>
                  </Reveal>

                  <Reveal index={5} className="ab-feature__outcome">
                    <span className="ab-feature__outcomeLabel">Today</span>
                    <p className="dx-body">{eng.outcome}</p>
                  </Reveal>

                  <Reveal index={6} className="ab-feature__actions">
                    <Btn href={eng.ctaHref} external>
                      {eng.ctaLabel}
                    </Btn>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* (3) Before DeepO3 — founder's prior collaborations, e.g. AVEO AI.
          Promoted up here (immediately after DeepO3 collaborations) because
          this engagement is a major credibility signal and should not sit
          below the CV. */}
      <section className="dx-section">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head ab-sec-head">
            <p className="dx-eyebrow">Prior work · Before DeepO3</p>
            <h2 className="dx-h2">
              Already shipping with Finnish SMEs and research institutions.
            </h2>
            <p className="dx-body">
              Before the studio formed, the founder was already running real
              engagements with Finnish companies through the University of
              Vaasa. The project below is the one that proved the model
              DeepO3 is built on: partner closely with an operating team,
              prototype fast, and hand over something the client takes
              further than the brief.
            </p>
          </Reveal>

          <div className="ab-engagements">
            {priorWork.map((eng) => (
              <article
                key={eng.company}
                className={`ab-feature${eng.reverse ? " ab-feature--reverse" : ""}`}
                aria-labelledby={`eng-${eng.company.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Reveal className="ab-feature__media">
                  <RevealImage
                    src={eng.image}
                    alt={eng.imageAlt}
                    aspectRatio="16 / 10"
                  />
                </Reveal>

                <div className="ab-feature__text">
                  <Reveal>
                    <div className="ab-feature__top">
                      <span className="dx-chip">{eng.company}</span>
                      <span className="dx-chip">{eng.location}</span>
                      <span className="dx-chip">{eng.status}</span>
                    </div>
                  </Reveal>

                  <Reveal index={1}>
                    <h3
                      className="dx-h3"
                      id={`eng-${eng.company.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {eng.headline}
                    </h3>
                  </Reveal>

                  <Reveal index={2}>
                    <p className="ab-feature__role">
                      {eng.role}
                      {eng.partners && eng.partners.length > 0
                        ? ` · With ${eng.partners.join(" and ")}`
                        : ""}
                    </p>
                  </Reveal>

                  <Reveal index={3}>
                    <p className="dx-body">{eng.summary}</p>
                  </Reveal>

                  <Reveal index={4}>
                    <p className="dx-body">
                      <span className="dx-muted">
                        {eng.partners && eng.partners.length > 0
                          ? "About the partner, "
                          : "About the clients, "}
                      </span>
                      {eng.context}
                    </p>
                  </Reveal>

                  <Reveal index={5} className="ab-feature__outcome">
                    <span className="ab-feature__outcomeLabel">Outcome</span>
                    <p className="dx-body">{eng.outcome}</p>
                  </Reveal>

                  <Reveal index={6} className="ab-feature__actions">
                    <Btn href={eng.ctaHref} external>
                      {eng.ctaLabel}
                    </Btn>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* (4) Founder background. */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head ab-sec-head">
            <p className="dx-eyebrow">Founder background</p>
            <h2 className="dx-h2">
              Ten years of production systems behind the studio.
            </h2>
            <p className="dx-body">
              DeepO3 is led by Farid Oladega, who spent a decade building and
              operating the kind of infrastructure that AI products eventually
              run on, intake pipelines, event-driven backends, API gateways
              and MLOps for teams that could not afford downtime.
            </p>
          </Reveal>

          <ol className="ab-exp" aria-label="Founder professional experience">
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

      {/* (5) Education. */}
      <section className="dx-section">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head ab-sec-head">
            <p className="dx-eyebrow">Education</p>
            <h2 className="dx-h2">
              Studied where sustainability meets systems.
            </h2>
            <p className="dx-body">
              Three completed Masters programmes across Germany and Finland,
              each anchored in autonomous systems and computer science, the
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

      {/* (6) Closing CTA. */}
      <section className="dx-section" aria-label="Start an engagement">
        <div className="dx-container dx-container--narrow ab-cta-inner">
          <Reveal>
            <p className="dx-eyebrow" style={{ justifyContent: "center" }}>
              Work with DeepO3
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="dx-display">
              Got a workflow that needs intelligence built into it?
            </h2>
          </Reveal>
          <Reveal index={2}>
            <p className="dx-lead ab-cta-lead">
              Tell us what you&apos;re trying to build. We come back with a
              practical delivery path within two business days, no sales deck,
              no account-manager layer.
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
