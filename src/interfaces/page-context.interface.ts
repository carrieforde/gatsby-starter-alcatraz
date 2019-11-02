import { Frontmatter } from './frontmatter.interface';

export interface PageContext {
  isCreatedByStatefulCreatePages: boolean;
  next?: {
    fields: {
      slug: string;
    };
    frontmatter: Frontmatter;
  };
  previous?: {
    fields: {
      slug: string;
    };
    frontmatter: Frontmatter;
  };
  tag?: string;
  category?: string;
}
