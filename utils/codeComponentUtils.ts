import { CodeLine, StateEnum } from "@/types/codeLine";
import { CodeBlock } from "@/types/codeBlock";
import { Game } from "@/types/game";

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

export function replacer(key: string, value: any) {
  if (value instanceof CodeLine) {
    return {
      dataType: "CodeLine", // Identify the object type
      content: value.content,
      state: value.state,
      hint: value.hint,
      score: value.score,
    };
  } else if (value instanceof CodeBlock) {
    return {
      dataType: "CodeBlock", // Identify the object type
      codeLines: value.codeLines, // Array will be handled by replacer when iterated over
      language: value.language,
      output: value.output,
      expected: value.expected,
      log: value.log,
    };
  }
  return value;
}

export function reviver(key: string, value: any): any {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "CodeBlock") {
      // Reconstruct CodeBlock instances, ensuring codeLines are properly reconstructed
      const codeLines = value.codeLines.map(
        (line: any) =>
          new CodeLine(
            line.content,
            parseInt(line.state),
            line.hint,
            line.score
          )
      );
      return new CodeBlock(
        codeLines,
        value.language,
        value.output,
        value.expected,
        value.log
      );
    }
  }
  return value; // Return the value as is if it doesn't need special handling
}
