---
name: academic-blog
description: Maintain cigit-zgy pages, academic article patterns, Chinese technical writing, and the Scientific Dracula visual system. Use when adding or changing site pages, design, academic components, or content patterns in this repository.
---

# Academic blog maintenance

Keep changes compatible with the existing AstroPaper structure. Reuse layouts, content collections, and utilities; create a new component only when semantic Markdown or an existing component cannot express the pattern cleanly.

Before changing visual presentation, read [references/design-system.md](references/design-system.md). Before adding or restructuring academic content, read [references/academic-content.md](references/academic-content.md). Read both when a task changes an article component or layout.

## Global writing contract

Treat the blog as an academic technical publication, not a marketing site.

- Use the logic of a concise SCI paper where appropriate: define the problem first, then motivation, design objective, method/architecture, evidence or validation, limitations, and conclusion.
- Write with research-level precision, restraint, and logical continuity. Avoid slogans, exaggerated claims, promotional adjectives, and feature-list prose without an argument.
- One paragraph should carry one primary point. Each section must have a clear role in the article's argument.
- Preserve facts, conditions, uncertainty, scope, limitations, terminology, code, paths, commands, identifiers, and citations exactly unless a verified source supports a change.
- Do not infer academic facts, results, publication details, affiliations, capabilities, or causal conclusions.
- Use consistent terminology; do not vary scientific or technical terms merely for stylistic variety.
- Prefer direct, compact Chinese. Remove repetition before adding explanation.
- Tables and figures must add information, not decoration. Every substantive table requires a caption; every figure requires a meaningful caption and alt text.
- Flowcharts should be authored with Mermaid when Mermaid is appropriate, but readers see only the rendered diagram. Do not expose Mermaid source in published articles.
- For Chinese technical prose, also consult Fenng's `Tech-Doc-Style-Chinese` as a writing reference: https://github.com/Fenng/Tech-Doc-Style-Chinese . Its priorities—fact fidelity, terminology consistency, controlled technical Chinese, and preservation of machine-readable content—are subordinate to this project's explicit academic conventions and the user's current instructions.

## Global visual contract

UI and typography rules are global. Do not solve shared design issues with article-local CSS or one-off MDX styling.

- The visual system is **Scientific Dracula**: Dracula at Night provides the dark blue-violet foundation; the only decorative scientific accents are purple, magenta, amber, green, and cyan from the selected scientific-figure palette.
- Keep accent use sparse. Do not introduce additional decorative hue families without an explicit project-level decision.
- Chinese glyphs must use `LXGW WenKai Screen` everywhere: reading text, headings, header/navigation, metadata, tables, captions, TOC, callouts, and Chinese glyphs inside code. Do not add competing CJK families.
- Long-form body text is non-serif and regular weight (`400`). Bold is reserved for semantic emphasis and headings; do not make article body text globally bold or semibold.
- Latin reading/UI text uses the site's sans family; code uses Maple Mono; mathematical notation keeps KaTeX's math fonts.
- Fenced code and inline code both use Dracula code surfaces and syntax colours.
- Heading hierarchy is global and stable: H1 purple, H2 cyan, H3 magenta, H4 green. Amber is reserved for captions, cautions, and small secondary emphasis.
- Academic tables use a caption above the table. Caption text is slightly larger than ordinary metadata and remains restrained rather than headline-like.
- Academic tables use low-contrast zebra striping: odd and even rows must be visibly distinct, but both remain close to the base surface. Avoid saturated row fills.
- `AcademicCallout` labels such as `NOTE`, `DEFINITION`, `METHOD`, and `CAUTION` should be slightly larger and stronger than metadata, while the callout body remains regular weight.
- Article lead/deck and block quotations use a quiet grey-tinted surface with a visibly thicker accent rule on the left.
- Figures, Mermaid SVGs, tables, and code blocks must never exceed the reading column. Horizontal overflow is allowed only where semantically necessary, primarily tables and code.
- The uploaded Ghibli-style avatar is the site identity image and must appear inside the circle to the left of `cigit-zgy` in the header.
- The circular reading-progress/back-to-top control must work on both mobile and desktop.

## Mermaid contract

Mermaid diagrams are publication artifacts and must not depend on client-side CDN execution.

- Author workflow/process diagrams in Mermaid source.
- Render Mermaid to SVG during the Astro/Vercel build, not after page load in the reader's browser.
- A Mermaid syntax/rendering failure must fail the preview build. Never publish a page that replaces a failed diagram with a runtime error message.
- Published pages show only the rendered SVG; never expose Mermaid source to readers.
- Keep diagram syntax conservative and readable. Prefer simple `flowchart` structures and avoid syntax features that are unnecessary for the scientific message.
- Diagram SVGs must remain inside the reading column at desktop and mobile widths.

## Deployment contract

Preserve static output, accessible interaction, stable `/writing/<slug>/` URLs, and production exclusion of drafts.

Vercel deployments consume account resources. For non-trivial UI/content changes:

1. create or update a preview branch;
2. make one consolidated preview commit when practical;
3. validate type/content checks, lint/formatting where applicable, production-style build status, and the relevant desktop/mobile surfaces;
4. give the user the Vercel Preview URL;
5. do **not** update `main` or production until the user explicitly approves the preview.

After approval, fast-forward or apply the reviewed commit to `main`, then verify the production deployment once. Avoid repeated production pushes for visual iteration.

## Validation checklist

Before presenting a preview or production result, check at minimum:

- Astro/type build succeeds with no new errors;
- the affected article route exists;
- Mermaid is rendered to SVG during the build; syntax/rendering errors fail the build rather than appearing at runtime;
- Mermaid remains within the reading column;
- table captions are present, sufficiently legible, and zebra styling is visible but low contrast in both themes;
- article body text is regular weight; only semantic emphasis and headings are bold/semibold;
- callout labels are visually distinct from callout body text;
- fenced and inline code use Dracula;
- H1–H4 colours follow the global hierarchy;
- Chinese glyphs use LXGW WenKai Screen, including `On this page` content;
- body text is non-serif;
- lead quote/blockquote styling is consistent;
- header avatar renders from the local site asset;
- reading-progress circle appears on desktop and mobile;
- navigation, title wrapping, table/code overflow, and figures are checked at representative desktop and mobile widths;
- reduced-motion and focus behaviour remain accessible.
