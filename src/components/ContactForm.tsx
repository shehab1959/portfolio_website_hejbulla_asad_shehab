"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { profile, siteConfig } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg placeholder:text-muted/70 focus:border-accent focus:outline-none";

/**
 * If NEXT_PUBLIC_FORMSPREE_ID is set, messages are sent through Formspree
 * straight to your inbox. Otherwise the visitor's email app opens with the
 * message pre-filled and addressed to you, so the form always works.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) return; // honeypot: bots fill this hidden field

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!siteConfig.formspreeId) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-fg">
          Your name
          <input name="name" type="text" required autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-fg">
          Your email
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
      </div>
      <label className="block text-sm font-medium text-fg">
        Message
        <textarea name="message" required rows={5} className={fieldClass} />
      </label>
      {/* Honeypot field, hidden from people */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition hover:opacity-90 disabled:opacity-60"
      >
        <Send size={16} aria-hidden="true" />
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className="min-h-5 text-sm text-muted">
        {status === "success" &&
          (siteConfig.formspreeId
            ? "Thank you! Your message was sent."
            : "Your email app should open with the message ready to send.")}
        {status === "error" &&
          `Sorry, the message could not be sent. Please email ${profile.email} directly.`}
      </p>
    </form>
  );
}
