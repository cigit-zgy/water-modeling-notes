# Project rules

- Treat this as an academic research and technical-writing site. Content clarity comes before decoration.
- Keep AstroPaper as the upstream base and preserve its static-first architecture, accessibility, SEO, MDX, Pagefind, RSS, sitemap, and theme mechanisms.
- Do not replace Astro or add React, Vue, Svelte, SSR, a backend, or a CMS unless explicitly approved.
- Keep dependencies minimal. Extend existing layouts and components before creating new abstractions.
- Use exactly two solid site themes: Dracula At Night for dark mode and the Claude-inspired warm editorial palette for light mode. Centralize all colour roles in `src/styles/theme.css`; do not scatter decorative hex values through pages or MDX.
- Gradients, aurora backgrounds, backdrop blur, and Liquid Glass are prohibited in published UI. Use opaque surfaces, borders, spacing, typography, and restrained shadows.
- Keep shared style ownership fixed: `fonts.css` for font faces, `theme.css` for tokens, `surfaces.css` for reusable solid surfaces, `typography.css` for article presentation, and `global.css` for layout/interactions. Do not add an overrides/refinements stylesheet.
- Use `LXGW WenKai Screen` as the only CJK family. Latin reading/UI text uses Latin Modern Sans; code/identifiers use Maple Mono; KaTeX owns mathematics. Long-form body text remains regular weight.
- Prefer structured technical writing: tables for comparisons/parameters, lists for enumerable information and ordered procedures, semantic callouts for definitions/notes/constraints, KaTeX for genuine mathematics, and charts for quantitative information.
- Mermaid and PlantUML are not default article primitives. Use them only when explicitly requested or when the diagram itself carries necessary UML/interaction structure.
- Project callouts use solid semantic cards derived from the current theme. Code callouts remain on a Dracula surface and may use restrained Snazzy cyan/pink/yellow/green accents.
- Maintain keyboard navigation, visible focus, reduced-motion support, semantic HTML, sufficient contrast, and complete responsive behaviour.
- Never invent affiliations, publications, results, metrics, citations, or other academic facts. Mark missing verified information with `TODO`.
- New general writing belongs in `src/content/posts/`; paper reviews follow `PAPER_REVIEW.md` under `src/content/paper-review/`; drafts must not enter production routes, listings, RSS, sitemap, or Pagefind.
- Remove only confirmed dead/duplicate code during cleanup; preserve disabled upstream AstroPaper capabilities unless their removal is an explicit project decision.
- Run `pnpm astro check`, `pnpm lint`, `pnpm format:check`, and `pnpm build` before declaring work complete. Visually check affected pages at desktop and mobile widths.

Use the project scripts in `package.json` for local development and validation; do not install project tooling globally.
