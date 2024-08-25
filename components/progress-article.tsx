"use client";
import React, { useState, useEffect } from "react";
import { useProgressStore } from "@/stores/progress-store";
import { useReward } from "react-rewards";

export function ProgressArticle({ href, className }: { href: string, className?: string }) {
  const isContentCompleted = useProgressStore.getState().isContentCompleted;
  const completedArticles = useProgressStore.getState().completedArticles;
  const completeArticle = useProgressStore.getState().completeArticle;
  const [progress, setProgress] = useState(0);
  const { reward } = useReward("rewardId", "confetti", {
    elementCount: 150,
    angle: 210,
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;

      if (progress > 97 && !isContentCompleted(href)) {
        if (!isContentCompleted(href)) {
          completeArticle(href);
        }
        reward();
      }

      if (scrollableHeight > 0) {
        const newProgress = (scrollTop / scrollableHeight) * 100;
        setProgress(Math.max(progress, Math.min(newProgress, 100)));
      } else {
        setProgress(100);
        reward();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial progress

    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress, href, completeArticle, isContentCompleted, reward]);

  return (
    <div id="rewardId" className={`w-full xl:block h-1 bg-gray-200 z-50 ${className}`}>
      <div
        className=" bg-green-700 h-1 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
