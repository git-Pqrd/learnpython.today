import * as React from "react";
import { Game } from "@/types/game";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { gamesDict } from "@/config/games";

import { CH1, SubTitle } from "@/components/custom-typo";
import { CodeComponent } from "@/components/code-component";

export default function HomeBlog() {
  const game: Game = gamesDict.easy_2_string;
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
    new CodeLine(
      "### Complete the function to correctly return a formatted greeting"
    ),
    new CodeLine("def format_greeting(name):"),
    new CodeLine(
      "    greeting = 'Hello, ' + name + ', welcome to the game!'",
      StateEnum.WRONG
    ),
    new CodeLine(
      "    greeting = 'Hello, ' + name + ', welcome to the game!'\"",
      StateEnum.ERROR,
      "Watch out for mismatched quotes!",
      10
    ),
    new CodeLine(
      "    greeting = f'Hello, {name}, welcome to the game!'",
      StateEnum.CORRECT,
      "Well done! f-string is the right choice here.",
      10
    ),
    new CodeLine(
      '    greeting = "Hello, {name}, welcome to the game!"',
      StateEnum.WRONG
    ),
    new CodeLine("    return greeting"),
    new CodeLine("print(format_greeting(\"hello\")"),
    new CodeLine("###")
  ],
  "python"
);
