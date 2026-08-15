# Agent Guidelines for bughowi.com

## Project Overview

Personal blog/portfolio built with Astro 7, React 19, Tailwind CSS v4, and MDX. Static site generation — content is authored as MDX files in `src/content/` and compiled to static HTML at build time.

## Commands

All commands use pnpm. Run from the project root.

- **Dev server**: `pnpm dev` (or `pnpm dev:host` for network access)
- **Build**: `pnpm build` (runs `astro check && astro build`)
- **Type check**: `pnpm typecheck` (`tsc --noEmit --incremental false`)
- **Astro check**: `pnpm check` (`astro check`)
- **Lint**: `pnpm lint` / `pnpm lint:fix`
- **Format**: `pnpm format` / `pnpm format:check`
- **Sync content collections**: `pnpm sync` (`astro sync`)
- **Preview build**: `pnpm preview`

## Architecture

### Content Collections (`src/content.config.ts`)

Uses Astro's glob loader API (Astro 5+). Schemas defined with `astro/zod`:

| Collection | Schema fields                                     | Format |
| ---------- | ------------------------------------------------- | ------ |
| `blog`     | title, description, categories[], thumbnail, date | MDX    |
| `projects` | title, description, thumbnail, date, tech[]       | MDX    |
| `snippets` | title, description, categories[], date            | MDX    |
| `about`    | (no schema)                                       | MDX    |

Reading time is calculated at build time via `remark-reading-time.mjs` (a remark plugin configured in `astro.config.ts`).

### Routing (`src/pages/`)

File-based routing. Content lists are paginated (6 per page):

- `/blog/page/[page].astro`, `/projects/page/[page].astro`, `/snippets/page/[page].astro`
- Individual items: `/blog/[slug].astro`, `/projects/[slug].astro`, `/snippets/[slug].astro`
- Redirects (defined in `astro.config.ts`): `/blog` → `/blog/page/1`, `/projects` → `/projects/page/1`

### Layout & Components

- `src/layouts/Layout.astro` — main HTML wrapper (meta tags, OG tags, analytics)
- `src/layouts/NavbarMenu.astro`, `Footer.astro` — shell components
- `src/components/` — Astro and React components. React is used selectively (mobile nav, dialogs, dropdowns) with Astro `client:` directives
- `src/components/typography/` — reusable Heading1-4 and Text components
- `src/components/card/` — PostCard, ProjectCard, SnippetCard
- `src/components/pagination/` — pagination controls

### Styling

Tailwind CSS v4 with `@tailwindcss/vite` plugin. Design tokens defined as CSS custom properties (OKLch color space) in `src/styles/global.css`. Uses:

- `cn()` utility (`src/lib/utils.ts`) combining `clsx` + `tailwind-merge`
- `class-variance-authority` for component variants (e.g., Button)
- `@tailwindcss/typography` for prose content styling
- Expressive Code with "vesper" theme + line numbers plugin for code blocks

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Code Style

- **TypeScript**: Strict mode (`astro/tsconfigs/strictest`). Use explicit types.
- **Imports**: External libs first, then internal with `@/*` alias.
- **Naming**: camelCase for variables/functions, PascalCase for components/types.
- **React**: Functional components, React 19 JSX transform (no `import React`).
- **Formatting**: Prettier with `prettier-plugin-astro`. Config in `.prettierrc`.
- **Linting**: ESLint flat config (`eslint.config.js`) with TypeScript recommended + Astro plugin + jsx-a11y strict.

## Deployment

The production site is deployed on Cloudflare Pages as a static site. A multi-stage `Dockerfile` (node build → nginx on port 8080) is provided as an alternative for self-hosting or local containerized preview.
