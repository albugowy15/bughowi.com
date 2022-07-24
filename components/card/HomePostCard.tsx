import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import formatDate from "utils/formatDate";

const HomePostCard = (post: Post) => {
  return (
    <Link href={post.url}>
      <div className="bg-darkSecondary rounded-md overflow-hidden cursor-pointer border-2 border-slate-300 border-opacity-40 hover:scale-[1.02] transition-transform ease-in-out">
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
            <p className="uppercase tracking-widest">
              {post.categories?.at(0)?.toLocaleString()}
            </p>
            <h2 className="font-bold text-xl py-2">{post.title}</h2>
          </div>
          <div className="p-4" />
          <div className="flex items-center justify-between text-sm">
            <p className="text-white text-opacity-60">{formatDate(post)}</p>
            <p className="text-white text-opacity-60">
              {post.readingTime.text}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePostCard;
