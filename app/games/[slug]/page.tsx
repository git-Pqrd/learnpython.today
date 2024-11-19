import * as React from "react";
import { Game } from "@/types/game";
import { games } from "@/config/games";
import { CH1, GameDesc } from "@/components/custom-typo";
import { GameLevel } from "@/components/game-level-component";
import { CodeComponent } from "@/components/code-component";

function GameHeader({ game }: { game: Game }) {
  return (
    <div className="justify-between flex flex-row w-full">
      <div className="grow-1 self-start">
        <GameLevel level={game.level} />
      </div>
      <div className="grow-1 self-end flex">
        {/* Score and solved count will go here */}
      </div>
    </div>
  );
}

function GameContent({ game }: { game: Game }) {
  return (
    <div className="flex flex-col-reverse md:flex-row md:py-3 justify-between">
      <div className="grow-[3] w-full md:min-w-[600px] md:max-w-[1400px]">
        <CodeComponent game={game} />
      </div>
      <div className="grow-[1] max-w-full md:w-3/6 md:min-w-[300px] md:max-w-[800px] md:px-4 md:pt-4">
        <CH1 text={game.title} />
        <GameDesc text={game.text} />
      </div>
    </div>
  );
}

export default function GamePrompt({ params }: { params: { slug: string } }) {
  const game = games.find((game) => game.href === params.slug);

  if (!game) {
    return <h1>404 - Page Not Found</h1>;
  }

  return (
    <div className="px-1 max-w-full md:px-8 md:max-w-[1800px]">
      <GameHeader game={game} />
      <GameContent game={game} />
    </div>
  );
}

export async function generateStaticParams() {
  return games.map((game: Game) => ({
    slug: game.href,
  }));
}
