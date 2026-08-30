# Project rules

- Treat this as an academic research and technical-writing site. Content clarity comes before decoration.
- Keep AstroPaper as the upstream base and preserve its static-first architecture, accessibility, SEO, MDX, Pagefind, RSS, sitemap, and theme mechanisms.
- Do not replace Astro or add React, Vue, Svelte, SSR, a backend, or a CMS unless explicitly approved.
- Keep dependencies minimal. Extend existing layouts and components before creating new abstractions.
- Use Dracula At Night as the sole visual palette. Centralize tokens in `src/styles/theme.css`; do not scatter decorative hex values through pages or MDX.
- Keep shared style ownership fixed: `fonts.css` for font faces, `theme.css` for tokens, `typography.css` for article presentation, and `global.css` for layout/interactions. Do not add an overrides/refinements stylesheet.
- Use `LXGW WenKai Screen` as the only CJK family. Long-form body text remains sans-serif and regular weight.
- Maintain keyboard navigation, visible focus, reduced-motion support, semantic HTML, sufficient contrast, and complete responsive behaviour.
- Never invent affiliations, publications, results, metrics, citations, or other academic facts. Mark missing verified information with `TODO`.
- General long-form writing belongs in `src/content/posts/`. `Paper Review` is the explicit separate-content exception and is governed solely by `PAPER_REVIEW.md`; do not duplicate its selection, scoring, evidence, or writing rules elsewhere.
- Drafts must not enter production routes, listings, RSS, sitemap, or Pagefind.
- Remove only confirmed dead/duplicate code during cleanup; preserve disabled upstream AstroPaper capabilities unless their removal is an explicit project decision.
- Run `pnpm astro check`, `pnpm lint`, `pnpm format:check`, and `pnpm build` before declaring work complete. Visually check affected pages at desktop and mobile widths.

Use the project scripts in `package.json` for local development and validation; do not install project tooling globally.
