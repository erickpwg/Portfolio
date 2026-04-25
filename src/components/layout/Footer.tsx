import { SOCIAL_LINKS } from "@/constants/navigation";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {currentYear}{" "}
          <span className="text-foreground font-medium">Erick Wagner</span>. All
          rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-accent hover:bg-surface-elevated transition-all duration-200"
              >
                {Icon && <Icon className="w-4 h-4" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
