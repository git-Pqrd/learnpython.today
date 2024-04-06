import * as React from "react";
import { Game } from "@/types/game";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { gamesDict } from "@/config/games";

import { CH1, SubTitle } from "@/components/custom-typo";
import { CodeComponent } from "@/components/code-component";

export default function HomeBlog() {
  const game: Game = gamesDict.introduction;
  return (
    <div>
      <CH1 text={game.title} />
      <SubTitle
        class="max-w-[800px]"
        text={`To play the game, you need to put on your detective hat and scrutinize lines of code to spot the bugs!
        Each game presents you with a snippet of code that contains an error.
        Your task is to identify the mistake and select the correct option from the provided choices that would fix the code.`}
      />
      <div className="max-w-[800px]">
        <CodeComponent
          game={game}
          codeBlock={JSON.parse(JSON.stringify(codeBlock))}
        />
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
