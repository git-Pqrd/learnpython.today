import { Article } from "@/types/article";
import { knownTags as kt } from "@/types/tag";

export const blogsDict: { [key: string]: Article } = {
  intro: {
    title: "The 3 Steps of learning Python 🐍",
    href: "/blogs/intro",
    tags: [kt.python, kt.path, kt.discussion],
    synopsis:
      "Learning Python can be divided in 3 steps. Let's dive into what those are.",
    date: "03-03-2023",
    disabled: false,
    extern: false,
    starred: true,
  },
  tutorial_hell: {
    title: "How to avoid tutorial-hell",
    href: "/blogs/avoid-tutorial-hell",
    tags: [kt.discussion, kt.path],
    synopsis:
      "How to avoid endless tutorials and go straing to hands-on coding projects and real-world proficiency.",
    date: "03-03-2023",
    disabled: false,
    extern: false,
  },
  about_me: {
    title: "A bit about the author of the site",
    href: "/about",
    tags: [kt.discussion],
    synopsis:
      "Discover the person behind the website, their journey, and what inspires their content.",
    date: "02-03-2023",
    disabled: false,
    extern: false,
  },
  tuto_for_basics: {
    title: "Resources for the first step.",
    href: "/blogs/tuto-for-basics",
    tags: [kt.discussion, kt.path, kt.resources],
    synopsis:
      "Get resources to clear as fast as possible your first step of the Python learning process.",
    date: "04-03-2023",
    extern: false,
  },
  how_to_debug: {
    title: "The Art of Debugging in Python",
    href: "/blogs/how-to-debug-python",
    tags: [kt.how_to, kt.resources],
    synopsis: "A Guide to Squashing Bugs Efficiently",
    date: "11-03-2023",
    extern: false,
    disabled: false
  },
} as const;

export const blogs = Object.values(blogsDict).filter(
  (art: Article) => !art.disabled
);
