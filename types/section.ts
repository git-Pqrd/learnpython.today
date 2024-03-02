export class Section {
  title: string;
  href: string;
  seen?: boolean;
  subsections?: Section[];

  constructor(title: string, href: string, seen = false, subsections = []) {
    this.title = title;
    this.href = href;
    this.seen = seen;
    this.subsections = subsections;
  }
}
