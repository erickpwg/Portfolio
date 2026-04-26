export interface Project {
  id: number;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  subtitle: string;
  items: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
