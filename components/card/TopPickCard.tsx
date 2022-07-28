import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

function TopPickCard(pick: Post) {
  return (
    <div className="flex items-stretch justify-start gap-3 w-full overflow-hidden h-16">
      <div className="w-[20%] relative object-cover rounded-lg overflow-hidden">
        <Image
          src={pick.thumbnail}
          layout="fill"
          alt={pick.title}
          objectFit="cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex gap-1">
          {pick.categories?.map((category, key) => (
            <p key={key} className="text-yellowAccent text-xs">
              {category.toLocaleString()}
            </p>
          ))}
        </div>

        <Link href={pick.url} prefetch={false}>
          <h3 className="font-bold hover:cursor-pointer hover:text-blueAccent transition-colors">
            {pick.title}
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default TopPickCard;
