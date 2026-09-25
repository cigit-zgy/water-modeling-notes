# Solid academic publishing design system

## Intent

The site is a technical publication with high information density, clear hierarchy, and strong scanning support. Depth comes from solid surfaces, borders, typography, spacing, and restrained shadows. The visual system does not use gradients or glass effects.

## Theme pair

### Dark — Dracula At Night

Canonical relationships:

- page: #191A21
- secondary surface: #21222C
- elevated/code surface: #282A36
- border: #44475A
- text: #F8F8F2
- secondary text: #D7D7E0
- muted text: #A7AAC1
- purple: #BD93F9
- pink: #FF79C6
- cyan: #8BE9FD
- green: #50FA7B
- orange: #FFB86C
- red: #FF5555

### Light — Claude-inspired editorial

Canonical relationships:

- page: #FAF9F5
- primary surface: #FFFFFF
- secondary surface: #F3F0E8
- border: #D8D3C8
- text: #141413
- secondary text: #4D4A44
- primary terracotta: #D97757
- blue/info/link: #6A9BCC

Secondary semantic colours are project-owned adaptations chosen to preserve contrast and role consistency.

## Claude Code composition reference

Claude Code may be used as a structural reference for layout and interaction, especially in light mode. Borrow patterns, not brand assets or copy:

- large but restrained display headings with short supporting text;
- solid rounded panels that group one clear information task;
- compact card grids with consistent internal padding;
- monospace for metadata, identifiers, labels, and code-adjacent UI;
- paired primary/secondary actions with immediate press feedback;
- subtle one-shot viewport reveals and small hover lifts;
- clear alternation between broad feature surfaces and compact supporting cards.

This composition reference never overrides the theme pair. Dark mode remains Dracula At Night.

The project font system is fixed: Latin Modern Sans for Latin reading/UI, LXGW WenKai Screen for Chinese, Maple Mono for code/identifiers, and KaTeX for mathematics.

## No-gradient rule

Published UI uses solid backgrounds only.

Prohibited:

- linear gradients
- radial gradients
- conic gradients
- aurora/mesh backgrounds
- gradient text
- gradient borders
- decorative SVG gradients
- glass/specular gradients

Use a solid surface, border, or shadow when hierarchy is needed.

## Typography

- Chinese: LXGW WenKai Screen
- Latin reading/UI: Latin Modern Sans
- code/identifiers: Maple Mono
- mathematics: KaTeX font stack
- body weight: 400
- headings/labels/table headers: semibold as needed

## Surface hierarchy

- page background: --background-primary
- ordinary grouped surface: --surface-muted
- card/panel: --surface-panel
- stronger selected surface: --surface-strong
- hover surface: --surface-hover

Surfaces are opaque solid colours. Shadows remain restrained.

## Callout system

Callouts are project-owned cards. Quarto supplies semantic inspiration only.

| Kind | Dark accent | Light role | Purpose |
| --- | --- | --- | --- |
| Note | Dracula cyan | Claude blue | contextual note |
| Tip | Dracula green | green | practical guidance |
| Description | muted Dracula blue | neutral | object/system description |
| Definition | Dracula purple | purple | strict definition |
| Method | Dracula green | green | method/procedure |
| Important | Dracula pink | terracotta/pink | core constraint/conclusion |
| Caution | Dracula orange | warm orange | scope/risk |
| Warning | Dracula red | red | failure or strong warning |
| Example | Dracula yellow/ochre | ochre | worked illustration |
| Code | Snazzy cyan on Dracula surface | same dark code surface | command/config emphasis |

Every callout uses one accent, a solid background, a visible border, and regular-weight body text. No gradients and no nested callouts.

## Code

Code remains a dark editor-like surface in both site themes.

- base surface: Dracula #282A36
- border: #44475A
- text: #F8F8F2
- compact code-card accents may use Snazzy cyan #9AEDFE, pink #FF6AC1, yellow #F3F99D, and green #5AF78E

Syntax highlighting remains Dracula unless explicitly redesigned later.

## Structured article layout

The reading column remains approximately 46.5rem / 744px.

Prefer:

- tables for comparison and parameterized information;
- lists for parallel points and ordered procedures;
- callouts for semantic emphasis;
- KaTeX for mathematical relations;
- charts for quantitative information;
- code blocks for machine-readable content.

Do not add a process diagram merely to repeat prose.

## Tables

- caption above the table;
- solid header background;
- solid zebra rows;
- no colour gradients;
- narrow screens scroll the table container;
- use alignment to reflect data type.

## Figures and charts

- chart background is solid;
- chart colours come from theme semantic tokens;
- no gradient fills;
- alt text and caption required;
- prefer quantitative charts over decorative workflow diagrams.

## Navigation and controls

Header, TOC, tags, search, and back-to-top controls use solid project surfaces. No backdrop blur or glass effect. Press/hover feedback may use colour, border, shadow, opacity, and small transforms.

## Accessibility

Maintain visible focus, 44px touch targets, adequate contrast, reduced-motion support, and non-colour cues for semantic states.
