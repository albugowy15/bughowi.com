import { allPosts, allProjects } from "../../.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Post } from "../../.contentlayer/generated";
import { Options } from "rehype-pretty-code";

export function getAllPosts() {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .map((post) => ({
      description: post.description,
      date: post.date,
      readingTime: post.readingTime,
      thumbnail: post.thumbnail,
      title: post.title,
      url: post.url,
      categories: post.categories,
      isFeatured: post.isFeatured,
    }));

  return posts;
}

export function getNPosts(n: number) {
  const posts = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .map((post) => ({
      description: post.description,
      date: post.date,
      readingTime: post.readingTime,
      thumbnail: post.thumbnail,
      title: post.title,
      url: post.url,
      categories: post.categories,
      isFeatured: post.isFeatured,
    }))
    .slice(0, n);
  return posts;
}

export function getNProjects(n: number) {
  const projects = allProjects
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .map((project) => ({
      date: project.date,
      title: project.title,
      description: project.description,
      url: project.url,
      techStack: project.techStack,
    }))
    .slice(0, n);
  return projects;
}

export function getAllProjects() {
  const projects = allProjects
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .map((project) => ({
      date: project.date,
      title: project.title,
      description: project.description,
      url: project.url,
      techStack: project.techStack,
    }));

  return projects;
}

export function formatDate(post: Post) {
  const dateString = format(parseISO(post.date), "LLLL y, d");
  return dateString;
}

export const rehypePrettyCodeOptions: Partial<Options> = {
  // use a prepackaged theme
  theme: "dracula",
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
};
