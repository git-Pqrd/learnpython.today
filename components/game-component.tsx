import * as React from "react";
import { GameCard } from "@/components/game-card-component";
import { Game } from "@/types/game";

export function GameComponent(props: { games: Game[] }) {
  return (
    <div className="flex flex-wrap flex-row">
      {props.games.map((game: Game) => (
        <GameCard key={game.title} game={game} />
      ))}
    </div>
  );
}
