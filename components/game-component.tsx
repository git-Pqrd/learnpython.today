import * as React from "react";
import { Game } from "@/types/game";
import { UnifiedContent } from "@/types/unifiedContent";
import { BlogComponent } from "@/components/blog-component";

export function GameComponent(props: { games: Game[] }) {
  const unifiedContent: UnifiedContent[] = [
    ...props.games.map((game) => ({ type: "game" as const, content: game })),
  ];
  return (
    <div className="flex flex-wrap flex-row">
      <BlogComponent contents={unifiedContent} />
    </div>
  );
}
