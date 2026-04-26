"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { MailIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { SOCIAL_LINKS } from "@/constants/navigation";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((res) => setTimeout(res, 1200));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <SectionTitle
          label="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to connect? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MailIcon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                  <a
                    href="mailto:erickpwagner13@gmail.com"
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-150"
                  >
                    erickpwagner13@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted uppercase tracking-widest font-medium">Find me on</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-surface text-muted hover:text-accent hover:border-accent/40 transition-all duration-200 text-sm font-medium"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="px-4 py-2.5 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-150"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="px-4 py-2.5 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-150"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-muted uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                className="px-4 py-2.5 rounded-lg bg-surface border border-border text-foreground placeholder:text-muted/50 text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-150 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="self-end"
              size="lg"
            >
              {status === "loading" && "Sending..."}
              {status === "success" && "Message sent ✓"}
              {(status === "idle" || status === "error") && "Send Message"}
            </Button>

            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
