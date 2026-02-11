# Agent Guidelines for bughowi.com

## Commands

- **Build**: `astro check && astro build`
- **Dev**: `astro dev`
- **Typecheck**: `tsc --noEmit --incremental false`
- **Lint**: `eslint "src/**/*.{js,ts,jsx,tsx,astro}"`
- **Lint fix**: `eslint "src/**/*.{js,ts,jsx,tsx,astro}" --fix`
- **Format**: `prettier . --write`
- **Format check**: `prettier . --check`

## Code Style

- **TypeScript**: Strict mode enabled, use explicit types
- **Imports**: External libs first, then internal with `@/*` alias
- **Naming**: camelCase for vars/functions, PascalCase for components
- **Styling**: Tailwind CSS with `clsx` + `tailwind-merge` for classes
- **Components**: Use `class-variance-authority` for variants
- **JSX**: React JSX transform (`react-jsx`)
- **Formatting**: Prettier with Astro plugin
- **Linting**: ESLint with TypeScript recommended + Astro plugin
