import { allPosts, allProjects } from "../../.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Post } from "../../.contentlayer/generated";


export function getAllPosts(){
    const posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    }).map((post) => ({
      description: post.description,
      date: post.date,
      readingTime: post.readingTime,
      thumbnail: post.thumbnail,
      title: post.title,
      url: post.url,
      categories: post.categories,
      isFeatured: post.isFeatured,
    }));

    return posts
}

export function getAllProjects() {
    const projects = allProjects.sort((a,b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    }).map((project) => ({
      date: project.date,
      title: project.title,
      description: project.description,
      url: project.url,
      techStack: project.techStack,
    }));

    return projects
}

export function formatDate(post: Post) {
    const dateString = format(parseISO(post.date), "LLLL y, d")
    return dateString
}

export const options = {
    // Use one of Shiki's packaged themes
    theme: 'one-dark-pro',
    // Or your own JSON theme
    onVisitLine(node: any) {
      // Prevent lines from collapsing in `display: grid` mode, and
      // allow empty lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{type: 'text', value: ' '}];
      }
    },
    // Feel free to add classNames that suit your docs
    onVisitHighlightedLine(node: any) {
      node.properties.className.push('highlighted');
    },
    onVisitHighlightedWord(node: any) {
      node.properties.className = ['word'];
    },
  };