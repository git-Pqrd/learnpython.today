import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";

export function getDiscovered(
  codeBlock: CodeBlock,
  codeLine: CodeLine
): CodeLine[] {
  const discovered: CodeLine[] = [];
  const lines = codeBlock.codeLines;
  let i = lines.indexOf(codeLine) + 1;
  // loop until we have all the propositions.
  while (
    i < lines.length &&
    [StateEnum.WRONG, StateEnum.CORRECT].includes(lines[i].state)
  ) {
    discovered.push(lines[i]);
    i++;
  }

  return discovered;
}
