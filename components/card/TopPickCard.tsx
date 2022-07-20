import Image from "next/image";
import { Pick } from "types/types";

interface Props {
  pick: Pick;
}
function TopPickCard({ pick }: Props) {
  return (
    <div className="flex">
      <div className="w-[30%] h-full relative">
        <Image src={pick.image} layout="fill" alt={pick.title} />
      </div>
    </div>
  );
}

export default TopPickCard;
