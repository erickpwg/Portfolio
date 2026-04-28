# Erick Wagner — Portfolio

Personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Showcases projects, skills, and contact information with support for English and Portuguese.

**Live:** [erickwagner.dev](https://erickwagner.dev)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Email | Resend |
| Deployment | Hostinger |

---

## Features

- **Bilingual (EN / PT)** — language toggle persisted via `localStorage`
- **Typewriter effect** — cycling role titles in the hero section
- **Contact form** — server-side email delivery via Resend API
- **Active section tracking** — header highlights the current section on scroll
- **Responsive** — mobile-first layout across all breakpoints

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/     # Route handler — email via Resend
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, About, Skills, Projects, Contact
│   └── ui/              # Button, Badge, SectionTitle, Icons
├── constants/           # Navigation, skills, projects metadata
├── context/             # LanguageContext (i18n)
├── lib/                 # translations.ts (EN + PT)
└── types/               # Shared TypeScript interfaces
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file at the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

---

## Adding a Project

**1. Add metadata to [`src/constants/projects.ts`](src/constants/projects.ts):**

```ts
{
  id: 2,
  tags: ["Node.js", "React", "REST API"],
  repoUrl: "https://github.com/erickpwg/repo-name",
  liveUrl: "https://your-demo.vercel.app", // optional
}
```

**2. Add translated content to [`src/lib/translations.ts`](src/lib/translations.ts)** — inside `en.projects.items` and `pt.projects.items`:

```ts
// en
{ id: 2, title: "Project Name", description: "...", impact: "..." }

// pt
{ id: 2, title: "Nome do Projeto", description: "...", impact: "..." }
```

**3. Set `COMING_SOON = false`** in `src/constants/projects.ts`.

> The component merges metadata and translations by `id` automatically.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## License

MIT © Erick Wagner
