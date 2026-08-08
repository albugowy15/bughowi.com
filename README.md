# bughowi.com

My personal blog and portfolio about software development. I use it to document what I learn, explain technical concepts, share practical tutorials, and reflect on the tools and engineering decisions that shape my work.

Visit the live site at [bughowi.com](https://bughowi.com) or browse the source code on [GitHub](https://github.com/albugowy15/bughowi.com).

## What you’ll find here

The blog is written for developers who enjoy practical, experience-driven notes. Its topics include:

- Frontend development with React, Next.js, TypeScript, forms, state management, and component architecture
- Static sites, MDX, content management, and developer writing workflows
- Developer tooling and productivity with Linux, Neovim, tmux, and terminal workflows
- Infrastructure and self-hosting with Docker, VPS deployments, Dokploy, Nginx, Cloudflare Tunnel, Grafana, and Prometheus
- Short reference snippets for recurring configuration and development tasks

The site also includes a portfolio of projects, ranging from web applications and APIs to Rust command-line and desktop tools.

## Tech stack

- [Astro](https://astro.build/) 7 with static site generation
- [TypeScript](https://www.typescriptlang.org/) with strict type checking
- [React](https://react.dev/) 19 for interactive UI components
- [Tailwind CSS](https://tailwindcss.com/) 4 with the Typography plugin
- [MDX](https://mdxjs.com/) for content that combines Markdown with components
- Astro content collections with Zod schemas for typed blog posts, projects, and snippets
- [Expressive Code](https://expressive-code.com/) for syntax-highlighted code blocks
- Astro integrations for React, sitemap generation, and optimized images

Content is authored in the `src/content` collections and compiled into static HTML at build time. A custom remark plugin adds reading-time metadata to articles.

## Development

This project uses [pnpm](https://pnpm.io/).

```sh
pnpm install
pnpm dev
```

Useful checks and commands:

```sh
pnpm check         # Astro validation
pnpm typecheck     # TypeScript validation
pnpm lint          # ESLint
pnpm format:check  # Prettier validation
pnpm build         # Validate and build the static site
pnpm preview       # Preview the production build
```

## Deployment

The production site is deployed as a static site on [Cloudflare Pages](https://pages.cloudflare.com/). The build generates static HTML, CSS, JavaScript, and assets that Cloudflare Pages serves globally.

This repository also includes a multi-stage `Dockerfile` and nginx configuration. Docker is provided as a convenient way to run the project without installing and configuring the individual Node.js, pnpm, and nginx dependencies manually. It can also be used for self-hosting or deploying the site to another platform.
