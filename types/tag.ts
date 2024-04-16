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
    },
    resources:  {
        text: "Resources",
        href: "/tags/resources",
    },
    how_to: {
        text: "How To",
        href: "/tags/how_to",
    },
    syntax: {
        text: "Syntax",
        href: "/tags/syntax",
    },
    ds: {
        text: "Data Structure",
        href: "/tags/ds",
    },
    lists: {
        text: "List",
        href: "/tags/lists",
    }
};
