import { Article } from "@/types/article";
import { knownTags as kt } from "@/types/tag";

export const blogs: Article[] = [
  {
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
  {
    title: "How to avoid tutorial-hell",
    href: "/blogs/avoid-tutorial-hell",
    tags: [kt.discussion, kt.path],
    synopsis:
      "How to avoid endless tutorials and go straing to hands-on coding projects and real-world proficiency.",
    date: "03-03-2023",
    disabled: false,
    extern: false,
  },
  {
    title: "A bit about the author of the site",
    href: "/about",
    tags: [kt.discussion],
    synopsis:
      "Discover the person behind the website, their journey, and what inspires their content.",
    date: "02-03-2023",
    disabled: false,
    extern: false,
  },
];
