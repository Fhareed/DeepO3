import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "../../../lib/products";
import Reveal from "../../../components/redesign/Reveal";
import Btn from "../../../components/redesign/Btn";
import RevealImage from "../../../components/redesign/RevealImage";
import "./detail.css";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

/* Glowing 4K hero image per product; fall back for any other slug. */
const HERO_IMAGES: Record<string, string> = {
  docup:
    "https://images.unsplash.com/photo-1768330187404-59e46cf222c9?auto=format&fit=crop&w=2000&q=85",
  buergerbot:
    "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=2000&q=85",
  paperpilot:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=85",
  tradingagents:
    "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=2000&q=85"
};
const FALLBACK_HERO =
  "https://images.unsplash.com/photo-1757466762489-52fea38071ad?auto=format&fit=crop&w=2400&q=85";

/* Small teal check marker for the stack + capability lists. */
const Check = () => (
  <svg
    className="pd-check"
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

/* Arrow that matches the dx-textlink hover-nudge treatment. */
const LinkArrow = () => (
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

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product not found",
      description: "The requested DeepO3 product could not be found."
    };
  }

  const pageTitle = `${product.title} — ${product.category}`;
  const canonicalPath = `/products/${product.slug}`;

  return {
    title: pageTitle,
    description: product.summary,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${product.title} | DeepO3`,
      description: product.summary,
      url: canonicalPath,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | DeepO3`,
      description: product.summary
    }
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const heroSrc = HERO_IMAGES[product.slug] ?? FALLBACK_HERO;

  return (
    <div className="dx-page">
      {/* -------- 1. Pagehead (clears the floating nav) -------- */}
      <section className="dx-section dx-pagehead pd-head">
        <div className="dx-container">
          <Reveal className="pd-head__inner">
            <p className="dx-eyebrow">{product.status}</p>
            <h1 className="dx-display">{product.title}</h1>
            <p className="dx-lead">{product.positioning}</p>
            <div className="pd-head__cta">
              <Btn href="/contact">Discuss this use case</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- 2. Hero image -------- */}
      <div className="pd-hero-wrap">
        <div className="dx-container">
          <Reveal>
            <RevealImage
              src={heroSrc}
              alt={`${product.title} — ${product.category}`}
              aspectRatio="16 / 9"
            />
          </Reveal>
        </div>
      </div>

      {/* -------- 3. Overview -------- */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container dx-container--narrow">
          <Reveal as="header" className="dx-section-head">
            <p className="dx-eyebrow">{product.category}</p>
            <h2 className="dx-h2">Overview</h2>
            <p className="dx-body pd-overview">{product.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* -------- 4. Why we built it + Technology stack -------- */}
      <section className="dx-section">
        <div className="dx-container">
          <div className="pd-two">
            <Reveal className="pd-block">
              <h3 className="dx-h3">Why we built it</h3>
              <p className="dx-body">{product.whyBuilt}</p>
            </Reveal>

            <Reveal className="pd-block" index={1}>
              <h3 className="dx-h3">Technology stack</h3>
              <ul className="pd-list">
                {product.stack.map((item) => (
                  <li key={item}>
                    <Check />
                    <span className="dx-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------- 5. Core capabilities + Demos & availability -------- */}
      <section className="dx-section dx-section--paper">
        <div className="dx-container">
          <div className="pd-two">
            <Reveal className="pd-block">
              <h3 className="dx-h3">Core capabilities</h3>
              <ul className="pd-list">
                {product.features.map((feature) => (
                  <li key={feature}>
                    <Check />
                    <span className="dx-body">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="pd-block" index={1}>
              <h3 className="dx-h3">Demos &amp; availability</h3>
              <ul className="pd-demos">
                {product.demos.map((demo) =>
                  demo.href ? (
                    <li key={demo.label}>
                      <a
                        href={demo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dx-textlink pd-demo-link"
                      >
                        {demo.label}
                        <LinkArrow />
                      </a>
                    </li>
                  ) : (
                    <li key={demo.label}>
                      <p className="dx-body pd-demo-note">
                        <strong>{demo.label}:</strong> {demo.note}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------- 6. Closing CTA -------- */}
      <section className="dx-section pd-cta" aria-label="Discuss this product">
        <div className="dx-container dx-container--narrow">
          <Reveal className="pd-cta__inner">
            <p className="dx-eyebrow">Contact</p>
            <h2 className="dx-h2">Let&apos;s put {product.title} to work.</h2>
            <p className="dx-lead">
              Tell us about your workflow and we&apos;ll respond with a practical
              build path within two business days.
            </p>
            <div className="pd-cta__actions">
              <Btn href="/contact">Discuss this use case</Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
