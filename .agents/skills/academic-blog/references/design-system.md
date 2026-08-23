# Academic Dracula at Night

## Source and tokens

The site keeps the Academic Dracula at Night page palette, while code blocks use the standard Dracula syntax theme. Use semantic variables from `src/styles/theme.css`; add a token there before introducing a new site colour.

Dark mode is the first-visit default. Light mode remains a neutral accessibility option. Code blocks stay Dracula-dark in both modes for stable syntax semantics.

## Typography

- All Chinese glyphs use `LXGW WenKai Screen` (落霞孤鹜文楷屏幕阅读版), including navigation, article metadata, table-of-contents entries, headings, tables, captions and code-adjacent UI.
- Latin UI may use Latin Modern Sans; long-form Latin prose may use Georgia; code uses Maple Mono. These Latin faces must fall through to LXGW WenKai Screen for Chinese glyphs rather than to platform CJK fonts.
- KaTeX retains its own mathematical fonts.
- Article heading accents are fixed by level: H1 purple, H2 cyan, H3 magenta, H4 teal. Do not randomize heading colours per article.

## Code and diagrams

- Shiki uses the standard `dracula` theme for both light and dark site modes.
- Inline code uses the same Dracula surface (`#282A36`) and light foreground.
- Workflow/process diagrams should use Mermaid when a flow graph is the natural representation. Render the graph directly; do not expose a collapsible “Mermaid source” section to readers.
- Mermaid diagrams must use the Dracula family of colours, LXGW WenKai Screen for Chinese labels, a vertical or otherwise bounded layout, and `max-width: 100%` so the SVG never crosses the reading column.

## Visual grammar

- Reading text stays near 68–76 characters per line with generous line height.
- Prefer whitespace, typography and thin rules. Avoid decorative card grids, glows, large gradients, neon shadows and oversized hero media.
- Cyan identifies links/information; purple is the main brand accent. Magenta, teal and amber are secondary semantic accents.
- The generated avatar is the single site logo. Keep it small and identity-oriented.
- Decorative vector icons use one consistent library: Lucide. Keep them local, monochrome/current-colour and sparse.
- Figures use semantic `figure`/`figcaption`; tables use `ResponsiveTable` when horizontal overflow is possible.
- Callouts use `AcademicCallout` with `note`, `definition`, `method` or `caution`.

## Responsive and accessibility checks

Check 1440, 1024, 768 and 390 px widths. Verify navigation, title wrapping, reading measure, TOC, equations, code/table overflow, Mermaid SVG bounds, figures, search, footer, focus visibility, both themes and reduced motion. Interactive targets should remain at least 44 px on mobile.
