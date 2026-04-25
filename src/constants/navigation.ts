import type { NavLink, SocialLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
];
