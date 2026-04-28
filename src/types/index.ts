export interface ProjectMeta {
  id: number;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
}

export interface ProjectTranslation {
  id: number;
  title: string;
  description: string;
  impact: string;
}

export type Project = ProjectMeta & ProjectTranslation;

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
