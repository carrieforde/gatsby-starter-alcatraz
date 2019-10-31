import React from 'react';
import { Post } from '../../../interfaces/post.interface';
import Category from '../../Category';
import Tags from '../../Tags';

import BlogPostHeader from './BlogPostHeader';

const BlogPost = (data: Post) => {
  const { excerpt, frontmatter, timeToRead, fields } = data.node,
    { title, date, category, tags, description } = frontmatter;

  return (
    <article>
      <BlogPostHeader
        slug={fields.slug}
        title={title}
        date={date}
        timeToRead={timeToRead}
      />
      <div dangerouslySetInnerHTML={{ __html: description || excerpt }} />
      {(category || tags) && (
        <footer>
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
