import { Tag } from "@/types/tag";

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
    basics: {
        text: "Basics",
        href: "/tags/basic",
    },
    ds: {
        text: "Data Structure",
        href: "/tags/ds",
    },
    lists: {
        text: "Lists And Array",
        href: "/tags/lists",
    },
    function: {
        text: "Function",
        href: "/tags/function",
    }
};
