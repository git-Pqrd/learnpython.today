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

/** Function to sort games by their date to be used in sort array op */
export const sortGamesByDate = (a: Game, b: Game) => {
  // Convert date strings to Date objects for comparison
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  // Sorting on B is less than A so last art goes first
  return dateB.getTime() - dateA.getTime();
};
