import { Article } from "@/types/article"

// Function to sort articles by their date
export const sortBlogsByDate = (articles: Article[]): Article[] => {
  return articles.sort((a, b) => {
    // Convert date strings to Date objects for comparison
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    // Sorting on B is less than A so last art goes first
    return dateB.getTime() - dateA.getTime();
  });
};

