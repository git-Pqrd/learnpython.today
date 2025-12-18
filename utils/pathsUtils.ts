import { Article } from "@/types/article";
import { Game } from "@/types/game";
import { UnifiedContent } from "@/types/unifiedContent";
import { blogs } from "@/config/blogs";
import { games } from "@/config/games";

export type ContentReference =
  | { type: "game"; href: string }
  | { type: "article"; href: string }
  | UnifiedContent;

export function findGameByHref(href: string): Game {
  const game = games.find((g) => g.href === href);
  if (!game) {
    throw new Error(`Game with href ${href} not found.`);
  }
  return game;
}

export function findArticleByHref(href: string): Article {
  const article = blogs.find((b) => b.href === href);
  if (!article) {
    throw new Error(`Article with href ${href} not found.`);
  }
  return article;
}

export function resolveContent(reference: ContentReference): UnifiedContent {
  if ("content" in reference) return reference;
  if (reference.type === "game") {
    return { type: "game", content: findGameByHref(reference.href) };
  }
  return { type: "article", content: findArticleByHref(reference.href) };
}
