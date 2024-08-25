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
    <div className="bg-muted p-4 rounded-xl shadow-md mt-3 md:my-3">
      <div className="text-xl font-bold opacity-35 align-middle justify-end flex w-full">
        {" "}
        Your Progress
        <Trophy className="ml-2 text-yellow-500" />
      </div>
      <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 xl:gap-9">
        <div className="self-end">
          <div className="flex justify-between items-center mb-2">
            <span className="flex items-center">
              <ControllerIcon />
              Games Completed
            </span>
            <span className=" ml-2 font-semibold">
              {completedCounts.games} / {totalGames}
            </span>
          </div>
          <Progress value={animatedGameProgress} className="h-2" />
        </div>
        <div className="self-end">
          <div className="flex justify-between items-center mb-2">
            <span className="flex items-center">
              <BookOpen className="mr-2 text-blue-500" />
              Articles Read
            </span>
            <span className="font-semibold">
              {completedCounts.articles} / {totalArticles}
            </span>
          </div>
          <Progress value={animatedArticleProgress} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default UserProgressWidget;
