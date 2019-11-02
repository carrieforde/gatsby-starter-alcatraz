import React from 'react';
import { Link } from 'gatsby';

import styles from './pagination.module.css';

interface Pagination {
  previous: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  next: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

const Pagination = ({ previous, next }: Pagination) => (
  <nav className={styles.pagination}>
    {previous && (
      <div className={styles.previous}>
        <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
      </div>
    )}
    {next && (
      <div className={styles.next}>
        <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
      </div>
    )}
  </nav>
);

export default Pagination;
