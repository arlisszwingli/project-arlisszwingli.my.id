"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://instagram.com/arlisszs", label: "Instagram" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://github.com/arlisszwingli", label: "GitHub" },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Replace with your form endpoint (e.g. Formspree, API route)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <div className="min-h-screen text-white">
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-white/70">
              Have a project in mind or want to collaborate? Send a message or
              reach out via email and socials.
            </p>

            <div className="mt-10 flex flex-col gap-10 sm:flex-row sm:gap-16">
              <div className="flex-1">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                  Email
                </h2>
                <a
                  href="mailto:arlisssitanggang@gmail.com"
                  className="mt-2 block text-lg text-[#C6F10E] hover:underline"
                >
                  arlisssitanggang@gmail.com
                </a>
                <h2 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white/50">
                  Social
                </h2>
                <ul className="mt-2 flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-[#C6F10E] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex-1 space-y-5 min-w-0"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#C6F10E]/50 focus:outline-none focus:ring-1 focus:ring-[#C6F10E]/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#C6F10E]/50 focus:outline-none focus:ring-1 focus:ring-[#C6F10E]/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#C6F10E]/50 focus:outline-none focus:ring-1 focus:ring-[#C6F10E]/50 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-[#C6F10E] px-4 py-3 font-medium text-[#19222D] transition-colors hover:bg-[#d4f83a] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                      ? "Message sent"
                      : "Send message"}
                </button>
                {status === "sent" && (
                  <p className="text-sm text-[#C6F10E]">
                    Thanks! I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
