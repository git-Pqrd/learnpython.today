import { Game } from "@/types/game";
import { Article } from "@/types/article";

export type UnifiedContent = {
  type: 'game' | 'article';
  content: Game | Article;
};

export function isGame(content: UnifiedContent): content is { type: 'game', content: Game } {
  return content.type === 'game';
}

export function isArticle(content: UnifiedContent): content is { type: 'article', content: Article } {
  return content.type === 'article';
}

export function sortLevel(a: UnifiedContent, b: UnifiedContent): number {
    // Articles always come after Games
    if (isArticle(a) && isGame(b)) return 1;
    if (isGame(a) && isArticle(b)) return -1;

    // If both are Articles, maintain their current order
    if (isArticle(a) && isArticle(b)) return 0;

    // If both are Games, compare their levels
    if (isGame(a) && isGame(b)) {
        return (a.content as Game).level - (b.content as Game).level;
    }

    // This should never happen if all UnifiedContent are either Games or Articles
    return 0;
}
