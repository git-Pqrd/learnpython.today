import { Game } from "@/types/game";
import { knownTags as kt } from "@/types/tag";

export const gamesDict: { [key: string]: Game } = {
  introduction: {
    title: "Introduction",
    href: "/games/introduction",
    tags: [kt.syntax, kt.python],
    synopsis:
      "Get started with our games and find out how to play.",
    date: "04-07-2024",
    level: 0,
    disabled: false,
    extern: false,
  },
  easy_string: {
    title: "How to declare a string",
    href: "/games/easy-string",
    tags: [kt.syntax, kt.python],
    synopsis:
      "Find how to declare a simple string and how not to!",
    date: "04-01-2024",
    level: 0,
    disabled: false,
    extern: false,
  },
  easy_2_string: {
    title: "How to declare a string II",
    href: "/games/easy-2-string",
    tags: [kt.syntax, kt.python],
    synopsis:
      "Find how to declare a simple string and how not to!",
    date: "04-01-2024",
    level: 0,
    disabled: false,
    extern: false,
  },
} as const;

export const games = Object.values(gamesDict).filter(
  (game: Game) => !game.disabled
);
