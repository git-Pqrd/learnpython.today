import * as React from "react";
import { Game } from "@/types/game";
import { games, gamesDict } from "@/config/games";

import { CH1, GameDesc } from "@/components/custom-typo";
import { GameLevel } from "@/components/game-level-component";
import { CodeComponent } from "@/components/code-component";

export default function GamePrompt({ params }: { params: { slug: string } }) {
  const game = games.filter(game => game.href == params.slug)[0];
  if (!game) return <h1>404 - Page Not Found</h1>;
  return (
    <div className="px-1 max-w-full md:px-8 md:max-w-[1600px]">
      <div className="justify-between flex flex-row w-full">
        <div className="grow-1 self-start">
          <GameLevel level={game.level} />
        </div>
        <div className="grow-1 self-end flex bg-red-100">
          {/* Todo(): Add Score and the number of solved */}
          <div className="center"></div>
          <div className="center"></div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row md:py-3 justify-between wrap">
        <div className="min-w-full md:min-w-[600px] md:max-w-[1400px]">
          <CodeComponent game={game} />
        </div>
        <div className="max-w-full md:min-w-[600px] md:max-w-[800px] md:px-4">
          <CH1 text={game.title} />
          <GameDesc text={game.text} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  console.log("here");
  return games.map((game: Game) => ({
    slug: game.href,
  }));
}
