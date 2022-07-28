import { allPosts, allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";


export function getAllPosts(){
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    return posts
}

export function getAllProjects() {
    const projects = allProjects.sort((a,b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })

    return projects
}

export function formatDate(post: Post) {
    const dateString = format(parseISO(post.date), "LLLL y, d")
    return dateString
}