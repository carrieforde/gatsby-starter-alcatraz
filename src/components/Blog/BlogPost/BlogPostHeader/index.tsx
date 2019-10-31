import React from 'react';
import { Link } from 'gatsby';
import TimeStamp from '../../../TimeStamp';

import styles from './blogPostHeader.module.css';

interface BlogPostHeader {
  slug: string;
  title: string;
  date?: Date;
  timeToRead?: number;
}

const BlogPostHeader = (data: BlogPostHeader) => (
  <header>
    <Link className={styles.titleLink} to={data.slug}>
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
    </Link>
    {(data.date || data.timeToRead) && (
      <p className={styles.byline}>
        {data.date && <TimeStamp date={data.date} />}
        {data.timeToRead && (
          <>
            <span className={styles.separator}>&#124;</span>
            <span>{data.timeToRead} minute read</span>
          </>
        )}
      </p>
    )}
  </header>
);

export default BlogPostHeader;
