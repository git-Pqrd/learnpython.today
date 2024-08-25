import * as React from "react";
import { Tag } from "@/types/tag";
import { Badge } from "@/components/ui/badge";

export function TagComponent(props: { tag: Tag }) {
  if (!props || !props.tag || !props.tag.text) return;
  return (
    <Badge className="cursor-pointer mr-1 bg-background" variant="secondary">
      {props.tag.text}
    </Badge>
  );
}
