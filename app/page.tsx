import { BlogComponent } from "@/components/blog-component";
import { blogs } from "@/config/blogs";
import { AboutHome } from "@/components/about-home";
import { Article } from "@/types/article";
import { sortBlogsByDate } from "@/utils/blogsUtils";
import { CH1, SubTitle } from "@/components/custom-typo";
import ControllerIcon from "@/components/ui/controller-icon";
import { Button } from "@/components/ui/button";
import { UnifiedContent } from "@/types/unifiedContent";
import { games } from "@/config/games";

export default function Home() {
  let filteredBlogs: Article[] = sortBlogsByDate(blogs);
  filteredBlogs.slice(0, 4);

    const unifiedContent: UnifiedContent[] = [
    ...games.map(game => ({ type: 'game' as const, content: game })),
    ...blogs.map(article => ({ type: 'article' as const, content: article }))
  ];

  return (
    <div className="md:px-2 lg:px-4">
      <a
        href="/games/introduction"
        className="w-full cursor-pointer p-1 mx-auto max-w-[1000px] rounded
        bg-[url('/light-bg-pattern.svg')]
        dark:bg-[url('/dark-bg-pattern.svg')]
        md:p-3 mb-4
        shadow-sm shadow-primary
        justify-between items-center
        flex bg-muted-foreground
        hover:translate-y-[-5px] transition-all "
      >
        <span className="flex">
          <ControllerIcon />{" "}
          <span className="text-lg font-extrabold">
            {" "}
            We just launched our games
          </span>
        </span>
        <Button className="shadow-white">Try them now!</Button>
      </a>
      <CH1 text="Welcome to LearnPython.Today!" />
      <SubTitle text="🐍 Dive into Python with ease!" />
      <AboutHome />
      <BlogComponent contents={unifiedContent} showFilters={true} />
    </div>
  );
}
