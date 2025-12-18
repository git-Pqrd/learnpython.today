import { Game } from "@/types/game";
import { Article } from "@/types/article";
import { CustomLink } from "@/types/link";

export type UnifiedContent =
  | { type: "game"; content: Game }
  | { type: "article"; content: Article }
  | { type: "link"; content: CustomLink };

export function isGame(
  content: UnifiedContent
): content is { type: "game"; content: Game } {
  return content.type === "game";
}

export function isArticle(
  content: UnifiedContent
): content is { type: "article"; content: Article } {
  return content.type === "article";
}

export function isLink(
  content: UnifiedContent
): content is { type: "link"; content: CustomLink } {
  return content.type === "link";
}

export function sortLevel(a: UnifiedContent, b: UnifiedContent): number {
  // Articles and Links always come after Games
  if ((isArticle(a) || isLink(a)) && isGame(b)) return 1;
  if (isGame(a) && (isArticle(b) || isLink(b))) return -1;

  // If both are non-games, maintain their current order
  if (!isGame(a) && !isGame(b)) return 0;

  // If both are Games, compare their levels
  if (isGame(a) && isGame(b)) {
    return (a.content as Game).level - (b.content as Game).level;
  }

  // This should never happen if all UnifiedContent are either Games, Articles, or Links
  return 0;
}
