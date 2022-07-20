export interface Button {
  url: string;
  title: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
}

export interface Post {
  category: string;
  image: string;
  title: string;
  author: string;
  date: string;
  timeToRead: string;
  description: string

}

export interface Pick {
  title: string;
  image: string;
  category: string;
}