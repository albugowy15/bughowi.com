import PostCard from "@components/card/PostCard";
import { Post } from "../../../.contentlayer/generated";
import Link from "next/link";
import { motion } from "framer-motion";

const RecentPosts = ({ posts }: { posts: Post[] }) => {
	return (
		<motion.section initial={{ opacity: 0.1, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", duration: 1 }} viewport={{ once: true }} id="recent-posts" className="scroll-my-16">
			<Link href="/blog">
				<h2 className="text-3xl font-bold hover:cursor-pointer hover:text-blueAccent transition-colors w-fit">Recent Posts</h2>
			</Link>
			<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts.map((post, key) => (
					<PostCard key={key} {...post} />
				))}
			</div>
		</motion.section>
	);
};

export default RecentPosts;
