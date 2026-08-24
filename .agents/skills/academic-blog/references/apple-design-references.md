# Apple design references

This file records the external design sources used by the blog. It is a routing document, not a vendored copy of third-party skills.

## Reference priority

When guidance conflicts, apply this order:

1. the user's current instruction;
2. this repository's `academic-blog/SKILL.md` and `design-system.md`;
3. Apple Human Interface Guidelines and Apple design documentation;
4. Emil Kowalski's `apple-design` skill for interaction and design judgment;
5. Bowen's `apple-design` skill for web implementation patterns;
6. generic web/UI conventions.

The blog is an academic reading surface. Third-party Apple guidance is adapted to that purpose rather than copied wholesale.

## Apple — canonical platform guidance

Primary sources:

- Materials: https://developer.apple.com/design/human-interface-guidelines/materials
- Design principles: https://developer.apple.com/design/human-interface-guidelines/design-principles
- Layout: https://developer.apple.com/design/human-interface-guidelines/layout
- Liquid Glass overview: https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass

Project interpretation:

- Liquid Glass belongs to the functional layer: navigation, controls, search, TOC, floating actions, and transient interaction.
- Do not use Liquid Glass as the article content layer.
- Use the material sparingly so content remains visually dominant.
- Prefer hierarchy, alignment, predictable placement, and scroll-edge separation over decorative effects.
- Accessibility settings for reduced transparency, increased contrast, and reduced motion are release requirements.

## Emil Kowalski — design and interaction judgment

Repository: https://github.com/emilkowalski/skills

Skill: https://github.com/emilkowalski/skills/blob/main/skills/apple-design/SKILL.md

Role in this project:

- immediate feedback and low perceived latency;
- interruptible, physically coherent motion;
- restrained use of springs and momentum;
- material thickness as hierarchy;
- typography through optical tracking, leading, and weight;
- spatial consistency and source-anchored interaction;
- reduced-motion, reduced-transparency, and high-contrast behavior.

The repository is MIT licensed. This project paraphrases the design principles and does not vendor the skill source.

## Bowen — web implementation reference

Repository: https://github.com/bowen31337/apple-design

Skill: https://github.com/bowen31337/apple-design/blob/main/SKILL.md

Role in this project:

- CSS/SVG approaches for specular highlights, translucency, vibrancy, and optional refraction;
- reusable web design tokens for Apple-like materials;
- implementation patterns for glass navigation, sheets, segmented controls, popovers, and motion systems;
- practical browser fallbacks.

Use this source as an implementation reference only. Do not copy or vendor substantial upstream code without first reviewing the upstream license and confirming that the dependency is justified.

## Project adaptation

For `water-modeling-notes`, the adopted subset is intentionally narrow:

- Astro remains static-first; no framework migration is justified by the visual redesign.
- Header/navigation, article TOC, search, tags, and reading-progress controls may use Liquid Glass.
- Prose, tables, figures, equations, callouts, and references remain standard content surfaces.
- Motion libraries are not added unless a real gesture or interruptible interaction requires them.
- Chinese glyphs remain `LXGW WenKai Screen`; code remains Dracula for stable syntax semantics.
- The site must remain readable when transparency, animation, or backdrop filtering is unavailable.
