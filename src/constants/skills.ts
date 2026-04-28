import type { SkillCategory } from "@/types";

export const CORE_STACK = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    subtitle: "Interfaces & UI",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "ts" },
      { name: "JavaScript (ES6+)", icon: "js" },
      { name: "Tailwind CSS", icon: "tw" },
      { name: "Responsive Design", icon: "html" },
    ],
  },
  {
    category: "Backend & APIs",
    subtitle: "Server, Integrations & Data",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express.js", icon: "exp" },
      { name: "REST APIs", icon: "api" },
      { name: "WebSocket", icon: "ws" },
      { name: "JWT Auth", icon: "jwt" },
      { name: "MongoDB", icon: "mongo" },
      { name: "PostgreSQL", icon: "pg" },
    ],
  },
  {
    category: "Tools & Workflow",
    subtitle: "DevOps & Productivity",
    items: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Docker", icon: "dkr" },
      { name: "Vercel", icon: "vrcl" },
      { name: "Postman", icon: "post" },
    ],
  },
];
