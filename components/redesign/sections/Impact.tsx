"use client";

import Reveal from "../Reveal";
import RevealImage from "../RevealImage";
import "./Impact.css";

type Block = {
  head: string;
  body: string;
};

type Row = {
  title: string;
  blocks: Block[];
  image: { src: string; alt: string };
  imageRight: boolean;
};

const ROWS: Row[] = [
  {
    title: "Grounded, trustworthy AI.",
    blocks: [
      {
        head: "Retrieval you can cite",
        body: "Live RAG pipelines with real-time source retrieval keep answers anchored to trusted, current data — not guesswork."
      },
      {
        head: "Guardrails & evaluations",
        body: "Intent classification, clarifying-question loops, and continuous evals keep response quality high and hallucinations low."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1768330187404-59e46cf222c9?auto=format&fit=crop&w=2000&q=85",
      alt: "Analytics dashboard on a screen"
    },
    imageRight: true
  },
  {
    title: "Reliable in production.",
    blocks: [
      {
        head: "Observability & telemetry",
        body: "CI/CD, monitoring, and operational telemetry are baked in so systems stay healthy long after launch."
      },
      {
        head: "Auditable by design",
        body: "Transparent state tracking across agent workflows makes every decision traceable and reviewable."
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1606814540563-5c02d62fd409?auto=format&fit=crop&w=2000&q=85",
      alt: "Clean data-center network infrastructure"
    },
    imageRight: false
  }
];

export default function Impact() {
  return (
    <section className="dx-section im-section">
      <div className="dx-container">
        <Reveal as="header" className="im-head">
          <p className="dx-eyebrow">Why it holds up</p>
          <h2 className="dx-h2 im-title">
            Built for impact.
            <br />
            Engineered for trust.
          </h2>
        </Reveal>

        <div className="im-rows">
          {ROWS.map((row) => (
            <div
              className={`im-row${row.imageRight ? " im-row--right" : ""}`}
              key={row.title}
            >
              <Reveal className="im-media">
                <RevealImage
                  src={row.image.src}
                  alt={row.image.alt}
                  aspectRatio="4 / 5"
                />
              </Reveal>

              <div className="im-text">
                <Reveal>
                  <h3 className="dx-h3">{row.title}</h3>
                </Reveal>
                {row.blocks.map((block, i) => (
                  <Reveal className="im-block" index={i + 1} key={block.head}>
                    <p className="im-block__head">{block.head}</p>
                    <p className="dx-body im-block__body">{block.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
