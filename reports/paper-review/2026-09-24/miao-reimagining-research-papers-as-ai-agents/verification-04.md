# Task 04 narrative revision qualification

Task authority: cigit-zgy/skills c859284b3baa3093d33e0b87d70ce91cfd43d21e,
paper-review/reports/chatgpt/260924_chatgpt_04.md. Collaboration:
5ce659dec20d5a284d9783b7be2f811b8c8ccdac. This record supplements historical
verification.md; it does not rewrite Task 03 or constitute ChatGPT acceptance.

## Bound artifacts and source preservation

- Skill implementation: 451157c769f0f91c5051ef44503e9ceeaec9e2da;
  paper-review tree fd33f7f02885f9e1fd94d283d17485f8e1858e79.
- Public Skill: 9ab85ab53e42bd7cbb0ae9677e5cd42cf6c7122a;
  tree a9a72c217fcc4f2b4d36a2f50d8857c7438d6a90.
- Blog draft SHA-256: 7ce4802bb47f4cb3596617e8981ddcb18db10d50b2f2cdba21d30991b76e93d2.
- Site article SHA-256: 5b3026fd6275608337f66fda2f726f022120b98fde119056c67cf8d9784ef23a.
- Rights manifest SHA-256: f48fc194f608bda1fcfc1c87a4c800587e83d984a59405aa11e841eeec875a55.
- Draft-to-site projection changes only draft=true to false and assets/ to the
  article's public image path. Exact text comparison passed.
- Original PDF hash remains 6727ef9ca72cfffb1e032a2f07c7b9a4a2b235154bdd779b135c3518433677bf.
  Existing extraction and five adjudications were preserved; no new parse or raw correction.
- Six publisher-original image files match recorded downloaded bytes exactly.
  Original figures are not copied into the public Skill repository.

## Narrative and scientific checks

The draft has 5,908 Han characters (including metadata/captions). Its nine H2
stages and nine H3 questions follow the scientific argument, not figure numbering.
Evidence order is Figure 1, Figure 3, Extended Data Figure 1, Figure 2, Figure 4,
Extended Data Figure 2, then a joint explanation of Reporting Tables 1 and 2.
Eight evidence objects and ten claims remain traceable. Two Chinese-labelled
callouts, ordered/unordered lists and three comparison/synthesis tables are used;
no decorative Mermaid, blockquote or code block was inserted.

Independent source-level review found no Critical or Important issues. Three
minor wording/interpretation issues were corrected: Chinese method wording,
open-question scoring definition and the distinction between precomputation and
prepackaging/validation. Accuracy denominators, repeated-run units, expert scoring,
Scanpy list inconsistency, human strategy selection, conditional gene effects,
missing supplements and untested wastewater transfer remain explicit boundaries.

Independent rights and image inspection covered PDF pages 3, 4, 6, 8, 9, 14 and 15.
No separate third-party exclusion was found on the six objects/captions. Each
image is complete and unmodified; per-object source, license, credit inspection,
dimensions, byte count, hash and use conditions are in rights-manifest.json.
CC BY-NC-ND 4.0 clearance is limited to this noncommercial, unadapted use.

## Deterministic and build checks

- Skill source and standalone public export: 52/52 offline tests passed.
- Added regression cases first failed, then passed after implementation.
- Independent behavior test: freely authored scientific headings and joint evidence
  discussion pass without the former fixed outline or five-label checklist.
- Independent adversarial review: inline/pre/code fake bindings, missing visible
  object references, omitted main figures, and short Setext H1 now fail closed.
  Closure review: Critical 0, Important 0; 52/52 tests independently rerun.
- skill-creator quick_validate: PASS.
- Real artifact review gate and blog gate: PASS (mechanical checks, not science scoring).
- pnpm astro check: 64 files, 0 errors/warnings/hints.
- pnpm lint: PASS; pnpm format:check: PASS.
- pnpm build: PASS; 16 static pages, 3 Pagefind pages indexed.
- No added dependencies or global CSS/component changes in Task 04.

## Actual browser verification

Inspected the built site in the Codex in-app browser at actual 1440×1000 and
390×844 viewports on 2026-09-24. Screenshots were examined during execution;
they are not additional committed assets.

- Desktop title, H2/H3 distinction, continuous paragraphs, captions, tables and
  evidence transitions render correctly in the existing theme.
- All six images load at their recorded intrinsic dimensions. Display widths are
  742 px desktop and 345 px mobile; proportional heights preserve full panels.
- Mobile title and Chinese callout wrap normally. Document widths were 1429/379 px
  at 1440/390 px viewport widths: no page-level horizontal overflow.
- Tables retain their existing 576 px internal width and 347 px mobile scroll
  container; actual horizontal scrolling reveals the rightmost column.
- Clicking Figure 3 opens the intact 2004×2702 original image. Dense original
  labels require opening/zooming the full image on a phone; no image alteration
  was used to enlarge selected panels.
- Browser captured no error/warning console entries.

Remote Preview coordinates and access outcome are bound after branch publication
in the Task 04 Codex report. Production remains gated on ChatGPT acceptance.
