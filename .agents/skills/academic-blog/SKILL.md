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
- Tables and figures must add information, not decoration. Every substantive table requires a caption; every figure requires meaningful alt text and a caption.
- Flowcharts should be authored with Mermaid when Mermaid is appropriate, but readers see only the rendered diagram or a clean semantic fallback. Do not expose Mermaid source in published articles.
- For Chinese technical prose, also consult Fenng's `Tech-Doc-Style-Chinese` as a secondary writing reference: https://github.com/Fenng/Tech-Doc-Style-Chinese . Its priorities—fact fidelity, terminology consistency, controlled technical Chinese, and preservation of machine-readable content—are subordinate to this project's explicit academic conventions and the user's current instructions.

## Global visual contract

UI and typography rules are global. Do not solve shared design issues with article-local CSS or one-off MDX styling.

- The visual system is **Scientific Dracula**. Dracula at Night supplies the dark blue-violet foundation and Dracula code semantics.
- Decorative scientific colour is restricted to three author-selected source colours: warm peach `#FFCE8C`, muted plum `#6D5D68`, and lavender `#8081AF`. Lighter/darker derivatives of these three families are allowed only when required for readable contrast. Do not add another decorative hue family without an explicit project-level decision.
- Chinese glyphs must use `LXGW WenKai Screen` everywhere: reading text, headings, header/navigation, metadata, tables, captions, TOC, callouts, and Chinese glyphs inside code. Do not add competing CJK families.
- Long-form body text is non-serif and regular weight (`400`). Bold is reserved for semantic emphasis and headings; do not make article body text globally bold or semibold.
- Latin reading/UI text uses the site's sans family; code uses Maple Mono; mathematical notation keeps KaTeX's math fonts.
- Fenced code and inline code both use Dracula code surfaces and syntax colours.
- Heading hierarchy uses only the three scientific colour families: H1 lavender, H2 peach, H3 a readable plum derivative, H4 a lighter lavender derivative.
- Academic tables use a caption above the table. Caption text is slightly larger than ordinary metadata and remains restrained rather than headline-like.
- Academic zebra striping must be visibly distinguishable at normal viewing distance. Apply alternating backgrounds to table cells rather than competing row utilities when necessary. Keep both bands close to the base surface and avoid saturated fills.
- `AcademicCallout` labels such as `NOTE`, `DEFINITION`, `METHOD`, and `CAUTION` are scan targets: they may be slightly larger and stronger than metadata, while the callout body remains regular weight.
- Article lead/deck and block quotations use a quiet grey/plum-tinted surface with a visibly thicker accent rule on the left.
- Figures, Mermaid SVGs, tables, and code blocks must never exceed the reading column. Horizontal overflow is allowed only where semantically necessary, primarily tables and code.
- The uploaded Ghibli-style avatar is the site identity image and must appear inside the circle to the left of `cigit-zgy` in the header.
- The circular reading-progress/back-to-top control must work on both mobile and desktop.

## Mermaid contract

Mermaid source is a maintainable authoring representation, but Mermaid delivery must not make the article fragile.

- Author workflow/process diagrams in conservative Mermaid `flowchart` syntax.
- Do not use third-party diagram-rendering services such as Kroki or mermaid.ink as an image dependency; previous preview tests produced build/runtime failures and HTTP 500 responses.
- When client rendering is used, pin the Mermaid version rather than loading an unversioned latest build.
- Published pages must never expose raw Mermaid source, parser diagnostics, `Syntax error in text`, or a “refresh and retry” error message to readers.
- Every Mermaid component must include a compact semantic fallback. If the renderer cannot load or a source fails to parse, the fallback remains readable and the rest of the article continues normally.
- Keep source syntax conservative: avoid unnecessary `classDef`, per-node class assignments, HTML labels, or version-sensitive syntax. Presentation belongs in the global Mermaid theme when possible.
- Mermaid SVGs and fallbacks must remain inside the reading column at desktop and mobile widths.
- A successful Vercel/Astro build alone does not prove client-side Mermaid rendering. Before production approval, visually inspect the preview diagram. If it does not render, the fallback must still be clean and no HTTP 500/error text may appear.

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
- no article asset depends on Kroki/mermaid.ink or another remote diagram-image service;
- Mermaid source is conservative and the page has a semantic fallback with no raw source/error message;
- Mermaid/fallback remains within the reading column;
- table captions are present and legible;
- zebra styling is visibly different between odd/even rows in both themes and is applied without conflicting local row utilities;
- article body text is regular weight; only semantic emphasis and headings are bold/semibold;
- callout labels are visually distinct from callout body text;
- fenced and inline code use Dracula;
- H1–H4 colours use only the three approved scientific colour families;
- Chinese glyphs use LXGW WenKai Screen, including `On this page` content;
- body text is non-serif;
- lead quote/blockquote styling is consistent;
- header avatar renders from the local site asset;
- reading-progress circle appears on desktop and mobile;
- navigation, title wrapping, table/code overflow, and figures are checked at representative desktop and mobile widths;
- reduced-motion and focus behaviour remain accessible.
