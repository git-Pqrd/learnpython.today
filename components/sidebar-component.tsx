import * as React from "react";
import { Section } from "@/types/section";
import { Article } from "@/types/article";
import { ContentTable } from "@/components/content-table";
import { TagsGroup } from "@/components/tags-group-component";

export function Sidebar(props: { sections: Section[]; article: Article }) {
  return (
    <div className="w-3/12 hidden lg:flex justify-center">
      <div className="fixed min-w-[300px]">
        <TagsGroup article={props.article} />
        <ContentTable sections={props.sections} />
      </div>
    </div>
  );
}
