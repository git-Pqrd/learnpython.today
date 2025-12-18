"use client";
import React, { useEffect, useState } from "react";
import { useProgressStore } from "@/stores/progress-store";
import ControllerIcon from "@/components/ui/controller-icon";
import { Progress } from "@/components/ui/progress";
import { Trophy, BookOpen } from "lucide-react";

const UserProgressWidget = ({
  totalGames,
  totalArticles,
}: {
  totalGames: number;
  totalArticles: number;
}) => {
  const [completedCounts, setCompletedCounts] = useState({
    games: 0,
    articles: 0,
  });
  const [animatedGameProgress, setAnimatedGameProgress] = useState(0);
  const [animatedArticleProgress, setAnimatedArticleProgress] = useState(0);

  useEffect(() => {
    const getCompletedCounts = useProgressStore.getState().getCompletedCounts;
    setCompletedCounts(getCompletedCounts());

    const unsubscribe = useProgressStore.subscribe(() =>
      setCompletedCounts(getCompletedCounts())
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const gameProgress = (completedCounts.games / totalGames) * 100;
    const articleProgress = (completedCounts.articles / totalArticles) * 100;

    const animateProgress = (current: number, target: number, setter: any) => {
      if (current < target) {
        const next = Math.min(current + 1, target);
        setter(next);
        setTimeout(() => animateProgress(next, target, setter), 20);
      }
    };

    animateProgress(
      animatedGameProgress,
      gameProgress,
      setAnimatedGameProgress
    );
    animateProgress(
      animatedArticleProgress,
      articleProgress,
      setAnimatedArticleProgress
    );
  }, [completedCounts, totalGames, totalArticles, animatedArticleProgress, animatedGameProgress]);

  return (
    <div className="bg-gradient-to-br from-background to-muted/50 border border-border/50 rounded-2xl shadow-lg p-6 md:p-8 mt-4 md:mt-6 backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
          Your Progress
          <Trophy className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
        </h3>
      </div>

      {/* Progress Items */}
      <div className="space-y-4 md:space-y-6">
        {/* Games Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <ControllerIcon />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">
                Games Completed
              </span>
            </div>
            <span className="text-sm md:text-base font-bold text-foreground">
              {completedCounts.games} / {totalGames}
            </span>
          </div>
          <Progress 
            value={animatedGameProgress} 
            className="h-2.5 md:h-3 bg-muted" 
          />
        </div>

        {/* Articles Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">
                Articles Read
              </span>
            </div>
            <span className="text-sm md:text-base font-bold text-foreground">
              {completedCounts.articles} / {totalArticles}
            </span>
          </div>
          <Progress 
            value={animatedArticleProgress} 
            className="h-2.5 md:h-3 bg-muted" 
          />
        </div>
      </div>
    </div>
  );
};

export default UserProgressWidget;
