import * as React from "react";
import { Section } from "@/types/section";
import { Article } from "@/types/article";
import { ContentTable } from "@/components/content-table";
import { TagsGroup } from "@/components/tags-group-component";
import { ProgressArticle } from "@/components/progress-article";

export function Sidebar(props: { sections: Section[]; article: Article }) {
  return (
    <div className="w-3/12 hidden xl:flex justify-center">
      <div className="fixed min-w-[300px] pr-1">
        <TagsGroup article={props.article} />
        <ProgressArticle href={props.article.href} />
        <ContentTable sections={props.sections} />
      </div>
    </div>
  );
}
