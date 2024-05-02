import { BlogComponent } from "@/components/blog-component";
import { blogs } from "@/config/blogs";
import { AboutHome } from "@/components/about-home";
import { Article } from "@/types/article";
import { sortBlogsByDate } from "@/utils/blogsUtils";
import { CH1, SubTitle } from "@/components/custom-typo";
import ControllerIcon from "@/components/ui/controller-icon";
import { Button } from "@/components/ui/button";

export default function Home() {
  let filteredBlogs: Article[] = sortBlogsByDate(blogs);
  filteredBlogs.slice(0, 4);
  return (
    <div className="md:px-2 lg:px-4">
      <a
        href="/games/"
        className="w-full cursor-pointer p-1 mx-auto max-w-[1000px] rounded
                justify-between items-center
                md:mb-2 mb-4 flex bg-muted-foreground
                hover:translate-y-[-5px] transition-all
        "
      >
        <span className="flex">
          <ControllerIcon />{" "}
          <span className="text-lg font-extrabold"> We just launched our games</span>
        </span>
        <Button>Try them now!</Button>
      </a>
      <CH1 text="Welcome to LearnPython.Today!" />
      <SubTitle text="A pragmatic plan on how to learn python. How and Why." />
      <AboutHome />
      <BlogComponent blogs={filteredBlogs} />
    </div>
  );
}
