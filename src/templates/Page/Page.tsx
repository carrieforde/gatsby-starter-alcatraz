import React from 'react';
import { graphql } from 'gatsby';
import Site from '../../components/Site';
import SEO from '../../components/Site/Seo';
import PageElement from '../../components/PageElements/PageElement';
import { PageForm } from '../../components/Tina/PageForm';
import { Frontmatter } from '../../interfaces/frontmatter.interface';
import { remarkForm } from 'gatsby-tinacms-remark';
import { withPlugin } from 'react-tinacms';
import CreatePageButton from '../../components/Tina/CreatePageButton';

interface Page {
  data: {
    markdownRemark: {
      frontmatter: Frontmatter;
      html: string;
      fileRelativePath: string;
      rawFrontmatter: string;
      rawMarkdownBody: string;
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

export default withPlugin(remarkForm(Page, PageForm), CreatePageButton);

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
      fileRelativePath
      rawFrontmatter
      rawMarkdownBody
    }
  }
`;
