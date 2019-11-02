import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/Site/Seo';
import PageHeader from '../../components/PageElements/PageHeader';
import { Post } from '../../interfaces/post.interface';
import BlogPost from '../../components/Blog/BlogPost';

import styles from '../../components/Blog/BlogPost/blog-post.module.css';

const Categories = props => {
  const { category } = props.pageContext;

  return (
    <Site>
      <SEO title={category} />
      <PageHeader title={`Posts in ${category}`} />

      <ul className={styles.blogList}>
        {props.data.allMarkdownRemark.edges.map((post: Post, index: number) => (
          <li key={index} className={styles.blogPost}>
            <BlogPost {...post} />
          </li>
        ))}
      </ul>
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
