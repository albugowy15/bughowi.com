import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@utils/contents";
import { Post } from "@contentlayer/generated";

const PostCard = (post: Post) => {
  return (
    <div className="bg-darkSecondary rounded-md overflow-hidden border-2 border-slate-300 border-opacity-40 hover:scale-[1.02] transition-transform ease-in-out">
      <div className="w-full h-48 relative overflow-hidden">
        <Image
          fill
          src={post.thumbnail}
          className="object-cover"
          alt={post.title}
        />
      </div>
      <div className="p-3 flex flex-col items-stretch justify-between">
        <div>
          <div className="flex gap-1 flex-wrap">
            {post.categories?.map((category, key) => (
              <p
                key={key}
                className="bg-blueAccent text-slate-100  p-1 text-sm rounded-md"
              >
                {category.name}
              </p>
            ))}
          </div>
          <div className="py-2" />
          <h3 className="font-bold text-xl inline hover:text-blueAccent transition-colors">
            <Link href={post.url}>{post.title}</Link>
          </h3>
        </div>
        <div className="p-4" />
        <div className="flex items-center justify-between text-sm">
          <p className="text-slate-300">{formatDate(post)}</p>
          <p className="text-slate-300">{post.readingTime.text}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
