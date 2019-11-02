import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/Site/Seo';
import PageHeader from '../../components/PageElements/PageHeader';
import { Post } from '../../interfaces/post.interface';
import BlogPost from '../../components/Blog/BlogPost';

const Tags = props => {
  const { tag } = props.pageContext;

  return (
    <Site>
      <SEO title={tag} />
      <PageHeader title={`Posts tagged ${tag}`} />

      <ul>
        {props.data.allMarkdownRemark.edges.map((post: Post, index: number) => (
          <li key={index}>
            <BlogPost {...post} />
          </li>
        ))}
      </ul>
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
