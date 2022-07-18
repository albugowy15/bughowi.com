import Image from "next/image";
import Link from "next/link";

interface Post {
  post: {
    title: string;
    image: string;
    category: string;
    date: string;
    timeToRead: string;
  };
}

const HomePostCard = ({ post }: Post) => {
  return (
    <Link href="/post/3434">
      <div className="bg-darkSecondary rounded-md overflow-hidden cursor-pointer border-2 border-slate-300 border-opacity-40 hover:scale-[1.02] transition-transform ease-in-out">
        <div className="w-full h-48 relative">
          <Image layout="fill" src={post.image} alt={post.title} />
        </div>
        <div className="p-3 flex flex-col items-stretch justify-between">
          <div>
            <p className="uppercase tracking-widest">{post.category}</p>
            <h2 className="font-bold text-xl py-2">{post.title}</h2>
          </div>
          <div className="p-4" />
          <div className="flex items-center justify-between text-sm">
            <p className="text-white text-opacity-60">{`On ${post.date}`}</p>
            <p className="text-white text-opacity-60">{`${post.timeToRead} read`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomePostCard;
