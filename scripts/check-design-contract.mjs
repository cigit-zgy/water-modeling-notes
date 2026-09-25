import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const STYLE_ROOT = path.join(process.cwd(), "src", "styles");

const bannedPatterns = [
  [/linear-gradient\s*\(/i, "linear gradients"],
  [/radial-gradient\s*\(/i, "radial gradients"],
  [/conic-gradient\s*\(/i, "conic gradients"],
  [/backdrop-filter\s*:/i, "backdrop blur/glass effects"],
  [/background(?:-color)?\s*:\s*transparent\b/i, "transparent backgrounds"],
  [
    /background(?:-color)?\s*:[^;]*color-mix\([^;]*transparent/ims,
    "transparent color-mix backgrounds",
  ],
];

const files = (await readdir(STYLE_ROOT))
  .filter(name => name.endsWith(".css"))
  .map(name => path.join(STYLE_ROOT, name));

const violations = [];

for (const file of files) {
  const content = await readFile(file, "utf8");

  for (const [pattern, label] of bannedPatterns) {
    if (pattern.test(content)) {
      violations.push(
        `${path.relative(process.cwd(), file)}: prohibited ${label}`
      );
    }
  }
}

if (violations.length > 0) {
  console.error("Design contract violations:");
  violations.forEach(violation => console.error(`- ${violation}`));
  process.exit(1);
}

console.log("Design contract OK: published style backgrounds remain solid.");
