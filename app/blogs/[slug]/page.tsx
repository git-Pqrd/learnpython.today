import fs from "fs";
import { notFound } from "next/navigation";
import { blogs } from "@/config/blogs";
import { remark } from "remark";
import html from "remark-html";
import { Article } from "@/types/article";
import Head from "next/head";
import { nord as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { siteConfig } from "@/config/site";
import { parse } from "node-html-parser";
import { CopyToClip } from "@/components/copy-to-clip-component";

interface CustomTag {
  type: "code" | "normal";
  content: string;
  language?: string;
}

// Can't use @ in fs
const _IMPORT_STRING = "config/blogs/markdowns/";

export default async function BlogComponent({
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
    <div className="px-1 max-w-full items-center  md:px-8 flex-col flex">
      <Head>
        <title>{`${siteConfig.name} - ${article.title}`}</title>
        <meta name="description">{article.synopsis}</meta>
      </Head>
      <div className=" max-w-[1400px]">
        {stringToTags(content).map((c, index) =>
          c.type == "normal" ? (
            <div
              key={index}
              className="markdown max-w-[1000px] md:px-4"
              dangerouslySetInnerHTML={{ __html: c.content }}
            />
          ) : (
            <div key={index} className="relative w-full mr-3 max-w-[1200px]">
              <SyntaxHighlighter
                key={index}
                style={theme}
                customStyle={{
                  margin: "1px",
                  padding: "5px",
                  paddingLeft: "15px",
                  cursor: "text",
                }}
                language={c.language || "python"}
                showLineNumbers={false}
                codeTagProps={{
                  className: "codeLine py-0 rounded-md",
                }}
                wrapLongLines={true}
                wrapLines={true}
                lineProps={() => {
                  return {
                    style: {
                      cursor: "pointer",
                      fontWeight: "bolder",
                      display: "block",
                    },
                  };
                }}
              >
                {c.content}
              </SyntaxHighlighter>
              <CopyToClip content={c.content} />
            </div>
          )
        )}
        {article.date}
      </div>
    </div>
  );
}

const stringToTags = (content: string): CustomTag[] => {
  const tags = parse(content);
  // Split the string and include the delimiters (captured groups)
  const segments: CustomTag[] = [];

  tags.childNodes.map((tag) => {
    if (["pre", "code"].includes(tag.rawTagName)) {
      tag = parse(tag.childNodes[0].toString());
      segments.push({
        type: "code",
        content: tag.innerText,
        language: "python",
      });
    } else {
      segments.push({
        type: "normal",
        content: tag.toString(),
      });
    }
  });

  return segments;
};

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
