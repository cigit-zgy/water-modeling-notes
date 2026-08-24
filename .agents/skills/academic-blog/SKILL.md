---
name: academic-blog
description: Maintain cigit-zgy pages, academic article patterns, Chinese technical writing, and the Apple Liquid Glass visual system. Use when adding or changing site pages, design, academic components, or content patterns in this repository.
---

# Academic blog maintenance

Keep changes compatible with the existing AstroPaper structure. Preserve the static-first architecture, content collections, Pagefind, RSS, sitemap, accessibility, and Astro view transitions. Extend an existing layer/component before creating a new abstraction.

Before changing visual presentation, read [references/design-system.md](references/design-system.md). Before adding or restructuring academic content, read [references/academic-content.md](references/academic-content.md). Read both when a task changes an article component or layout.

For Apple-like Web UI, consult `bowen31337/apple-design` as the secondary design reference: https://github.com/bowen31337/apple-design . Its Liquid Glass, typography, motion, accessibility, and token guidance is subordinate to this repository's explicit constraints and the user's current instructions.

## Global writing contract

Treat the blog as an academic technical publication, not a marketing site.

- Use the logic of a concise SCI paper where appropriate: define the problem, establish motivation, state the design objective, explain the method/architecture, provide evidence or validation, delimit limitations, and conclude.
- Write with research-level precision, restraint, and logical continuity. Avoid slogans, exaggerated claims, promotional adjectives, and feature-list prose without an argument.
- One paragraph should carry one primary point. Each section must have a clear role in the article's argument.
- Preserve facts, conditions, uncertainty, scope, limitations, terminology, code, paths, commands, identifiers, and citations exactly unless a verified source supports a change.
- Do not infer academic facts, results, publication details, affiliations, capabilities, or causal conclusions.
- Use consistent terminology; do not vary scientific or technical terms merely for stylistic variety.
- Prefer direct, compact Chinese. Remove repetition before adding explanation.
- Tables and figures must add information, not decoration. Every substantive table requires a caption; every figure requires a meaningful caption and alt text.
- Flowcharts should be authored with Mermaid when appropriate, but published pages show only the rendered diagram, never Mermaid source.
- For Chinese technical prose, also consult Fenng's `Tech-Doc-Style-Chinese` as a secondary writing reference: https://github.com/Fenng/Tech-Doc-Style-Chinese . Its priorities—fact fidelity, terminology consistency, controlled technical Chinese, and preservation of machine-readable content—are subordinate to this project's academic conventions and the user's current instructions.

## Architecture contract

Keep the project small by removing only confirmed dead or duplicate code; do not strip AstroPaper features merely because they are currently disabled in configuration.

Shared styling has five explicit owners:

1. `src/styles/fonts.css`: font-face definitions only.
2. `src/styles/theme.css`: semantic colour, material, shadow, and font-family tokens.
3. `src/styles/liquid-glass.css`: reusable Liquid Glass material recipes and accessibility fallbacks.
4. `src/styles/typography.css`: article typography, headings, tables, code, quotations, figures, and callouts.
5. `src/styles/global.css`: layout utilities, global interaction, transitions, navigation, identity, home-page accents, and component placement.

Rules:

- Do not create `refinements.css`, `overrides.css`, or article-local CSS for shared UI.
- `liquid-glass.css` is a first-class material layer, not a patch layer. Do not duplicate its blur/specular/rim/shadow recipe in arbitrary components.
- Do not duplicate the same visual rule in a component and a shared stylesheet. Components provide semantics and structure; the owning stylesheet provides shared presentation.
- Do not represent the header avatar twice.
- Remove experiment assets, placeholder content, obsolete configuration files, and test-only posts once they are no longer used.
- Preserve upstream optional capabilities unless their removal is an explicit project decision.
- Add runtime dependencies only for an observed requirement and update the lockfile in the same validated change.

## Global visual contract

The site uses an Apple-inspired Liquid Glass design language. Content remains primary; glass is reserved for navigation, floating controls, search, TOC, compact controls, and selected high-hierarchy surfaces.

- Do not use Dracula At Night as the site UI palette. Dracula is retained only for fenced and inline code because it is a code-syntax surface, not site chrome.
- Shared components consume semantic variables from `src/styles/theme.css`; avoid scattered hex values.
- Glass must include translucency, blur plus saturation, a top-edge specular highlight, a hairline rim, and soft depth. Blur alone is not Liquid Glass.
- Never stack two translucent glass surfaces directly on top of each other.
- Use regular material for nav/toolbars, thin material for compact controls, thick material only for menus/sheets or rare high-hierarchy surfaces.
- Use Liquid Glass sparingly. Article prose, tables, figures, equations, and code blocks prioritize readability over translucency.
- Chinese glyphs use `LXGW WenKai Screen` everywhere. Latin reading/UI text uses Latin Modern Sans; code uses Maple Mono; KaTeX keeps its mathematical font stack.
- Long-form body text is non-serif and regular weight (`400`). Bold/semibold is reserved for headings, labels, table headers, and semantic emphasis.
- Heading hierarchy is established through size, optical tracking, spacing, and weight. Do not assign decorative colours by heading level.
- Use a restrained adaptive light field behind floating glass so material transparency remains perceptible without competing with article content.
- The uploaded Ghibli-style avatar remains the site identity image directly left of `cigit-zgy`.
- The circular reading-progress/back-to-top control remains available on both desktop and mobile and uses a glass control surface.

## Liquid Glass accessibility contract

- Include both `backdrop-filter` and `-webkit-backdrop-filter`.
- Provide a solid or near-solid fallback when `backdrop-filter` is unsupported.
- `prefers-reduced-transparency: reduce` removes glass blur and uses an opaque semantic surface.
- `prefers-contrast: more` adds an unambiguous edge/border.
- Body text must maintain at least 4.5:1 effective contrast through glass.
- Touch targets remain at least 44 px.
- Use `focus-visible` on every interactive control.
- Animate primarily `transform` and `opacity`; avoid layout-property animation.
- Honor `prefers-reduced-motion`.

## Tables, callouts, figures, and code

- Every substantive academic table has a caption above it. Captions are slightly larger than ordinary metadata.
- Tables use a clearly visible but low-contrast odd/even zebra pattern defined in `typography.css`.
- `AcademicCallout` labels such as `NOTE`, `DEFINITION`, `METHOD`, and `CAUTION` are stronger than metadata; callout bodies remain regular weight.
- Article lead text and block quotations use quiet semantic surfaces; they do not need Liquid Glass.
- Figures, Mermaid SVGs, tables, and code blocks never exceed the reading column. Horizontal overflow is allowed only where semantically necessary, mainly tables and code.
- Fenced code and inline code both use Dracula. Shiki remains `dracula` in both reading themes unless explicitly redesigned later.

## Mermaid contract

Mermaid diagrams are publication artifacts, not a reader-facing debugging surface.

- Author workflow/process diagrams in Mermaid source with conservative `flowchart` syntax.
- Do not use Kroki, mermaid.ink, or another remote server renderer as a runtime dependency.
- The browser renderer must remain version-pinned; never use an unpinned `latest` URL.
- If Mermaid cannot load or parse, readers receive a quiet structural fallback. Never publish Mermaid source, parser stack traces, `Syntax error in text`, or refresh-to-retry messages.
- Diagrams remain inside the reading column at desktop and mobile widths.

## Deployment contract

Preserve static output, stable `/writing/<slug>/` URLs, and production exclusion of drafts.

Vercel deployments consume account resources. For non-trivial UI/content changes:

1. consolidate changes on a preview branch;
2. validate the preview build and affected surfaces;
3. provide a Preview URL for user review;
4. update `main` only after approval or explicit direct-publication instruction;
5. verify production once.

Avoid repeated production pushes for visual iteration.

## Validation checklist

Before presenting a preview or production result, check at minimum:

- Astro/type build succeeds with no new errors;
- lint and formatting checks pass;
- affected routes exist;
- no temporary or placeholder files remain;
- the five-layer CSS ownership model is respected;
- Liquid Glass has specular, rim, blur+saturation, shadow, and accessibility fallbacks;
- body text is regular weight and non-serif;
- Chinese glyphs use LXGW WenKai Screen, including TOC/navigation content;
- tables have captions and visible low-contrast zebra rows in both themes;
- headings rely on hierarchy, not decorative rainbow colouring;
- fenced and inline code use Dracula;
- Mermaid never exposes runtime errors to readers;
- header avatar renders from the local asset;
- reading-progress control works on desktop and mobile;
- navigation, title wrapping, table/code overflow, figures, focus visibility, reduced motion, reduced transparency, and high contrast remain sound.
