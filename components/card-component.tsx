import * as React from "react";
import { Article } from "@/types/article";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlogCard(props: { article: Article }) {
  const article = props.article;
  if (!article) return;
  return (
    <Card className="w-[450px] mr-4 mb-4">
      <CardHeader>
        <CardTitle className="truncate">{article.title}</CardTitle>
        <CardDescription>{article.tags.map(tag => `${tag}, `)}</CardDescription>
      </CardHeader>
      <CardContent>{article.synopsis}</CardContent>
      <CardFooter className="flex justify-end">
        <a href={`/${article.slug}`}>Go to the article &rarr;</a>
      </CardFooter>
    </Card>
  );
}
