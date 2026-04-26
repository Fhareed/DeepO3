import type { Metadata } from "next";
import Link from "next/link";
import InfoCard from "../../components/InfoCard";
import GlareHover from "../../components/GlareHover";
import TiltedPanel from "../../components/TiltedPanel";
import { products } from "../../lib/products";

export const metadata: Metadata = {
  title: "Product Suite",
  description:
    "Explore DeepO3's flagship AI products — DocUp, BuergerBot, and TradingAgents — proof of execution across enterprise software, conversational AI, and multi-agent reasoning.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Product Suite | DeepO3",
    description:
      "Explore DeepO3's flagship AI products across enterprise software, conversational AI, and multi-agent reasoning.",
    url: "/products",
    type: "website"
  }
};

export default function ProductsPage() {
  return (
    <div className="page-shell">
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
        <section className="glass section-block">
          <p className="eyebrow">Product Suite</p>
          <h1>Proof of execution across complex enterprise software patterns.</h1>
          <p className="lead">
            These flagship products represent how DeepO3 approaches architecture,
            UX quality, and operational reliability in production-grade systems.
          </p>
        </section>
        </TiltedPanel>
      </GlareHover>

      <section className="case-grid">
        {products.map((product, index) => (
          <GlareHover
            key={product.slug}
            className="glare-hover--fluid"
            borderRadius="22px"
            glareColor="#69b5ff"
            glareOpacity={0.4}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
          >
            <InfoCard className="card" variation={index} accent={product.accent}>
              <p className="chip">{product.status}</p>
              <h2>{product.title}</h2>
              <p>{product.summary}</p>
              <ul className="mini-list">
                {product.features.slice(0, 2).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="card-actions">
                <Link href={`/products/${product.slug}`} className="btn btn-ghost">
                  View Details
                </Link>
              </div>
            </InfoCard>
          </GlareHover>
        ))}
      </section>

      <GlareHover
        className="glare-hover--fluid"
        borderRadius="22px"
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={260}
        transitionDuration={900}
      >
        <InfoCard className="section-block compact" variation={2}>
          <h2>Need a solution with similar depth?</h2>
          <p>
            We can map your requirements to a pragmatic rollout plan, including
            architecture, delivery milestones, and operational safeguards.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Start a Product Discussion
          </Link>
        </InfoCard>
      </GlareHover>
    </div>
  );
}
