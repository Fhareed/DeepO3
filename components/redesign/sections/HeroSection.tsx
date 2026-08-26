"use client";

import Reveal from "../Reveal";
import Btn from "../Btn";
import "./HeroSection.css";

/**
 * HERO — Clarify-faithful full-bleed "crystal" stage. Now a looping,
 * muted, autoplay abstract background video (matching the glowing dark-blue
 * aesthetic) with a glowing still as poster fallback. White text overlaid
 * top-left, one CTA bottom-right. FLAT except a minimal legibility scrim.
 * Extra top padding keeps the stage clear of the fixed floating nav.
 */
export default function HeroSection() {
  return (
    <section className="dx-section hero">
      <div className="hero__stage">
        <video
          className="hero__video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1757466762489-52fea38071ad?auto=format&fit=crop&w=2400&q=85"
          aria-hidden
        >
          <source src="https://assets.mixkit.co/videos/8221/8221-720.mp4" type="video/mp4" />
        </video>

        <div className="hero__scrim" aria-hidden />

        <Reveal className="hero__content" index={0}>
          <span className="hero__dot" aria-hidden />
          <h1 className="dx-display hero__title">
            Intelligent software.
            <br />
            Engineered to endure.
          </h1>
          <p className="hero__sub">
            We turn high-stakes workflows into reliable, production-grade digital
            products.
          </p>
        </Reveal>

        <Reveal className="hero__cta" index={2}>
          <Btn href="/contact" variant="white">
            Book a discovery call
          </Btn>
        </Reveal>
      </div>
    </section>
  );
}
