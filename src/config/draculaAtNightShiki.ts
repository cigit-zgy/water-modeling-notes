/**
 * Shiki translation of the Dracula At Night source palette.
 * Source: https://github.com/bceskavich/dracula-at-night
 */
export const draculaAtNightShiki = {
  name: "academic-dracula-at-night",
  type: "dark" as const,
  bg: "#0E1419",
  fg: "#F8F8F2",
  colors: {
    "editor.background": "#0E1419",
    "editor.foreground": "#F8F8F2",
    "editorLineNumber.foreground": "#6272A4",
    "editor.selectionBackground": "#44475A",
  },
  settings: [
    { settings: { foreground: "#F8F8F2", background: "#0E1419" } },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#6272A4", fontStyle: "italic" },
    },
    {
      scope: ["string", "string.quoted", "markup.inserted"],
      settings: { foreground: "#F1FA8C" },
    },
    {
      scope: ["constant.numeric", "constant.language", "support.constant"],
      settings: { foreground: "#BD93F9" },
    },
    {
      scope: ["keyword", "storage", "storage.type", "keyword.control"],
      settings: { foreground: "#FF79C6" },
    },
    {
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: { foreground: "#50FA7B" },
    },
    {
      scope: ["variable", "variable.other", "entity.name.tag"],
      settings: { foreground: "#8BE9FD" },
    },
    {
      scope: ["entity.name.type", "support.type", "support.class"],
      settings: { foreground: "#8BE9FD", fontStyle: "italic" },
    },
    {
      scope: ["variable.parameter", "meta.function.parameters"],
      settings: { foreground: "#FFB86C", fontStyle: "italic" },
    },
    {
      scope: ["invalid", "markup.deleted"],
      settings: { foreground: "#FF5555" },
    },
  ],
};
