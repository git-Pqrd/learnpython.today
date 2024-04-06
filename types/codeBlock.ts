import { CodeLine } from "@/types/codeLine";
import { Tag } from "@/types/tag";

export class CodeBlock {
  level: number;
  tags: Tag[];
  codeLines: CodeLine[];
  language: string;
  output: string;
  expected: string;
  log: string;

  constructor(
    level: number,
    tags: Tag[],
    codeLines: CodeLine[],
    language: string = "py",
    output: string = "",
    expected: string = "",
    log: string = ""
  ) {
    this.level = level;
    this.tags = tags;
    this.codeLines = codeLines;
    this.language = language;
    this.output = output;
    this.expected = expected;
    this.log = log;
  }

}
