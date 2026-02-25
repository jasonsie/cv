# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server (Next.js on port 3000)
yarn build        # Production build
yarn lint         # ESLint (next lint)
```

Package manager is **yarn** (yarn.lock present, no package-lock.json).

## Architecture

This is a **Next.js 14 App Router** portfolio/CV site with internationalization, deployed on Vercel.

### Routing & i18n

- Uses `next-intl` with `[locale]` dynamic route segment (`src/app/[locale]/`)
- Supported locales: `en`, `tw` — configured in `src/i18n/routing.ts`
- Root `/` redirects to `/en` (`src/app/page.tsx`)
- Middleware at `src/middleware.ts` handles locale detection and redirects
- Translation files: `messages/en.json` and `messages/tw.json`

### Data Flow

Resume content is driven by the **i18n message files** (`messages/*.json`), not the static `src/data/resume-data.tsx`. The page component (`src/app/[locale]/page.tsx`) reads from `useMessages()` and `useTranslations()` to render all sections. The static `resume-data.tsx` exists mainly as a data source for the GraphQL API.

Icon and logo references in message JSON use string keys (e.g. `"GitHubIcon"`, `"SeidorLogo"`) that are mapped to actual components/imports via lookup objects in the page component.

### GraphQL API

- Apollo Server with `type-graphql` at `src/app/graphql/route.ts` (Next.js Route Handler)
- Schema types: `src/apollo/type-defs.ts` (uses TypeScript decorators)
- Resolver: `src/apollo/resolvers.ts` — single `me` query returning `RESUME_DATA`
- TypeScript decorators are enabled (`experimentalDecorators`, `emitDecoratorMetadata` in tsconfig)

### UI Stack

- **shadcn/ui** components in `src/components/ui/` (Radix UI primitives + Tailwind)
- Tailwind CSS with CSS variable-based theming (HSL colors defined in `globals.css`)
- Print-optimized: extensive use of `print:` Tailwind variants for PDF/print output
- Command menu (Cmd+J): `src/components/command-menu.tsx` — provides print action and social links
- Locale switcher in top layout via `src/components/PageLayout.tsx`

### Path Alias

`@/*` maps to `./src/*` (configured in both tsconfig.json and components.json).
