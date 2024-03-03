import * as React from "react";
import { Article } from "@/types/article";
import { Tag } from "@/types/tag";
import { TagComponent } from "@/components/tag-component";

export function TagsGroup(props: { article: Article | undefined }) {
  if (props.article == undefined) return;
  return (
    <div className="w-full py-3 border border-transparent border-b-4 border-b-green-700">
      {props.article.tags.map((tag: Tag) => (
        <TagComponent tag={tag} key={tag.href} />
      ))}
    </div>
  );
}
