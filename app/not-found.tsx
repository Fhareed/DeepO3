import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for doesn't exist or has been moved. Return to DeepO3's home page or explore the product suite."
};

export default function NotFound() {
  return (
    <div className="page-shell">
      <section className="glass section-block not-found-hero">
        <p className="eyebrow">Error 404</p>
        <h1>This page isn&apos;t here.</h1>
        <p className="lead">
          The link may be broken, the page may have been moved, or the URL may
          have been mistyped. Head back to a live section of the site below.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/products" className="btn btn-ghost">
            View Products
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
