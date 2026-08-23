# Dracula At Night design system

## Palette

The site uses **Dracula At Night only**. Do not combine it with figure-derived palettes or create article-local colour systems.

Dark-mode foundation:

| Role | Colour |
| --- | --- |
| Deep background | `#0E1419` |
| Page background | `#191A21` |
| Secondary surface | `#21222C` |
| Elevated / diagram surface | `#253340` |
| Border / quiet surface | `#343746` |
| Primary text | `#F8F8F2` |
| Muted / structural | `#6272A4` |
| Purple | `#BD93F9` |
| Pink | `#FF79C6` |
| Cyan | `#8BE9FD` |
| Green | `#50FA7B` |
| Orange | `#FFB86C` |
| Red | `#FF5555` |

Light mode is an accessible inverse of the same semantic relationships, not a separate decorative palette. Shared components consume semantic variables from `src/styles/theme.css`; new hex values should not be scattered through pages or MDX.

## Style architecture

The stylesheet architecture is intentionally fixed:

1. `fonts.css` defines self-hosted Latin and code font faces.
2. `theme.css` owns colour and font-family tokens.
3. `typography.css` owns article typography, tables, code, quotations, figures, and callouts.
4. `global.css` owns layout utilities, navigation/interactions, transitions, and home-page accents.

Do not add a `refinements.css`, `overrides.css`, article-local shared UI CSS, or another patch layer. If a shared visual rule changes, modify the owning layer.

## Typography

- `LXGW WenKai Screen` is the only CJK family across the site: body, headings, navigation, metadata, TOC, tables, captions, callouts, and Chinese glyphs inside code.
- Long-form body text is sans-serif and regular weight (`400`).
- Latin reading/UI text uses Latin Modern Sans; code uses Maple Mono; KaTeX keeps its mathematical font stack.
- Bold/semibold is reserved for headings, table headers, labels, and semantic emphasis.

## Heading hierarchy

Heading colour is global and semantic:

- H1: Dracula purple
- H2: Dracula cyan
- H3: Dracula pink
- H4: Dracula green
- Orange: cautions, captions, and limited secondary emphasis

Paragraphs remain neutral.

## Code

All fenced code and inline code use Dracula. Astro/Shiki is configured with `dracula` for both site themes so syntax meaning does not change when the reading theme changes. Inline code uses the same dark Dracula surface rather than a separate light token.

## Tables

- Every substantive article table requires a caption above the table.
- Caption text is slightly larger than ordinary metadata but remains subordinate to headings.
- Table headers use an elevated Dracula surface.
- Odd and even rows use two visibly distinct, low-contrast dark surfaces. Zebra striping is defined globally in `typography.css`, never by per-table utility classes.
- Tables may scroll horizontally on narrow screens; the page itself must not overflow.

## Figures and Mermaid

- Figures use semantic `figure`/`figcaption` and meaningful alt text.
- Mermaid is preferred for workflow diagrams; readers see the rendered diagram, not Mermaid source.
- Mermaid presentation is centralized in `MermaidDiagram.astro` and uses only Dracula At Night colours.
- Do not use remote server-side renderers such as Kroki or mermaid.ink as page dependencies. The current client renderer is version-pinned and has a quiet non-error fallback if the module cannot load.
- Keep Mermaid syntax conservative. Avoid article-local `classDef` styling; component-level presentation owns colours.
- SVGs/images must remain inside the reading column at desktop and mobile widths.

## Lead text, quotations, and callouts

Article lead/deck text and block quotations use a quiet Dracula surface and a thicker left accent rule. Callout labels such as `NOTE`, `DEFINITION`, `METHOD`, and `CAUTION` are larger/stronger than metadata, while callout body text stays regular weight.

## Identity and navigation

- The uploaded Ghibli-style avatar is the site identity image and appears inside the circular mark directly left of `cigit-zgy`.
- Render the avatar as a real `<img>` element; do not duplicate it with pseudo-elements.
- Research-topic vector icons remain sparse and reuse centralized Dracula tokens.

## Reading progress

The circular reading-progress/back-to-top control appears at the lower-right on both desktop and mobile. Its ring uses a Dracula accent and retains an accessible click target.

## Responsive and accessibility checks

Check representative 1440, 1024, 768, and 390 px widths. Verify navigation, title wrapping, TOC, equations, code/table overflow, Mermaid/figures, search, footer, progress control, focus visibility, both themes, and reduced motion. Interactive targets should remain at least 44 px on mobile.
