# Third-party notices

This project keeps its original AstroPaper MIT `LICENSE`. The following font and icon software is distributed or bundled separately under the licenses named below.

## LXGW WenKai Screen

- Runtime use: Chinese long-form prose fallback
- Source font: [lxgw/LxgwWenKai-Screen](https://github.com/lxgw/LxgwWenKai-Screen), version 1.522
- Web subset package: [CMBill/lxgw-wenkai-screen-web](https://github.com/CMBill/lxgw-wenkai-screen-web), npm package `lxgw-wenkai-screen-web@1.522.0`
- License: SIL Open Font License 1.1
- License text: [`licenses/LXGW-WENKAI-SCREEN-OFL-1.1.txt`](licenses/LXGW-WENKAI-SCREEN-OFL-1.1.txt)

The production CSS imports only the `LXGW WenKai Screen` family. Its version-pinned WOFF2 subsets and `unicode-range` declarations are bundled by Astro and served from the deployment origin.

## Maple Mono

- Runtime use: code and technical literals
- Source font: [subframe7536/maple-font](https://github.com/subframe7536/maple-font)
- Webfont package: [Fontsource Maple Mono](https://fontsource.org/fonts/maple-mono), npm package `@fontsource/maple-mono@5.3.0`
- License: SIL Open Font License 1.1
- License text: [`licenses/MAPLE-MONO-OFL-1.1.txt`](licenses/MAPLE-MONO-OFL-1.1.txt)

The runtime uses only the Latin 400 normal and 400 italic WOFF2 files from the package. Chinese code comments fall through to the system CJK font stack; Nerd Font, icon, CJK, TTF, OTF, and WOFF variants are not bundled into the production site.

## Latin Modern Sans

- Runtime use: navigation, metadata, labels, tags, dates, and other interface text
- Source: [sugina-dev/latin-modern-web](https://github.com/sugina-dev/latin-modern-web), tag 1.0.1, commit `ee41a253c4ce2a84a54e66704e324d313968546f`
- License: GUST Font License, version 1.0
- License text: [`licenses/LATIN-MODERN-GUST-FONT-LICENSE.txt`](licenses/LATIN-MODERN-GUST-FONT-LICENSE.txt)

The upstream regular and bold WOFF webfonts were converted losslessly to WOFF2 without subsetting or glyph changes. No TTF, OTF, WOFF, or EOT source files are retained in this repository.

## Lucide Icons

- Runtime use: four small decorative research-topic icons on the homepage
- Source: [lucide-icons/lucide](https://github.com/lucide-icons/lucide)
- Icons: `waves`, `brain-circuit`, `chart-spline`, and `book-open-text`
- License: ISC
- License text: [`licenses/LUCIDE-ISC.txt`](licenses/LUCIDE-ISC.txt)

The SVGs are stored locally and served from the deployment origin. No icon CDN or client-side icon runtime is used.

## Georgia and mathematics

Georgia is referenced only as a reader-system font for English prose; no Georgia font file is distributed. KaTeX continues to supply its existing Computer Modern-derived math fonts under KaTeX's own package notices and license. The build retains KaTeX's WOFF2 sources while removing its redundant WOFF and TTF browser fallbacks; the math renderer and glyph set are unchanged.
