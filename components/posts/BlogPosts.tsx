import BlogPostCard from "components/card/BlogPostCard";
import { Post } from "contentlayer/generated";
function BlogPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, key) => (
        <BlogPostCard key={key} {...post} />
      ))}
    </section>
  );
}

export default BlogPosts;
