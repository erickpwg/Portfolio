import type { SkillCategory } from "@/types";

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];
