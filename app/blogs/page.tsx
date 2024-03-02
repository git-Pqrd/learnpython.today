import * as React from "react";

import { blogs, } from "@/config/blogs"
import { BlogComponent } from "@/components/blog-component";
import { Article } from "@/types/article";
import { sortBlogsByDate} from "@/utils/blogsUtils"

export default function HomeBlog() {
    let filteredBlogs: Article[] = sortBlogsByDate(blogs);
    console.log("HomeBlog");
    console.log(filteredBlogs);

    return (
        <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                Latest articles
            </h1>
            <BlogComponent blogs={blogs}/>
        </div>
    );
}
