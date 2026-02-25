# Agent Guidelines for bughowi.com

## Project Overview

Personal blog/portfolio site (bughowi.com) built with Astro 5, React 19, Tailwind CSS v4, and MDX. Static site generation — content is authored as MDX files and compiled to static HTML at build time. Deployed as a Docker container (nginx) published to GHCR.

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

CI runs on all PRs to main: typecheck → lint → format:check → build.

## Architecture

### Content Collections (`src/content/`)

Astro Content Collections with Zod schemas defined in `src/content/config.ts`:

| Collection | Schema fields                                     | Format |
| ---------- | ------------------------------------------------- | ------ |
| `blog`     | title, description, categories[], thumbnail, date | MDX    |
| `projects` | title, description, thumbnail, date, tech[]       | MDX    |
| `snippets` | title, description, categories[], date            | MDX    |
| `about`    | (no schema)                                       | MD     |

Reading time is calculated at build time via a custom remark plugin (`remark-reading-time.mjs`).

### Routing (`src/pages/`)

File-based routing. Content lists are paginated (6 per page):

- `/blog/page/[page].astro`, `/projects/page/[page].astro`, `/snippets/page/[page].astro`
- Individual items: `/blog/[slug].astro`, `/projects/[slug].astro`, `/snippets/[slug].astro`
- Redirects: `/blog` → `/blog/page/1`, `/projects` → `/projects/page/1`

### Layout & Components

- `src/layouts/Layout.astro` — main HTML wrapper (meta tags, OG tags, analytics)
- `src/components/` — Astro and React components. React is used selectively (mobile nav, dialogs, dropdowns) with Astro `client:` directives
- `src/components/typography/` — reusable Heading1-4 and Text components
- `src/components/card/` — PostCard, ProjectCard, SnippetCard

### Styling

Tailwind CSS v4 with `@tailwindcss/vite` plugin. Design tokens defined as CSS custom properties (OKLch color space) in `src/styles/global.css`. Uses:

- `cn()` utility (`src/lib/utils.ts`) combining `clsx` + `tailwind-merge`
- `class-variance-authority` for component variants (e.g., Button)
- `@tailwindcss/typography` for prose content styling

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

## Code Style

- **TypeScript**: Strict mode. Use explicit types.
- **Imports**: External libs first, then internal with `@/*` alias.
- **Naming**: camelCase for variables/functions, PascalCase for components/types.
- **React**: Functional components, React 19 JSX transform (no `import React`).
- **Formatting**: Prettier with `prettier-plugin-astro`.
- **Linting**: ESLint with TypeScript recommended + Astro plugin + jsx-a11y strict.

## Deployment

Multi-stage Docker build: node (build) → nginx (serve on port 8080). Published to `ghcr.io/albugowy15/bughowi.com` via GitHub Actions on push to main with release-please for versioning.
