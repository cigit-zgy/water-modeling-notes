# CIGIT-ZGY

CIGIT-ZGY is a static academic research and technical-writing site for wastewater process modelling, scientific machine learning, and computational methods. It is built on AstroPaper with a project-owned solid academic publishing system.

## Stack

- Astro 7, TypeScript, and Tailwind CSS 4
- Markdown and MDX content collections
- KaTeX via `remark-math` and `rehype-katex`
- Pagefind search, RSS, sitemap, and AstroPaper SEO/accessibility infrastructure
- Static output suitable for GitHub and Vercel

The site uses pnpm only. Node.js 22.12 or newer is required.

## Visual system

The public site uses two opaque, solid themes:

- Dark: Dracula At Night
- Light: Claude-inspired warm editorial palette

Gradients, aurora backgrounds, backdrop blur, and Liquid Glass are excluded from published UI. Depth comes from solid surfaces, borders, spacing, typography, and restrained shadows. Claude Code is used as a composition/interaction reference for the light editorial direction; it does not replace the dark Dracula palette.

Typography is shared across prose and diagrams:

- Chinese: LXGW WenKai Screen
- Latin reading/UI: Latin Modern Sans
- code and identifiers: Maple Mono
- mathematics: KaTeX

Code remains on a Dracula editor surface in both site themes. Compact code-oriented callouts may use restrained Snazzy cyan, pink, yellow, and green accents.

## Writing contract

Create descriptive Markdown or MDX files in `src/content/posts/`. Do not prefix filenames with dates; filenames become stable `/writing/<slug>/` URLs. Use `draft: true` until a note is ready.

The default article grammar favors structured expression:

- tables for comparisons, variables, parameters, units, assumptions, and command matrices;
- bullet lists for three or more parallel points;
- numbered lists for ordered procedures and protocols;
- project-owned callouts for definitions, notes, descriptions, methods, important constraints, cautions, warnings, examples, and compact code emphasis;
- KaTeX for genuine mathematical relationships;
- charts for quantitative comparisons, trends, distributions, and relationships;
- fenced code for commands, configuration, and machine-readable content.

Mermaid and PlantUML are not default writing primitives. Use them only when a requested diagram or UML interaction carries information that tables, lists, equations, code, or quantitative charts cannot express as clearly.

For MDX callouts, import `AcademicCallout` from `@/components/AcademicCallout.astro`. Wrap potentially wide academic tables with `ResponsiveTable`. Every substantive table and figure requires a caption.

Detailed rules live in `.agents/skills/academic-blog/SKILL.md` and its references.

## Local use

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`. The first visit defaults to dark mode; the header toggle stores the reader's explicit choice in `localStorage`.

## Validation

```bash
pnpm astro check
pnpm lint
pnpm format:check
pnpm build
pnpm preview
```

`pnpm build` runs Astro checks, generates the static site in `dist/`, builds the Pagefind index, and copies its assets to `public/pagefind/` for local development.

## GitHub and Vercel

The site uses static Astro output. No Vercel adapter, SSR mode, or serverless function is required for the current architecture.

## Upstream and license

This project is based on [AstroPaper](https://github.com/satnaing/astro-paper), initialized from upstream v6.1.0 (source snapshot `35cfa7f`, 2026-08-05). AstroPaper is Copyright © Sat Naing and contributors and licensed under the MIT License. The upstream [LICENSE](LICENSE) is retained. Font sources and their separate license texts are recorded in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
