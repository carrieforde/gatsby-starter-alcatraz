import React from 'react';

import styles from './page-title.module.css';

const PageDescription = ({ description = '' }: { description: string }) => (
  <p
    className={styles.description}
    dangerouslySetInnerHTML={{ __html: description }}
  />
);

export default PageDescription;
