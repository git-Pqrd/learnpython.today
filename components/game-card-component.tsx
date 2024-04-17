'use client'

import * as React from "react";
import { Game } from "@/types/game";
import { TagComponent } from "@/components/tag-component";
import ControllerIcon from "@/components/ui/controller-icon";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function GameCard(props: { game: Game }) {
  const router = useRouter();
  const article = props.game;
  if (!article) return;

  const handleClick = () => {
    router.push(`/games/${article.href}`);
  };

  return (
    <Card
      onClick={handleClick}
      className={`${article.starred ? "shadow-lg shadow-green-500/50" : ""}
      max-w-full w-full md:w-[450px] mr-4 my-4 flex flex-col justify-between bg-background cursor-pointer`}
    >
      <CardHeader>
        <CardTitle className="truncate pb-1 flex">
          <ControllerIcon/> {article.title}
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
    </Card>
  );
}
