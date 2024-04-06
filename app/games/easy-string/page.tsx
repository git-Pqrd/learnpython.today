import * as React from "react";
import { Game } from "@/types/game";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { gamesDict } from "@/config/games";

import { CH1, SubTitle } from "@/components/custom-typo";
import { CodeComponent } from "@/components/code-component";

export default function HomeBlog() {
  const game: Game = gamesDict.easy_string;
  return (
    <div>
      <CH1 text={game.title} />
      <SubTitle
        class="max-w-[400px]"
        text="Someone made a mistake in the syntax find it and pick the correct answer."
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
    new CodeLine("### Click on the wrong way to create a string"),
    new CodeLine(
      "greeting = Hello, world",
      StateEnum.ERROR,
      "Remember to enclose strings in quotes."
    ), // Missing quotes
    new CodeLine(
      "greeting = 'Hello, world'",
      StateEnum.CORRECT,
      "Exactly! Single quotes work as well.",
      10
    ),
    new CodeLine(
      "greeting = 'Hello, world\"",
      StateEnum.WRONG,
      "In Python we can't mix single and double quotes!",
      10
    ),
    new CodeLine('greeting = "Hello, world"'),
    new CodeLine("###"),
  ],
  "python"
);
