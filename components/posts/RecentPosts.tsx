import PostCard from "components/card/PostCard";
import { Post } from "contentlayer/generated";
import Link from "next/link";

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section id="recent-posts">
      <Link href="/blog">
        <h2 className="text-3xl font-bold hover:cursor-pointer hover:text-blueAccent transition-colors w-fit">
          Recent Posts
        </h2>
      </Link>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, key) => (
          <PostCard key={key} {...post} />
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
