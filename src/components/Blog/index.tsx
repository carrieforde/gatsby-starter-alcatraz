import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogPost from './BlogPost';
import { Post } from '../../interfaces/post.interface';

import styles from './blog.module.css';

interface Blog {
  data?: {
    allMarkdownRemark: {
      edges: {
        node: Post;
      };
    };
  };
}

const Blog = ({ data }: Blog) => {
  if (data === undefined) {
    data = useStaticQuery(
      graphql`
        query {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/posts/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  description
                  category
                  tags
                }
                timeToRead
                excerpt
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    );
  }

  return (
    <ul className={styles.blogList}>
      {data.allMarkdownRemark.edges.map((post: Post, index: number) => (
        <li key={index} className={styles.blogPost}>
          <BlogPost {...post} />
        </li>
      ))}
    </ul>
  );
};

export default Blog;
