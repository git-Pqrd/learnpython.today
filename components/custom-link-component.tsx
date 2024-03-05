import * as React from "react";
import { Link1Icon, ExternalLinkIcon, VideoIcon } from "@radix-ui/react-icons";
import { CustomLink, LINK_TYPE } from "@/types/link";

export function LinkComponent(props: { link: CustomLink }) {
  let icon = <Link1Icon className="h-4 w-4 mr-2" />;
  if (props.link.extern) {
    icon = <ExternalLinkIcon className="h-4 w-4 mr-2" />;
  }
  if (props.link.type == LINK_TYPE.YOUTUBE_VIDEO) {
    icon = <VideoIcon className="h-4 w-4 mr-2" />;
  }

  return (
    <a
      target="_blank"
      href={props.link.href}
      className="cursor-pointer mr-1 px-3 rounded-lg inline-flex items-center text-nowrap border border-foreground w-min
      hover:bg-accent pr-3"
    >
      {icon} | {props.link.title}
    </a>
  );
}
