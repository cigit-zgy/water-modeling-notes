# Academic content patterns

## Accuracy boundary

Do not infer academic facts. Affiliations, positions, publications, results, performance claims, datasets, and citations require verified source material. Use an explicit `TODO` or limitation when information is missing.

## Writing metadata

Place Markdown or MDX in `src/content/posts/`. Use a stable descriptive filename without a date prefix. Required frontmatter is `pubDatetime`, `title`, `description`, and `topic`; use only these topics:

- Wastewater Modelling
- Scientific Machine Learning
- Scientific Computing
- Research Notes

Add only tags supported by actual content. Use `featured: true` selectively. Keep unfinished layout or content checks as `draft: true`; drafts must remain absent from production routes, listings, RSS, sitemap, and Pagefind.

## Article structure

The layout supplies the only `h1`; start article sections at `h2`. Define notation and units before interpretation. Use KaTeX syntax for equations, fenced language labels for code, meaningful image alt text, numbered captions where useful, footnotes for compact qualifications, and a references section for source-backed writing.

Use `AcademicCallout` only for a real note, definition, method, or caution. Use `ResponsiveTable` around tables that may overflow. Avoid decorative figures, fake values, placeholder citations, and references that were not consulted.
