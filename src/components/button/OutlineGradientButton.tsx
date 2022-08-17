import Link from "next/link";
import { Button } from "types/types";

function OutlineGradientButton({ url, title }: Button) {
  return (
    <Link href={url}>
      <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-0.5 font-bold">
        <span className="absolute h-full w-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05]"></span>
        <span className="duration-400 relative rounded-md bg-slate-100 dark:bg-darkPrimary px-4 py-3 transition-all ease-out group-hover:bg-opacity-0">
          <span className="relative text-gray-900 dark:text-white">
            {title}
          </span>
        </span>
      </button>
    </Link>
  );
}

export default OutlineGradientButton;
