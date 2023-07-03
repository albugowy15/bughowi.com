import { Post } from "../../../../.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import { formatDate } from "@utils/contents";
import BlurImage from "@components/common/BlurImage";
import Typography from "@components/Typography";

function FeaturedPost({ post }: { post: Post }) {
  return (
    <section className="flex flex-col md:flex-row md:h-[20rem] lg:h-[22rem] bg-darkSecondary w-full  overflow-hidden">
      <div className="w-full h-72 lg:w-[40%] md:w-[45%] md:h-full relative overflow-hidden">
        <BlurImage
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <div className="flex gap-2 flex-wrap">
            {post.categories?.map((category, key) => (
              <Typography
                variant="body1"
                key={key}
                className="bg-blueAccent p-1 rounded-md"
              >
                {category.name}
              </Typography>
            ))}
          </div>
          <Typography
            variant="h3"
            className="mt-4 lg:mt-6 hover:text-blueAccent transition-colors"
          >
            <Link href={post.url}>{post.title}</Link>
          </Typography>
          <Typography variant="body1" className="mt-2 lg:mt-4">
            {post.description}
          </Typography>
        </div>
        <div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <AiOutlineClockCircle className=" text-opacity-60" />
              <Typography variant="label1">{formatDate(post)}</Typography>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineEye className=" text-opacity-60" />
              <Typography variant="label1">{post.readingTime.text}</Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;
