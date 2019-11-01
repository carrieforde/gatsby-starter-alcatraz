import React from 'react';

import styles from './page-title.module.css';

const Title = ({ title }: { title: string }) => (
  <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
);

export default Title;
