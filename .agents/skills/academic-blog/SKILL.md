---
name: academic-blog
description: Maintain cigit-zgy pages, academic article patterns, Chinese technical writing, solid dual-theme presentation, structured technical writing, callouts, tables, equations, code, and data charts.
---

# Academic blog maintenance

Keep changes compatible with the existing AstroPaper static architecture. Preserve content collections, Pagefind, RSS, sitemap, accessibility, Astro view transitions, and stable article URLs.

Before visual work, read references/design-system.md. Before writing or restructuring articles, read references/academic-content.md.

## Writing contract

Treat the site as an academic technical publication.

- Preserve facts, scope, uncertainty, terminology, code, paths, commands, identifiers, units, equations, and citations.
- Use concise SCI-like logic when appropriate: problem → motivation → objective → method/architecture → evidence/validation → limitations → conclusion.
- Prefer structured expression when information is enumerable or comparable.
- Three or more parallel items should normally become a bullet list or table.
- Ordered procedures, protocols, lifecycle stages, and reproducible operations should normally become numbered lists.
- Multi-object comparisons, parameters, variables, units, assumptions, command matrices, and validation layers should normally become tables.
- Definitions, constraints, caveats, examples, important conclusions, and implementation notes should use semantic callouts when a callout improves scanning.
- Use prose for reasoning, causal explanation, interpretation, transitions, and argument. Do not turn every paragraph into a card.
- Use KaTeX for genuine mathematical relationships. Define symbols and units before interpretation.
- Use charts for quantitative comparison, trends, distributions, and relationships when data justify a graphic.
- Do not add decorative flowcharts. Mermaid and PlantUML are outside the default article path; use them only when the user explicitly requests a diagram or when a UML interaction is itself the subject.
- Avoid “不是……而是……” contrast constructions. Prefer direct declarative phrasing.
- Avoid promotional claims, fake values, placeholder citations, unsupported academic facts, and decorative figures.

## Structured block selection

| Information | Default form |
| --- | --- |
| Comparison across objects or methods | Table |
| Variables, parameters, units, assumptions | Table |
| Three or more parallel points | Bullet list |
| Ordered workflow or protocol | Numbered list |
| Formal definition | Definition callout |
| Core constraint or conclusion | Important callout |
| Additional context | Note or Description callout |
| Practical guidance | Tip or Method callout |
| Risk / scope boundary | Caution or Warning callout |
| Minimal worked illustration | Example callout |
| Command/configuration emphasis | Code callout or fenced code |
| Mathematical relation | KaTeX equation |
| Quantitative trend/comparison/distribution | Data chart |

## Callout contract

AcademicCallout supports exactly these kinds:

note, tip, description, definition, method, important, caution, warning, example, code.

Callouts belong to this project's theme. Do not copy Quarto's default appearance. Quarto is only a semantic reference for the callout concept.

- No gradients.
- Solid background only.
- One semantic accent per card.
- Dark cards derive from the Claude Code-inspired warm dark palette.
- Light cards derive from the Claude-inspired warm palette.
- code uses a Dracula code surface with restrained Snazzy cyan/pink/yellow/green accents.
- Callout body remains regular weight; the label is stronger and smaller.
- Avoid nesting callouts.
- Callout colours must come from `theme.css` semantic tokens; article content must not hardcode per-card colours.

## Visual contract

The site has two solid themes.

- Dark: Claude Code-inspired warm dark palette.
- Light: Claude-inspired warm editorial palette.
- Backgrounds must be solid colours.
- Gradients are prohibited: no linear, radial, conic, mesh, aurora, gradient text, gradient borders, or SVG gradients in published UI.
- Do not reintroduce Liquid Glass, backdrop blur, transparent glass layers, lensing, or specular gradient effects.
- Use borders, spacing, typography, restrained shadows, and solid surface hierarchy for depth.
- Chinese glyphs use LXGW WenKai Screen.
- Latin reading/UI text uses Latin Modern Sans.
- Code uses Maple Mono; Chinese fallback remains LXGW WenKai Screen.
- KaTeX owns mathematical typography.
- Long-form text is regular weight 400.
- Heading hierarchy uses size, weight, line-height, tracking, and spacing rather than per-level decorative colours.
- Code blocks keep the Dracula syntax surface in both site themes.

## Style architecture

Shared styles have five owners:

1. fonts.css: font-face definitions.
2. theme.css: semantic colour, surface, callout, code, shadow, and font tokens.
3. surfaces.css: reusable solid surface recipes.
4. typography.css: article typography, tables, equations, code, quotes, figures, and callouts.
5. global.css: layout, navigation, interaction, identity, homepage, and component placement.

Do not add catch-all override stylesheets or article-local shared UI patches.

## Tables, equations, charts, and figures

- Every substantive table has a caption.
- Tables use solid zebra rows and a solid header surface.
- Equations must be semantically necessary; do not use formulas as decoration.
- Charts require actual or explicitly labeled illustrative data and should use the current semantic palette with solid backgrounds.
- Prefer bar/line/scatter charts over process diagrams when the information is quantitative.
- Figures need alt text and captions.
- Article content, tables, equations, charts, code, and callouts must remain within the reading layout or use an explicitly justified wide layout.

## Interaction and accessibility

- Motion is sparse and functional.
- Use transform/opacity for transitions.
- Respect prefers-reduced-motion.
- Touch targets are at least 44 px.
- Use visible focus-visible states.
- Maintain at least 4.5:1 effective contrast for body text.
- Do not depend on colour alone to communicate meaning.

## Deployment contract

For non-trivial changes, validate lint, formatting, Astro check/build, affected routes, and the final deployment. When the user explicitly requests direct publication, a validated tree may be promoted directly to main.

## Validation checklist

Before presenting a result, verify:

- no linear-gradient, radial-gradient, conic-gradient, or SVG gradient is used by published UI;
- dark mode uses the Claude Code-inspired warm dark tokens;
- light mode uses the Claude-inspired warm palette;
- callouts use project-owned solid semantic cards;
- body and callout typography match the site font contract;
- tables, lists, equations, code, and charts follow the structured-writing rules;
- no decorative Mermaid/PlantUML flowchart is published by default;
- header, TOC, search, tags, progress control, tables, code, callouts, equations, focus states, and mobile overflow remain sound;
- lint, formatting, and Astro build pass;
- no temporary/demo page or unused generated diagram artifact remains.
