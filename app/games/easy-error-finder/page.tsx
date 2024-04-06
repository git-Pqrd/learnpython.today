import * as React from "react";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { knownTags as kt } from "@/types/tag";
import { gamesDict } from "@/config/games";

import { CH1, SubTitle } from "@/components/custom-typo";
import { CodeComponent } from "@/components/code-component";

export default function HomeBlog() {
  const game = gamesDict.easy_syntax;
  return (
    <div>
      <CH1 text="Find the Error & Fix" />
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
  0,
  [kt.games],
  [
    new CodeLine("def hello(x):"),
    new CodeLine(
      "  print(x) \n print(hsdf)",
      StateEnum.NORMAL,
      "print(hsdf) could actually work here."
    ),
    new CodeLine("  print(x)"),
    new CodeLine("class hello(x): \n def __init__(self) ", StateEnum.ERROR),
    new CodeLine("def hello(x)", StateEnum.CORRECT, "Good Catch", 10),
    new CodeLine("function hello(x)", StateEnum.WRONG),
    new CodeLine("defition hello(x)", StateEnum.WRONG),
  ],
  "python"
);
