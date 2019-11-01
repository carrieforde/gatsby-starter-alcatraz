import React from 'react';
import { Post } from '../../../interfaces/post.interface';
import { Link } from 'gatsby';
import Category from '../../Category';
import Tags from '../../Tags';
import TimeStamp from '../../TimeStamp';

import styles from './blog-post.module.css';

const BlogPost = (data: Post) => {
  const { excerpt, frontmatter, timeToRead, fields } = data.node,
    { title, date, category, tags, description } = frontmatter;

  return (
    <article>
      <header>
        <Link className={styles.titleLink} to={fields.slug}>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
        {(date || timeToRead) && (
          <p className={styles.meta}>
            {date && <TimeStamp date={date} />}
            {timeToRead && (
              <>
                <span className={styles.separator}>&#124;</span>
                <span>{timeToRead} minute read</span>
              </>
            )}
          </p>
        )}
      </header>
      <div dangerouslySetInnerHTML={{ __html: description || excerpt }} />
      {(category || tags) && (
        <footer className={styles.meta}>
          {category && (
            <div>
              Posted in: <Category category={category} />
            </div>
          )}

          {tags && (
            <div>
              Tagged: <Tags tags={tags} />
            </div>
          )}
        </footer>
      )}
    </article>
  );
};

export default BlogPost;
