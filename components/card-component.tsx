import * as React from "react";
import { Article } from "@/types/article";
import { TagComponent } from "@/components/tag-component";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlogCard(props: { article: Article }) {
  const article = props.article;
  if (!article) return;
  return (
    <Card
      className={`
        ${article.starred ? "shadow-lg shadow-green-500/50" : ""}
        w-full lg:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1rem)]
        m-1 flex flex-col justify-between bg-background
        transition-all duration-300 hover:shadow-md
      `}
    >
      <CardHeader>
        <CardTitle className="truncate pb-1">{article.title}</CardTitle>
        <div className="flex">
          {article.tags.map((tag) => (
            <TagComponent key={tag.text} tag={tag} />
          ))}
        </div>
      </CardHeader>
      <CardContent>{article.synopsis}</CardContent>
      <CardFooter className="flex justify-end">
        <a className="cursor-pointer" href={`/blogs/${article.href}`}>
          Go to the article &rarr;
        </a>
      </CardFooter>
    </Card>
  );
}
