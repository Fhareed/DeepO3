import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InfoCard from "../../../components/InfoCard";
import TiltedPanel from "../../../components/TiltedPanel";
import { getProductBySlug, products } from "../../../lib/products";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

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

  return (
    <div className="page-shell">
      <TiltedPanel>
      <section className="glass section-block">
        <p className="eyebrow">{product.status}</p>
        <h1>{product.title}</h1>
        <p className="lead">{product.positioning}</p>
      </section>
      </TiltedPanel>

      <InfoCard className="section-block compact" variation={0} accent={product.accent}>
        <h2>Overview</h2>
        <p>{product.summary}</p>
      </InfoCard>

      <section className="detail-grid">
        <InfoCard className="case-item" variation={1}>
          <h2>Why We Built It</h2>
          <p>{product.whyBuilt}</p>
        </InfoCard>

        <InfoCard className="case-item" variation={2}>
          <h2>Technology Stack</h2>
          <ul>
            {product.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </InfoCard>
      </section>

      <section className="detail-grid">
        <InfoCard className="case-item" variation={1}>
          <h2>Core Capabilities</h2>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard className="case-item" variation={0}>
          <h2>Demos & Availability</h2>
          <ul className="link-list">
            {product.demos.map((demo) => (
              <li key={demo.label}>
                {demo.href ? (
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-link"
                  >
                    {demo.label}
                  </a>
                ) : (
                  <span>
                    {demo.label}: {demo.note}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="card-actions">
            <Link href="/contact" className="btn btn-primary">
              Discuss This Use Case
            </Link>
          </div>
        </InfoCard>
      </section>
    </div>
  );
}

