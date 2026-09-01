# Apple homepage patterns for the academic blog

This reference translates the structural and interaction patterns of Apple’s public homepage into rules suitable for `water-modeling-notes`. It is not a page clone and does not reuse Apple assets, product imagery, copy, or proprietary components.

## What to borrow

Apple’s homepage consistently relies on a small number of strong design moves:

1. one dominant message per viewport-scale section;
2. oversized type and short supporting copy;
3. generous vertical whitespace rather than dense borders;
4. one primary action plus at most one secondary action;
5. large visual/content panels that alternate emphasis instead of many equal cards;
6. restrained motion tied to entry, scrolling, focus, press, and state change;
7. material depth reserved for controls and high-hierarchy surfaces;
8. clear separation between navigation chrome and content.

For this academic blog, translate “product hero” into “research identity / featured writing / research theme” rather than copying consumer-product presentation.

## Header

- The site header is not sticky or fixed. It appears at the top of the document and scrolls away with content.
- The header may use a strong Liquid Glass material because it is functional chrome.
- Navigation remains compact, rounded, and immediately responsive on pointer down.
- Do not add a second floating navigation bar after the header leaves the viewport.

## Homepage rhythm

The homepage should read as a sequence of large editorial scenes:

1. identity hero;
2. featured writing as the dominant content panel;
3. recent writing as a quieter editorial list;
4. research topics as a small number of large panels;
5. footer.

Avoid generic dashboard/card-grid density. Prefer fewer, larger surfaces with clear hierarchy.

## Motion

Use motion to communicate continuity and hierarchy:

- reveal content once as it enters the viewport;
- animate primarily opacity and transform;
- use slight scale/lift on interactive panels;
- provide immediate press feedback (`scale` down slightly on pointer down);
- stagger hero text and calls to action by small delays;
- keep transitions interruptible by normal browser interaction;
- never lock input while an animation finishes;
- avoid continuous decorative loops and full-screen parallax backgrounds;
- disable non-essential motion under `prefers-reduced-motion`.

A default reveal should be approximately 500–700 ms with an ease-out curve similar to `cubic-bezier(0.22, 1, 0.36, 1)`. Large elements should move only a small distance (roughly 12–28 px) to avoid theatrical motion.

## Liquid Glass intensity

The redesigned site intentionally uses a clearly perceptible Liquid Glass material. A functional glass surface should show:

- a visibly translucent tint;
- substantial blur and saturation;
- a brighter top specular region;
- inner and outer rim separation;
- a soft but legible depth shadow;
- an adaptive background light field behind the material.

More intense glass does not mean applying glass to prose. Article paragraphs, tables, equations, code, and figures remain content surfaces. Homepage feature panels may use glass more strongly because they function as major navigation/editorial surfaces.

## Academic adaptation

Apple-like presentation must not reduce scientific readability:

- body text remains regular weight and uses the project reading font stack;
- headings remain semantic and selectable text;
- tables retain captions and zebra rows;
- code retains Dracula syntax highlighting;
- research topics remain explicit text, not icon-only controls;
- motion never hides content when JavaScript is unavailable;
- links and controls remain keyboard accessible and meet contrast requirements.
