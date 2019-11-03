import { Frontmatter } from './frontmatter.interface';

export interface Page {
  data: {
    markdownRemark: {
      frontmatter: Frontmatter;
      html: string;
      rawMarkdownBody?: string;
    };
  };
}
