"use client";

import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { profile } from "@/lib/content";

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Project enquiry${name ? ` — ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      `Hello Calvin,\n\n${message}\n\n—\n${name}${email ? `\n${email}` : ""}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  const inputClass =
    "w-full rounded-lg border border-white/12 bg-white/[0.045] px-3.5 py-2.5 text-[12.5px] text-white placeholder:text-white/25 transition-colors duration-300 focus:border-[#d8b878]/60 focus:bg-white/[0.07] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="label mb-2 block text-[7.5px] text-white/45"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="label mb-2 block text-[7.5px] text-white/45"
          >
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="label mb-2 block text-[7.5px] text-white/45"
        >
          What are we building?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="A few words about the project, the timeline and the team."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#d8b878] px-5 py-3 text-[12px] font-semibold text-[#08182b] transition-all duration-300 hover:gap-3.5 hover:bg-[#e4c98f]"
      >
        Send the message
        <Send
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.9}
          aria-hidden="true"
        />
      </button>

      <p aria-live="polite" className="mt-3 text-[9.5px] leading-relaxed text-white/35">
        {opened
          ? "Your mail app should be open. If not, write to me directly."
          : "This opens your email app with the message pre-filled. No data is stored."}
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-1 inline-flex items-center gap-1 text-[9.5px] text-white/45 underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#d8b878]"
      >
        Prefer email? Write directly
        <ArrowUpRight className="h-2.5 w-2.5" strokeWidth={2} aria-hidden="true" />
      </a>
    </form>
  );
}
