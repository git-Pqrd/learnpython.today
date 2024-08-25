import * as React from "react";

import { CH1, SubTitle } from "@/components/custom-typo";
import { games } from "@/config/games";
import { UnifiedContent } from "@/types/unifiedContent";
import { BlogComponent } from "@/components/blog-component";

export default function HomeBlog() {
  const unifiedContent: UnifiedContent[] = [
    ...games.map(game => ({ type: 'game' as const, content: game })),
  ];
  return (
    <div>
      <CH1 text="Python Games" />
      <SubTitle text="Learn Python by playing games" />
      <BlogComponent contents={unifiedContent} showFilters={true} />
    </div>
  );
}
