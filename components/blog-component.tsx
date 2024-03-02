import { BlogCard } from "@/components/card-component";
import { Article } from "@/types/article";

export function BlogComponent(props: { blogs: Article[] }) {
  return (
    <div className="flex flex-wrap flex-row">
      {props.blogs.map((article: Article) => (
        <BlogCard key={article.title} article={article} />
      ))}
    </div>
  );
}
