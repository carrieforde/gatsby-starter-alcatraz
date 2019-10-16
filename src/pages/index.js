import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Site from '../components/Site';
import SEO from '../components/SEO';

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title } = frontmatter;

  return (
    <Site>
      <SEO title={title} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Site>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object
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
