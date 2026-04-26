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
  }
];

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);

