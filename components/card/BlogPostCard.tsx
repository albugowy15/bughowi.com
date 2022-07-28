import { Post } from "contentlayer/generated";
import Image from "next/image";
import formatDate from "utils/formatDate";
import Link from "next/link";

function BlogPostCard(post: Post) {
  return (
    <>
      <Link href={post.url}>
        <div className="bg-slate-200 dark:bg-darkSecondary border border-slate-300 border-opacity-40 rounded-lg hover:scale-[1.01] hover:cursor-pointer ease-in-out duration-500 overflow-hidden">
          <div className="w-full h-60 relative overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col p-4">
            <div className="flex gap-2 flex-wrap">
              {post.categories?.map((category, key) => (
                <p
                  key={key}
                  className="bg-blueAccent text-slate-100 p-1 text-sm rounded-md"
                >
                  {category.toLocaleString()}
                </p>
              ))}
            </div>
            <h3 className="font-bold text-xl mt-4">{post.title}</h3>
            {/* <p className="text-white text-opacity-60 mt-2">{post.description}</p> */}
            {/* <p className="font-bold text-blueAccent mt-3 cursor-pointer hover:text-blue-700">
          <Link href="/blog/slug-title">Read More...</Link>
        </p> */}
            <div className="flex justify-between mt-8">
              <p className="text-xs">{formatDate(post)}</p>
              <p className="text-xs">{post.readingTime.text}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogPostCard;
