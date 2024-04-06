import { Game } from "@/types/game";
import { knownTags as kt } from "@/types/tag";

export const gamesDict: { [key: string]: Game } = {
  easy_syntax: {
    title: "Easy Error Finder",
    href: "/games/easy-error-finder",
    tags: [kt.syntax, kt.python],
    synopsis:
      "Find the errors and test your Syntax. Make sure you have the syntax basics with this fun and interactive Python Game.",
    date: "04-01-2023",
    level: 0,
    disabled: false,
    extern: false,
  },
} as const;

export const games = Object.values(gamesDict).filter(
  (game: Game) => !game.disabled
);
