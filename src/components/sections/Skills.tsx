"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { SKILLS, CORE_STACK } from "@/constants/skills";

const iconLabel: Record<string, string> = {
  react: "Re",
  nextjs: "Nx",
  ts: "TS",
  js: "JS",
  tw: "Tw",
  html: "</>",
  node: "No",
  exp: "Ex",
  api: "API",
  ws: "WS",
  jwt: "JWT",
  mongo: "Mg",
  mng: "Mn",
  pg: "PG",
  git: "Git",
  dkr: "Dk",
  vrcl: "Ve",
  post: "Pm",
};

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 bg-surface/50 scroll-mt-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <SectionTitle
          label="Tech Stack"
          title="Stack & Technologies"
          description="Technologies I use to design, build and ship full stack applications."
        />

        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted text-center">
            Core Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CORE_STACK.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-medium tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-5 p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-colors duration-200"
            >
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-semibold text-foreground">
                  {group.category}
                </h3>
                <p className="text-xs text-muted">{group.subtitle}</p>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-150 group"
                  >
                    <span className="text-[10px] font-bold font-mono text-accent/70 w-7 text-center shrink-0 group-hover:text-accent transition-colors duration-150">
                      {iconLabel[skill.icon] ?? skill.icon.toUpperCase().slice(0, 3)}
                    </span>
                    <span className="text-sm text-muted group-hover:text-foreground transition-colors duration-150">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
