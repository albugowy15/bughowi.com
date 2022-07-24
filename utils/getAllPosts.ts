import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export default function getAllPosts(){
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    return posts
}