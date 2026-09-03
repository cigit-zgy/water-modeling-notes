import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";
export const PAPER_REVIEW_PATH = "src/content/paper-review";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      topic: z
        .enum([
          "Wastewater Modelling",
          "Scientific Machine Learning",
          "Scientific Computing",
          "Research Notes",
        ])
        .default("Research Notes"),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

const paperReviewIssues = defineCollection({
  loader: glob({ pattern: "*/index.mdx", base: `./${PAPER_REVIEW_PATH}` }),
  schema: z.object({
    pubDatetime: z.date(),
    modDatetime: z.date().optional().nullable(),
    title: z.string(),
    description: z.string(),
    issue: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    reviewStage: z.enum(["abstract", "mixed", "full"]).default("abstract"),
    draft: z.boolean().optional(),
  }),
});

const paperReviews = defineCollection({
  loader: glob({ pattern: "*/papers/*.mdx", base: `./${PAPER_REVIEW_PATH}` }),
  schema: z.object({
    pubDatetime: z.date(),
    modDatetime: z.date().optional().nullable(),
    title: z.string(),
    description: z.string(),
    issue: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    paperNumber: z.number().int().min(1).max(99),
    slug: z.string(),
    firstAuthor: z.string(),
    reviewStage: z.literal("full-text").default("full-text"),
    aScore: z.number().min(0).max(100),
    fScore: z.number().min(0).max(100).optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts, pages, paperReviewIssues, paperReviews };
