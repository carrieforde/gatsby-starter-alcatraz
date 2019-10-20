import React from 'react';

const PageDescription = ({ description = '' }: { description: string }) => (
  <p dangerouslySetInnerHTML={{ __html: description }} />
);

export default PageDescription;
