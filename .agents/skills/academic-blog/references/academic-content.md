# Academic content patterns

## Accuracy boundary

Do not infer academic facts. Affiliations, positions, publications, results, performance claims, datasets, and citations require verified source material. Use an explicit `TODO` or limitation when information is missing.

## Chinese technical-writing baseline

For Chinese technical prose, consult Fenng's `Tech-Doc-Style-Chinese` as a secondary reference: https://github.com/Fenng/Tech-Doc-Style-Chinese . Apply its priorities of fact fidelity, terminology consistency, controlled technical Chinese, and protection of machine-readable content. This project's explicit academic conventions and the user's current instructions take priority where rules differ.

## Writing metadata

Place Markdown or MDX in `src/content/posts/`. Use a stable descriptive filename without a date prefix. Required frontmatter is `pubDatetime`, `title`, `description`, and `topic`; use only these topics:

- Wastewater Modelling
- Scientific Machine Learning
- Scientific Computing
- Research Notes

Add only tags supported by actual content. Use `featured: true` selectively. Keep unfinished layout or content checks as `draft: true`; drafts must remain absent from production routes, listings, RSS, sitemap, and Pagefind.

## Article logic

The layout supplies the only `h1`; start article sections at `h2`.

When the subject is a research method, scientific workflow, or technical system, prefer an argument resembling a concise SCI paper:

1. define the concrete problem;
2. explain why existing practice creates the problem;
3. state the design objective and constraints;
4. explain architecture or method;
5. show operation/use with enough detail to reproduce the workflow;
6. state how the implementation is validated;
7. distinguish engineering evidence from scientific validity;
8. state limitations and intended boundaries;
9. conclude with the specific contribution rather than promotional claims.

One paragraph should carry one primary information point. Keep terminology stable across sections.

## Technical elements

Define notation and units before interpretation. Use KaTeX syntax for equations and fenced language labels for code.

Every substantive table requires a short, informative caption. Wrap potentially wide tables with `ResponsiveTable`, using the global zebra-row presentation rather than article-local table CSS.

Every figure requires meaningful alt text and a caption. Use Mermaid for ordinary workflows, process diagrams, and architecture overviews; use PlantUML for sequence, component, class, and other UML-style diagrams. Keep diagram sources in `src/diagrams/` and publish only pre-rendered local SVGs under `public/figures/`. Do not embed Mermaid or PlantUML source inside article MDX and do not require browser-side diagram rendering.

Use `AcademicCallout` only for a real note, definition, method, or caution. Avoid decorative figures, fake values, placeholder citations, and references that were not consulted.
