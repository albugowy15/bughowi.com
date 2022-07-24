import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import formatDate from "utils/formatDate";

function FeaturedPost({ posts }: { posts: Post[] }) {
  const [featuredPost, setFeaturedPost] = useState<Post>();
  useEffect(() => {
    const post = posts.find((post) => post.isFeatured === true);
    if (typeof post != "undefined") {
      setFeaturedPost(post);
    }
    console.log(featuredPost);
  }, []);

  return (
    <Link href={featuredPost ? featuredPost.url : "https"}>
      <section className="hover:cursor-pointer flex flex-col md:flex-row md:h-[20rem] lg:h-[22rem] bg-darkSecondary w-full  overflow-hidden">
        <div className="w-full h-72 lg:w-[40%] md:w-[45%] md:h-full relative object-cover overflow-hidden">
          <Image
            src={
              featuredPost
                ? featuredPost.thumbnail
                : "https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Nzk5NjcwNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
            }
            alt={featuredPost?.title}
            layout="fill"
            objectFit={"cover"}
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-1">
          <div>
            <p className="tracking-widest text-sm text-slate-300 uppercase">
              {featuredPost?.categories?.at(0)?.toLocaleString()}
            </p>
            <p className="font-bold text-2xl mt-4 lg:text-4xl lg:mt-6">
              {featuredPost?.title}
            </p>
            <p className="mt-2 text-xl lg:mt-4 text-white text-opacity-80">
              {featuredPost?.description}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2">
                <AiOutlineClockCircle className="text-white text-opacity-60" />
                <p className="text-white text-sm text-opacity-60">
                  {featuredPost ? formatDate(featuredPost) : "date"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineEye className="text-white text-opacity-60" />
                <p className="text-white text-sm text-opacity-60">
                  {featuredPost?.readingTime?.text}
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
