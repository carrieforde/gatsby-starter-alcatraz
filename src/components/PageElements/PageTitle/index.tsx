import React from 'react';

const Title = ({ title }: { title: string }) => (
  <h1 dangerouslySetInnerHTML={{ __html: title }} />
);

export default Title;
