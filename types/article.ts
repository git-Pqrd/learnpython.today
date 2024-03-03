import { Tag } from "@/types/tag";

export class Article {
  href: string;
  title: string;
  tags: Tag[];
  synopsis: string;
  date: string;
  /** Link is the attr set with either the href or the slug. */
  extern: boolean;
  disabled?: boolean;

  constructor(
    href: string,
    title: string,
    tags: Tag[],
    synopsis: string,
    date: string,
    disabled: boolean = false,
    extern: boolean = false
  ) {
    this.href = href;
    this.title = title;
    this.tags = tags;
    this.synopsis = synopsis;
    this.date = date;
    this.disabled = disabled;
    this.extern = extern;
  }
}
