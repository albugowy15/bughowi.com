import { allPosts, allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";

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