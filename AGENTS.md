# Project rules

- Treat this as an academic research and technical-writing site. Content clarity comes before decoration.
- Keep AstroPaper as the upstream base and preserve its static-first architecture, accessibility, SEO, MDX, Pagefind, RSS, sitemap, and theme mechanisms.
- Do not replace Astro or add React, Vue, Svelte, SSR, a backend, or a CMS unless explicitly approved.
- Keep dependencies minimal. Extend existing layouts and components before creating new abstractions.
- Use the centralized Academic Dracula at Night tokens in `src/styles/theme.css`; do not scatter new hex values through components.
- Maintain keyboard navigation, visible focus, reduced-motion support, semantic HTML, sufficient contrast, and complete responsive behaviour.
- Never invent affiliations, publications, results, metrics, citations, or other academic facts. Mark missing verified information with `TODO`.
- New writing belongs in `src/content/posts/`; drafts must not enter production routes, listings, RSS, sitemap, or Pagefind.
- Run `pnpm astro check`, `pnpm lint`, `pnpm format:check`, and `pnpm build` before declaring work complete. Visually check affected pages at desktop and mobile widths.

Use the project scripts in `package.json` for local development and validation; do not install project tooling globally.
