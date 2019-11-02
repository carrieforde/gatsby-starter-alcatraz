import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/Site/Seo';
import PageElement from '../../components/PageElements/PageElement';
import Pagination from '../../components/Pagination';
import { Frontmatter } from '../../interfaces/frontmatter.interface';
import { PageContext } from '../../interfaces/page-context.interface';

interface Post {
  pageContext: PageContext;
  data: {
    markdownRemark: {
      frontmatter: Frontmatter;
      html: string;
    };
  };
}

const Post = (props: Post) => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { previous, next } = props.pageContext;

  return (
    <Site>
      <SEO title={title} />
      <PageElement data={props.data} />
      <Pagination previous={previous} next={next} />
    </Site>
  );
};

export default Post;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        updated(formatString: "MMMM DD, YYYY")
        category
        description
      }
      html
    }
  }
`;
