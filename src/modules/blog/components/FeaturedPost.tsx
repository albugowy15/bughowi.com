import { Post } from "../../../../.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";
import { formatDate } from "@utils/contents";

function FeaturedPost({ post }: { post: Post }) {
	return (
		<section className="flex flex-col md:flex-row md:h-[20rem] lg:h-[22rem] bg-darkSecondary w-full  overflow-hidden">
			<div className="w-full h-72 lg:w-[40%] md:w-[45%] md:h-full relative overflow-hidden">
				<Image src={post.thumbnail} alt={post.title} fill className="object-cover" />
			</div>
			<div className="p-4 flex flex-col justify-between flex-1">
				<div>
					<div className="flex gap-2 flex-wrap">
						{post.categories?.map((category, key) => (
							<p key={key} className="bg-blueAccent p-1 text-slate-100 rounded-md">
								{category.name}
							</p>
						))}
					</div>
					<h3 className="font-bold text-2xl mt-4 lg:text-4xl lg:mt-6 hover:text-blueAccent transition-colors w-fit">
						<Link href={post.url}>{post.title}</Link>
					</h3>
					<p className="mt-2 text-xl lg:mt-4 text-opacity-80">{post.description}</p>
				</div>
				<div>
					<div className="flex items-center justify-between mt-6">
						<div className="flex items-center gap-2">
							<AiOutlineClockCircle className=" text-opacity-60" />
							<p className=" text-sm text-opacity-60">{formatDate(post)}</p>
						</div>
						<div className="flex items-center gap-2">
							<AiOutlineEye className=" text-opacity-60" />
							<p className="text-sm text-opacity-60">{post.readingTime.text}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturedPost;
