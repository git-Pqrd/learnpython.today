export enum LINK_TYPE {
  TEXT_ARTICLE,
  YOUTUBE_VIDEO,
}

export class CustomLink {
  href: string;
  title: string;
  extern: boolean;
  type?: LINK_TYPE;

  constructor(
    href: string,
    title: string,
    extern: boolean = false,
    type: LINK_TYPE = LINK_TYPE.TEXT_ARTICLE
  ) {
    this.href = href;
    this.title = title;
    this.extern = extern;
    this.type = type;
  }
}
