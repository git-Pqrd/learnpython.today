import { create } from 'zustand'
import { persist } from "zustand/middleware";
import { UnifiedContent, isGame, isArticle } from "@/types/unifiedContent";

interface ProgressState {
  completedGames: string[];
  completedArticles: string[];
  currentContent: string | null;
  completeGame: (href: string) => void;
  completeArticle: (href: string) => void;
  setCurrentContent: (href: string | null) => void;
  isContentCompleted: (href: string) => boolean;
  getNextContent: (allContent: UnifiedContent[]) => UnifiedContent | null;
  getCompletedCounts: () => { games: number; articles: number };
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedGames: [],
      completedArticles: [],
      currentContent: null,
      completeGame: (href) =>
        set((state) => ({
          completedGames: [...new Set<string>([...state.completedGames, href])],
        })),
      completeArticle: (href) =>
        set((state) => ({
          completedArticles: [...new Set([...state.completedArticles, href])],
        })),
      setCurrentContent: (href) => set({ currentContent: href }),
      isContentCompleted: (content) => {
        const state = get();
        return (
          state.completedGames.includes(content) ||
          state.completedArticles.includes(content)
        );
      },
      getNextContent: (allContent) => {
        const state = get();
        const incompleteContent = allContent.filter(
          (content) => !state.isContentCompleted(content.content.href)
        );
        return incompleteContent.length > 0 ? incompleteContent[0] : null;
      },
      getCompletedCounts: () => {
        const state = get();
        return {
          games: state.completedGames.length,
          articles: state.completedArticles.length,
        };
      },
    }),
    {
      name: "user-progress",
      getStorage: () => localStorage,
      skipHydration: true,
    }
  )
);
