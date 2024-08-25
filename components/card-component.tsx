"use client";

import * as React from "react";
import { UnifiedContent, isGame, isArticle } from "@/types/unifiedContent";
import { TagComponent } from "@/components/tag-component";
import ControllerIcon from "@/components/ui/controller-icon";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GameLevel } from "./game-level-component";
import { useProgressStore } from "@/stores/progress-store";
import { Check } from "lucide-react";

export function UnifiedCard(props: { content: UnifiedContent }) {
  const [done, setDone] = React.useState(false);
  const { isContentCompleted } = useProgressStore();
  const { content } = props;
  const item = content.content;
  React.useEffect(() => setDone(isContentCompleted(item.href)), [item]);

  if (!item) return null;

  const isStarred = "starred" in item ? item.starred : false;
  const tags = "tags" in item ? item.tags : [];
  const title = "title" in item ? item.title : "";
  const synopsis = "synopsis" in item ? item.synopsis : "";
  const href = "href" in item ? item.href : "";

  return (
    <Card
      className={`
      ${isStarred ? "shadow-lg shadow-green-500/50" : ""}
      bg-muted
      flex flex-col max-w-full w-auto
      justify-between cursor-pointer relative `}
    >
      <a
        href={`/${isGame(content) ? "games" : "blogs"}/${href}`}
        className="hover:translate-y-1"
      >
        <CardHeader>
          <CardTitle className="truncate pb-1 flex max-w-full">
            {isGame(content) && <ControllerIcon />} {title}
          </CardTitle>
          <div className="flex">
            <div>
              {tags.map((tag) => (
                <TagComponent key={tag.text} tag={tag} />
              ))}
            </div>
            {isGame(content) && (
              <div className="absolute top-1 right-2">
                <GameLevel small={true} level={content.content.level} />
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>{synopsis}</CardContent>
        <CardFooter className="flex cursor-pointer justify-end">
          {isGame(content) ? "Let's Play!" : "Read More"} &rarr;
        </CardFooter>
      </a>
      {done && (
        <div className="absolute flex items-center text-green-500 left-2 bottom-2">
          <Check className=" h-4 w-4" />
          <span className="ml-2 font-bold">Done </span>
        </div>
      )}
    </Card>
  );
}
