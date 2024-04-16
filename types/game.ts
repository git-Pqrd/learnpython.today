import { Tag } from "@/types/tag";
import { CodeBlock } from "./codeBlock";

export class Game {
  href: string;
  title: string;
  tags: Tag[];
  synopsis: string;
  date: string;
  text: string;
  level: number;
  codeBlock: string;
  extern?: boolean;
  starred?: boolean;
  disabled?: boolean;

  constructor(
    href: string,
    title: string,
    tags: Tag[],
    synopsis: string,
    date: string,
    text: string,
    level: number,
    codeBlock: string,
    starred: boolean = false,
    disabled: boolean = false,
    extern: boolean = false
  ) {
    this.href = href;
    this.title = title;
    this.tags = tags;
    this.synopsis = synopsis;
    this.date = date;
    this.text = text;
    this.level = level;
    this.codeBlock = codeBlock;
    this.starred = starred;
    this.disabled = disabled;
    this.extern = extern;
  }

}
