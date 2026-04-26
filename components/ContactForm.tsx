"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
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
      className="contact-form"
      onSubmit={handleSubmit}
      aria-busy={isBusy}
      noValidate={false}
    >
      <div className="row">
        <label htmlFor="contact-name">
          Full name
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            required
            disabled={isBusy}
          />
        </label>
        <label htmlFor="contact-email">
          Work email
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
            disabled={isBusy}
          />
        </label>
      </div>

      <label htmlFor="contact-company">
        Company
        <input
          id="contact-company"
          type="text"
          name="company"
          placeholder="Organization"
          autoComplete="organization"
          disabled={isBusy}
        />
      </label>

      <label htmlFor="contact-brief">
        Project brief
        <textarea
          id="contact-brief"
          name="brief"
          rows={6}
          placeholder="What are you trying to build?"
          required
          disabled={isBusy}
        />
      </label>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={isBusy}
      >
        {isBusy ? "Sending…" : "Send Inquiry"}
      </button>

      <p
        className="form-status"
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
