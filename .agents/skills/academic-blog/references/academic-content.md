# Academic content patterns

## Accuracy boundary

Do not infer academic facts. Affiliations, positions, publications, results, performance claims, datasets, and citations require verified source material. Use an explicit TODO or limitation when information is missing.

## Chinese technical-writing baseline

Use direct technical Chinese with fact fidelity, terminology consistency, explicit conditions, and preservation of machine-readable content. Fenng's Tech-Doc-Style-Chinese may be used as a secondary reference; current project rules take priority.

## Writing metadata

Place Markdown or MDX in src/content/posts/. Required frontmatter is pubDatetime, title, description, and topic. Allowed topics:

- Wastewater Modelling
- Scientific Machine Learning
- Scientific Computing
- Research Notes

Use featured selectively. Draft content must stay excluded from production listings, RSS, sitemap, and Pagefind.

## Article logic

The layout supplies the only h1; article sections start at h2.

For research methods, workflows, or technical systems, prefer:

1. concrete problem;
2. why the problem matters;
3. design objective and constraints;
4. architecture or method;
5. operation/use;
6. validation evidence;
7. distinction between engineering verification and scientific validity;
8. limitations;
9. concise contribution.

One paragraph carries one primary argument. Avoid “不是……而是……” rhetorical contrast; write the positive proposition directly.

## Structured expression rules

Use prose for reasoning and interpretation. Use structure for enumerable information.

- Three or more parallel items → bullet list unless comparison is the main task.
- Ordered stages/protocols → numbered list.
- Comparison across methods/objects → table.
- Variables/parameters/units/assumptions → table.
- Formal definition → AcademicCallout kind definition.
- Core invariant/conclusion → important.
- Context → note or description.
- Practical guidance → tip or method.
- Scope/risk → caution or warning.
- Minimal illustration → example.
- Commands/configuration → code or fenced code.
- Mathematical relation → KaTeX equation.
- Quantitative trend/comparison/distribution/relationship → chart.

Do not convert every paragraph into cards; structured blocks should improve scanning and information retrieval.

## Mathematics

Use KaTeX when mathematics is the clearest representation. Define notation, units, and domains before interpreting an equation. Equations must carry analytical content, not decoration.

## Tables

Every substantive table requires a concise caption. Wrap wide tables with ResponsiveTable. Keep units in headers when practical and align numerical columns consistently.

## Callouts

Use only the project-owned callout variants defined in AcademicCallout.astro:

note, tip, description, definition, method, important, caution, warning, example, code.

Do not emulate Quarto's default visual theme. Quarto is only a semantic reference for callout categories.

## Charts and figures

Prefer charts for actual quantitative information. Use bar, line, scatter, or other appropriate statistical/scientific charts according to the data.

Flowcharts are not part of the default writing grammar. Mermaid and PlantUML should not appear unless the user explicitly requests a diagram or the article is specifically about a UML interaction.

Every figure needs meaningful alt text and a caption. Avoid decorative figures and fake data.

## Code

Use fenced language labels. Preserve commands, paths, identifiers, and machine-readable syntax exactly. Code surfaces use the project's Dracula code styling; compact code callouts may use the project Snazzy accent tokens.
