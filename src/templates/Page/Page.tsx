import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/Site/Seo';
import PageElement from '../../components/PageElements/PageElement';
import { Frontmatter } from '../../interfaces/frontmatter.interface';

interface Page {
  data: {
    markdownRemark: {
      frontmatter: Frontmatter;
      html: string;
    };
  };
}

const Page = ({ data }: Page) => {
  const { title } = data.markdownRemark.frontmatter;

  return (
    <Site>
      <SEO title={title} />
      <PageElement data={data} />
    </Site>
  );
};

export default Page;

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        description
      }
      html
    }
  }
`;
