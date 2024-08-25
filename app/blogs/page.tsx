import * as React from "react";

import { CH1 } from "@/components/custom-typo";
import { blogs } from "@/config/blogs";
import { BlogComponent } from "@/components/blog-component";
import { sortBlogsByDate } from "@/utils/blogsUtils";
import { UnifiedContent } from "@/types/unifiedContent";

export default function HomeBlog() {
  const filteredBlogs: UnifiedContent[] = [
    ...sortBlogsByDate(blogs).map((article) => ({
      type: "article" as const,
      content: article,
    })),
  ];

  return (
    <div>
      <CH1 text="Latest articles" />
      <BlogComponent contents={filteredBlogs} />
    </div>
  );
}
