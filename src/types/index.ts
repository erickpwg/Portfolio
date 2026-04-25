export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
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
