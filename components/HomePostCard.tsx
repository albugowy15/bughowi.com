import Image from "next/image";

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
    <div className="bg-darkSecondary">
      <div className="w-full h-[200px] overflow-clip relative">
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
  );
};

export default HomePostCard;
