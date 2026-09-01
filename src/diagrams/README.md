# Diagram authoring and rendering

The blog supports two diagram-as-code formats only: Mermaid and PlantUML.

## Selection

- Mermaid: workflow, process, architecture overview, compact directed flow.
- PlantUML: sequence, component, class, state, and UML-style interaction diagrams.

## Publication geometry

- Target visible width: 680–760 px.
- Prefer one compact diagram per figure.
- Reorganize the graph before increasing width or node spacing.
- Keep labels short; split long labels over two lines.
- Published pages use local static SVG only.

## Mermaid template

Use `mermaid.config.json` for all shared styling. Keep diagram source semantic and small.

```mermaid
flowchart TB
  A["Input"] --> B["Validated operation"]
  B --> C{"Decision"}
  C -->|yes| D["Outcome"]
  C -->|no| E["Stop"]
```

Recommended flowchart rules:

- `htmlLabels: false`
- `nodeSpacing: 22`
- `rankSpacing: 28`
- `curve: linear`
- avoid deeply nested subgraphs
- use a maximum of roughly 8–12 primary nodes in one figure

Render command used by CI:

```bash
mmdc \
  -i src/diagrams/<name>.mmd \
  -o public/figures/<name>.svg \
  -c src/diagrams/mermaid.config.json \
  -b '#111113' \
  -w 760
```

## PlantUML template

Include the shared theme at the top of every source file.

```plantuml
@startuml
!include plantuml-theme.puml
actor Supervisor
participant Agent
participant "Scientific API" as API
Supervisor -> Agent : Request
Agent -> API : Validated operation
API --> Agent : Result
Agent --> Supervisor : Report
@enduml
```

Keep sequence diagrams to about 4–6 participants. Use `scale max 760 width` when a diagram would otherwise grow wider than the reading column.

CI renders PlantUML with a pinned PlantUML JAR. The JAR is downloaded only during the renderer job and is not committed to the repository.

## Theme

Both formats use the same semantic palette:

- background: `#111113`
- elevated surface: `#1C1C1E` / `#242426`
- primary interaction: `#0A84FF`
- secondary interaction: `#64D2FF`
- decision/group accent: `#BF5AF2`
- success/output accent: `#30D158`
- caution/rollback accent: `#FF9F0A`
- primary text: `#F5F5F7`
- muted line/text: `#8E8E93` / `#AEAEB2`

These colours match the blog's Apple/Liquid Glass dark semantic system while keeping diagrams visually flatter than the navigation chrome.
