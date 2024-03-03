export class Section {
  title: string;
  id: string;
  seen?: boolean;
  subsections?: Section[];

  constructor(title: string, id: string, seen = false, subsections = []) {
    this.title = title;
    this.id = id;
    this.seen = seen;
    this.subsections = subsections;
  }
}
