import { CodeLine } from "@/types/codeLine";
import { Tag } from "@/types/tag";

export class CodeBlock {
  level: number;
  tags: Tag[];
  codeLines: CodeLine[];
  language: string;
  solved: boolean;
  output: string;
  expected: string;
  log: string;

  constructor(
    level: number,
    tags: Tag[],
    codeLines: CodeLine[],
    language: string = "py",
    solved: boolean = false,
    output: string = "",
    expected: string = "",
    log: string = ""
  ) {
    this.level = level;
    this.tags = tags;
    this.codeLines = codeLines;
    this.language = language;
    this.solved = solved;
    this.output = output;
    this.expected = expected;
    this.log = log;
  }

}
