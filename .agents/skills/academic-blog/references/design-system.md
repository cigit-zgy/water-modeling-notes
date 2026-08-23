# Academic Dracula at Night

## Source and tokens

The dark palette is derived from the actual `bceskavich/dracula-at-night` source: background `#0E1419`, foreground `#F8F8F2`, purple `#BD93F9`, cyan `#8BE9FD`, with green, orange, and red reserved for code or semantic states. Use semantic variables from `src/styles/theme.css`; add a token there before using a new colour.

Dark mode is the first-visit default. Light mode is a neutral, low-saturation accessibility option. Do not remove the persistent theme toggle.

## Visual grammar

- Latin Modern Sans is reserved for UI and metadata. Long-form English prose uses Georgia, Chinese prose falls through to the self-hosted LXGW WenKai Screen subset, and code uses Maple Mono with a system CJK fallback. KaTeX keeps its own Computer Modern-derived math fonts.
- Reading text stays near 68–76 characters per line with generous line height.
- Prefer whitespace, typography, and thin rules. Avoid decorative card grids, glows, large gradients, neon shadows, and oversized hero media.
- Cyan identifies links/information; purple is the restrained brand accent. Pink is not a general UI colour.
- The generated avatar is the single site logo. Keep it small and identity-oriented rather than turning it into a large hero illustration.
- Decorative vector icons use one consistent library: Lucide. Keep them local, monochrome/current-colour, and sparse; one small icon per topical block is usually the upper limit. Do not mix icon libraries on the same page.
- Figures use semantic `figure`/`img`/`figcaption`; tables use `ResponsiveTable` when horizontal overflow is possible.
- Callouts use `AcademicCallout` with `note`, `definition`, `method`, or `caution`; keep backgrounds transparent and hierarchy subtle.

## Responsive and accessibility checks

Check 1440, 1024, 768, and 390 px widths. Verify navigation, title wrapping, reading measure, TOC, equations, code/table overflow, figures, search, footer, focus visibility, both themes, and reduced motion. Interactive targets should remain at least 44 px on mobile.
