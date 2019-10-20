import { Frontmatter } from "./frontmatter.interface";

export interface Post {
  node: {
    frontmatter: Frontmatter;
    excerpt: string;
    timeToRead: number;
    fields: {
      slug: string;
    }
  }
}
