"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Surface the error in the console for observability in production.
    // Wire this into Sentry / your monitoring of choice later.
    console.error(error);
  }, [error]);

  return (
    <div className="page-shell">
      <section className="glass section-block not-found-hero">
        <p className="eyebrow">Unexpected error</p>
        <h1>Something went wrong on our end.</h1>
        <p className="lead">
          We&apos;ve logged the issue and the team will look into it. You can
          retry the action or head back home.
        </p>
        <div className="hero-actions">
          <button type="button" onClick={() => reset()} className="btn btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn btn-ghost">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
