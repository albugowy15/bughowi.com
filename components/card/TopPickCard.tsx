import Image from "next/image";
import { Pick } from "types/types";

interface Props {
  pick: Pick;
}
function TopPickCard({ pick }: Props) {
  return (
    <div className="flex items-stretch justify-start gap-3 w-full overflow-hidden">
      <div className="w-[20%] relative object-cover rounded-lg overflow-hidden">
        <Image
          src={pick.image}
          layout="fill"
          alt={pick.title}
          objectFit="cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-white text-opacity-40 text-xs tracking-widest">
          {pick.category}
        </p>
        <h3 className="font-bold">{pick.title}</h3>
      </div>
    </div>
  );
}

export default TopPickCard;
