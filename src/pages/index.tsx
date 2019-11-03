import React from 'react';
import { graphql } from 'gatsby';

import Site from '../components/Site';
import SEO from '../components/Site/Seo';
import { Page } from '../interfaces/page.interface';
import PageElement from '../components/PageElements/PageElement';

const IndexPage = ({ data }: Page) => {
  const { frontmatter } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <Site>
      <SEO title={title} />
      <PageElement data={data} />
    </Site>
  );
};

export default IndexPage;

export const query = graphql`
  query Home {
    markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      frontmatter {
        title
        date
        updated
        category
        description
      }
      html
      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
    }
  }
`;
