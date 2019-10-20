import { Post } from "./post.interface";

export interface Blog {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: Post
        }
      ]
    }
  }
}
