# Apple Liquid Glass design system

## Design intent

The blog uses an Apple-inspired Liquid Glass system for site chrome and floating controls while keeping academic content visually quiet. The design goal is hierarchy, depth, and polish without turning the article body into generic glassmorphism.

Use Apple’s material logic as the reference model: content first, glass sparingly, hierarchy through material thickness, optical typography, immediate feedback, and restrained motion.

## Reference hierarchy

Read [apple-design-references.md](apple-design-references.md) before significant UI work.

Reference priority is:

1. the user's current instruction;
2. this repository's Skill and design contract;
3. Apple Human Interface Guidelines and Liquid Glass documentation;
4. Emil Kowalski's `skills/apple-design` for interaction and design judgment;
5. Bowen's `apple-design` for web implementation patterns.

Apple's official guidance is canonical when deciding where Liquid Glass belongs. Emil's rules help evaluate interaction quality and motion. Bowen's repository is implementation-oriented and should not be copied wholesale without license review.

## Material model

A valid glass surface combines four optical layers:

1. translucent tint;
2. backdrop blur plus saturation;
3. top-edge specular highlight plus a hairline rim;
4. soft outer depth shadow.

Refraction/lensing is optional and should be reserved for at most one or two hero moments. The current blog does not require refraction for the baseline design.

Material roles:

| Role | Use |
| --- | --- |
| Ultra-thin | hover/temporary emphasis |
| Thin | tags, compact controls, TOC |
| Regular | header/navigation, search, floating controls |
| Thick | menus/sheets only when needed |

Never stack two translucent materials directly on one another.

## Semantic token layer

All colour, material, shadow, table, and text values are centralized in `src/styles/theme.css`. Shared components must consume semantic variables rather than hardcoded site colours.

The site follows Apple-like system relationships rather than a decorative palette:

- primary/secondary/muted labels;
- system blue for primary interaction;
- restrained semantic info/success/warning/danger colours;
- adaptive translucent material tints in light and dark modes;
- low-saturation blue/purple/cyan light fields behind selected glass surfaces.

Code is an independent editor-like surface and remains Dracula-dark in both reading themes.

## Style architecture

The stylesheet architecture has five explicit owners:

1. `fonts.css`: font-face definitions.
2. `theme.css`: semantic design tokens.
3. `liquid-glass.css`: reusable material recipes and accessibility fallbacks.
4. `typography.css`: article typography, tables, code, quotations, figures, callouts.
5. `global.css`: layout, navigation, interaction, identity, homepage, placement.

Do not add `refinements.css`, `overrides.css`, or article-local shared UI patches.

## Typography

- `LXGW WenKai Screen` is the only CJK family across body, headings, navigation, metadata, TOC, tables, captions, and callouts.
- Latin UI/reading text uses Latin Modern Sans; code uses Maple Mono; KaTeX keeps its mathematical font stack.
- Long-form body copy is regular weight `400`.
- Heading hierarchy uses size, weight, line-height, tracking, and spacing rather than per-level decorative colours.
- Large headings use tighter tracking; smaller headings relax tracking progressively.

## Navigation and floating chrome

The site header is a floating regular-material surface with:

- translucency;
- `blur(20px) saturate(180%)`;
- a subtle vertical specular gradient;
- top-edge highlight;
- hairline inner/outer rim;
- soft shadow;
- rounded continuous-looking geometry.

Desktop TOC, mobile TOC, search controls, tags, and the reading-progress/back-to-top button use thin or regular materials according to hierarchy.

The uploaded Ghibli-style avatar remains a real `<img>` immediately left of `cigit-zgy`.

Press feedback is immediate and restrained. Compact controls may scale down slightly on `:active`; interaction feedback should not wait for navigation or click completion.

## Article surfaces

Article content remains mostly flat and readable.

- Lead/deck text: quiet semantic surface, no mandatory glass.
- Block quotes: quiet surface plus a stronger left rule.
- Tables: grouped system surface with a subtle zebra pattern.
- Figures: clean border, restrained radius, no gratuitous glass.
- Callouts: lightly tinted semantic panels, not stacked glass.
- Code: Dracula-dark editor surface.

This distinction is intentional: Liquid Glass elevates navigation/control hierarchy while article content remains the visual anchor.

## Tables

- Every substantive academic table has a caption above it.
- Caption text is slightly larger than metadata.
- Header rows use an elevated system surface.
- Odd/even rows use visibly distinct but low-contrast backgrounds.
- Hover is subtle and does not introduce a new hue.
- Narrow screens scroll the table container rather than the page.

## Code

Inline and fenced code remain Dracula-dark. This preserves syntax semantics and avoids mixing site material transparency with code token contrast.

## Figures and Mermaid

- Figures require alt text and captions.
- Mermaid is preferred for workflow diagrams; readers see only rendered diagrams.
- Mermaid uses neutral Apple-like surfaces and the semantic primary interaction accent rather than the retired site-wide Dracula palette.
- Presentation remains centralized in `MermaidDiagram.astro` rather than article source.
- Do not use remote server-side renderers such as Kroki or mermaid.ink as runtime dependencies.
- Keep diagrams within the reading column at all viewport widths.

## Motion and interaction

Motion is sparse and functional.

- Interactive feedback begins immediately on press.
- Use CSS transitions for simple hover/focus/press and fire-and-forget state changes.
- Do not add Motion or GSAP unless a real gesture/interruptible interaction requires them.
- Prefer transform and opacity animation.
- Keep reversible navigation spatially consistent.
- Avoid animation that delays reading or navigation.
- Respect `prefers-reduced-motion`.

## Accessibility and fallbacks

Every reusable glass recipe must support:

- `-webkit-backdrop-filter` for Safari;
- a near-solid fallback when backdrop filtering is unavailable;
- `prefers-reduced-transparency: reduce`;
- `prefers-contrast: more`;
- minimum 4.5:1 effective contrast for body text;
- touch targets of at least 44 px;
- visible focus states.

## Responsive validation

Check representative widths around 1440, 1024, 768, and 390 px. Verify header wrapping, mobile menu, TOC, equations, tables/code overflow, figures, search, footer, progress control, focus visibility, light/dark modes, reduced motion, reduced transparency, and high contrast.
