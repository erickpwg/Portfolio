"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, MapPinIcon, MailIcon } from "@/components/ui/Icons";

const stats = [
  { value: "2+", label: "Years of Experience" },
  { value: "5+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <SectionTitle
              label="About Me"
              title="Turning ideas into reliable software"
              align="left"
            />

            <div className="flex flex-col gap-4 text-muted leading-relaxed">
              <p>
                Hello! I&apos;m a Full Stack Developer specialized in building chatbot solutions and automation systems
                using JavaScript, Node.js, and modern web technologies.
              </p>
              <p>
                Currently working at Central IT, developing chatbot solutions integrated with the CITSmart
                platform for customer service and service management.
              </p>
              <p>
                Focused on API integrations (REST/WebSocket), workflow automation, and conversational systems 
                that reduce manual workload and improve response efficiency.
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <MapPinIcon className="w-4 h-4 text-accent shrink-0" />
                <span>Brazil — open to remote opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <MailIcon className="w-4 h-4 text-accent shrink-0" />
                <span>erickpwagner13@gmail.com</span>
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
              Contact Me
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-surface border border-border hover:border-accent/40 transition-colors duration-200"
                >
                  <span className="text-3xl font-bold text-accent">{stat.value}</span>
                  <span className="text-xs text-muted mt-1 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-surface border border-border p-6 flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Quick Facts
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Building scalable applications with Next.js and Node.js",
                  "Developing chatbot automations and integrations",
                  "Working with REST APIs and event-driven systems",
                  "Focused on clean architecture and performance",
                ].map((fact) => (
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
