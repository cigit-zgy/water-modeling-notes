# Pre-publication verification

Status: production-ready candidate, pending ChatGPT acceptance. No production
main integration is included in this change. Source baseline: e0251db18838324e329943502d20b40555b8e9e2.

## Deterministic and engineering checks

- Public paper-review Skill 5eef5e1091de5cdb3fa54922d6149225dd80172c: 42/42 offline tests PASS.
- Original real-paper workspace: review and blog validation PASS.
- pnpm astro check: 64 files; zero errors, warnings and hints.
- pnpm lint and pnpm format:check: PASS.
- pnpm build: PASS; static output, 16 pages, three Pagefind-indexed pages.
- Temporary draft paper, draft parent, future paper and future parent fixtures:
  production build excluded their routes and references from every dist file,
  including RSS, sitemap and Pagefind. Fixtures removed before final build.
- No source images/PDF or local absolute paths added to this repository.
- Both routes and RSS reuse the existing postFilter scheduling policy.

A separate read-only engineering reviewer found and rechecked two issues:
scheduling policy reuse and Chinese main-content language. Both are closed;
no unresolved Important/Critical findings. Existing posts filtering is unchanged.

## Actual browser inspection

Tested the built static article using the in-app browser at 1440×1000 and 390×844.
Title, academic Chinese prose, tables and conceptual diagram render. No document
horizontal overflow. Both tables use their existing horizontal scrolling container
on mobile (576px table in 347px viewport; scrollLeft reached 229). Desktop and
mobile contents navigation resolve all anchors. Mobile menu and parent-issue
link work. Light/dark theme both retain readable content. Article contains two
factual tables, one rendered Mermaid SVG, zero original img elements;
main content declares zh-CN. Concept diagram width is capped at 340px to avoid
upscaling a narrow vertical flow to the full text-column width. Existing figures
without the optional cap retain their previous sizing.

## Interpretation boundary

Review README and manifest document scientific inspection and limitations.
The automatic validators and successful build do not independently certify
scientific truth. No author code execution or missing-supplement review is claimed.
Final acceptance belongs to the user's ChatGPT review. After acceptance, the
authorized AUTO integration should refresh main, integrate this branch and verify
the production article, RSS, sitemap and search without requesting publication
permission again.
