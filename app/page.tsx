import { BlogComponent } from "@/components/blog-component";
import { blogs } from "@/config/blogs";
import { AboutHome } from "@/components/about-home";
import { Article } from "@/types/article";
import { sortBlogsByDate } from "@/utils/blogsUtils";

export default function Home() {
  let filteredBlogs: Article[] = sortBlogsByDate(blogs);
  filteredBlogs.slice(0,4);
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to LearnPython.Today!
      </h1>
      <p className="font-bold text-xl text-muted-foreground mt-4">
        A pragmatic plan on how to learn python. How and Why.{" "}
      </p>
      <AboutHome />
      <BlogComponent blogs={filteredBlogs} />
    </div>
  );
}
