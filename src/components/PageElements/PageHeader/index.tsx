import React from 'react';

import PageTitle from '../PageTitle';
import PageDescription from '../PageDescription';
import { Frontmatter } from '../../../interfaces/frontmatter.interface';

const PageHeader = ({ title, description }: Frontmatter) => (
  <header>
    <PageTitle title={title} />
    {description && <PageDescription description={description} />}
  </header>
);

export default PageHeader;
