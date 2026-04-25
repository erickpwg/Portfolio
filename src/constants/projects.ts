import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "A full-stack web application built with the MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A modern e-commerce platform with real-time features.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: 3,
    title: "Project Three",
    description: "REST API service with authentication and role-based access.",
    tags: ["Node.js", "Express", "JWT", "MongoDB"],
    repoUrl: "https://github.com",
  },
];
