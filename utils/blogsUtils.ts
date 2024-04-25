import { Article } from "@/types/article";
import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';


/** Function to sort articles by their date */
export const sortBlogsByDate = (articles: Article[]): Article[] => {
  return articles.sort((a, b) => {
    // Convert date strings to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Sorting on B is less than A so last art goes first
    return dateB.getTime() - dateA.getTime();
  });
};

/** Search the list of articles and get the one the page we are one refers to */
export const getArticleBySlug = (
  articles: Article[],
  pageSlug: string
): Article | undefined => {
  return articles.find((art: Article) => art.href == pageSlug);
};

// Function to get content from a markdown file
const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export async function getMarkdown(slug: string): Promise<string> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const markdown = fs.readFileSync(fullPath, 'utf8');
  const content = await markdownToHtml(markdown);
  return content;
}
