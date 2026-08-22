import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://cigit-zgy.vercel.app/",
    title: "cigit-zgy",
    description:
      "Wastewater process modelling, scientific machine learning, and computational methods.",
    author: "cigit-zgy",
    ogImage: "cigit-zgy-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [],
  shareLinks: [],
});
