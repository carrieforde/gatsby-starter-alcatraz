import React from 'react';

import styles from './logo.module.css';

interface Logo {
  src: string;
  title: string;
}

const Logo = ({ src, title }: Logo) => (
  <img className={styles.logo} src={src} alt={`${title} logo`} />
);

export default Logo;
