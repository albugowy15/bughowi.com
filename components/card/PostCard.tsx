import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "utils/contents";

const PostCard = (post: Post) => {
  return (
    <Link href={post.url}>
      <div className="bg-slate-200 dark:bg-darkSecondary rounded-md overflow-hidden cursor-pointer border-2 border-slate-300 border-opacity-40 hover:scale-[1.02] transition-transform ease-in-out">
        <div className="w-full h-48 relative overflow-hidden">
          <Image
            layout="fill"
            objectFit="cover"
            src={post.thumbnail}
            alt={post.title}
          />
        </div>
        <div className="p-3 flex flex-col items-stretch justify-between">
          <div>
            <div className="flex gap-2 flex-wrap">
              {post.categories?.map((category, key) => (
                <p
                  key={key}
                  className="bg-blueAccent text-slate-100  p-1 text-sm rounded-md"
                >
                  {category.toLocaleString()}
                </p>
              ))}
            </div>
            <h3 className="font-bold text-xl sm:text-2xl py-2">{post.title}</h3>
          </div>
          <div className="p-4" />
          <div className="flex items-center justify-between text-sm">
            <p className="text-slate-800 dark:text-slate-300">
              {formatDate(post)}
            </p>
            <p className="text-slate-800 dark:text-slate-300">
              {post.readingTime.text}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
