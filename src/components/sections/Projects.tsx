"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";
import { PROJECTS, COMING_SOON } from "@/constants/projects";
import { useLanguage } from "@/context/LanguageContext";
import type { Project } from "@/types";

export function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = t.projects.items
    .map((item) => {
      const meta = PROJECTS.find((m) => m.id === item.id);
      if (!meta) return null;
      return { ...meta, ...item };
    })
    .filter((p): p is Project => p !== null);

  return (
    <section id="projects" className="py-16 md:py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <SectionTitle
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
        />

        {COMING_SOON ? (
          <div className="flex items-center justify-center py-20 px-6 rounded-xl border border-dashed border-border">
            <p className="text-muted text-sm">
              {t.projects.comingSoon}
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col bg-surface border border-border rounded-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-200 group overflow-hidden"
              >
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0 pt-0.5">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View repository"
                        className="text-muted hover:text-accent transition-colors duration-150"
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                          className="text-muted hover:text-accent transition-colors duration-150"
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mx-6 border-t border-border" />

                <div className="px-6 py-3">
                  <div className="flex gap-2">
                    <span className="w-0.5 rounded-full bg-accent shrink-0 self-stretch" />
                    <p className="text-xs text-muted leading-relaxed">
                      <span className="text-accent font-medium">{t.projects.impact} — </span>
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mx-6 border-t border-border" />

                <div className="px-6 py-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <Button href="https://github.com/erickpwg?tab=repositories" external variant="outline">
            <GitHubIcon className="w-4 h-4" />
            {t.projects.seeMore}
          </Button>
        </div>
      </div>
    </section>
  );
}
