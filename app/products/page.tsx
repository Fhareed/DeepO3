import type { Metadata } from "next";
import Link from "next/link";
import { products } from "../../lib/products";
import Reveal from "../../components/redesign/Reveal";
import Btn from "../../components/redesign/Btn";
import RevealImage from "../../components/redesign/RevealImage";
import TiltCard from "../../components/redesign/TiltCard";
import "./products.css";

export const metadata: Metadata = {
  title: "Product Suite",
  description:
    "Explore DeepO3's flagship AI products — DocUp, BuergerBot, PaperPilot, and TradingAgents — proof of execution across enterprise software, conversational AI, guided onboarding, and multi-agent reasoning.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Product Suite | DeepO3",
    description:
      "Explore DeepO3's flagship AI products across enterprise software, conversational AI, and multi-agent reasoning.",
    url: "/products",
    type: "website"
  }
};

/* Glowing 4K imagery — one per product for a richer page. Keyed by slug,
   with a reuse pool so any additional products still get a distinct header. */
const PRODUCT_IMAGES: Record<string, string> = {
  docup:
    "https://images.unsplash.com/photo-1768330187404-59e46cf222c9?auto=format&fit=crop&w=1600&q=85",
  buergerbot:
    "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=1600&q=85",
  paperpilot:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85",
  tradingagents:
    "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1600&q=85",
  lumidesk: "/products/lumidesk-cover.jpg"
};

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1742774101928-f7e92a471c1b?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1774799560672-151b971fd336?auto=format&fit=crop&w=1600&q=85"
];

/* Explore-link arrow — inline SVG, stroke = currentColor. */
const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M2.5 8h10M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ProductsPage() {
  return (
    <div className="dx-page">
      {/* (1) Pagehead — clears the floating nav. */}
      <section className="dx-section dx-pagehead pl-head">
        <div className="dx-container">
          <Reveal as="header" className="dx-section-head">
            <p className="dx-eyebrow">Product Suite</p>
            <h1 className="dx-display">
              Proof of execution across complex enterprise software patterns.
            </h1>
            <p className="dx-lead pl-lead">
              These flagship products represent how DeepO3 approaches
              architecture, UX quality, and operational reliability in
              production-grade systems.
            </p>
            <div className="pl-head-actions">
              <Btn href="/contact">Start a product discussion</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* (2) Product cards — one per item in `products`. */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <div className="pl-grid">
            {products.map((product, i) => {
              const image =
                PRODUCT_IMAGES[product.slug] ??
                FALLBACK_IMAGES[i % FALLBACK_IMAGES.length];
              // Only some products expose a public, clickable demo.
              const demoHref = product.demos.find((d) => d.href)?.href;

              return (
                <Reveal key={product.slug} className="pl-item" index={i}>
                  <TiltCard className="pl-tilt" max={5}>
                    <article className="pl-card">
                      {/* whole-card click target (tilt-safe); real controls sit above via dx-above */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="dx-stretch"
                        aria-label={`Explore ${product.title}`}
                        tabIndex={-1}
                      />

                      <RevealImage
                        className="pl-media"
                        src={image}
                        alt={`${product.title} — ${product.category}`}
                        aspectRatio="16 / 10"
                      />

                      <div className="pl-content">
                        <div className="pl-top">
                          <span className="pl-category">{product.category}</span>
                          <span className="dx-chip">{product.status}</span>
                        </div>

                        <h3 className="dx-h3">{product.title}</h3>
                        <p className="dx-body pl-summary">{product.summary}</p>

                        <hr className="dx-rule pl-rule" />

                        <div className="pl-footer">
                          <Link
                            className="dx-textlink pl-explore dx-above"
                            href={`/products/${product.slug}`}
                          >
                            Explore product
                            <Arrow />
                          </Link>

                          {demoHref && (
                            <Btn href={demoHref} external className="dx-above">
                              Try live demo
                            </Btn>
                          )}
                        </div>
                      </div>
                    </article>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* (3) Closing CTA. */}
      <section className="dx-section" aria-label="Start a product discussion">
        <div className="dx-container dx-container--narrow pl-cta-inner">
          <Reveal>
            <p className="dx-eyebrow" style={{ justifyContent: "center" }}>
              Contact
            </p>
          </Reveal>
          <Reveal index={1}>
            <h2 className="dx-display">Need a solution with similar depth?</h2>
          </Reveal>
          <Reveal index={2}>
            <p className="dx-lead pl-cta-lead">
              We can map your requirements to a pragmatic rollout plan, including
              architecture, delivery milestones, and operational safeguards.
            </p>
          </Reveal>
          <Reveal index={3}>
            <div className="pl-cta-actions">
              <Btn href="/contact">Start a Product Discussion</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
