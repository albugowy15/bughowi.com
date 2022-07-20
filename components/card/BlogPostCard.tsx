import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Post } from "types/types";
interface Props {
  post: Post;
}
function BlogPostCard({ post }: Props) {
  return (
    <div className="bg-darkSecondary border border-slate-500 rounded-lg hover:scale-[1.01] ease-in-out duration-500 overflow-hidden">
      <div className="w-full h-60 relative">
        <Image src={post.image} alt={post.title} layout="fill" />
      </div>
      <div className="flex flex-col p-4">
        <p className="text-sm uppercase tracking-widest">{post.category}</p>
        <p className="font-bold text-xl mt-4">{post.title}</p>
        {/* <p className="text-white text-opacity-60 mt-2">{post.description}</p> */}
        {/* <p className="font-bold text-blueAccent mt-3 cursor-pointer hover:text-blue-700">
          <Link href="/blog/slug-title">Read More...</Link>
        </p> */}
        <div className="flex justify-between mt-8">
          <p className="text-xs">{post.date}</p>
          <p className="text-xs">{post.timeToRead}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPostCard;
