"use client";

import Link from "next/link";
import { products } from "../../../lib/products";
import Reveal from "../Reveal";
import Btn from "../Btn";
import TiltCard from "../TiltCard";
import "./ProductSuite.css";

/**
 * Product Suite — a sample of DeepO3 systems in market.
 *
 * Clarify-faithful: light, warm-neutral, crisp and flat. White cards on a
 * paper section, 1px hairline borders, generous whitespace, large tight type
 * and the teal accent used only in the footer arrow / demo button. No
 * shadows, gradients or blur. Only ps- classes override the dx- system.
 */
export default function ProductSuite() {
  return (
    <section className="dx-section dx-section--paper">
      <div className="dx-container">
        <Reveal as="header" className="dx-section-head">
          <p className="dx-eyebrow">Product suite</p>
          <h2 className="dx-h2">Recent products in the market.</h2>
          <p className="dx-body">
            A sample of systems DeepO3 has launched or is actively developing
            across regulated, operational, and financial domains.
          </p>
        </Reveal>

        <div className="ps-grid">
          {products.map((product, i) => {
            // Only some products expose a public, clickable demo.
            const demo = product.demos.find((d) => d.href);
            const demoHref = demo?.href;

            return (
              <Reveal key={product.slug} className="ps-item" index={i}>
                <TiltCard className="ps-tilt" max={5}>
                <article className="ps-card">
                  {/* whole-card click target (tilt-safe); real controls sit above via dx-above */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="dx-stretch"
                    aria-label={`Explore ${product.title}`}
                    tabIndex={-1}
                  />
                  <div className="ps-top">
                    <span className="ps-category">{product.category}</span>
                    <span className="dx-chip">{product.status}</span>
                  </div>

                  <h3 className="dx-h3">{product.title}</h3>
                  <p className="dx-body ps-summary">{product.summary}</p>

                  <hr className="dx-rule ps-rule" />

                  <div className="ps-footer">
                    <Link
                      className="dx-textlink ps-explore dx-above"
                      href={`/products/${product.slug}`}
                    >
                      Explore product
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M2.5 8h10M8.5 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    {demoHref && (
                      <Btn href={demoHref} external className="dx-above">
                        Try live demo
                      </Btn>
                    )}
                  </div>
                </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
