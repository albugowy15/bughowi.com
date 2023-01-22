import { Post } from "../../../.contentlayer/generated";
import { getNPosts } from "@utils/contents";
import Blog from "modules/blog/pages/Blog";

export default function BlogPage({
  posts,
  featuredPost,
}: {
  posts: Post[];
  featuredPost: Post;
}) {
  return <Blog posts={posts} featuredPost={featuredPost} />;
}

export async function getStaticProps() {
  const posts = getNPosts(6);
  const featuredPost = posts.find((post) => post.isFeatured === true);
  return {
    props: { posts, featuredPost },
  };
}
