import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/Site/Seo';
import PageHeader from '../../components/PageElements/PageHeader';
import Blog from '../../components/Blog';

const Tags = props => {
  const { tag } = props.pageContext;

  return (
    <Site>
      <SEO title={tag} />
      <PageHeader title={`Posts tagged ${tag}`} />
      <Blog data={props.data} />
    </Site>
  );
};

export default Tags;

export const query = graphql`
  query PostsByTag($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tag } } }) {
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
`;
