"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, ChevronDownIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { SOCIAL_LINKS } from "@/constants/navigation";

const roles = [
  "Full Stack Engineer | Node.js • React • Next.js",
  "Backend Engineer | APIs • Microservices • Node.js",
  "Frontend Engineer | React • Next.js • UI/UX",
  "Chatbot Engineer | Automation • AI • Integrations"
];

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const full = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === full.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-white/70 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-muted text-lg">Hi, I&apos;m</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Erick Wagner
          </h1>
        </div>

        <div className="h-10 flex items-center">
          <span className="text-xl sm:text-2xl font-medium text-accent">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-muted text-base sm:text-lg max-w-xl leading-relaxed">
          I develop scalable applications using modern JavaScript technologies,
           focusing on performance, maintainability, and user experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Button
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            size="lg"
          >
            View Projects
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
          <Button
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="outline"
            size="lg"
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center gap-3 mt-2">
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-border text-muted hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-200"
              >
                {Icon && <Icon className="w-5 h-5" />}
              </a>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        aria-label="Scroll to about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted hover:text-accent transition-colors duration-200"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDownIcon className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
