import { Tag } from "@/types/tag";

export class Game {
  href: string;
  title: string;
  tags: Tag[];
  synopsis: string;
  date: string;
  level: number;
  extern?: boolean;
  starred?: boolean;
  disabled?: boolean;

  constructor(
    href: string,
    title: string,
    tags: Tag[],
    synopsis: string,
    date: string,
    level: number,
    starred: boolean = false,
    disabled: boolean = false,
    extern: boolean = false
  ) {
    this.href = href;
    this.title = title;
    this.tags = tags;
    this.synopsis = synopsis;
    this.date = date;
    this.level = level;
    this.starred = starred;
    this.disabled = disabled;
    this.extern = extern;
  }
}
