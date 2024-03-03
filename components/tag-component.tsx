import * as React from "react";
import { Tag } from "@/types/tag";
import { Badge } from "@/components/ui/badge";

export function TagComponent(props: { tag: Tag }) {
  return (
    <Badge className="mr-1" variant="secondary">
      {props.tag.text}
    </Badge>
  );
}
