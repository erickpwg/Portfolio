"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, MapPinIcon, MailIcon } from "@/components/ui/Icons";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <SectionTitle
              label={t.about.label}
              title={t.about.title}
              align="left"
            />

            <div className="flex flex-col gap-4 text-muted leading-relaxed">
              {t.about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <MapPinIcon className="w-4 h-4 text-accent shrink-0" />
                <span>{t.about.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <MailIcon className="w-4 h-4 text-accent shrink-0" />
                <span>contact@erickwagner.dev</span>
              </div>
            </div>

            <Button
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              className="self-start"
            >
              {t.about.contactMe}
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors duration-200"
                >
                  <span className="text-3xl font-bold text-accent">{stat.value}</span>
                  <span className="text-xs text-muted mt-1 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-surface border border-border p-6 flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {t.about.quickFacts}
              </h3>
              <ul className="flex flex-col gap-3">
                {t.about.facts.map((fact) => (
                  <li key={fact} className="flex items-start gap-2 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
