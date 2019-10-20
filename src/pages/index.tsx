import React from 'react';
import { graphql } from 'gatsby';

import Site from '../components/Site';
import SEO from '../components/Site/Seo';
import { Page } from '../interfaces/page.interface';
import Blog from '../components/Blog';

const IndexPage = ({ data }: Page) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <Site>
      <SEO title={title} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <Blog />
    </Site>
  );
};

export default IndexPage;

export const query = graphql`
  query Home {
    markdownRemark(fileAbsolutePath: {regex: "/home\\.md/"}) {
      frontmatter {
        title
        date
        updated
        category
        description
      }
      html
    }
  }`;
