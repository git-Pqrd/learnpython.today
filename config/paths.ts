import { Path } from "@/types/path";
import { LINK_TYPE, CustomLink } from "@/types/link";
import { blogsDict } from "@/config/blogs";
import { resolveContent, findGameByHref } from "@/utils/pathsUtils";

const quickStartVideo = new CustomLink(
  "https://www.youtube.com/watch?v=kqtD5dpn9C8",
  "Python Explained in 5 Minutes",
  true,
  LINK_TYPE.YOUTUBE_VIDEO
);

const debuggingWalkthrough = new CustomLink(
  "https://www.youtube.com/watch?v=Qd8JT0bnJGs",
  "Debugging Python Like a Pro",
  true,
  LINK_TYPE.YOUTUBE_VIDEO
);

const basePaths: Path[] = [
  {
    href: "python-basics",
    title: "Python Basics Path",
    difficulty: 1,
    synopsis: "Learn Python fundamentals through hands-on practice.",
    starred: true,
    steps: [
      {
        name: "Getting Started",
        content: [
          { type: "article", content: blogsDict.intro },
          { type: "link", content: quickStartVideo },
          { type: "game", content: findGameByHref("introduction") },
        ],
      },
      {
        name: "Core Building Blocks",
        content: [
          resolveContent({ type: "article", href: "tuto-for-basics" }),
          { type: "game", content: findGameByHref("variable-declaration-1") },
          { type: "game", content: findGameByHref("loop-1") },
          { type: "link", content: new CustomLink("https://www.python.org/about/gettingstarted/", "Official Python guide", true) },
        ],
      },
      {
        name: "Momentum",
        content: [
          resolveContent({ type: "article", href: "avoid-tutorial-hell" }),
          { type: "game", content: findGameByHref("list-append-1") },
          { type: "link", content: new CustomLink("https://www.youtube.com/watch?v=rfscVS0vtbw", "Full Python course (freeCodeCamp)", true, LINK_TYPE.YOUTUBE_VIDEO) },
        ],
      },
    ],
  },
  {
    href: "debugging-essentials",
    title: "Debugging & Problem Solving",
    difficulty: 2,
    synopsis: "Level up with debugging strategies, common pitfalls, and guided practice.",
    steps: [
      {
        name: "Mindset & Tools",
        content: [
          resolveContent({ type: "article", href: "how-to-debug-python" }),
          { type: "link", content: debuggingWalkthrough },
          { type: "link", content: new CustomLink("https://docs.python.org/3/library/pdb.html", "Official pdb guide", true) },
        ],
      },
      {
        name: "Debugging Practice",
        content: [
          { type: "game", content: findGameByHref("variable-assignment-typing-1") },
          { type: "game", content: findGameByHref("shopping-cart-calculation-1") },
          { type: "game", content: findGameByHref("string-formatting-syntax") },
        ],
      },
      {
        name: "Avoiding Pitfalls",
        content: [
          resolveContent({ type: "article", href: "how-will-learning-python-help-me" }),
          resolveContent({ type: "article", href: "how_many_months" }),
          resolveContent({ type: "article", href: "is_it_bad_to_learn_python_with_chatpgt" }),
        ],
      },
    ],
  },
];

const existingHref: string[] = [];
export const pathsDict: { [key: string]: Path } = basePaths.reduce(
  (acc: { [key: string]: Path }, path: Path) => {
    if (existingHref.includes(path.href)) {
      throw new TypeError(`HREF : ${path.href} already exists.`);
    }
    existingHref.push(path.href);
    acc[path.href] = path;
    return acc;
  },
  {}
);

export const paths: Path[] = Object.values(pathsDict).filter((path) => !path.disabled);
