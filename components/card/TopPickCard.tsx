import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { Pick } from "types/types";

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
        <p className="text-white text-opacity-40 text-xs tracking-widest">
          {pick.categories?.at(0)?.toLocaleString()}
        </p>
        <Link href={pick.url}>
          <h3 className="font-bold hover:cursor-pointer">{pick.title}</h3>
        </Link>
      </div>
    </div>
  );
}

export default TopPickCard;
