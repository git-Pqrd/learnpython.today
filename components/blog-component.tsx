"use client";
import React, { useState, useMemo } from "react";
import { UnifiedCard } from "@/components/card-component";
import { useProgressStore } from '@/stores/progress-store';
import {
  UnifiedContent,
  isGame,
  isArticle,
  sortLevel,
} from "@/types/unifiedContent";

export function BlogComponent({
  contents,
  showFilters = false,
}: {
  contents: UnifiedContent[];
  showFilters?: boolean;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [contentType, setContentType] = useState("all");
  const [completionStatus, setCompletionStatus] = useState("all");
  const [sortBy, setSortBy] = useState("title");
  const isContentCompleted = useProgressStore.getState().isContentCompleted;

  const filteredAndSortedContents = useMemo(() => {
    return contents
      .filter((c) => {
        const matchesSearch =
          c.content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.content.synopsis.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType =
          contentType === "all" ||
          (contentType === "game" && isGame(c)) ||
          (contentType === "article" && isArticle(c));
        const matchesCompletion =
          completionStatus === "all" ||
          (completionStatus === "finished" && isContentCompleted(c.content.href)) ||
          (completionStatus === "unfinished" && !isContentCompleted(c.content.href));
        return matchesSearch && matchesType && matchesCompletion;
      })
      .sort((a, b) => {
        if (sortBy === "title") {
          return a.content.title.localeCompare(b.content.title);
        } else if (sortBy === "level") {
          return sortLevel(a, b);
        } else if (sortBy === "level_desc") {
          return -1 * sortLevel(a, b);
        }
        return 0;
      });
  }, [contents, searchTerm, contentType, sortBy, completionStatus, isContentCompleted]);

  return (
    <div className="space-y-4 w-full">
      {showFilters && (
        <div className="flex flex-wrap gap-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-auto p-2 border rounded"
          />
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="w-full sm:w-auto p-2 border rounded"
          >
            <option value="all">All Types</option>
            <option value="game">Games</option>
            <option value="article">Articles</option>
          </select>
          <select
            value={completionStatus}
            onChange={(e) => setCompletionStatus(e.target.value)}
            className="w-full sm:w-auto p-2 border rounded"
          >
            <option value="all">Everything</option>
            <option value="finished">Finished</option>
            <option value="unfinished">Not Yet Done</option>
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full sm:w-auto p-2 border rounded"
          >
            <option value="title">Sort by Title</option>
            <option value="level">Sort by Level</option>
            <option value="level_desc">Sort by Level (DESC)</option>
          </select>
        </div>
      )}
      <div className="max-w-full w-full gap-2 flex flex-col md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
        {filteredAndSortedContents.map((c: UnifiedContent) => (
          <UnifiedCard key={c.content.title} content={c} />
        ))}
      </div>
    </div>
  );
}
