import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/Site/Seo';
import PageHeader from '../../components/PageElements/PageHeader';
import Blog from '../../components/Blog';
import { PageContext } from '../../interfaces/page-context.interface';
import { Post } from '../../interfaces/post.interface';

interface Categories {
  pageContext: PageContext;
  data: {
    edges: {
      node: Post;
    };
  };
}

const Categories = (props: Categories) => {
  const { category } = props.pageContext;

  return (
    <Site>
      <SEO title={category} />
      <PageHeader title={`Posts in ${category}`} />
      <Blog data={props.data} />
    </Site>
  );
};

export default Categories;

export const query = graphql`
  query PostsByCategory($category: String) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
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
`;
