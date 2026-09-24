# Paper2Agent source-based review evidence

This package preserves the authored review, manifest, draft and input hashes. It
contains no source PDF, raw MinerU export or original paper image. Those inputs
remain local and subject to their original license. Paths inside the manifest
refer to a reconstructed local workspace, not publicly hosted files.

## Reconstruct the deterministic checks

Use the source PDF and unchanged MinerU extraction whose SHA-256 values match
input-sha256.json. Create source/, extracted/, review/ and output/ in a private
workspace. Place the PDF at source/paper.pdf and the original 26 extraction files
under extracted/. Copy manifest.yaml and paper-review.md to review/, and
blog-draft.mdx to output/blog.mdx. Run the public paper-review Skill validator
for --stage review and --stage blog. The published article differs from the draft
only in its draft:false publication flag. No PDF reparse is required. A new parse
with different bytes is a new input and cannot silently reuse these adjudications.

## Scientific verification

All 18 original PDF pages were read and visually inspected. The five explicit
adjudications preserve raw observations and record source-based interpretation.
Main Figures 1–4, Extended Data Figures 1–2 and used reporting information are
covered by eight objects and ten claims. Reporting Table IDs are internal review
locators, not original numbered tables. External supplements were not supplied.

A separate read-only scientific reviewer examined the original PDF and all
authored artifacts: Critical 0, Important 0. Two Minor wording issues (attempt
count and executable-tool versus resource scope) were corrected and rechecked.
Final unresolved findings: Critical 0, Important 0, Minor 0. This scientific
review does not constitute final ChatGPT acceptance or an independent execution
of the authors' scientific code.

The validators verify provenance mechanics and completeness, not scientific
truth. No original paper image or near-replica is published. The concept flow
and two factual tables are independently arranged by the reviewer.
