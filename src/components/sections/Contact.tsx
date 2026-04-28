"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { MailIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

type FormState = {
  name: string;
  email: string;
  message: string;
};

type TouchedState = {
  name: boolean;
  email: boolean;
  message: boolean;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputBase =
  "w-full px-4 py-2.5 rounded-lg bg-surface text-foreground text-sm placeholder:text-muted/50 focus:outline-none transition-colors duration-150 border";

const errorStyle: React.CSSProperties = { borderColor: "#ef4444" };
const defaultStyle: React.CSSProperties = { borderColor: "var(--border)" };

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<TouchedState>({ name: false, email: false, message: false });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const errors = {
    name: !form.name.trim() ? t.contact.form.errors.nameRequired : "",
    email: !form.email.trim()
      ? t.contact.form.errors.emailRequired
      : !EMAIL_REGEX.test(form.email)
      ? t.contact.form.errors.emailInvalid
      : "",
    message: !form.message.trim() ? t.contact.form.errors.messageRequired : "",
  };

  const hasErrors = Object.values(errors).some(Boolean);
  const isError = (field: keyof FormState) => touched[field] && !!errors[field];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (hasErrors) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 bg-surface/50 scroll-mt-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <SectionTitle
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
          description2={t.contact.description2}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MailIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">{t.contact.emailLabel}</p>
                <a
                  href="mailto:contact@erickwagner.dev"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-150"
                >
                  contact@erickwagner.dev
                </a>
                <p className="text-xs text-muted mt-0.5">{t.contact.responseTime}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm text-muted uppercase tracking-widest font-medium">{t.contact.findMeOn}</p>
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

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted uppercase tracking-wider">
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t.contact.form.namePlaceholder}
                  style={isError("name") ? errorStyle : defaultStyle}
                  className={inputBase}
                />
                {isError("name") && (
                  <p className="text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted uppercase tracking-wider">
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={t.contact.form.emailPlaceholder}
                  style={isError("email") ? errorStyle : defaultStyle}
                  className={inputBase}
                />
                {isError("email") && (
                  <p className="text-xs text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-muted uppercase tracking-wider">
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={t.contact.form.messagePlaceholder}
                style={isError("message") ? errorStyle : defaultStyle}
                className={`${inputBase} resize-none`}
              />
              {isError("message") && (
                <p className="text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="self-end"
              size="lg"
            >
              {status === "loading" && t.contact.form.sending}
              {status === "success" && t.contact.form.success}
              {(status === "idle" || status === "error") && t.contact.form.send}
            </Button>

            {status === "error" && (
              <p className="text-sm text-red-400">{t.contact.form.errors.submitError}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
