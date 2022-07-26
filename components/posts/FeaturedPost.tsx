import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import formatDate from "utils/formatDate";

function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link href={post ? post.url : "https"}>
      <section className="hover:cursor-pointer flex flex-col md:flex-row md:h-[20rem] lg:h-[22rem] bg-slate-200 dark:bg-darkSecondary w-full  overflow-hidden">
        <div className="w-full h-72 lg:w-[40%] md:w-[45%] md:h-full relative object-cover overflow-hidden">
          <Image
            src={
              post
                ? post.thumbnail
                : "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Nzk5NjcwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            }
            alt={post?.title}
            layout="fill"
            objectFit={"cover"}
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <div className="flex gap-2 flex-wrap">
              {post?.categories?.map((category, key) => (
                <p
                  key={key}
                  className="bg-blueAccent p-1 text-slate-100 rounded-md"
                >
                  {category.toLocaleString()}
                </p>
              ))}
            </div>
            <p className="font-bold text-2xl mt-4 lg:text-4xl lg:mt-6">
              {post?.title}
            </p>
            <p className="mt-2 text-xl lg:mt-4 text-opacity-80">
              {post?.description}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <AiOutlineClockCircle className=" text-opacity-60" />
                <p className=" text-sm text-opacity-60">
                  {post ? formatDate(post) : "date"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineEye className=" text-opacity-60" />
                <p className="text-sm text-opacity-60">
                  {post?.readingTime?.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

export default FeaturedPost;
