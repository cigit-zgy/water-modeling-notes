# Academic Dracula at Night

## Source and tokens

The dark design remains rooted in `bceskavich/dracula-at-night`, especially its foreground and code palette. For long-form reading, the site surface is intentionally lifted from the original near-black background to a softer blue-violet slate. All colour usage must go through semantic variables in `src/styles/theme.css`.

A restrained scientific-figure spectrum supplements the Dracula base:

- purple: primary identity and structural emphasis;
- magenta: secondary interactive emphasis;
- cyan: links and information;
- teal: methods and positive/validated states;
- amber: cautions and warm contrast.

These colours are accents, not page-filling surfaces. Use translucent mixes for callouts and very short rules/markers for navigation or research-topic structure. Avoid large saturated areas.

Dark mode is the first-visit default. Light mode is a neutral reading option using the same semantic colour relationships. Do not remove the persistent theme toggle.

## Visual grammar

- Latin Modern Sans is reserved for UI and metadata. Long-form English prose uses Georgia, Chinese prose falls through to the self-hosted LXGW WenKai Screen subset, and code uses Maple Mono with a system CJK fallback. KaTeX keeps its own Computer Modern-derived math fonts.
- Reading text stays near 68–76 characters per line with generous line height.
- Prefer whitespace, typography, thin rules, and small scientific-spectrum accents. Avoid decorative card grids, glows, large gradients, neon shadows, and oversized hero media.
- Figures use semantic `figure`/`img`/`figcaption`; tables use `ResponsiveTable` when horizontal overflow is possible.
- Callouts use `AcademicCallout` with `note`, `definition`, `method`, or `caution`; a low-opacity tinted surface and narrow semantic edge are allowed, but the article must remain visually quiet.
- Page transitions should feel soft and deliberate: roughly 300 ms with minimal vertical displacement. Preserve `prefers-reduced-motion` behaviour.

## Responsive and accessibility checks

Check 1440, 1024, 768, and 390 px widths. Verify navigation, title wrapping, reading measure, TOC, equations, code/table overflow, figures, search, footer, focus visibility, both themes, and reduced motion. Interactive targets should remain at least 44 px on mobile.
