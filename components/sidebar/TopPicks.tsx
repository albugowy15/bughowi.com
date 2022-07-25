import TopPickCard from "components/card/TopPickCard";
import { Post } from "contentlayer/generated";

function TopPicks({ posts }: { posts: Post[] }) {
  return (
    <div className="mt-8 md:mt-0">
      <h2 className="font-bold text-xl">Top Picks</h2>
      <div className="flex flex-col justify-center gap-3 mt-3">
        {posts.map((pick, key) => (
          <TopPickCard key={key} {...pick} />
        ))}
      </div>
    </div>
  );
}

export default TopPicks;
