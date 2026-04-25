"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";
import { PROJECTS } from "@/constants/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <SectionTitle
          label="Projects"
          title="Things I've built"
          description="A selection of projects that showcase my skills across the full stack."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="flex flex-col gap-4 p-6 rounded-xl bg-surface border border-border hover:border-accent/30 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
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

              <p className="text-sm text-muted leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            href="https://github.com/erickpwg?tab=repositories"
            external
            variant="outline"
          >
            <GitHubIcon className="w-4 h-4" />
            See more on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
