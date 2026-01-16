# AGENTS.md - bughowi.com Development Guide

This document provides guidelines for AI agents working on the bughowi.com codebase.

## Project Overview

- **Framework**: Astro 5.x with TypeScript, React, and MDX
- **Styling**: Tailwind CSS v4 with custom utilities
- **Package Manager**: pnpm
- **Type System**: TypeScript with strict mode
- **Code Quality**: ESLint, Prettier, TypeScript type checking

## Build & Development Commands

### Development

```bash
pnpm dev          # Start development server
pnpm dev:host     # Start dev server with host binding
```

### Build & Deployment

```bash
pnpm build        # Build for production (includes type checking)
pnpm preview      # Preview production build locally
```

### Code Quality & Type Checking

```bash
pnpm check        # Astro type checking
pnpm typecheck    # TypeScript type checking (no emit)
pnpm lint         # ESLint check
pnpm lint:fix     # ESLint auto-fix
pnpm format       # Prettier format all files
pnpm format:check # Prettier check formatting
```

### Utilities

```bash
pnpm sync         # Astro sync (update type definitions)
```

## Code Style Guidelines

### File Organization

- **Source root**: `src/`
- **Components**: `src/components/` (React: `.tsx`, Astro: `.astro`)
- **Layouts**: `src/layouts/`
- **Pages**: `src/pages/`
- **Utilities**: `src/lib/` and `src/utils/`
- **Content**: `src/content/` (Astro Content Collections)
- **Styles**: `src/styles/`

### TypeScript & JavaScript

- **Module System**: ES Modules (`import/export`)
- **TypeScript**: Strict mode enabled, no implicit any
- **Path Aliases**: Use `@/*` for `src/*` imports
- **Type Imports**: Use `import type` for type-only imports
- **React**: Use React 19 with automatic JSX runtime

### Import Order & Structure

```typescript
// 1. External dependencies
import React from "react";
import { clsx } from "clsx";

// 2. Internal path aliases
import { cn } from "@/lib/utils";

// 3. Relative imports
import { Button } from "./Button";
```

### React Components (TSX)

- Use functional components with TypeScript
- Props interface should be defined inline or exported
- Use `React.ComponentProps` for extending HTML element props
- Follow Radix UI patterns for accessible components

Example:

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "default" | "destructive" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
}

export { Button };
```

### Astro Components

- Use frontmatter for TypeScript logic
- Keep component logic minimal in `.astro` files
- Pass data via props with TypeScript interfaces
- Use Astro's built-in components (`<Image />`, `<Font />`)

Example:

```astro
---
import type { Props } from "./types";
import { cn } from "@/lib/utils";

const { title, className } = Astro.props;
---

<div class={cn("container mx-auto", className)}>
  <h1>{title}</h1>
  <slot />
</div>
```

### Styling with Tailwind CSS

- Use utility classes with `cn()` helper from `@/lib/utils`
- Follow Tailwind v4 conventions
- Use CSS variables for theming when needed
- Prefer Tailwind classes over custom CSS
- Use `@tailwindcss/typography` for content styling

### Naming Conventions

- **Files**: kebab-case for `.astro`, `.tsx`, `.ts` files
- **Components**: PascalCase for React/Astro components
- **Functions/Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase
- **Custom Hooks**: `useCamelCase`

### Error Handling

- Use TypeScript for compile-time error prevention
- For runtime errors, use try-catch with proper error messages
- Validate data from external sources (Content Collections, APIs)
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safe access

### Content Collections (Astro)

- Define schemas in `src/content/config.ts`
- Use Zod for validation if needed
- Follow Astro's content collection patterns
- Use `getCollection()` for fetching content

### Git & Commit Guidelines

- **Commit Messages**: Use conventional commits format
- **Branch Naming**: `feature/`, `fix/`, `docs/`, `refactor/`
- **PR Descriptions**: Include context, changes, and testing steps

## Testing Notes

This project currently doesn't have a test framework configured. When adding tests:

- Consider using Vitest for unit tests
- Use `@testing-library/react` for React components
- Place test files next to source files with `.test.ts` or `.spec.ts` extension

## Performance Considerations

- Use Astro's `Image` component for optimized images
- Implement lazy loading for components when appropriate
- Use `fontsource` for optimized font loading
- Follow Astro's partial hydration patterns for interactive components

## Accessibility (a11y)

- Follow WAI-ARIA guidelines
- Use semantic HTML elements
- Ensure proper keyboard navigation
- Include ARIA labels where needed
- Use Radix UI components for accessible primitives

## Environment & Dependencies

- **Node.js**: Version specified in `.nvmrc` or package.json engines
- **Package Manager**: **pnpm** is the primary package manager for this project
  - Use `pnpm install` for dependency management
  - Use `pnpm add <package>` to add dependencies
  - Use `pnpm remove <package>` to remove dependencies
  - Use `pnpm` instead of `npm` for all script commands
- **Sharp**: Native dependency for image processing
- **TypeScript**: 5.9+ with strict configuration

## Agent Workflow

1. **Before starting**: Run `pnpm typecheck` and `pnpm lint` to understand current state
2. **During development**: Use `pnpm dev` for live preview
3. **Before committing**: Run `pnpm build`, `pnpm typecheck`, `pnpm lint`, `pnpm format:check`
4. **After changes**: Ensure all commands pass before considering work complete

## Common Patterns

- Use `clsx` and `tailwind-merge` via `cn()` utility for conditional classes
- Follow Astro's island architecture for interactivity
- Use Content Collections for structured content
- Implement responsive design with Tailwind's breakpoint utilities

## Troubleshooting

- If TypeScript errors appear after adding dependencies, run `pnpm sync`
- If styles aren't applying, check Tailwind class conflicts with `cn()`
- If build fails, check for missing dependencies or type errors
- Use `astro check` for Astro-specific validation
