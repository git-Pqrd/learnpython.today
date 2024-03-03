import { Article } from "@/types/article";

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
