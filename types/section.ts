export class Section {
  title: string;
  href: string;
  seen: boolean;

  constructor(title: string,
              href: string,
              seen = false) {
    this.title = title;
    this.href = href;
    this.seen = seen;
  }
}
