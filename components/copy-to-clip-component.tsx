'use client';
import * as React from "react";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";

export function CopyToClip(props: { content: string }) {
  return (
    <ClipboardCopyIcon
      onClick={() => navigator.clipboard.writeText(props.content)}
      className="absolute top-2 right-2 cursor-pointer hover:scale-125"
    />
  );
}
