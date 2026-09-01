---
name: academic-blog
description: Maintain cigit-zgy pages, academic article patterns, Chinese technical writing, the Apple Liquid Glass visual system, and diagram-as-code publishing. Use when adding or changing site pages, design, academic components, or content patterns in this repository.
---

# Academic blog maintenance

Keep changes compatible with the existing AstroPaper structure. Preserve the static-first architecture, content collections, Pagefind, RSS, sitemap, accessibility, and Astro view transitions. Extend an existing layer/component before creating a new abstraction.

Before changing visual presentation, read [references/design-system.md](references/design-system.md) and [references/apple-design-references.md](references/apple-design-references.md). Before adding or restructuring academic content, read [references/academic-content.md](references/academic-content.md). For diagrams, also read `src/diagrams/README.md`. Read all relevant references when a task changes both article structure and UI.

## Design reference hierarchy

For Apple-like Web UI, apply sources in this order:

1. the user's current instruction;
2. this project's `SKILL.md` and design-system reference;
3. Apple Human Interface Guidelines and Apple Liquid Glass documentation;
4. Emil Kowalski's `skills/apple-design` for interaction, material, motion, and typography judgment;
5. `bowen31337/apple-design` for concrete Web implementation patterns.

Do not vendor third-party skill text into this repository. Paraphrase principles, preserve source links, and review upstream licensing before copying implementation code. The exact sources and project adaptation are recorded in `references/apple-design-references.md`.

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

## Interaction and motion contract

- Give press feedback immediately; compact controls may use a subtle scale response on `:active`.
- Keep navigation and reversible transitions spatially consistent.
- Use CSS transitions for simple hover/focus/press states; do not add Motion, GSAP, or another motion dependency unless a real gesture requires interruptible spring behavior.
- Avoid animation that delays access to academic content.
- Prefer `transform` and `opacity` for animated properties.
- Honor `prefers-reduced-motion` and keep the reduced-motion experience fully functional.

## Liquid Glass accessibility contract

- Include both `backdrop-filter` and `-webkit-backdrop-filter`.
- Provide a solid or near-solid fallback when `backdrop-filter` is unsupported.
- `prefers-reduced-transparency: reduce` removes glass blur and uses an opaque semantic surface.
- `prefers-contrast: more` adds an unambiguous edge/border.
- Body text must maintain at least 4.5:1 effective contrast through glass.
- Touch targets remain at least 44 px.
- Use `focus-visible` on every interactive control.
- Animate primarily `transform` and `opacity`; avoid layout-property animation.

## Tables, callouts, figures, and code

- Every substantive academic table has a caption above it. Captions are slightly larger than ordinary metadata.
- Tables use a clearly visible but low-contrast odd/even zebra pattern defined in `typography.css`.
- `AcademicCallout` labels such as `NOTE`, `DEFINITION`, `METHOD`, and `CAUTION` are stronger than metadata; callout bodies remain regular weight.
- Article lead text and block quotations use quiet semantic surfaces; they do not need Liquid Glass.
- Figures, diagram SVGs, tables, and code blocks never exceed the reading column. Horizontal overflow is allowed only where semantically necessary, mainly tables and code.
- Fenced code and inline code both use Dracula. Shiki remains `dracula` in both reading themes unless explicitly redesigned later.

## Diagram contract

The blog supports exactly two diagram-as-code formats for authored diagrams: Mermaid and PlantUML.

- Use Mermaid for ordinary workflows, architecture overviews, state-like flows, and compact directed process diagrams.
- Use PlantUML for sequence, component, class, and UML-style interaction diagrams where explicit participants and message order matter.
- Keep every diagram source in `src/diagrams/`; do not scatter diagram source inside article MDX.
- Shared Mermaid styling lives in `src/diagrams/mermaid.config.json`; shared PlantUML styling lives in `src/diagrams/plantuml-theme.puml`.
- Prefer compact diagrams. Keep labels short, avoid decorative subgraphs, and use a target publication width around 680–760 px. Large diagrams should be reorganized before increasing width.
- Published pages load pre-rendered local SVG only. Readers must not execute Mermaid, PlantUML, Java, WASM, Graphviz, or a remote diagram renderer.
- Diagram rendering is performed by the repository workflow in `.github/workflows/render-diagrams.yml` with pinned Mermaid CLI and PlantUML versions.
- A source change and its generated SVG are one logical artifact. Do not merge a diagram-source change unless the renderer has regenerated the corresponding SVG successfully.
- Mermaid and PlantUML diagrams use the current Apple/Liquid Glass dark semantic palette: near-black background, neutral elevated nodes, system blue/cyan interaction edges, restrained purple for decisions/groups, and green/orange only for semantic outcomes or rollback paths.
- Every diagram used in an article has meaningful alt text and a figure caption. The caption may name the source format when useful, but readers never see diagram source by default.

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
- every Mermaid/PlantUML source used by a published post has a regenerated local SVG;
- no published article depends on browser-side diagram parsing or a remote renderer;
- diagram width remains within the reading column at desktop and mobile widths;
- header avatar renders from the local asset;
- reading-progress control works on desktop and mobile;
- navigation, title wrapping, table/code overflow, figures, focus visibility, press feedback, reduced motion, reduced transparency, and high contrast remain sound.
