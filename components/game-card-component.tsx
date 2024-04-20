"use client";

import * as React from "react";
import { Game } from "@/types/game";
import { TagComponent } from "@/components/tag-component";
import ControllerIcon from "@/components/ui/controller-icon";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function GameCard(props: { game: Game }) {
  const article = props.game;
  if (!article) return;

  return (
    <Card
      className={`${article.starred ? "shadow-lg shadow-green-500/50" : ""}
      max-w-full w-full md:w-[450px] my-1 md:mr-4 md:my-4 flex flex-col justify-between bg-background cursor-pointer`}
    >
      <a href={`/games/${article.href}`} className="hover:translate-y-1">
        <CardHeader>
          <CardTitle className="truncate pb-1 flex max-w-full">
            <ControllerIcon /> {article.title}
          </CardTitle>
          <div className="flex">
            {article.tags.map((tag) => (
              <TagComponent key={tag.text} tag={tag} />
            ))}
          </div>
        </CardHeader>
        <CardContent>{article.synopsis}</CardContent>
        <CardFooter className="flex cursor-pointer justify-end">
          Let's Play! &rarr;
        </CardFooter>
      </a>
    </Card>
  );
}
