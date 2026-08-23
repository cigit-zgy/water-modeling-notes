# cigit-zgy

cigit-zgy is a static academic research and technical-writing site for wastewater process modelling, scientific machine learning, and computational methods. It is built on AstroPaper with an Academic Dracula at Night design system and a small set of academic extensions.

## Stack

- Astro 7, TypeScript, and Tailwind CSS 4
- Markdown and MDX content collections
- KaTeX via `remark-math` and `rehype-katex`
- Pagefind search, RSS, sitemap, and AstroPaper SEO/accessibility infrastructure
- Static output suitable for GitHub and zero-config Vercel deployment

The site uses pnpm only. Node.js 22.12 or newer is required.

## Local use

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`. The first visit defaults to dark mode; the header toggle stores the reader's explicit choice in `localStorage`.

## Writing

Create a descriptive `.md` or `.mdx` file in `src/content/posts/`. Do not prefix filenames with dates; the filename becomes the stable `/writing/<slug>/` URL. Follow the schema and topic taxonomy in `src/content.config.ts`. Use `draft: true` until a note is ready; production builds exclude drafts from routes, listings, RSS, sitemap, and Pagefind.

Images can be placed under `public/figures/` and referenced as `/figures/name.svg`, or imported from `src/assets/` when Astro image optimization is useful. Always provide meaningful alt text and place article images inside semantic `figure` and `figcaption` elements.

Write inline mathematics as `$x(t)$` and display mathematics between `$$` delimiters. For MDX callouts, import `AcademicCallout` from `@/components/AcademicCallout.astro`. Wrap wide academic tables with `ResponsiveTable`.

`src/content/posts/academic-format-demo.mdx` is an internal draft covering equations, code, tables, figures, footnotes, references, and callouts. It is available during local development and intentionally absent from production output.

## Validation and preview

```bash
pnpm astro check
pnpm lint
pnpm format:check
pnpm build
pnpm preview
```

`pnpm build` runs Astro checks, generates the static site in `dist/`, builds the Pagefind index, and copies its assets to `public/pagefind/` for local development.

## GitHub and Vercel

Commit the repository to GitHub, then import it into Vercel. Use the detected pnpm install command and the existing `pnpm build` script; no Vercel adapter, `vercel.json`, SSR mode, or serverless function is required. Before the first deployment, confirm `site.url` in `astro-paper.config.ts` matches the final Vercel or custom-domain URL.

## Upstream and license

This project is based on [AstroPaper](https://github.com/satnaing/astro-paper), initialized from upstream v6.1.0 (source snapshot `35cfa7f`, 2026-08-05). AstroPaper is Copyright © Sat Naing and contributors and licensed under the MIT License. The upstream [LICENSE](LICENSE) is retained. Font sources and their separate license texts are recorded in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
