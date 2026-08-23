---
name: academic-blog
description: Maintain cigit-zgy pages, academic article patterns, Chinese technical writing, and the Dracula At Night visual system. Use when adding or changing site pages, design, academic components, or content patterns in this repository.
---

# Academic blog maintenance

Keep changes compatible with the existing AstroPaper structure. Preserve the static-first architecture, content collections, Pagefind, RSS, sitemap, accessibility, and Astro view transitions. Extend an existing layer/component before creating a new abstraction.

Before changing visual presentation, read [references/design-system.md](references/design-system.md). Before adding or restructuring academic content, read [references/academic-content.md](references/academic-content.md). Read both when a task changes an article component or layout.

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

Keep the project small by removing only **confirmed** dead/duplicate code; do not strip AstroPaper features merely because they are currently disabled in configuration.

Shared styling has four owners and no fifth patch layer:

1. `src/styles/fonts.css`: font-face definitions only.
2. `src/styles/theme.css`: colour tokens and font-family tokens only.
3. `src/styles/typography.css`: article typography, headings, tables, code, quotations, figures, and callouts.
4. `src/styles/global.css`: layout utilities, global interaction, transitions, navigation, identity, and home-page accents.

Rules:

- Do not create `refinements.css`, `overrides.css`, or article-local CSS for shared UI.
- Do not duplicate the same visual rule in a component and a global stylesheet. Components provide semantics/structure; the owning stylesheet provides shared presentation.
- Do not represent the header avatar twice (for example `<img>` plus a pseudo-element).
- Remove experiment assets, placeholder content, obsolete configuration files, and test-only posts once they are no longer used.
- Preserve upstream optional capabilities unless their removal is an explicit project decision; this keeps AstroPaper updates tractable.
- Dependencies are removed only after repository-wide use has been checked and the lockfile can be updated/validated in the same change.

## Global visual contract

UI and typography rules are global.

- The visual system is **Dracula At Night only**. Do not combine it with figure-derived palettes or introduce a parallel scientific accent system.
- Shared components use semantic variables from `src/styles/theme.css`; avoid scattered hex values. Mermaid's JS theme literals must mirror the canonical Dracula tokens.
- Chinese glyphs use `LXGW WenKai Screen` everywhere: reading text, headings, navigation, metadata, tables, captions, TOC, callouts, and Chinese glyphs inside code.
- Long-form body text is non-serif and regular weight (`400`). Bold/semibold is reserved for headings, labels, table headers, and semantic emphasis.
- Latin reading/UI text uses Latin Modern Sans; code uses Maple Mono; mathematical notation keeps KaTeX's math fonts.
- Fenced code and inline code both use Dracula. Shiki uses `dracula` for light and dark site themes.
- Heading hierarchy is global: H1 purple, H2 cyan, H3 pink, H4 green. Orange is reserved for caution/caption/limited secondary emphasis.
- Every substantive academic table has a caption above it. Captions are slightly larger than ordinary metadata.
- Tables use a restrained but clearly visible odd/even zebra pattern defined in `typography.css`; do not add competing Tailwind row backgrounds in `ResponsiveTable.astro`.
- `AcademicCallout` labels such as `NOTE`, `DEFINITION`, `METHOD`, and `CAUTION` are slightly larger and stronger than metadata; callout bodies remain regular weight.
- Article lead/deck text and block quotations use a quiet Dracula surface with a visibly thicker accent rule on the left.
- Figures, Mermaid SVGs, tables, and code blocks must never exceed the reading column. Horizontal overflow is allowed only where semantically necessary, mainly tables and code.
- The uploaded Ghibli-style avatar is the site identity image and must appear as a real image element directly left of `cigit-zgy`.
- The circular reading-progress/back-to-top control must work on both mobile and desktop.

## Mermaid contract

Mermaid diagrams are publication artifacts, not a reader-facing debugging surface.

- Author workflow/process diagrams in Mermaid source with conservative `flowchart` syntax.
- Keep colours and presentation out of article source when practical; `MermaidDiagram.astro` owns the centralized Dracula theme and strips legacy `classDef`/`class` directives.
- Do not use Kroki, mermaid.ink, or another remote server renderer as a runtime dependency.
- The current browser renderer is version-pinned. Never use an unpinned `latest` Mermaid URL.
- If Mermaid cannot load or parse, readers receive a quiet structural fallback; never publish Mermaid source, parser stack traces, `Syntax error in text`, or “refresh to retry” error messages.
- If Mermaid is later moved to a local npm/build-time renderer, update `package.json` and `pnpm-lock.yaml` together and validate the production build before removing the fallback.
- Diagrams must remain inside the reading column at desktop and mobile widths.

## Deployment contract

Preserve static output, stable `/writing/<slug>/` URLs, and production exclusion of drafts.

Vercel deployments consume account resources. For non-trivial UI/content changes, normally:

1. consolidate changes on a preview branch;
2. validate the preview build and affected surfaces;
3. provide a Preview URL when user review is requested;
4. update `main` only after approval or when the user explicitly asks for direct publication;
5. verify the production deployment once.

Avoid repeated production pushes for visual iteration.

## Validation checklist

Before presenting a preview or production result, check at minimum:

- Astro/type build succeeds with no new errors;
- lint/format checks pass when CI is available;
- the affected article route exists;
- no unused experiment/placeholder file introduced by the current work remains;
- shared CSS follows the four-layer ownership model and no patch stylesheet is added;
- tables have captions and visible low-contrast zebra rows in both themes;
- body text is regular weight and non-serif;
- callout labels are distinct from callout bodies;
- fenced and inline code use Dracula;
- H1–H4 follow the global Dracula hierarchy;
- Chinese glyphs use LXGW WenKai Screen, including TOC/navigation content;
- Mermaid does not depend on a remote server renderer and never exposes runtime errors to readers;
- Mermaid remains within the reading column;
- header avatar renders from the local asset without a duplicate pseudo-element;
- reading-progress circle appears on desktop and mobile;
- navigation, title wrapping, table/code overflow, figures, focus visibility, and reduced-motion behaviour remain sound.
