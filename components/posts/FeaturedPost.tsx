import Image from "next/image";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";

function FeaturedPost() {
  return (
    <section className="flex flex-col md:flex-row md:h-[20rem] lg:h-[22rem] bg-darkSecondary w-full  overflow-hidden">
      <div className="w-full h-72 lg:w-[40%] md:w-[45%] md:h-full relative object-cover">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt="Featured Post Image"
          layout="fill"
          objectFit={"cover"}
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <p className="tracking-widest text-sm text-slate-300 uppercase">
            NEXT.JS
          </p>
          <p className="font-bold text-2xl mt-4 lg:text-4xl lg:mt-6">
            Embrace the Power of Storytelling in Businessess
          </p>
          <p className="mt-2 text-xl lg:mt-4 text-white text-opacity-80">
            Real estate require real stories. If you want to inspire people to
            partner with you, or buy from you, storytelling is one of the most
            productive ways
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              <AiOutlineClockCircle className="text-white text-opacity-60" />
              <p className="text-white text-sm text-opacity-60">
                20th July 2022
              </p>
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineEye className="text-white text-opacity-60" />
              <p className="text-white text-sm text-opacity-60">5 mins read</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPost;
