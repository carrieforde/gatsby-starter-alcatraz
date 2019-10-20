import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogPost from './BlogPost';
import { Post } from '../../interfaces/post.interface';

const Blog = () => {
  const data = useStaticQuery(
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

  return (
    <ul>
      {data.allMarkdownRemark.edges.map((post: Post, index: number) => (
        <li key={index}>
          <BlogPost {...post} />
        </li>
      ))}
    </ul>
  );
};

export default Blog;
