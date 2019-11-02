import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/Site/Seo';
import PageElement from '../../components/PageElements/PageElement';
import Pagination from '../../components/Pagination';

const Post = props => {
  const { title } = props.data.markdownRemark.frontmatter;
  const { previous, next } = props.pageContext;

  console.log(props);

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
