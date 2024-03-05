import Image from "next/image";
import { BlogComponent } from "@/components/blog-component";
import { blogs } from "@/config/blogs";
import { AboutHome } from "@/components/about-home";
import { Article } from "@/types/article";
import { sortBlogsByDate } from "@/utils/blogsUtils";
import { CH1, SubTitle } from "@/components/custom-typo";

export default function Home() {
  let filteredBlogs: Article[] = sortBlogsByDate(blogs);
  filteredBlogs.slice(0, 4);
  return (
    <div>
      <CH1 text="Welcome to LearnPython.Today!" />
      <SubTitle text="A pragmatic plan on how to learn python. How and Why." />
      <AboutHome />
      <BlogComponent blogs={filteredBlogs} />
    </div>
  );
}
