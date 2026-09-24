import { postFilter } from "@/utils/postFilter";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(posts);

  const issues = await getCollection("paperReviewIssues", postFilter);
  const visibleIssues = new Set(issues.map(issue => issue.data.issue));
  const reviews = await getCollection(
    "paperReviews",
    ({ data }) => postFilter({ data }) && visibleIssues.has(data.issue)
  );
  const reviewItems = reviews.map(({ data }) => ({
    link: `/paper-review/${data.issue}/papers/${data.slug}/`,
    title: data.title,
    description: data.description,
    pubDate: new Date(data.modDatetime ?? data.pubDatetime),
  }));
  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: [
      ...sortedPosts.map(({ data, id, filePath }) => ({
        link: getPostUrl(id, filePath, config.site.lang),
        title: data.title,
        description: data.description,
        pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      })),
      ...reviewItems,
    ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
  });
}
