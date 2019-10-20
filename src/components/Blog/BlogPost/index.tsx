import React from 'react';
import { Link } from 'gatsby';
import { Post } from '../../../interfaces/post.interface';
import TimeStamp from '../../TimeStamp';
import Category from '../../Category';
import Tags from '../../Tags';

const BlogPost = (data: Post) => {
  const { excerpt, frontmatter, timeToRead, fields } = data.node,
    { title, date, category, tags, description } = frontmatter;

  return (
    <article>
      <header>
        <Link to={fields.slug}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
        {date && <TimeStamp date={date} />}
        <span>&#124;</span>
        <span>{timeToRead} minute read</span>
      </header>
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
