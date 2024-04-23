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
import { GameLevel } from "./game-level-component";

export function GameCard(props: { game: Game }) {
  const game = props.game;
  if (!game) return;

  return (
    <Card
      className={`${game.starred ? "shadow-lg shadow-green-500/50" : ""}
      max-w-full w-full md:w-[450px] my-1 md:mr-4 md:my-4 flex flex-col
      justify-between bg-background cursor-pointer relative `}
         >
      <a href={`/games/${game.href}`} className="hover:translate-y-1">
        <CardHeader>
          <CardTitle className="truncate pb-1 flex max-w-full">
            <ControllerIcon /> {game.title}
          </CardTitle>
          <div className="flex">
            <div>
              {game.tags.map((tag) => (
                <TagComponent key={tag.text} tag={tag} />
              ))}
            </div>
            <div className="absolute top-1 right-2">
            <GameLevel small={true} level={game.level} />
            </div>
          </div>
        </CardHeader>
        <CardContent>{game.synopsis}</CardContent>
        <CardFooter className="flex cursor-pointer justify-end">
          Let's Play! &rarr;
        </CardFooter>
      </a>
    </Card>
  );
}
