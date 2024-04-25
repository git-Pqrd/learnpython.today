import fs from "fs";
import { notFound } from "next/navigation";
import { blogs } from "@/config/blogs";
import { remark } from "remark";
import html from "remark-html";
import { Article } from "@/types/article";
import Head from "next/head";
import { siteConfig } from "@/config/site";

// Can't use @ in fs
const _IMPORT_STRING = "config/blogs/markdowns/";

export default async function GamePrompt({
  params,
}: {
  params: { slug: string };
}) {
  const article: Article = blogs.filter(
    (article) => article.href == params.slug
  )[0];
  if (!article) return notFound();

  const content = await markdownToHtml(article.href);
  return (
    <div className="px-1 max-w-full md:px-8 md:max-w-[1600px]">
      <Head>
        <title>{`${siteConfig.name} - ${article.title}`}</title>
        <meta name="description">{article.synopsis}</meta>
      </Head>
      <div className="markdown max-w-[1000px] md:px-4" dangerouslySetInnerHTML={{ __html: content }} />
      {article.date}
    </div>
  );
}

// Function to convert markdown to HTML
const markdownToHtml = async (slug: string): Promise<string> => {
  try {
    const markdown = fs
      .readFileSync(`${_IMPORT_STRING}/${slug}.md`, "utf8")
      .valueOf();
    const result = await remark().use(html).process(markdown);
    return result.value.toString();
  } catch (error) {
    // If there's an error (e.g., file doesn't exist), log it and return an empty string
    throw new Error("Cannot build blogs, Could not find the markdown for it.");
  }
};

export async function generateStaticParams() {
  return blogs
    .filter((article) => article.markdown)
    .map((article: Article) => ({
      slug: article.href.split("/blogs/")[0],
    }));
}
