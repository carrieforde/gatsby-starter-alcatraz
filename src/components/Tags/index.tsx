import React from 'react';
import { Link } from 'gatsby';
import { slugify } from '../../utils/utilities';

interface Tags {
  tags: Array<string>;
}

const Tags = ({ tags }: Tags) => (
  <>
    {tags.map((tag, index) => (
      <Link to={`/tag/${slugify(tag)}`} key={index}>
        <span>
          {index > 0 ? ', ' : null}
          {tag}
        </span>
      </Link>
    ))}
  </>
);

export default Tags;
