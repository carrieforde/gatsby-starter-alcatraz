import React from 'react';

import PageTitle from '../PageTitle';
import PageDescription from '../PageDescription';
import { Frontmatter } from '../../../interfaces/frontmatter.interface';

import styles from './page-header.module.css';

const PageHeader = ({ title, description }: Frontmatter) => (
  <header className={styles.pageHeader}>
    <PageTitle title={title} />
    {description && <PageDescription description={description} />}
  </header>
);

export default PageHeader;
