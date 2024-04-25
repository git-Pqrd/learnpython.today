import { Tag } from "@/types/tag";

export class Article {
  href: string;
  title: string;
  tags: Tag[];
  synopsis: string;
  date: string;
  extern?: boolean;
  starred?: boolean;
  disabled?: boolean;
  markdown?: boolean;

  constructor(
    href: string,
    title: string,
    tags: Tag[],
    synopsis: string,
    date: string,
    starred: boolean = false,
    disabled: boolean = false,
    extern: boolean = false,
    markdown: boolean = false
  ) {
    this.href = href;
    this.title = title;
    this.tags = tags;
    this.synopsis = synopsis;
    this.date = date;
    this.starred = starred;
    this.disabled = disabled;
    this.extern = extern;
    this.markdown = markdown;
  }
}
