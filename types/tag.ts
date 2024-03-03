export class Tag {
  text: string;
  href: string;
  constructor(text: string, href: string) {
    this.text = text;
    this.href = href;
  }
}

// Define knownTags with explicit type annotation
export const knownTags: { [key: string]: Tag } = {
    python: {
        text: "Python",
        href: "/tags/python/",
    },
    discussion: {
        text: "Discussion",
        href: "/tags/dicussion/",
    },
    path:  {
        text: "Path",
        href: "/tags/path",
    }
};
