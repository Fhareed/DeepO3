"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden>
    <path
      d="M2.5 8h10M8.5 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Contact form — restyled to the dx- (Clarify-faithful) design system,
 * flat and crisp. Keeps the original ContactForm fields and submit
 * behaviour: preventDefault, a simulated send, then reset on success.
 */
export default function ContactFormNew() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: wire to a real submission endpoint (Formspree, Resend, or a
    // server action) once the destination email address is provisioned.
    // For now we simulate a successful send so the UI behaves correctly
    // in the deployed preview without leaking form data into the URL.
    setStatus("submitting");

    window.setTimeout(() => {
      setStatus("success");
      (event.target as HTMLFormElement).reset();
    }, 600);
  }

  const isBusy = status === "submitting";

  return (
    <form
      className="ct-form"
      onSubmit={handleSubmit}
      aria-busy={isBusy}
      noValidate={false}
    >
      <div className="ct-row">
        <div className="ct-field">
          <label className="ct-label" htmlFor="contact-name">
            Full name
          </label>
          <input
            className="ct-input"
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
            disabled={isBusy}
          />
        </div>
        <div className="ct-field">
          <label className="ct-label" htmlFor="contact-email">
            Work email
          </label>
          <input
            className="ct-input"
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
            disabled={isBusy}
          />
        </div>
      </div>

      <div className="ct-field">
        <label className="ct-label" htmlFor="contact-company">
          Company
        </label>
        <input
          className="ct-input"
          id="contact-company"
          type="text"
          name="company"
          placeholder="Organization"
          autoComplete="organization"
          disabled={isBusy}
        />
      </div>

      <div className="ct-field">
        <label className="ct-label" htmlFor="contact-brief">
          Project brief
        </label>
        <textarea
          className="ct-textarea"
          id="contact-brief"
          name="brief"
          rows={6}
          placeholder="What are you trying to build?"
          required
          disabled={isBusy}
        />
      </div>

      <button type="submit" className="dx-btn ct-submit" disabled={isBusy}>
        <span className="dx-btn__fill" aria-hidden />
        <span className="dx-btn__label">
          {isBusy ? "Sending…" : "Send Inquiry"}
        </span>
        <span className="dx-btn__chip" aria-hidden>
          <span className="dx-btn__arrow dx-btn__arrow--out">
            <Arrow />
          </span>
          <span className="dx-btn__arrow dx-btn__arrow--in">
            <Arrow />
          </span>
        </span>
      </button>

      <p
        className="ct-status"
        role="status"
        aria-live="polite"
        data-status={status}
      >
        {status === "success" &&
          "Thanks — your brief is in. Expect a reply inside two business days."}
        {status === "error" &&
          "Something went wrong sending that. Please email us directly."}
      </p>
    </form>
  );
}
