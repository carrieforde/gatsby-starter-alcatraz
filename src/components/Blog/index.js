import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';
import { graphql } from 'gatsby';

const Blog = ({ data }) => (
  <ul>
    {data.allMarkdownRemark.edges.map((article, index) => (
      <li key={index}>
        <Article {...article} />
      </li>
    ))}
  </ul>
);

Blog.propTypes = {
  data: PropTypes.object
};

export default Blog;

export const query = graphql`
  query Blog {
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
`;
