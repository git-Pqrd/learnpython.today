import * as React from "react";

import { CH1 } from "@/components/custom-typo";
import { blogs, } from "@/config/blogs"
import { BlogComponent } from "@/components/blog-component";
import { Article } from "@/types/article";
import { sortBlogsByDate} from "@/utils/blogsUtils"

export default function HomeBlog() {
    let filteredBlogs: Article[] = sortBlogsByDate(blogs);

    return (
        <div>
            <CH1 text="Latest articles" />
            <BlogComponent blogs={filteredBlogs}/>
        </div>
    );
}
