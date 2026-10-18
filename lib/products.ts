export type ProductDemoLink = {
  label: string;
  href?: string;
  note?: string;
};

export type Product = {
  slug: string;
  title: string;
  category: string;
  status: string;
  accent: string;
  summary: string;
  positioning: string;
  whyBuilt: string;
  features: string[];
  stack: string[];
  demos: ProductDemoLink[];
};

export const products: Product[] = [
  {
    slug: "docup",
    title: "DocUp",
    category: "Enterprise Editor Platform",
    status: "Active Showcase",
    accent: "#8fb5ff",
    summary:
      "A block-based documentation editor designed to make internal knowledge tools feel as intuitive as premium consumer software.",
    positioning:
      "Building consumer-grade experiences for enterprise documentation workflows.",
    whyBuilt:
      "DocUp demonstrates our frontend engineering depth in high-performance React architecture and complex state management. Building a modern block editor from scratch is one of the hardest UI challenges on the web, and this project validates our ability to deliver enterprise systems with exceptional usability.",
    features: [
      "Drag-and-drop block editing architecture with composable content modules",
      "Design-system-driven UI inspired by Apple Human Interface principles",
      "Low-latency client rendering for fluid editing, reordering, and formatting"
    ],
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Framer Motion",
      "Design token system"
    ],
    demos: [
      {
        label: "Live demo",
        note: "Private preview. Available during discovery calls."
      },
      {
        label: "Walkthrough",
        note: "Product walkthrough available on request."
      }
    ]
  },
  {
    slug: "buergerbot",
    title: "BuergerBot",
    category: "Municipal AI Assistant",
    status: "Live Demo Available",
    accent: "#409cff",
    summary:
      "An AI-powered municipal services assistant that turns bureaucratic procedures into clear, reliable citizen guidance.",
    positioning:
      "Building consumer-grade experiences for public-service assistance at scale.",
    whyBuilt:
      "BuergerBot showcases our expertise in Retrieval-Augmented Generation pipelines, real-time source retrieval, and safe conversational AI design. The goal was to deliver trustworthy answers from dynamic government data while keeping response quality high and hallucinations low.",
    features: [
      "Live RAG pipeline with real-time scraping and FAISS-based retrieval",
      "Advanced intent classification with clarifying-question loops",
      "Immersive multilingual interface built for fast, clear interactions"
    ],
    stack: [
      "FastAPI",
      "Llama 3 family models",
      "FAISS vector search",
      "Next.js",
      "Framer Motion",
      "Three.js"
    ],
    demos: [
      {
        label: "Live demo",
        href: "https://burgerbot-frontend-pza7dehatq-ew.a.run.app/"
      },
      {
        label: "Demo video",
        href: "https://vimeo.com/1154986679?share=copy&fl=sv&fe=ci"
      }
    ]
  },
  {
    slug: "paperpilot",
    title: "PaperPilot",
    category: "Student Onboarding Assistant",
    status: "Live",
    accent: "#12919b",
    summary:
      "A step-by-step onboarding assistant that guides international students through Germany's post-arrival bureaucracy — Anmeldung, Tax ID, bank account, residence permit — in the exact order each step unlocks the next.",
    positioning:
      "Making the first months in a new country calm, ordered, and account-free.",
    whyBuilt:
      "PaperPilot was built by international students who lived the problem: in Germany one missed step blocks the next — no bank account without an Anmeldung, no residence permit without a Tax ID. We encoded that dependency chain into a personalized, bilingual roadmap generated from six short questions, with no account required and no commissions or upsells. Reviewed by the University of Konstanz International Welcome Center, it proves DeepO3 can turn a messy, high-stakes real-world process into software people actually trust.",
    features: [
      "Personalized 11-step roadmap generated from six short questions, ordered by real bureaucratic dependencies",
      "Bilingual English/German guidance with document checklists, office locations, and deadline tracking",
      "Anonymous and account-free, with honest service comparisons and no commissions or upsells"
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Dependency-ordered guidance engine",
      "Bilingual content system",
      "Privacy-first, no-account architecture"
    ],
    demos: [
      {
        label: "Live product",
        href: "https://paper-pilot.de/"
      },
      {
        label: "Availability",
        note: "Public pilot (v0.1) — Konstanz, reviewed and updated each semester."
      }
    ]
  },
  {
    slug: "tradingagents",
    title: "TradingAgents",
    category: "Multi-Agent Reasoning Framework",
    status: "In Development",
    accent: "#7dc4ff",
    summary:
      "A multi-agent financial analysis framework that coordinates specialist AI roles to pressure-test strategies before execution.",
    positioning:
      "Orchestrating automated reasoning workflows for enterprise decision systems.",
    whyBuilt:
      "TradingAgents was built to prove our capability in LangGraph orchestration and advanced multi-agent LLM architecture. The system mirrors institutional trading roles and drives structured debate loops to improve reliability in high-stakes reasoning workflows.",
    features: [
      "Role-based orchestration for fundamental, technical, sentiment, and risk agents",
      "Structured multi-step debate loops to reduce blind spots in decisions",
      "Provider-agnostic model routing across OpenAI, Anthropic, Google, and Ollama"
    ],
    stack: [
      "LangGraph",
      "Multi-agent routing layer",
      "Provider abstraction",
      "Python orchestration services",
      "LLM observability tooling"
    ],
    demos: [
      {
        label: "Project demo",
        note: "Coming soon"
      },
      {
        label: "Demo video",
        note: "Coming soon"
      }
    ]
  },
  {
    slug: "lumidesk",
    title: "LumiDesk",
    category: "AI Phone Receptionist",
    status: "Private Beta",
    accent: "#4bb3d6",
    summary:
      "An AI receptionist for small businesses that answers every call 24/7, in the caller's language, and books the job — so a missed call never becomes a lost customer.",
    positioning:
      "The AI receptionist that never misses a call.",
    whyBuilt:
      "Small businesses lose real revenue to missed calls — the plumber on a job, the salon mid-service, the clinic closed for the evening. LumiDesk picks up every single ring, holds a natural conversation in the caller's own language, and books the appointment straight into the business's calendar. It is the DeepO3 answer for owner-operated businesses that cannot justify a human receptionist but cannot afford to keep losing the next customer either.",
    features: [
      "Answers 24/7, including after-hours, weekends, and when the owner is on the job",
      "Converses in the caller's language, so no customer is turned away for a language mismatch",
      "Books jobs and appointments straight into the business's calendar, with human-readable summaries sent to the owner"
    ],
    stack: [
      "Real-time speech-to-speech voice agent",
      "Multilingual LLM pipeline with language auto-detect",
      "Calendar integration layer",
      "Call recording, transcription and audit log",
      "Private-beta waitlist and operator dashboard"
    ],
    demos: [
      {
        label: "Join the waiting list",
        href: "https://lumidesk-landing.vercel.app"
      },
      {
        label: "Availability",
        note: "Private beta — onboarding small-business pilots now."
      }
    ]
  }
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

