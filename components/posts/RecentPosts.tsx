import HomePostCard from "components/card/HomePostCard";
import { Post } from "contentlayer/generated";

// const DUMMY_POSTS = [
//   {
//     category: "next.js",
//     image:
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
//     title:
//       "Indulgence unreserved is the alteration appearance my an astonished",
//     author: "M. K. Bughowi",
//     date: "10th July 2022",
//     timeToRead: "4 mins",
//   },
//   {
//     category: "category",
//     image:
//       "https://images.unsplash.com/photo-1611329532992-0b7ba27d85fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQyMzY0Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//     title: "Sample title for blog post you might see as Next js is awesome",
//     author: "M. K. Bughowi",
//     date: "23th September 2022",
//     timeToRead: "10 mins",
//   },
//   {
//     category: "next.js",
//     image:
//       "https://images.unsplash.com/photo-1516528387618-afa90b13e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
//     title: "Crash Course: Core Concepts of Next.js And what new in Next js 12",
//     author: "M. K. Bughowi",
//     date: "10th July 2022",
//     timeToRead: "4 mins",
//   },
//   {
//     category: "react.js",
//     image:
//       "https://images.unsplash.com/photo-1476725994324-6f6833ea0631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQyMzc4Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//     title: "React why is so popular. How dificul to learn React for beginner",
//     author: "M. K. Bughowi",
//     date: "10th June 2022",
//     timeToRead: "5 mins",
//   },
//   {
//     category: "android",
//     image:
//       "https://images.unsplash.com/photo-1560964645-5296b5099677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQyMzc0MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//     title:
//       "Jetpack Compose is the next UI toolkit to create beatiful UI for Android",
//     author: "M. K. Bughowi",
//     date: "30th July 2022",
//     timeToRead: "3 mins",
//   },
//   {
//     category: "tailwind",
//     image:
//       "https://images.unsplash.com/photo-1565942443747-031188e6e56c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzQyMzcxMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
//     title: "Tailwind CSS is the best CSS framework in 2022",
//     author: "M. K. Bughowi",
//     date: "15th August 2022",
//     timeToRead: "2 mins",
//   },
// ];

const RecentPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <section id="recent-posts">
      <h1 className="text-2xl font-bold">Recent Posts</h1>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, key) => (
          <HomePostCard key={key} {...post} />
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
