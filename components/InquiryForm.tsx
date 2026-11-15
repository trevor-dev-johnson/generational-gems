"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { contactEmail } from "@/data/site";

export function InquiryForm({ kind = "general" }: { kind?: "general" | "custom" }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address.";
    if (message.length < 20) next.message = "Please share at least 20 characters so we can understand your note.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const subject = kind === "custom" ? `Custom creation idea from ${name}` : `Website note from ${name}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`)}`;
  }
  const field = (id: string) => errors[id] ? { "aria-invalid": true as const, "aria-describedby": `${id}-error` } : {};
  return <form className="inquiry-form" onSubmit={submit} noValidate>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" required {...field("name")}/>{errors.name && <span id="name-error" className="error">{errors.name}</span>}</label><label>Email<input name="email" type="email" autoComplete="email" required {...field("email")}/>{errors.email && <span id="email-error" className="error">{errors.email}</span>}</label></div>
    {kind === "custom" && <label>What are you imagining?<select name="interest" defaultValue=""><option value="" disabled>Choose an inspiration</option><option>Home decor</option><option>Gift or keepsake</option><option>Seasonal piece</option><option>Something else</option></select></label>}
    <label>Your note<textarea name="message" rows={6} required {...field("message")} placeholder={kind === "custom" ? "Tell us about the occasion, colors, timing, and anything meaningful you would love to include…" : "How can we help?"}/>{errors.message && <span id="message-error" className="error" role="alert">{errors.message}</span>}</label>
    <button className="button button-primary" type="submit">Continue in email <ArrowUpRight aria-hidden="true"/></button>
    <p className="form-note">This opens your email app with a draft. Nothing is sent automatically.</p>
  </form>;
}
