# Scientific Dracula design system

## Source and palette

The site combines two sources deliberately:

1. **Dracula at Night** supplies the blue-violet dark foundation, code semantics, neutral text hierarchy, and restrained technical mood.
2. The author-selected scientific palette supplies exactly three source colours:
   - warm peach `#FFCE8C`
   - muted plum `#6D5D68`
   - lavender `#8081AF`

These three families replace the previously tested multi-colour scientific palettes. Do not reintroduce discarded purple/magenta/green/cyan families as independent decorative hues. Lighter/darker derivatives of the three approved colours are allowed only for contrast and hierarchy.

Use semantic variables from `src/styles/theme.css`; change a token there before changing shared UI. Dark mode remains the first-visit default. Light mode preserves the same three-family relationships with darker text-safe derivatives.

## Typography

- `LXGW WenKai Screen` is the only CJK family across the entire site: article body, headings, navigation, metadata, TOC, tables, captions, callouts, and Chinese glyphs inside code.
- Long-form reading text is non-serif and regular (`400`). Latin reading/UI text uses Latin Modern Sans; code uses Maple Mono with LXGW as the CJK fallback. KaTeX keeps its own mathematical font stack.
- Do not add PingFang, Microsoft YaHei, Songti, Kaiti, Georgia, or alternate CJK/reading stacks to shared UI.
- Bold/semibold is reserved for headings and explicit semantic emphasis.

## Heading hierarchy

Heading colour is global semantic hierarchy, not article-local decoration:

- H1: lavender family
- H2: warm peach family
- H3: readable muted-plum derivative
- H4: lighter lavender derivative

Paragraphs remain neutral.

## Code

All fenced and inline code uses the standard Dracula dark code surface. Shiki uses the Dracula theme in both site light and dark modes so syntax meaning does not change with the reading background.

## Tables

- Every substantive article table requires a caption above the table.
- Caption text is slightly larger than ordinary metadata but remains below heading hierarchy.
- Zebra striping must be visible without becoming saturated. Odd and even bands use different low-opacity derivatives of the approved plum/lavender families.
- Apply zebra colour at the cell level when necessary so Tailwind/prose row utilities cannot mask the alternation.
- The header uses a quiet plum-tinted elevated surface.
- Tables may scroll horizontally on narrow screens; they must not force page overflow.

## Callouts

- `NOTE`, `DEFINITION`, `METHOD`, and `CAUTION` labels are scan targets and may be slightly larger/bolder than metadata.
- Callout body text remains regular weight.
- Background tints and border accents stay within the three approved scientific colour families.

## Figures and Mermaid

- Figures use semantic `figure`/`figcaption` and meaningful alt text.
- Mermaid is preferred for workflow diagrams when it fits the scientific message.
- Published pages never expose Mermaid source or runtime parser error text.
- Do not use Kroki or mermaid.ink as remote rendered-image dependencies.
- Keep Mermaid syntax conservative and version-pinned when a client renderer is used.
- A compact semantic fallback must remain available if Mermaid cannot render.
- Mermaid diagrams/fallbacks use only the three approved scientific colour families plus the Dracula foundation.
- SVGs/images must remain inside the reading column.

## Lead text and quotations

Article lead/deck text and block quotations use a soft grey/plum-tinted background and a thicker lavender-family left rule. This is a typographic cue, not a card. Avoid large filled boxes or heavy shadows.

## Identity and navigation

- The uploaded Ghibli-style avatar is the site identity image and appears in the circular mark directly left of `cigit-zgy`.
- Do not replace it with a generic icon or pseudo-element.
- Decorative vector icons use one consistent library (Lucide), remain local, monochrome/current-colour, and sparse.

## Reading progress

The circular reading-progress/back-to-top control appears at the lower-right on both desktop and mobile. The progress ring uses a site accent and retains a clear accessible click target.

## Responsive and accessibility checks

Check representative 1440, 1024, 768, and 390 px widths. Verify navigation, title wrapping, reading measure, TOC, equations, code/table overflow, Mermaid/fallback, figures, search, footer, progress control, focus visibility, both themes, and reduced motion. Interactive targets should remain at least 44 px on mobile.
