import * as React from "react";
import { Game } from "@/types/game";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { gamesDict } from "@/config/games";

import { CH1, GameDesc } from "@/components/custom-typo";
import { GameLevel } from "@/components/game-level-component";
import { CodeComponent } from "@/components/code-component";

export default function HomeBlog() {
  const game: Game = gamesDict.introduction;
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
          <CodeComponent
            game={game}
            codeBlock={JSON.parse(JSON.stringify(codeBlock))}
          />
        </div>
        <div className="max-w-full md:min-w-[600px] md:max-w-[800px] md:px-4">
          <CH1 text={game.title} />
          <GameDesc
            text={`To play the game, you need to put on your detective hat and find the lines of code to spot the bugs!
        Each game presents you with a snippet of code that contains an error.
        Your task is to identify the mistake and select the correct option from the provided choices that would fix the code.`}
          />
        </div>
      </div>
    </div>
  );
}

const codeBlock = new CodeBlock(
  [
    new CodeLine("### Prints the content of the given argument"),
    new CodeLine("def hello(x):"),
    new CodeLine("  Print(x)", StateEnum.ERROR),
    new CodeLine("  print(x)", StateEnum.CORRECT, "Good Catch!", 10),
    new CodeLine("  print x", StateEnum.WRONG),
    new CodeLine("  Print x", StateEnum.WRONG),
    new CodeLine("###"),
  ],
  "python"
);
