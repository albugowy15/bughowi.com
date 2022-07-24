import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

export default function formatDate(post: Post) {
    const dateString = format(parseISO(post.date), "LLLL y, d")
    return dateString
}