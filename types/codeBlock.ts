import { CodeLine } from "@/types/codeLine";

export class CodeBlock {
  codeLines: CodeLine[];
  language: string;
  output: string;
  expected: string;
  log: string;

  constructor(
    codeLines: CodeLine[],
    language: string = "py",
    output: string = "",
    expected: string = "",
    log: string = ""
  ) {
    this.codeLines = codeLines;
    this.language = language;
    this.output = output;
    this.expected = expected;
    this.log = log;
  }

}
