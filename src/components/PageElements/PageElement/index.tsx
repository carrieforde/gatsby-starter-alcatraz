import React from 'react';

import { Page } from '../../../interfaces/page.interface';
import PageHeader from '../PageHeader';

const PageElement = ({ data }: Page) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, date, category, description } = frontmatter;

  return (
    <article>
      <PageHeader title={title} description={description} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default PageElement;
