// Wheter the line is OK, Problematic, A correct answer or a wrong one.
export enum StateEnum {
  NORMAL = 0,
  ERROR = 1,
  CORRECT = 2,
  WRONG = 3,
}

// Class for a line (or logic group) of code in the codeblock
export class CodeLine {
  content: string;
  state : StateEnum;
  hint : string;
  score : number;

  constructor(
    content: string,
    state: StateEnum = StateEnum.NORMAL,
    hint: string = "",
    score: number = 0,
  ) {
    this.content = content;
    this.state = state;
    this.hint = hint;
    this.score = score;
    if (this.score == 0 && this.state == StateEnum.CORRECT) {
        this.score = 10;
    }
  }
}
