import React from 'react';

interface Tags {
  tags: Array<string>;
}

const Tags = ({ tags }: Tags) =>
  tags.map((tag, index) => (
    <span key={index}>
      {index > 0 ? ', ' : null}
      {tag}
    </span>
  ));

export default Tags;
