# Scientific Dracula design system

## Source and palette

The site combines two sources deliberately:

1. **Dracula at Night** supplies the blue-violet dark foundation, code semantics, neutral text hierarchy, and restrained technical mood.
2. The selected scientific-figure reference contributes exactly five decorative accents: **purple, magenta, amber, green, and cyan**.

Do not reintroduce the other discarded figure palettes. Do not add decorative red, orange, blue, or additional hue families unless a later project-level decision explicitly changes the palette.

Use semantic variables from `src/styles/theme.css`; add or change a token there before using a new colour. Dark mode remains the first-visit default. Light mode preserves the same five-colour relationships with lower saturation.

## Typography

- `LXGW WenKai Screen` is the only CJK family across the entire site: article body, headings, navigation, metadata, TOC, tables, captions, callouts, and Chinese glyphs inside code.
- Long-form reading text is non-serif. Latin reading/UI text uses Latin Modern Sans; code uses Maple Mono with LXGW only as the CJK fallback. KaTeX keeps its own mathematical font stack.
- Do not add PingFang, Microsoft YaHei, Songti, Kaiti, Georgia, or other alternate CJK/reading stacks to shared UI.

## Heading hierarchy

Heading colour is a global semantic hierarchy, not an article-local decoration:

- H1: purple
- H2: cyan
- H3: magenta
- H4: green
- amber: captions, cautions, and limited secondary emphasis

Keep the actual number of coloured elements low; paragraphs remain neutral.

## Code

All fenced and inline code uses the Dracula code surface. Shiki uses the Dracula theme in both site light and dark modes so syntax meaning does not change when the reading background changes.

## Tables

- Every substantive article table requires a caption.
- Captions sit above the table and use a restrained academic style.
- Body rows use subtle zebra striping. The difference must be visible but low contrast.
- The table header may use a faint cyan-tinted elevated surface.
- Tables may scroll horizontally on narrow screens; they must not force the page itself to overflow.

## Figures and diagrams

- Figures use semantic `figure`/`figcaption` and meaningful alt text.
- Mermaid is the preferred tool for workflow diagrams. Published pages show only the rendered diagram, not Mermaid source.
- Diagram colours must use the same five accent tokens and the Dracula foundation.
- SVGs/images must remain inside the reading column at desktop and mobile widths.

## Lead text and quotations

Article lead/deck text and block quotations use a soft grey-blue background and a thicker left accent rule. This is a typographic cue, not a card. Avoid large filled boxes or heavy shadows.

## Identity and navigation

- The uploaded Ghibli-style avatar is the site identity image and appears in the circular mark directly left of `cigit-zgy`.
- Do not replace it with a generic icon or pseudo-element.
- Decorative vector icons use one consistent library (Lucide), remain local, monochrome/current-colour, and sparse.

## Reading progress

The circular reading-progress/back-to-top control appears at the lower-right on both desktop and mobile. The progress ring uses a site accent and retains a clear accessible click target.

## Responsive and accessibility checks

Check representative 1440, 1024, 768, and 390 px widths. Verify navigation, title wrapping, reading measure, TOC, equations, code/table overflow, Mermaid/figures, search, footer, progress control, focus visibility, both themes, and reduced motion. Interactive targets should remain at least 44 px on mobile.
