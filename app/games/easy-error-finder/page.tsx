import * as React from "react";
import { CodeBlock } from "@/types/codeBlock";
import { CodeLine, StateEnum } from "@/types/codeLine";
import { knownTags as kt } from "@/types/tag";

import { CH1, SubTitle } from "@/components/custom-typo";
import { CodeComponent } from "@/components/code-component";

export default function HomeBlog() {
  return (
    <div>
      <CH1 text="Python Games" />
      <SubTitle text="Learn Python by playing games" />
      <div className="max-w-[800px]">
        <CodeComponent codeBlock={JSON.parse(JSON.stringify(codeBlock))} />
      </div>
    </div>
  );
}

const codeBlock = new CodeBlock(
  0,
  [kt.games],
  [
    new CodeLine("def hello(x):"),
    new CodeLine("  print(x)"),
    new CodeLine(""),
    new CodeLine("deff hello(x): ", StateEnum.ERROR),
    new CodeLine("def hello(x)", StateEnum.CORRECT, "Good Catch", 10),
    new CodeLine("function hello(x)", StateEnum.WRONG),
    new CodeLine("def hello(x)", StateEnum.WRONG),
    new CodeLine(" print(x)"),
  ],
  "text"
);
